export const statCards = [
  {
    title: "Customer",
    leftValue: "2.4%",
    leftLabel: "Web traffic drop",
    rightValue: "1.1%",
    rightLabel: "Radio backlog",
    trendLabel: "+18 bps vs yesterday",
    series: [26, 38, 28, 52, 40, 61, 49, 66, 58],
  },
  {
    title: "Product",
    leftValue: "2.8%",
    leftLabel: "Partners risk",
    rightValue: "3.2%",
    rightLabel: "Owners waiting",
    trendLabel: "12 tickets aging",
    series: [22, 30, 24, 43, 36, 56, 47, 62, 54],
  },
];

export const productHealth = [
  { label: "Checkout", value: 92, trend: "+4%", tone: "good" as const },
  { label: "Identity", value: 78, trend: "-2%", tone: "info" as const },
  { label: "Catalog", value: 64, trend: "+7%", tone: "warning" as const },
  { label: "Payments", value: 88, trend: "+1%", tone: "good" as const },
];

export const timelineData = [
  { date: "24.09", customer: 28, product: 15, web: 9 },
  { date: "25.09", customer: 34, product: 22, web: 14 },
  { date: "26.09", customer: 12, product: 31, web: 18 },
  { date: "27.09", customer: 37, product: 14, web: 10 },
  { date: "28.09", customer: 20, product: 26, web: 19 },
  { date: "29.09", customer: 18, product: 35, web: 16 },
  { date: "30.09", customer: 29, product: 24, web: 12 },
];

export const timelineSummary = [
  { label: "Customer", value: "178", helper: "case load", tone: "emerald" as const },
  { label: "Product", value: "167", helper: "deploy touchpoints", tone: "cyan" as const },
  { label: "Web", value: "98", helper: "journey alerts", tone: "slate" as const },
];

export const overviewMetrics = [
  { label: "Throughput", value: "412", helper: "events / min", delta: "+12%" },
  { label: "Latency", value: "182ms", helper: "global median", delta: "-8%" },
  { label: "Recovery", value: "14m", helper: "avg resolution", delta: "-3m" },
];

export const streamBars = [
  { label: "Escalations", value: 81, count: "81" },
  { label: "Deployments", value: 63, count: "34" },
  { label: "Muted noise", value: 46, count: "146" },
];

export const capacityRows = [
  {
    squad: "North Ops",
    focus: "Payments / API",
    utilization: 84,
    incidents: 12,
    sla: "99.94%",
  },
  {
    squad: "Core Pulse",
    focus: "Checkout / Fraud",
    utilization: 71,
    incidents: 8,
    sla: "99.97%",
  },
  {
    squad: "Edge Watch",
    focus: "Web / CDN",
    utilization: 63,
    incidents: 5,
    sla: "99.99%",
  },
];
