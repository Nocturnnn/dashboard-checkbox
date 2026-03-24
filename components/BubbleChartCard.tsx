"use client";

import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
} from "recharts";

type BubblePoint = {
  x: number;
  y: number;
  z: number;
};

const validData: BubblePoint[] = [
  { x: 1, y: 52, z: 200 },
  { x: 2, y: 96, z: 340 },
  { x: 3, y: 48, z: 260 },
  { x: 4, y: 80, z: 320 },
  { x: 5, y: 34, z: 180 },
  { x: 6, y: 92, z: 350 },
  { x: 7, y: 58, z: 240 },
  { x: 8, y: 84, z: 300 },
  { x: 9, y: 36, z: 170 },
];

const invalidData: BubblePoint[] = [
  { x: 1, y: 31, z: 240 },
  { x: 2, y: 25, z: 140 },
  { x: 3, y: 51, z: 220 },
  { x: 4, y: 49, z: 180 },
  { x: 5, y: 67, z: 300 },
  { x: 6, y: 28, z: 160 },
  { x: 7, y: 20, z: 120 },
  { x: 8, y: 39, z: 200 },
  { x: 9, y: 72, z: 330 },
];

const neutralData: BubblePoint[] = [
  { x: 1, y: 60, z: 100 },
  { x: 2, y: 20, z: 90 },
  { x: 3, y: 44, z: 110 },
  { x: 4, y: 70, z: 95 },
  { x: 5, y: 56, z: 105 },
  { x: 6, y: 40, z: 90 },
  { x: 7, y: 80, z: 120 },
  { x: 8, y: 26, z: 85 },
  { x: 9, y: 62, z: 100 },
];

export default function BubbleChartCard() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
          Product
        </h3>
        <span className="text-white/40">•••</span>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
            <XAxis
              type="number"
              dataKey="x"
              tick={false}
              axisLine={false}
              tickLine={false}
              domain={[0, 10]}
            />
            <YAxis
              type="number"
              dataKey="y"
              tick={false}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <ZAxis type="number" dataKey="z" range={[80, 900]} />
            <Tooltip cursor={false} />
            <Scatter data={neutralData} fill="#f5f5f5" />
            <Scatter data={validData} fill="#b9ff66" />
            <Scatter data={invalidData} fill="#ffa62b" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white" />
          Resources
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-lime-400" />
          Valid
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-400" />
          Invalid
        </div>
      </div>
    </div>
  );
}
