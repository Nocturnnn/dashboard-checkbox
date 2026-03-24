"use client";

import { Heart, CalendarDays, Gem, Settings, Plus, Box } from "lucide-react";

const items = [Heart, CalendarDays, Gem, Settings];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[84px] flex-col items-center justify-between rounded-[28px] bg-black/60 py-6">
      <div className="flex flex-col items-center gap-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.12)]">
          <Box size={22} />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {items.map((Icon, index) => (
            <button
              key={index}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <button className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
        <Plus size={20} />
      </button>
    </aside>
  );
}
