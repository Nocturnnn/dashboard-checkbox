"use client";

import {
  CalendarDays,
  Gem,
  Heart,
  Plus,
  Settings,
  ShieldCheck,
} from "lucide-react";

const items = [Heart, CalendarDays, Gem, Settings];

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-row items-center justify-between rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,37,0.9),rgba(7,14,26,0.92))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:w-[92px] md:flex-col md:py-7">
      <div className="flex items-center gap-4 md:flex-col md:gap-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#83d7ff] via-[#6f8dff] to-[#63f0bb] text-white shadow-[0_14px_30px_rgba(100,128,255,0.45)]">
          <ShieldCheck size={22} />
        </div>

        <div className="flex flex-1 items-center gap-3 md:mt-4 md:flex-col md:gap-4">
          {items.map((Icon, index) => (
            <button
              key={index}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/8 bg-white/[0.04] text-[#b6c7eb] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <button className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-white transition duration-300 hover:scale-105 hover:bg-cyan-300/16">
        <Plus size={20} />
      </button>
    </aside>
  );
}
