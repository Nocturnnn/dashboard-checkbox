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
    <div className="rounded-[30px] border border-[#263a60] bg-[#111d36] p-6 shadow-[0_18px_50px_rgba(4,10,27,0.45)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4def8]">
          Product
        </h3>
        <span className="text-[#6f84ad]">•••</span>
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
            <Scatter data={neutralData} fill="#d9e3fb" />
            <Scatter data={validData} fill="#78d9a2" />
            <Scatter data={invalidData} fill="#7da7ff" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-[#9cb1d7]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#d9e3fb]" />
          Resources
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#78d9a2]" />
          Valid
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#7da7ff]" />
          Invalid
        </div>
      </div>
    </div>
  );
}
