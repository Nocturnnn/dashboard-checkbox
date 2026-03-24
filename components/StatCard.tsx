type StatCardProps = {
  title: string;
  leftValue: string;
  leftLabel: string;
  rightValue: string;
  rightLabel: string;
};

export default function StatCard({
  title,
  leftValue,
  leftLabel,
  rightValue,
  rightLabel,
}: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
          {title}
        </h3>
        <span className="text-white/40">•••</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-2 h-3 w-3 rounded-full bg-lime-400" />
          <p className="text-5xl font-black leading-none text-white">
            {leftValue}
          </p>
          <p className="mt-2 text-xs text-white/55">{leftLabel}</p>
        </div>

        <div>
          <div className="mb-2 h-3 w-3 rounded-full bg-orange-400" />
          <p className="text-5xl font-black leading-none text-white">
            {rightValue}
          </p>
          <p className="mt-2 text-xs text-white/55">{rightLabel}</p>
        </div>
      </div>

      <div className="mt-8 flex h-16 items-end gap-2 overflow-hidden">
        {[18, 30, 14, 42, 20, 36, 28, 34, 22].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-full bg-gradient-to-t from-orange-400/80 to-lime-300/70"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </div>
  );
}
