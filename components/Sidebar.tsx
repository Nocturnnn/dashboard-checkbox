"use client";

import { Heart, CalendarDays, Gem, Settings, Plus, ShieldCheck } from "lucide-react";

const items = [Heart, CalendarDays, Gem, Settings];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[92px] flex-col items-center justify-between rounded-[30px] border border-[#23385f] bg-[#0a1428] py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="flex flex-col items-center gap-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#83b8ff] to-[#6f6bf8] text-white shadow-[0_14px_30px_rgba(100,128,255,0.45)]">
          <ShieldCheck size={22} />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {items.map((Icon, index) => (
            <button
              key={index}
              className="grid h-12 w-12 place-items-center rounded-full border border-[#2b3d61] bg-[#131f39] text-[#b6c7eb] transition hover:bg-[#1a2d4e] hover:text-white"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <button className="grid h-12 w-12 place-items-center rounded-full border border-[#334c78] bg-[#172647] text-white transition hover:bg-[#1f3460]">
        <Plus size={20} />
      </button>
    </aside>
  );
}
