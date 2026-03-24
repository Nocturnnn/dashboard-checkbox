"use client";

import { Search, ChevronDown, SlidersHorizontal, Bell } from "lucide-react";

function Pill({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-[#2d4268] bg-[#131f3a] px-4 py-3 text-sm font-medium text-[#d4def5] transition hover:bg-[#1a2a4a]">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#3a4f77] bg-[#162746] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#97b3ee]">
      {label}
    </span>
  );
}

export default function Topbar() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-full border border-[#2e4469] bg-[#172647] px-5 py-3 text-sm font-semibold text-[#e5ecff] transition hover:bg-[#1c2f55]">
          Noc Checkbox
        </button>
        <button className="rounded-full border border-[#2a3a5b] bg-[#101b34] px-5 py-3 text-sm font-medium text-[#a9bbdf] transition hover:bg-[#172647] hover:text-white">
          Monitoring
        </button>
        <button className="rounded-full border border-[#2a3a5b] bg-[#101b34] px-5 py-3 text-sm font-medium text-[#a9bbdf] transition hover:bg-[#172647] hover:text-white">
          Support
        </button>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-[#2a3a5b] bg-[#101b34] text-[#a9bbdf] transition hover:bg-[#172647] hover:text-white">
          <Search size={18} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Badge label="Live" />
        <Badge label="SLA 99.92%" />
        <Pill label="Date: Now" />
        <Pill label="Product: All" />

        <button className="grid h-11 w-11 place-items-center rounded-full border border-[#2a3a5b] bg-[#101b34] text-[#a9bbdf] transition hover:bg-[#172647] hover:text-white">
          <Bell size={18} />
        </button>

        <button className="grid h-11 w-11 place-items-center rounded-full border border-[#2a3a5b] bg-[#101b34] text-[#a9bbdf] transition hover:bg-[#172647] hover:text-white">
          <SlidersHorizontal size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-[#2d4268] bg-[#131f3a] px-2 py-1.5 pr-4 text-sm text-[#d4def5]">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#80c3ff] to-[#6a7dff] text-xs font-bold text-white">
            BR
          </div>
          <span className="font-medium">Bogdan R.</span>
        </div>
      </div>
    </div>
  );
}
