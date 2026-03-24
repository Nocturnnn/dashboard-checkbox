"use client";

import GlassCard from "@/components/GlassCard";
import { productHealth } from "@/data/dashboard";

const toneClasses = {
  good: "from-[#58e2b2] to-[#76c7ff]",
  info: "from-[#6bc0ff] to-[#7d87ff]",
  warning: "from-[#ff9f5a] to-[#ffd36f]",
};

export default function BubbleChartCard() {
  return (
    <GlassCard
      title="Product"
      eyebrow="Service mix"
      actionLabel="Capacity"
      className="bg-[linear-gradient(180deg,rgba(13,25,45,0.96),rgba(10,17,34,0.92))]"
    >
      <div className="grid gap-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-black tracking-tight text-white md:text-4xl">
              84%
            </p>
            <p className="mt-2 text-sm text-[#a3bbde]">
              product stability across critical paths
            </p>
          </div>
          <div className="rounded-[22px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-right">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8cb7d7]">
              Risk spread
            </p>
            <p className="mt-1 text-2xl font-bold text-[#eff7ff]">12 nodes</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8ca7cf]">
              Service health
            </p>
            <p className="text-xs text-[#cfe2ff]">labels inside bars</p>
          </div>

          <div className="mt-4 grid gap-3">
            {productHealth.map((item) => (
              <div key={item.label} className="grid gap-1.5">
                <div className="flex items-center justify-between text-xs text-[#b7caea]">
                  <span>{item.label}</span>
                  <span>{item.trend}</span>
                </div>
                <div className="h-11 overflow-hidden rounded-full border border-white/8 bg-[#08111f] p-1">
                  <div
                    className={`flex h-full items-center justify-between rounded-full bg-gradient-to-r px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(73,138,255,0.24)] ${toneClasses[item.tone]}`}
                    style={{ width: `${item.value}%` }}
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] font-bold tracking-[0.12em]">
                      {item.value}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
