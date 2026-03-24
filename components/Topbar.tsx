"use client";

import {
  Bell,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

function Pill({
  label,
  primary = false,
}: {
  label: string;
  primary?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition ${
        primary
          ? "border-cyan-300/15 bg-cyan-300/10 text-[#e8f7ff] hover:bg-cyan-300/14"
          : "border-white/8 bg-white/[0.03] text-[#d4def5] hover:bg-white/[0.07]"
      }`}
    >
      {label}
      <ChevronDown size={16} />
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#97b3ee]">
      {label}
    </span>
  );
}

export default function Topbar() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-[#eff7ff] transition hover:bg-cyan-300/14">
          <Sparkles size={16} />
          Noc Checkbox
        </button>
        <button className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#a9bbdf] transition hover:bg-white/[0.07] hover:text-white">
          Monitoring
        </button>
        <button className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#a9bbdf] transition hover:bg-white/[0.07] hover:text-white">
          Support
        </button>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/8 bg-white/[0.03] text-[#a9bbdf] transition hover:bg-white/[0.07] hover:text-white">
          <Search size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-3 xl:items-end">
        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <Badge label="Live" />
          <Badge label="SLA 99.92%" />
          <Pill label="Date: Now" />
          <Pill label="Product: Core" primary />

          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/8 bg-white/[0.03] text-[#a9bbdf] transition hover:bg-white/[0.07] hover:text-white">
            <Bell size={18} />
          </button>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/8 bg-white/[0.03] text-[#a9bbdf] transition hover:bg-white/[0.07] hover:text-white">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="flex justify-start xl:w-full xl:justify-end">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-2 py-1.5 pr-4 text-sm text-[#d4def5] shadow-[0_12px_30px_rgba(7,14,28,0.25)]">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-300/30 blur-md" />
              <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#83d7ff] via-[#7294ff] to-[#63f0bb] text-xs font-bold text-white">
                MR
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Mateus R.</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#90aadb]">
                Control room
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
