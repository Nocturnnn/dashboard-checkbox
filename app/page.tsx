import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import BubbleChartCard from "@/components/BubbleChartCard";
import TimelineChartCard from "@/components/TimelineChartCard";
import { statCards } from "@/data/dashboard";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 xl:p-10">
      <div className="mx-auto grid min-h-[92vh] max-w-[1500px] grid-cols-1 gap-5 rounded-[40px] bg-[#091122] p-5 shadow-[0_36px_90px_rgba(15,28,57,0.38)] md:grid-cols-[92px_1fr] md:p-7">
        <Sidebar />

        <section className="rounded-[30px] bg-[#0c162d] px-5 py-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:px-7 md:py-6">
          <Topbar />

          <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
              Noc Checkbox
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#324466] bg-[#111d38] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9cb6ef]">
              Fase 1 • Visual
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[1.05fr_1fr]">
            <div className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {statCards.map((card) => (
                  <StatCard key={card.title} {...card} />
                ))}
              </div>

              <BubbleChartCard />
            </div>

            <TimelineChartCard />
          </div>
        </section>
      </div>
    </main>
  );
}
