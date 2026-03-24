import GlassCard from "@/components/GlassCard";
import { capacityRows, streamBars } from "@/data/dashboard";

export default function OperationsMatrixCard() {
  return (
    <GlassCard title="Operations Matrix" eyebrow="Team load" actionLabel="3 squads">
      <div className="grid gap-3">
        {capacityRows.map((row) => (
          <div
            key={row.squad}
            className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-base font-bold text-white">{row.squad}</p>
                <p className="mt-1 text-sm text-[#9db4d8]">{row.focus}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1.5 font-semibold text-[#98efc7]">
                  {row.sla}
                </span>
                <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[#cfe0fb]">
                  {row.incidents} incidents
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-xs text-[#bdd1ef]">
                <span>Utilization</span>
                <span>{row.utilization}%</span>
              </div>
              <div className="h-11 rounded-full border border-white/8 bg-[#08111f] p-1">
                <div
                  className="flex h-full items-center justify-between rounded-full bg-gradient-to-r from-[#63d8a8] via-[#5fb8ff] to-[#7f89ff] px-4 text-sm font-semibold text-white"
                  style={{ width: `${row.utilization}%` }}
                >
                  <span>{row.squad}</span>
                  <span>{row.utilization}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8ca7cf]">
              Live orchestration
            </p>
            <p className="mt-2 text-2xl font-black text-white md:text-3xl">
              3 active streams
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#cfe4ff]">
            09:24 BRT
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          {streamBars.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between gap-3 text-xs text-[#bdd1ef]">
                <span>{item.label}</span>
                <span>{item.count}</span>
              </div>
              <div className="h-12 rounded-full border border-white/8 bg-[#08111f] p-1">
                <div
                  className="flex h-full items-center justify-between rounded-full bg-gradient-to-r from-[#67c9ff] via-[#6788ff] to-[#62f0bb] px-4 text-sm font-semibold text-white"
                  style={{ width: `${item.value}%` }}
                >
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[62, 88, 74].map((value, index) => (
            <div
              key={value}
              className="rounded-[20px] border border-white/8 bg-[#0a1324]/80 px-3 py-4 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#85a7d0]">
                Node {index + 1}
              </p>
              <p className="mt-2 text-2xl font-black text-white">{value}%</p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
