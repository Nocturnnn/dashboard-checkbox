"use client";

import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

function Pill({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

export default function Topbar() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
          Check Box
        </button>
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
          Monitoring
        </button>
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
          Support
        </button>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white">
          <Search size={18} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Pill label="Date: Now" />
        <Pill label="Product: All" />
        <Pill label="Profile: Bogdan" />
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white">
          <SlidersHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
