"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GlassCard from "@/components/GlassCard";
import { timelineData, timelineSummary } from "@/data/dashboard";

const barColors = {
  customer: "#63d8a8",
  product: "#5fb8ff",
  web: "#d9ebff",
};

export default function TimelineChartCard() {
  return (
    <GlassCard
      title="Projects Timeline"
      eyebrow="Delivery load"
      actionLabel="7 Days"
      className="min-h-full bg-[linear-gradient(180deg,rgba(11,23,41,0.98),rgba(8,16,30,0.94))]"
    >
      <div className="grid gap-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {timelineSummary.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-8 rounded-full ${
                    item.tone === "emerald"
                      ? "bg-[#63d8a8]"
                      : item.tone === "cyan"
                        ? "bg-[#5fb8ff]"
                        : "bg-[#d9ebff]"
                  }`}
                />
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8ca7cf]">
                  {item.label}
                </p>
              </div>
              <p className="mt-3 text-3xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-xs text-[#9db4d8]">{item.helper}</p>
            </div>
          ))}
        </div>

        <div className="h-[420px] rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(6,13,24,0.78),rgba(8,14,26,0.45))] p-3 md:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timelineData}
              layout="vertical"
              margin={{ top: 10, right: 36, left: 8, bottom: 10 }}
              barCategoryGap={18}
            >
              <CartesianGrid
                strokeDasharray="4 8"
                stroke="rgba(176, 196, 236, 0.10)"
                horizontal={false}
              />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(183, 199, 230, 0.72)", fontSize: 11 }}
              />
              <YAxis
                dataKey="date"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(238, 246, 255, 0.95)", fontSize: 12 }}
                width={48}
              />
              <Tooltip
                cursor={{ fill: "rgba(133, 162, 236, 0.06)" }}
                contentStyle={{
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(8,15,28,0.94)",
                  color: "#eff6ff",
                }}
              />
              <Bar
                dataKey="customer"
                stackId="a"
                radius={[999, 0, 0, 999]}
                fill={barColors.customer}
              />
              <Bar dataKey="product" stackId="a" fill={barColors.product}>
                <LabelList
                  dataKey="product"
                  position="inside"
                  fill="#ecf6ff"
                  fontSize={10}
                  formatter={(value: number) => (value > 0 ? `P ${value}` : "")}
                />
              </Bar>
              <Bar
                dataKey="web"
                stackId="a"
                radius={[0, 999, 999, 0]}
                fill={barColors.web}
              >
                <LabelList
                  dataKey="web"
                  position="insideRight"
                  fill="#17314f"
                  fontSize={10}
                  formatter={(value: number) => (value > 0 ? `W ${value}` : "")}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[#9cb1d7]">
          {Object.entries(barColors).map(([label, color]) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2"
            >
              <span className="h-2.5 w-7 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
