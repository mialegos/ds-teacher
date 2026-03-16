"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import { IconTrendingUp } from "@tabler/icons-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const negativeData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: -105, mobile: 200 },
  { month: "March", desktop: 237, mobile: -120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: -209, mobile: 130 },
  { month: "June", desktop: 214, mobile: -140 },
];

const pieData = [
  { name: "Chrome", value: 275, fill: "#f97316" },
  { name: "Safari", value: 200, fill: "#3b82f6" },
  { name: "Firefox", value: 187, fill: "#8b5cf6" },
  { name: "Edge", value: 173, fill: "#ef4444" },
  { name: "Other", value: 90, fill: "#eab308" },
];

const radarData = [
  { subject: "Math", A: 120, B: 110 },
  { subject: "Chinese", A: 98, B: 130 },
  { subject: "English", A: 86, B: 130 },
  { subject: "Geography", A: 99, B: 100 },
  { subject: "Physics", A: 85, B: 90 },
  { subject: "History", A: 65, B: 85 },
];

const radialData = [
  { name: "Chrome", value: 275, fill: "#f97316" },
  { name: "Safari", value: 200, fill: "#3b82f6" },
  { name: "Firefox", value: 187, fill: "#8b5cf6" },
  { name: "Edge", value: 173, fill: "#ef4444" },
  { name: "Other", value: 90, fill: "#eab308" },
];

const COLORS = ["#f97316", "#3b82f6", "#8b5cf6", "#ef4444", "#eab308"];

