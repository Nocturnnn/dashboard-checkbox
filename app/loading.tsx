function SkeletonBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-[28px] bg-white/[0.06] ${className}`} />;
}

export default function Loading() {
  return (
    <main className="min-h-screen px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 xl:px-8">
      <div className="mx-auto grid min-h-[94vh] max-w-[1560px] grid-cols-1 gap-4 rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,12,23,0.88),rgba(8,15,29,0.92))] p-3 md:grid-cols-[92px_1fr] md:gap-6 md:p-6">
        <SkeletonBlock className="h-[92px] md:h-auto md:min-h-full" />

        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,35,0.96),rgba(7,14,28,0.92))] px-4 py-5 sm:px-5 md:px-7 md:py-6">
          <div className="grid gap-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <SkeletonBlock className="h-12 w-full max-w-[460px]" />
              <SkeletonBlock className="h-12 w-full max-w-[320px] self-end" />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.06fr_0.94fr]">
              <SkeletonBlock className="h-[380px] w-full" />
              <SkeletonBlock className="h-[560px] w-full" />
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <SkeletonBlock className="h-[250px] w-full" />
                  <SkeletonBlock className="h-[250px] w-full" />
                </div>
                <SkeletonBlock className="h-[360px] w-full" />
              </div>

              <SkeletonBlock className="h-[420px] w-full" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
