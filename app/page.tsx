import BubbleChartCard from "@/components/BubbleChartCard";
import HeroOverviewCard from "@/components/HeroOverviewCard";
import OperationsMatrixCard from "@/components/OperationsMatrixCard";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import TimelineChartCard from "@/components/TimelineChartCard";
import Topbar from "@/components/Topbar";
import { statCards } from "@/data/dashboard";

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 xl:px-8">
      <div className="mx-auto grid min-h-[94vh] max-w-[1560px] grid-cols-1 gap-4 rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,12,23,0.88),rgba(8,15,29,0.92))] p-3 shadow-[0_32px_120px_rgba(2,8,20,0.5)] backdrop-blur-2xl md:grid-cols-[92px_1fr] md:gap-6 md:p-6">
        <Sidebar />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,35,0.96),rgba(7,14,28,0.92))] px-4 py-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-5 md:px-7 md:py-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,196,255,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(98,240,187,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(84,104,255,0.14),transparent_32%)]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/6" />

          <div className="relative z-10">
            <Topbar />

            <div className="mt-6 grid gap-5 xl:grid-cols-[1.06fr_0.94fr]">
              <HeroOverviewCard />
              <TimelineChartCard />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.09fr_0.9fr]">
              <div className="grid gap-5">
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {statCards.map((card) => (
                    <StatCard key={card.title} {...card} />
                  ))}
                </div>

                <BubbleChartCard />
              </div>

              <OperationsMatrixCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