function DotLegend({
  items,
}: {
  items: { color: string; label: string }[];
}) {
  return (
    <div className="flex items-center gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <span
            className="inline-block size-2.5 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function ChartCard({
  title,
  subtitle = "January - June 2024",
  legendItems,
  children,
}: {
  title: string;
  subtitle?: string;
  legendItems?: { color: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          {legendItems && <DotLegend items={legendItems} />}
          {!legendItems && <div />}
          <span className="text-xs text-muted-foreground cursor-pointer hover:underline">
            View docs
          </span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[220px] w-full">{children}</div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <div className="flex items-center gap-1.5 text-sm font-medium">
          Trending up by 5.2% this month
          <IconTrendingUp className="size-4" />
        </div>
        <p className="text-xs text-muted-foreground">
          Showing total visitors for the last 6 months
        </p>
      </CardFooter>
    </Card>
  );
}

const defaultLegend = [
  { color: "#f97316", label: "Desktop" },
  { color: "#3b82f6", label: "Mobile" },
];

export default function ChartShowcasePage() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Chart</h1>
        <p className="mt-2 text-muted-foreground">
          Beautiful charts built with Recharts. Copy and paste into your apps.
        </p>
      </div>

      {/* ── 1. BAR CHART ─────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Bar Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard title="Bar Chart" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Bar dataKey="desktop" fill="#f97316" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mobile" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Horizontal */}
          <ChartCard title="Bar Chart - Horizontal" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                  width={40}
                />
                <Tooltip />
                <Bar dataKey="desktop" fill="#f97316" radius={[0, 4, 4, 0]} />
                <Bar dataKey="mobile" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Label */}
          <ChartCard
            title="Bar Chart - Label"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Bar dataKey="desktop" fill="#f97316" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="desktop" position="top" className="text-xs fill-foreground" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Stacked */}
          <ChartCard title="Bar Chart - Stacked" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#f97316"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Active */}
          <ChartCard
            title="Bar Chart - Active"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Bar dataKey="desktop" radius={[4, 4, 0, 0]}>
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 1 ? "#f97316" : "#fed7aa"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Negative */}
          <ChartCard title="Bar Chart - Negative" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={negativeData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Bar dataKey="desktop" fill="#f97316" radius={4} />
                <Bar dataKey="mobile" fill="#3b82f6" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* ── 2. LINE CHART ────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Line Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard
            title="Line Chart"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Linear */}
          <ChartCard
            title="Line Chart - Linear"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="linear"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Step */}
          <ChartCard
            title="Line Chart - Step"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="step"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Multiple */}
          <ChartCard title="Line Chart - Multiple" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="mobile"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Dots */}
          <ChartCard
            title="Line Chart - Dots"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#f97316" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Label */}
          <ChartCard
            title="Line Chart - Label"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="desktop"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#f97316" }}
                >
                  <LabelList dataKey="desktop" position="top" className="text-xs fill-foreground" offset={10} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* ── 3. AREA CHART ────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Area Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard
            title="Area Chart"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="desktopGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Area
                  type="natural"
                  dataKey="desktop"
                  stroke="#f97316"
                  fill="url(#desktopGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Linear */}
          <ChartCard
            title="Area Chart - Linear"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="desktopGradLinear" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Area
                  type="linear"
                  dataKey="desktop"
                  stroke="#f97316"
                  fill="url(#desktopGradLinear)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Step */}
          <ChartCard
            title="Area Chart - Step"
            legendItems={[{ color: "#f97316", label: "Desktop" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Area
                  type="step"
                  dataKey="desktop"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Stacked */}
          <ChartCard title="Area Chart - Stacked" legendItems={defaultLegend}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="stackDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="stackMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Area
                  type="natural"
                  dataKey="desktop"
                  stackId="1"
                  stroke="#f97316"
                  fill="url(#stackDesktop)"
                  strokeWidth={2}
                />
                <Area
                  type="natural"
                  dataKey="mobile"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="url(#stackMobile)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Stacked Expanded */}
          <ChartCard
            title="Area Chart - Stacked Expanded"
            legendItems={defaultLegend}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                stackOffset="expand"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <YAxis tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area
                  type="natural"
                  dataKey="desktop"
                  stackId="1"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Area
                  type="natural"
                  dataKey="mobile"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Gradient */}
          <ChartCard
            title="Area Chart - Gradient"
            legendItems={defaultLegend}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="gradDesktopFull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradMobileFull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="desktop"
                  stroke="#f97316"
                  fill="url(#gradDesktopFull)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="mobile"
                  stroke="#3b82f6"
                  fill="url(#gradMobileFull)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* ── 4. PIE CHART ─────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Pie Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard
            title="Pie Chart"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  strokeWidth={2}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`pie-${i}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Separator */}
          <ChartCard
            title="Pie Chart - Separator"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  paddingAngle={4}
                  strokeWidth={0}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`pie-sep-${i}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Label */}
          <ChartCard
            title="Pie Chart - Label"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}`}
                  strokeWidth={2}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`pie-lbl-${i}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut */}
          <ChartCard
            title="Pie Chart - Donut"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  strokeWidth={2}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`donut-${i}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut Active */}
          <ChartCard
            title="Pie Chart - Donut Active"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  strokeWidth={0}
                >
                  {pieData.map((entry, i) => (
                    <Cell
                      key={`donut-active-${i}`}
                      fill={entry.fill}
                      opacity={i === 0 ? 1 : 0.6}
                      stroke={i === 0 ? entry.fill : "none"}
                      strokeWidth={i === 0 ? 3 : 0}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Legend */}
          <ChartCard
            title="Pie Chart - Legend"
            legendItems={pieData.map((d) => ({ color: d.fill, label: d.name }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius={40}
                  outerRadius={70}
                  strokeWidth={2}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`pie-legend-${i}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* ── 5. RADAR CHART ───────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Radar Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard
            title="Radar Chart"
            legendItems={[{ color: "#f97316", label: "Student A" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Dots */}
          <ChartCard
            title="Radar Chart - Dots"
            legendItems={[{ color: "#f97316", label: "Student A" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#f97316" }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Multiple */}
          <ChartCard
            title="Radar Chart - Multiple"
            legendItems={[
              { color: "#f97316", label: "Student A" },
              { color: "#3b82f6", label: "Student B" },
            ]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Radar
                  dataKey="B"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Lines Only */}
          <ChartCard
            title="Radar Chart - Lines Only"
            legendItems={[
              { color: "#f97316", label: "Student A" },
              { color: "#3b82f6", label: "Student B" },
            ]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#f97316"
                  fill="none"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#f97316" }}
                />
                <Radar
                  dataKey="B"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#3b82f6" }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Custom Label */}
          <ChartCard
            title="Radar Chart - Custom Label"
            legendItems={[{ color: "#8b5cf6", label: "Student A" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid gridType="circle" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={({ x, y, payload }) => (
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="fill-foreground text-[11px] font-medium"
                    >
                      {payload.value}
                    </text>
                  )}
                />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Radius */}
          <ChartCard
            title="Radar Chart - Circle Grid"
            legendItems={[
              { color: "#f97316", label: "Student A" },
              { color: "#3b82f6", label: "Student B" },
            ]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid gridType="circle" />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <Tooltip />
                <Radar
                  dataKey="A"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
                <Radar
                  dataKey="B"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* ── 6. RADIAL CHART ──────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-semibold">Radial Chart</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Default */}
          <ChartCard
            title="Radial Chart"
            legendItems={radialData.map((d) => ({
              color: d.fill,
              label: d.name,
            }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={radialData}
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                startAngle={180}
                endAngle={0}
              >
                <RadialBar dataKey="value" background cornerRadius={4}>
                  {radialData.map((entry, i) => (
                    <Cell key={`radial-${i}`} fill={entry.fill} />
                  ))}
                </RadialBar>
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Label */}
          <ChartCard
            title="Radial Chart - Label"
            legendItems={radialData.map((d) => ({
              color: d.fill,
              label: d.name,
            }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={radialData}
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
              >
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={4}
                  label={{ position: "insideStart", fill: "#fff", fontSize: 11 }}
                >
                  {radialData.map((entry, i) => (
                    <Cell key={`radial-lbl-${i}`} fill={entry.fill} />
                  ))}
                </RadialBar>
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Grid */}
          <ChartCard
            title="Radial Chart - Grid"
            legendItems={radialData.map((d) => ({
              color: d.fill,
              label: d.name,
            }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={radialData}
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
              >
                <PolarGrid gridType="circle" />
                <RadialBar dataKey="value" cornerRadius={4}>
                  {radialData.map((entry, i) => (
                    <Cell key={`radial-grid-${i}`} fill={entry.fill} />
                  ))}
                </RadialBar>
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Text (center label) */}
          <ChartCard
            title="Radial Chart - Text"
            legendItems={[{ color: "#f97316", label: "Visitors" }]}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={[{ name: "Visitors", value: 200, fill: "#f97316" }]}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={10}
                  fill="#f97316"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-foreground text-3xl font-bold"
                >
                  200
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Shape (semi-circle) */}
          <ChartCard
            title="Radial Chart - Shape"
            legendItems={radialData.map((d) => ({
              color: d.fill,
              label: d.name,
            }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={radialData}
                cx="50%"
                cy="80%"
                innerRadius="30%"
                outerRadius="100%"
                startAngle={180}
                endAngle={0}
              >
                <RadialBar dataKey="value" background cornerRadius={4}>
                  {radialData.map((entry, i) => (
                    <Cell key={`radial-shape-${i}`} fill={entry.fill} />
                  ))}
                </RadialBar>
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Stacked */}
          <ChartCard
            title="Radial Chart - Stacked"
            legendItems={radialData.slice(0, 3).map((d) => ({
              color: d.fill,
              label: d.name,
            }))}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={radialData}
                cx="50%"
                cy="50%"
                innerRadius="15%"
                outerRadius="85%"
              >
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={6}
                >
                  {radialData.map((entry, i) => (
                    <Cell key={`radial-stacked-${i}`} fill={entry.fill} />
                  ))}
                </RadialBar>
                <Legend />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </div>
  );
}
