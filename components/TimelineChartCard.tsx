"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { timelineData } from "@/data/dashboard";

export default function TimelineChartCard() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
          Projects Timeline
        </h3>
        <span className="text-white/40">•••</span>
      </div>

      <div className="h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={timelineData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            barCategoryGap={24}
          >
            <CartesianGrid
              strokeDasharray="4 8"
              stroke="rgba(255,255,255,0.08)"
              horizontal={false}
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
            />
            <YAxis
              dataKey="date"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.8)", fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} />
            <Bar
              dataKey="customer"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#b9ff66"
            />
            <Bar
              dataKey="product"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#ffa62b"
            />
            <Bar
              dataKey="web"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#f3f4f6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-lime-400" />
          Customer
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-400" />
          Product
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white" />
          Web
        </div>
      </div>
    </div>
  );
}
