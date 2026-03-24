import type { ReactNode } from "react";

type GlassCardProps = {
  title: string;
  eyebrow?: string;
  actionLabel?: string;
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  title,
  eyebrow,
  actionLabel = "Overview",
  children,
  className = "",
}: GlassCardProps) {
  return (
    <section
      className={`card-enter card-shell group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,37,0.96),rgba(8,16,30,0.9))] p-5 shadow-[0_24px_70px_rgba(3,9,23,0.45)] transition duration-500 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_34px_100px_rgba(15,88,182,0.22)] md:p-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-[1px] rounded-[29px] border border-white/8" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(86,193,255,0.2),transparent_70%)] blur-2xl transition duration-500 group-hover:scale-110" />
      <div className="pointer-events-none absolute bottom-5 left-6 flex gap-1 opacity-50">
        <span className="h-px w-9 bg-cyan-200/55" />
        <span className="h-px w-4 bg-white/35" />
        <span className="h-px w-2 bg-white/20" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7ea7d6]">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[#edf4ff]">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8cb9ff]">
          {actionLabel}
        </span>
      </div>

      <div className="relative z-10 mt-6">{children}</div>
    </section>
  );
}
