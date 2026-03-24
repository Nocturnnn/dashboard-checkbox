import GlassCard from "@/components/GlassCard";

type StatCardProps = {
  title: string;
  leftValue: string;
  leftLabel: string;
  rightValue: string;
  rightLabel: string;
  trendLabel: string;
  series: number[];
};

export default function StatCard({
  title,
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
  trendLabel,
  series,
}: StatCardProps) {
  const max = Math.max(...series);

  return (
    <GlassCard title={title} eyebrow="Pulse" actionLabel="Live">
      <div className="grid grid-cols-2 gap-3">
        <MetricBlock
          color="bg-[#74e3b2]"
          value={leftValue}
          label={leftLabel}
          compact={title === "Product"}
        />
        <MetricBlock
          color="bg-[#73b8ff]"
          value={rightValue}
          label={rightLabel}
          compact={title === "Product"}
        />
      </div>

      <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#8ca7cf]">
            Daily signal mix
          </p>
          <p className="text-xs font-medium text-[#cfe2ff]">{trendLabel}</p>
        </div>
        <div className="mt-4 flex h-16 items-end gap-2 overflow-hidden">
          {series.map((height, index) => (
            <div
              key={`${title}-${index}`}
              className="flex-1 rounded-full bg-gradient-to-t from-[#4f67ff] via-[#63b0ff] to-[#84ffd9] opacity-90 transition duration-500 group-hover:translate-y-[-2px]"
              style={{ height: `${(height / max) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function MetricBlock({
  color,
  value,
  label,
  compact = false,
}: {
  color: string;
  value: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-3.5 md:p-4">
      <div className={`mb-2.5 h-2.5 w-8 rounded-full ${color}`} />
      <p
        className={`font-black leading-none text-white ${
          compact ? "text-[2rem] md:text-[2.25rem]" : "text-[2.15rem] md:text-[2.45rem]"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 max-w-[10ch] text-[11px] leading-4 text-[#95abd1] md:text-xs">
        {label}
      </p>
    </div>
  );
}
