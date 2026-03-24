import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import BubbleChartCard from "@/components/BubbleChartCard";
import TimelineChartCard from "@/components/TimelineChartCard";
import { statCards } from "@/data/dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b7d49b] p-4 md:p-8">
      <div className="mx-auto grid min-h-[92vh] max-w-[1500px] grid-cols-1 gap-4 rounded-[36px] bg-black p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:grid-cols-[84px_1fr] md:p-6">
        <Sidebar />

        <section className="rounded-[28px] bg-black text-white">
          <Topbar />

          <div className="mt-8">
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
              Check Box
            </h1>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-[1.05fr_1fr]">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
