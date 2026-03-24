import { overviewMetrics } from "@/data/dashboard";

export default function HeroOverviewCard() {
  return (
    <section className="card-enter relative overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(135deg,rgba(16,31,56,0.96),rgba(8,17,32,0.92))] p-5 shadow-[0_28px_90px_rgba(5,12,28,0.5)] md:p-7">
      <div className="pointer-events-none absolute inset-[1px] rounded-[33px] border border-white/8" />
      <div className="pointer-events-none absolute -left-12 top-6 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-10 flex gap-1 opacity-70">
        <span className="h-px w-14 bg-cyan-100/60" />
        <span className="h-px w-5 bg-white/40" />
        <span className="h-px w-2 bg-white/25" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#94d4ff]">
          Phase 2
          <span className="h-1.5 w-1.5 rounded-full bg-[#7cf2c3]" />
          Polish pass
        </div>

        <h1 className="mt-6 max-w-[10ch] text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          Noc Checkbox
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#acc1e5] md:text-base">
          One premium command center for incidents, throughput, timelines and
          service health, with a calmer hierarchy for desktop and mobile.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {overviewMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[24px] border border-white/8 bg-white/[0.04] px-4 py-4 backdrop-blur-xl"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#8ca7cf]">
                {metric.label}
              </p>
              <p className="mt-3 text-3xl font-black text-white">{metric.value}</p>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                <span className="text-[#96aed3]">{metric.helper}</span>
                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2 py-1 font-semibold text-[#92f0c4]">
                  {metric.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
