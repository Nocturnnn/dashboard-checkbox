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
    <div className="rounded-[30px] border border-[#263a60] bg-[#111d36] p-6 shadow-[0_18px_50px_rgba(4,10,27,0.45)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4def8]">
          Projects Timeline
        </h3>
        <span className="text-[#6f84ad]">•••</span>
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
              stroke="rgba(176, 196, 236, 0.14)"
              horizontal={false}
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(183, 199, 230, 0.8)", fontSize: 12 }}
            />
            <YAxis
              dataKey="date"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(220, 231, 255, 0.95)", fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: "rgba(133, 162, 236, 0.08)" }} />
            <Bar
              dataKey="customer"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#78d9a2"
            />
            <Bar
              dataKey="product"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#7da7ff"
            />
            <Bar
              dataKey="web"
              stackId="a"
              radius={[999, 999, 999, 999]}
              fill="#d9e3fb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-[#9cb1d7]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#78d9a2]" />
          Customer
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#7da7ff]" />
          Product
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#d9e3fb]" />
          Web
        </div>
      </div>
    </div>
  );
}
