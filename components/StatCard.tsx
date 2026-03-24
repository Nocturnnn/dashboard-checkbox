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
    <div className="rounded-[30px] border border-[#263a60] bg-[#111d36] p-6 shadow-[0_18px_50px_rgba(4,10,27,0.45)]">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4def8]">
          {title}
        </h3>
        <span className="text-[#6f84ad]">•••</span>
      </div>

      <div className="grid grid-cols-2 gap-7">
        <div>
          <div className="mb-2 h-3 w-3 rounded-full bg-[#77dd9b]" />
          <p className="text-5xl font-extrabold leading-none text-white">{leftValue}</p>
          <p className="mt-2 text-xs text-[#91a4ca]">{leftLabel}</p>
        </div>

        <div>
          <div className="mb-2 h-3 w-3 rounded-full bg-[#8fb3ff]" />
          <p className="text-5xl font-extrabold leading-none text-white">{rightValue}</p>
          <p className="mt-2 text-xs text-[#91a4ca]">{rightLabel}</p>
        </div>
      </div>

      <div className="mt-8 flex h-16 items-end gap-2 overflow-hidden">
        {[18, 30, 14, 42, 20, 36, 28, 34, 22].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-full bg-gradient-to-t from-[#6a7cff] via-[#78a3ff] to-[#80d8cf]"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </div>
  );
}
