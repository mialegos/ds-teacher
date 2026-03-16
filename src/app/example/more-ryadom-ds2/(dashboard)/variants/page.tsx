"use client";

import { useState } from "react";
import {
  Avatar,
  KPI_CARDS,
  MONTHLY_REVENUE,
  REVENUE_BY_DEST,
  TEAM,
  TEAM_DETAILS,
  CONSULTATIONS,
  scoreColor,
  fmtDate,
} from "../../data";

/* ═══════════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════════ */

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="mb-0 flex w-full items-center justify-between border-b border-border pb-2 text-left"
      >
        <h2 className="text-base font-semibold">{title}</h2>
        <span className="text-sm text-muted-foreground">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="mt-6 flex flex-col gap-8">{children}</div>}
    </section>
  );
}

function Variant({ n, children }: { n: number | string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Вариант {n}
      </p>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. KPI CARDS — 11 variants
   ═══════════════════════════════════════════════════════════════ */

function trendColor(t: string) {
  return t.startsWith("-") ? "text-destructive" : "text-primary";
}
function trendArrow(t: string) {
  return t.startsWith("-") ? "↓" : "↑";
}
function trendBg(t: string) {
  return t.startsWith("-") ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary";
}

function Kpi1() {
  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-border bg-border">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="bg-card px-5 py-4">
          <p className="text-xs text-muted-foreground">{k.label}</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">{k.value}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-xs font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi2() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${trendBg(k.trend)}`}>
              {k.trend}
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold tracking-tight">{k.value}</p>
        </div>
      ))}
    </div>
  );
}

function Kpi3() {
  return (
    <div className="flex divide-x divide-border rounded-lg border border-border bg-card">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="flex-1 px-5 py-4 text-center">
          <p className="text-2xl font-semibold tracking-tight">{k.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{k.label}</p>
          <div className="mt-1.5 flex items-center justify-center gap-1">
            <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-xs font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi3Left() {
  return (
    <div className="flex divide-x divide-border rounded-lg border border-border bg-card">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="flex-1 px-5 py-4">
          <p className="text-2xl font-semibold tracking-tight">{k.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{k.label}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-xs font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi4() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="rounded-lg bg-accent/50 px-4 py-3">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {k.label}
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold">{k.value}</span>
            <span className={`text-xs ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi5() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${trendBg(k.trend)}`}>
            <span className="text-sm font-bold">{k.trend}</span>
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">{k.value}</p>
            <p className="text-xs text-muted-foreground">{k.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi6() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="rounded-lg border border-border bg-card px-5 py-4">
          <p className="text-3xl font-bold tracking-tight">{k.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{k.label}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-xs ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi7() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            {KPI_CARDS.map((k) => (
              <th key={k.label} className="px-5 py-2.5 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {k.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {KPI_CARDS.map((k) => (
              <td key={k.label} className="px-5 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold tabular-nums">{k.value}</span>
                  <span className={`text-xs font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Kpi8() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${k.trend.startsWith("-") ? "bg-destructive/8" : "bg-primary/8"}`}>
            <div className={`h-4 w-4 rounded-full ${k.trend.startsWith("-") ? "bg-destructive/30" : "bg-primary/30"}`} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <p className="text-lg font-bold tracking-tight">{k.value}</p>
          </div>
          <div className={`rounded-md px-2 py-1 ${trendBg(k.trend)}`}>
            <p className="text-xs font-semibold">{k.trend}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi9() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {KPI_CARDS.map((k) => {
        const neg = k.trend.startsWith("-");
        return (
          <div key={k.label} className={`rounded-lg border px-5 py-4 ${neg ? "border-destructive/20 bg-destructive/5" : "border-primary/20 bg-accent/30"}`}>
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-medium text-foreground/70">{k.label}</p>
              <span className={`text-[10px] font-semibold ${trendColor(k.trend)}`}>{k.trend}</span>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight">{k.value}</p>
            <div className={`mt-2 h-1 rounded-full ${neg ? "bg-destructive/10" : "bg-primary/10"}`}>
              <div className={`h-full rounded-full ${neg ? "bg-destructive/40" : "bg-primary/40"}`} style={{ width: "70%" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Kpi10() {
  return (
    <div className="flex gap-3">
      {KPI_CARDS.map((k, i) => {
        const neg = k.trend.startsWith("-");
        const highlight = i === 0;
        return (
          <div key={k.label} className={`flex-1 rounded-lg px-4 py-3 ${highlight ? "bg-primary text-primary-foreground" : "border border-border bg-card"}`}>
            <p className={`text-[11px] ${highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{k.label}</p>
            <p className="mt-1 text-xl font-bold tracking-tight">{k.value}</p>
            <p className={`mt-1 text-xs font-medium ${highlight ? (neg ? "text-red-200" : "text-primary-foreground/80") : trendColor(k.trend)}`}>{k.trend}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. REVENUE CHART — 5 variants
   ═══════════════════════════════════════════════════════════════ */

function chartParams() {
  const w = 420, h = 180;
  const pad = { top: 6, right: 6, bottom: 22, left: 28 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const maxY = 55;
  const n = MONTHLY_REVENUE.length;
  const slotW = cw / n;
  const baseline = pad.top + ch;
  return { w, h, pad, cw, ch, maxY, n, slotW, baseline };
}

function Rev1() {
  const { w, h, pad, ch, maxY, n, slotW, baseline } = chartParams();
  const barW = slotW * 0.48;
  const ticks = [0, 15, 30, 45];
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Выручка и допродажи</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {ticks.map((t) => { const y = baseline - (t / maxY) * ch; return (<g key={t}><line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} /><text x={pad.left - 5} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[9px]">{t}M</text></g>); })}
        {MONTHLY_REVENUE.map((d, i) => { const cx = pad.left + (i + 0.5) * slotW; const bH = (d.base / maxY) * ch; const uH = (d.upsell / maxY) * ch; const x = cx - barW / 2; const r = 3; return (<g key={d.month}><rect x={x} y={baseline - bH} width={barW} height={bH} className="fill-primary/20" /><path d={`M${x},${baseline - bH} L${x},${baseline - bH - uH + r} Q${x},${baseline - bH - uH} ${x + r},${baseline - bH - uH} L${x + barW - r},${baseline - bH - uH} Q${x + barW},${baseline - bH - uH} ${x + barW},${baseline - bH - uH + r} L${x + barW},${baseline - bH} Z`} className="fill-primary/50" /><text x={cx} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text></g>); })}
      </svg>
    </div>
  );
}

function Rev2() {
  const { w, h, pad, cw, ch, maxY, n, baseline } = chartParams();
  const pts = MONTHLY_REVENUE.map((d, i) => ({
    x: pad.left + (i / (n - 1)) * cw,
    yBase: baseline - (d.base / maxY) * ch,
    yTotal: baseline - ((d.base + d.upsell) / maxY) * ch,
  }));
  const areaBase = `M${pts[0].x},${baseline} ${pts.map(p => `L${p.x},${p.yBase}`).join(" ")} L${pts[pts.length - 1].x},${baseline} Z`;
  const areaTotal = `M${pts[0].x},${pts[0].yBase} ${pts.map(p => `L${p.x},${p.yTotal}`).join(" ")} L${pts[pts.length - 1].x},${pts[pts.length - 1].yBase} ${[...pts].reverse().map(p => `L${p.x},${p.yBase}`).join(" ")} Z`;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Выручка — area chart</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        <path d={areaBase} className="fill-primary/10" />
        <path d={areaTotal} className="fill-primary/25" />
        <polyline points={pts.map(p => `${p.x},${p.yBase}`).join(" ")} fill="none" className="stroke-primary/30" strokeWidth={1.5} />
        <polyline points={pts.map(p => `${p.x},${p.yTotal}`).join(" ")} fill="none" className="stroke-primary/60" strokeWidth={1.5} />
        {pts.map((p, i) => (<circle key={i} cx={p.x} cy={p.yTotal} r={2.5} className="fill-primary/60" />))}
        {MONTHLY_REVENUE.map((d, i) => (<text key={d.month} x={pts[i].x} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>))}
      </svg>
    </div>
  );
}

function Rev3() {
  const { w, h, pad, ch, maxY, n, slotW, baseline } = chartParams();
  const barW = slotW * 0.25;
  const gap = 2;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Выручка — grouped bars</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {MONTHLY_REVENUE.map((d, i) => {
          const cx = pad.left + (i + 0.5) * slotW;
          const bH = (d.base / maxY) * ch; const uH = (d.upsell / maxY) * ch;
          return (<g key={d.month}>
            <rect x={cx - barW - gap / 2} y={baseline - bH} width={barW} height={bH} rx={2} className="fill-primary/20" />
            <rect x={cx + gap / 2} y={baseline - uH} width={barW} height={uH} rx={2} className="fill-primary/60" />
            <text x={cx} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>
          </g>);
        })}
      </svg>
    </div>
  );
}

function Rev4() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Выручка — таблица</h3>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="pb-2 text-left font-medium">Месяц</th><th className="pb-2 text-right font-medium">Базовая</th><th className="pb-2 text-right font-medium">Допрод.</th><th className="pb-2 text-right font-medium">Итого</th><th className="pb-2 w-32 font-medium"></th></tr></thead>
        <tbody>
          {MONTHLY_REVENUE.map((d) => {
            const total = d.base + d.upsell;
            const pct = (total / 55) * 100;
            return (
              <tr key={d.month} className="border-b border-border/50 last:border-0">
                <td className="py-2 font-medium">{d.month}</td>
                <td className="py-2 text-right tabular-nums">{d.base}M</td>
                <td className="py-2 text-right tabular-nums">{d.upsell}M</td>
                <td className="py-2 text-right font-medium tabular-nums">{total.toFixed(1)}M</td>
                <td className="py-2 pl-3"><div className="h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-primary/40" style={{ width: `${pct}%` }} /></div></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Rev5() {
  const maxTotal = Math.max(...MONTHLY_REVENUE.map(d => d.base + d.upsell));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Выручка — horizontal stacked</h3>
      <div className="flex flex-col gap-2">
        {MONTHLY_REVENUE.map((d) => {
          const bPct = (d.base / maxTotal) * 100;
          const uPct = (d.upsell / maxTotal) * 100;
          return (
            <div key={d.month} className="flex items-center gap-3">
              <span className="w-8 shrink-0 text-xs font-medium">{d.month}</span>
              <div className="flex h-5 flex-1 overflow-hidden rounded-sm">
                <div className="bg-primary/20" style={{ width: `${bPct}%` }} />
                <div className="bg-primary/50" style={{ width: `${uPct}%` }} />
              </div>
              <span className="w-14 shrink-0 text-right text-xs tabular-nums text-muted-foreground">{(d.base + d.upsell).toFixed(1)}M</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── New chart variants using DS chart tokens ── */

function Rev6() {
  const { w, h, pad, ch, maxY, n, slotW, baseline } = chartParams();
  const barW = slotW * 0.55;
  const ticks = [0, 15, 30, 45];
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">Выручка и допродажи</h3>
      <p className="mb-4 text-xs text-muted-foreground">Сен 2025 — Фев 2026</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {ticks.map((t) => { const y = baseline - (t / maxY) * ch; return (<g key={t}><line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} /><text x={pad.left - 5} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[9px]">{t}M</text></g>); })}
        {MONTHLY_REVENUE.map((d, i) => {
          const cx = pad.left + (i + 0.5) * slotW;
          const bH = (d.base / maxY) * ch;
          const uH = (d.upsell / maxY) * ch;
          const x = cx - barW / 2;
          return (
            <g key={d.month}>
              <rect x={x} y={baseline - bH} width={barW} height={bH} rx={4} className="fill-chart-1" />
              <rect x={x} y={baseline - bH - uH} width={barW} height={uH} rx={0} style={{ clipPath: `inset(0 0 0 0 round 4px 4px 0 0)` }} className="fill-chart-2" />
              <text x={cx} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-1" />Базовая</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-2" />Допродажи</span>
      </div>
    </div>
  );
}

function Rev7() {
  const { w, h, pad, cw, ch, maxY, n, baseline } = chartParams();
  const ticks = [0, 15, 30, 45];
  const pts = MONTHLY_REVENUE.map((d, i) => ({
    x: pad.left + (i / (n - 1)) * cw,
    yBase: baseline - (d.base / maxY) * ch,
    yTotal: baseline - ((d.base + d.upsell) / maxY) * ch,
  }));
  const lineBase = pts.map(p => `${p.x},${p.yBase}`).join(" ");
  const lineTotal = pts.map(p => `${p.x},${p.yTotal}`).join(" ");
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">Выручка — line chart</h3>
      <p className="mb-4 text-xs text-muted-foreground">Базовая и общая выручка</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {ticks.map((t) => { const y = baseline - (t / maxY) * ch; return (<g key={t}><line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} /><text x={pad.left - 5} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[9px]">{t}M</text></g>); })}
        <polyline points={lineBase} fill="none" className="stroke-chart-1" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        <polyline points={lineTotal} fill="none" className="stroke-chart-2" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (<g key={i}><circle cx={p.x} cy={p.yBase} r={3} className="fill-chart-1" /><circle cx={p.x} cy={p.yTotal} r={3} className="fill-chart-2" /></g>))}
        {MONTHLY_REVENUE.map((d, i) => (<text key={d.month} x={pts[i].x} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>))}
      </svg>
      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-block h-0.5 w-4 rounded-full bg-chart-1" />Базовая</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-0.5 w-4 rounded-full bg-chart-2" />Итого</span>
      </div>
    </div>
  );
}

function Rev8() {
  const { w, h, pad, cw, ch, maxY, n, baseline } = chartParams();
  const ticks = [0, 15, 30, 45];
  const pts = MONTHLY_REVENUE.map((d, i) => ({
    x: pad.left + (i / (n - 1)) * cw,
    yBase: baseline - (d.base / maxY) * ch,
    yTotal: baseline - ((d.base + d.upsell) / maxY) * ch,
  }));
  const gradId = "rev8-grad";
  const areaPath = `M${pts[0].x},${baseline} ${pts.map(p => `L${p.x},${p.yTotal}`).join(" ")} L${pts[pts.length - 1].x},${baseline} Z`;
  const linePath = pts.map(p => `${p.x},${p.yTotal}`).join(" ");
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">Выручка — gradient area</h3>
      <p className="mb-4 text-xs text-muted-foreground">Общая выручка с заливкой</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        <defs>
          <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" className="[stop-color:var(--color-chart-1)]" stopOpacity={0.3} />
            <stop offset="100%" className="[stop-color:var(--color-chart-1)]" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        {ticks.map((t) => { const y = baseline - (t / maxY) * ch; return (<g key={t}><line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} /><text x={pad.left - 5} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[9px]">{t}M</text></g>); })}
        <path d={areaPath} fill={`url(#${gradId})`} />
        <polyline points={linePath} fill="none" className="stroke-chart-1" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (<circle key={i} cx={p.x} cy={p.yTotal} r={3} className="fill-background stroke-chart-1" strokeWidth={2} />))}
        {MONTHLY_REVENUE.map((d, i) => (<text key={d.month} x={pts[i].x} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>))}
      </svg>
    </div>
  );
}

function Rev9() {
  const { w, h, pad, ch, maxY, n, slotW, baseline } = chartParams();
  const barW = slotW * 0.3;
  const gap = 1;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">Выручка — три показателя</h3>
      <p className="mb-4 text-xs text-muted-foreground">Базовая, допродажи, упущено</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {[0, 15, 30, 45].map((t) => { const y = baseline - (t / maxY) * ch; return (<g key={t}><line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} /></g>); })}
        {MONTHLY_REVENUE.map((d, i) => {
          const cx = pad.left + (i + 0.5) * slotW;
          const bH = (d.base / maxY) * ch;
          const uH = (d.upsell / maxY) * ch;
          const mH = (d.missed / maxY) * ch;
          return (
            <g key={d.month}>
              <rect x={cx - barW * 1.5 - gap} y={baseline - bH} width={barW} height={bH} rx={2} className="fill-chart-1" />
              <rect x={cx - barW / 2} y={baseline - uH} width={barW} height={uH} rx={2} className="fill-chart-2" />
              <rect x={cx + barW / 2 + gap} y={baseline - mH} width={barW} height={mH} rx={2} className="fill-chart-3" fillOpacity={0.6} />
              <text x={cx} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-1" />Базовая</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-2" />Допрод.</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-3 opacity-60" />Упущено</span>
      </div>
    </div>
  );
}

function Rev10() {
  const maxTotal = Math.max(...MONTHLY_REVENUE.map(d => d.base + d.upsell));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">Выручка — progress bars</h3>
      <p className="mb-4 text-xs text-muted-foreground">Помесячная разбивка</p>
      <div className="flex flex-col gap-3">
        {MONTHLY_REVENUE.map((d) => {
          const total = d.base + d.upsell;
          const bPct = (d.base / maxTotal) * 100;
          const uPct = (d.upsell / maxTotal) * 100;
          return (
            <div key={d.month}>
              <div className="mb-1 flex items-baseline justify-between">
                <span className="text-sm font-medium">{d.month}</span>
                <span className="text-sm tabular-nums text-muted-foreground">{total.toFixed(1)}M</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-muted/50">
                <div className="rounded-l-full bg-chart-1" style={{ width: `${bPct}%` }} />
                <div className="bg-chart-2" style={{ width: `${uPct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-1" />Базовая</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-chart-2" />Допродажи</span>
      </div>
    </div>
  );
}

function Dest6() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  const colors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5", "bg-chart-1/60", "bg-chart-2/60", "bg-chart-3/60"];
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — colored bars</h3>
      <div className="flex flex-col gap-2">
        {REVENUE_BY_DEST.map((d, i) => {
          const pct = (d.value / maxVal) * 100;
          return (
            <div key={d.dest} className="flex items-center gap-2">
              <div className="relative h-8 flex-1">
                <div className={`absolute inset-y-0 left-0 flex items-center rounded-md ${colors[i % colors.length]}`} style={{ width: `${pct}%` }}>
                  {pct > 20 && <span className="px-3 text-xs font-medium text-white">{d.dest}</span>}
                </div>
                {pct <= 20 && <span className="absolute inset-y-0 flex items-center text-xs font-medium text-foreground" style={{ left: `calc(${pct}% + 8px)` }}>{d.dest}</span>}
              </div>
              <span className="w-12 shrink-0 text-right text-sm tabular-nums text-muted-foreground">{d.value}M</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Dest7() {
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  const colors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5", "bg-chart-1/60", "bg-chart-2/60", "bg-chart-3/60"];
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — donut list</h3>
      <div className="flex items-start gap-6">
        <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0">
          {(() => {
            let offset = 0;
            const strokes = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)", "var(--color-chart-5)", "var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"];
            return REVENUE_BY_DEST.map((d, i) => {
              const pct = (d.value / total) * 100;
              const el = <circle key={d.dest} cx="60" cy="60" r="48" fill="none" stroke={strokes[i % strokes.length]} strokeWidth="20" strokeDasharray={`${pct * 3.016} ${301.6 - pct * 3.016}`} strokeDashoffset={-offset * 3.016} strokeLinecap="butt" opacity={0.85} />;
              offset += pct;
              return el;
            });
          })()}
        </svg>
        <div className="flex flex-1 flex-col gap-1.5 pt-1">
          {REVENUE_BY_DEST.map((d, i) => (
            <div key={d.dest} className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-sm ${colors[i % colors.length]}`} />
              <span className="flex-1 text-xs">{d.dest}</span>
              <span className="text-xs tabular-nums font-medium">{d.value}M</span>
              <span className="w-9 text-right text-[11px] tabular-nums text-muted-foreground">{((d.value / total) * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dest8() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — pill bars</h3>
      <div className="flex flex-col gap-2">
        {REVENUE_BY_DEST.map((d) => {
          const pct = (d.value / maxVal) * 100;
          return (
            <div key={d.dest} className="flex items-center gap-3">
              <span className="w-[72px] shrink-0 text-right text-xs text-muted-foreground">{d.dest}</span>
              <div className="relative h-6 flex-1 rounded-full bg-muted/40">
                <div className="absolute inset-y-0 left-0 rounded-full bg-chart-1" style={{ width: `${pct}%` }} />
              </div>
              <span className="w-12 shrink-0 text-right text-xs tabular-nums font-medium">{d.value}M</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Dest9() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-1 text-base font-medium">По направлениям — metric cards</h3>
      <p className="mb-3 text-xs text-muted-foreground">Итого: {total.toFixed(1)}M ₽</p>
      <div className="grid grid-cols-4 gap-2">
        {REVENUE_BY_DEST.slice(0, 8).map((d) => (
          <div key={d.dest} className="rounded-md border border-border/60 px-3 py-2.5">
            <p className="text-xs text-muted-foreground">{d.dest}</p>
            <p className="mt-0.5 text-base font-semibold tabular-nums">{d.value}M</p>
            <div className="mt-2 h-1.5 rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-chart-1" style={{ width: `${(d.value / maxVal) * 100}%` }} />
            </div>
            <p className="mt-1 text-[11px] tabular-nums text-muted-foreground">{((d.value / total) * 100).toFixed(0)}% от общей</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dest10() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — sparkline rows</h3>
      <div className="flex flex-col">
        {REVENUE_BY_DEST.map((d) => {
          const pct = (d.value / maxVal) * 100;
          return (
            <div key={d.dest} className="flex items-center gap-3 border-b border-border/40 py-2.5 last:border-0">
              <span className="w-20 shrink-0 text-sm">{d.dest}</span>
              <div className="flex-1">
                <div className="h-2 rounded-full bg-muted/40">
                  <div className="h-full rounded-full bg-chart-2" style={{ width: `${pct}%` }} />
                </div>
              </div>
              <span className="w-14 shrink-0 text-right text-sm font-medium tabular-nums">{d.value}M</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. REVENUE BY DESTINATION — original variants
   ═══════════════════════════════════════════════════════════════ */

function Dest1() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — inline label bars</h3>
      <div className="flex flex-col gap-2">
        {REVENUE_BY_DEST.map((d) => {
          const pct = (d.value / maxVal) * 100;
          const showInside = pct > 20;
          return (
            <div key={d.dest} className="flex items-center gap-2">
              <div className="relative h-8 flex-1">
                <div
                  className="absolute inset-y-0 left-0 flex items-center rounded-md bg-primary/20"
                  style={{ width: `${pct}%` }}
                >
                  {showInside && (
                    <span className="px-3 text-xs font-medium text-foreground">{d.dest}</span>
                  )}
                </div>
                {!showInside && (
                  <span className="absolute inset-y-0 flex items-center text-xs font-medium text-foreground" style={{ left: `calc(${pct}% + 8px)` }}>{d.dest}</span>
                )}
              </div>
              <span className="w-12 shrink-0 text-right text-sm tabular-nums text-muted-foreground">{d.value}M</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Dest1b() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — side label bars</h3>
      <div className="flex flex-col gap-2.5">
        {REVENUE_BY_DEST.map((d) => (
          <div key={d.dest} className="flex items-center gap-3">
            <span className="w-[72px] shrink-0 text-right text-xs text-muted-foreground">{d.dest}</span>
            <div className="relative h-[18px] flex-1"><div className="absolute inset-y-0 left-0 rounded-r-sm bg-primary/25" style={{ width: `${(d.value / maxVal) * 100}%` }} /></div>
            <span className="w-11 shrink-0 text-right text-xs tabular-nums text-muted-foreground">{d.value}M</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dest2() {
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — table</h3>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="pb-2 text-left font-medium">Направление</th><th className="pb-2 text-right font-medium">Выручка</th><th className="pb-2 text-right font-medium">Доля</th></tr></thead>
        <tbody>
          {REVENUE_BY_DEST.map((d) => (
            <tr key={d.dest} className="border-b border-border/50 last:border-0">
              <td className="py-1.5">{d.dest}</td>
              <td className="py-1.5 text-right tabular-nums">{d.value}M ₽</td>
              <td className="py-1.5 text-right tabular-nums text-muted-foreground">{((d.value / total) * 100).toFixed(0)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dest3() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — cards grid</h3>
      <div className="grid grid-cols-4 gap-2">
        {REVENUE_BY_DEST.map((d) => (
          <div key={d.dest} className="rounded-md bg-muted/50 px-3 py-2">
            <p className="text-xs text-muted-foreground">{d.dest}</p>
            <p className="mt-0.5 text-sm font-semibold tabular-nums">{d.value}M</p>
            <div className="mt-1.5 h-1 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary/40" style={{ width: `${(d.value / maxVal) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dest4() {
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — stacked strip</h3>
      <div className="flex h-8 overflow-hidden rounded-md">
        {REVENUE_BY_DEST.map((d, i) => (
          <div
            key={d.dest}
            className="flex items-center justify-center text-[9px] font-medium text-primary-foreground"
            style={{
              width: `${(d.value / total) * 100}%`,
              backgroundColor: `hsl(125 ${80 - i * 8}% ${35 + i * 5}%)`,
            }}
          >
            {(d.value / total) * 100 > 8 ? d.dest : ""}
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {REVENUE_BY_DEST.map((d, i) => (
          <span key={d.dest} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: `hsl(125 ${80 - i * 8}% ${35 + i * 5}%)` }} />
            {d.dest} {d.value}M
          </span>
        ))}
      </div>
    </div>
  );
}

function Dest5() {
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">По направлениям — ranked list</h3>
      <div className="flex flex-col gap-1">
        {REVENUE_BY_DEST.map((d, i) => (
          <div key={d.dest} className="flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/50">
            <span className="w-5 text-xs tabular-nums text-muted-foreground">{i + 1}</span>
            <span className="flex-1 text-sm">{d.dest}</span>
            <span className="text-sm font-semibold tabular-nums">{d.value}M</span>
            <div className="w-20"><div className="h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary/30" style={{ width: `${(d.value / maxVal) * 100}%` }} /></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. TOP EMPLOYEES — 5 variants
   ═══════════════════════════════════════════════════════════════ */

const TOP = [...TEAM].sort((a, b) => b.score - a.score).slice(0, 5);

function Emp1() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Сотрудники — list</h3>
      {TOP.map((m, i) => (
        <div key={m.id} className="flex items-center gap-3 border-b border-border/50 py-2.5 last:border-0">
          <span className="w-4 text-xs tabular-nums text-muted-foreground">{i + 1}</span>
          <Avatar initials={m.initials} size={28} />
          <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.role}</p></div>
          <span className={`text-sm font-semibold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}

function Emp2() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Сотрудники — cards</h3>
      <div className="grid grid-cols-5 gap-2">
        {TOP.map((m, i) => (
          <div key={m.id} className="flex flex-col items-center rounded-lg bg-muted/40 px-3 py-3 text-center">
            <Avatar initials={m.initials} size={36} />
            <p className="mt-2 text-xs font-medium leading-tight">{m.name.split(" ")[0]}</p>
            <p className="text-[10px] text-muted-foreground">{m.role}</p>
            <p className={`mt-1.5 text-lg font-bold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Emp3() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Сотрудники — table</h3>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="pb-2 text-left font-medium">#</th><th className="pb-2 text-left font-medium">Сотрудник</th><th className="pb-2 text-right font-medium">Балл</th><th className="pb-2 text-right font-medium">Конс./мес</th><th className="pb-2 text-right font-medium">Выручка</th></tr></thead>
        <tbody>
          {TOP.map((m, i) => (
            <tr key={m.id} className="border-b border-border/50 last:border-0">
              <td className="py-2 text-xs text-muted-foreground">{i + 1}</td>
              <td className="py-2"><div className="flex items-center gap-2"><Avatar initials={m.initials} size={24} /><span className="font-medium">{m.name}</span></div></td>
              <td className={`py-2 text-right font-semibold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</td>
              <td className="py-2 text-right tabular-nums text-muted-foreground">{m.consultationsPerMonth}</td>
              <td className="py-2 text-right tabular-nums">{m.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Emp4() {
  const maxScore = 10;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Сотрудники — progress bars</h3>
      {TOP.map((m) => (
        <div key={m.id} className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0">
          <Avatar initials={m.initials} size={28} />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">{m.name}</span>
              <span className={`text-xs font-semibold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary/40" style={{ width: `${(m.score / maxScore) * 100}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Emp5() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Сотрудники — compact inline</h3>
      <div className="flex flex-col gap-1">
        {TOP.map((m, i) => (
          <div key={m.id} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/40">
            <span className="w-4 text-xs tabular-nums text-muted-foreground">{i + 1}</span>
            <Avatar initials={m.initials} size={22} />
            <span className="font-medium">{m.name}</span>
            <span className="text-xs text-muted-foreground">· {m.role}</span>
            <span className="flex-1" />
            <span className="text-xs tabular-nums text-muted-foreground">{m.consultationsPerMonth} конс</span>
            <span className="text-xs tabular-nums text-muted-foreground">{m.revenue}</span>
            <span className={`min-w-[32px] text-right font-semibold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. RECENT CONSULTATIONS — 5 variants
   ═══════════════════════════════════════════════════════════════ */

const RECENT = CONSULTATIONS.slice(0, 5);

function statusBadge(result: string) {
  if (result === "Бронирование") return "bg-primary/10 text-primary";
  if (result === "В работе") return "bg-amber-100 text-amber-700";
  return "bg-muted text-muted-foreground";
}

function Con1() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Консультации — list</h3>
      {RECENT.map((c) => (
        <div key={c.id} className="flex items-center gap-3 border-b border-border/50 py-2.5 last:border-0">
          <Avatar initials={c.managerInitials} size={28} />
          <div className="min-w-0 flex-1"><p className="truncate text-sm">{c.topic}</p><p className="text-xs text-muted-foreground">{c.managerName} · {c.destination}</p></div>
          <span className={`text-sm font-semibold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] ${statusBadge(c.result)}`}>{c.result}</span>
          <span className="w-16 text-right text-xs tabular-nums text-muted-foreground">{c.amount ?? "—"}</span>
        </div>
      ))}
    </div>
  );
}

function Con2() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Консультации — table</h3>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border text-xs text-muted-foreground"><th className="pb-2 text-left font-medium">Тема</th><th className="pb-2 text-left font-medium">Менеджер</th><th className="pb-2 text-center font-medium">Балл</th><th className="pb-2 text-left font-medium">Статус</th><th className="pb-2 text-right font-medium">Сумма</th></tr></thead>
        <tbody>
          {RECENT.map((c) => (
            <tr key={c.id} className="border-b border-border/50 last:border-0">
              <td className="py-2"><div><p className="font-medium">{c.topic}</p><p className="text-xs text-muted-foreground">{c.destination} · {c.duration}</p></div></td>
              <td className="py-2"><div className="flex items-center gap-2"><Avatar initials={c.managerInitials} size={22} /><span className="text-xs">{c.managerName}</span></div></td>
              <td className={`py-2 text-center font-semibold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</td>
              <td className="py-2"><span className={`rounded-full px-2 py-0.5 text-[10px] ${statusBadge(c.result)}`}>{c.result}</span></td>
              <td className="py-2 text-right tabular-nums">{c.amount ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Con3() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Консультации — cards</h3>
      <div className="grid grid-cols-2 gap-3">
        {RECENT.map((c) => (
          <div key={c.id} className="rounded-md border border-border/60 px-4 py-3">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium">{c.topic}</p>
              <span className={`text-lg font-bold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{c.managerName} · {c.destination} · {c.duration}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-[10px] ${statusBadge(c.result)}`}>{c.result}</span>
              {c.amount && <span className="text-xs font-medium tabular-nums">{c.amount}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Con4() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Консультации — timeline</h3>
      <div className="relative pl-5">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
        {RECENT.map((c) => (
          <div key={c.id} className="relative mb-4 last:mb-0">
            <div className={`absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background ${c.result === "Бронирование" ? "bg-primary" : c.result === "В работе" ? "bg-amber-400" : "bg-muted-foreground/40"}`} />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">{c.topic}</p>
                <p className="text-xs text-muted-foreground">{c.managerName} · {c.destination}</p>
              </div>
              <div className="text-right">
                <span className={`text-sm font-semibold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</span>
                {c.amount && <p className="text-xs tabular-nums text-muted-foreground">{c.amount}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Con5() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-medium">Консультации — compact rows</h3>
      {RECENT.map((c) => (
        <div key={c.id} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/30">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.result === "Бронирование" ? "bg-primary" : c.result === "В работе" ? "bg-amber-400" : "bg-muted-foreground/30"}`} />
          <span className="truncate font-medium">{c.topic}</span>
          <span className="shrink-0 text-xs text-muted-foreground">{c.managerName}</span>
          <span className="flex-1" />
          <span className={`shrink-0 text-xs font-semibold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</span>
          <span className="w-16 shrink-0 text-right text-xs tabular-nums text-muted-foreground">{c.amount ?? "—"}</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. COLOR PALETTES — same chart, different colors
   ═══════════════════════════════════════════════════════════════ */

type Palette = { name: string; desc: string; base: string; upsell: string; missed: string; bar: string; barHover: string };

const PALETTES: Palette[] = [
  {
    name: "shadcn default (blue)",
    desc: "Дефолтная палитра shadcn — сине-фиолетовая oklch шкала",
    base: "oklch(0.81 0.1 252)", upsell: "oklch(0.62 0.19 260)", missed: "oklch(0.55 0.22 263)",
    bar: "oklch(0.62 0.19 260)", barHover: "oklch(0.81 0.1 252)",
  },
  {
    name: "Green UI — монохром",
    desc: "Брендовый зелёный Green UI: light → base → red для упущенного",
    base: "#8df26d", upsell: "#00cc00", missed: "#ff5c52",
    bar: "#00cc00", barHover: "#8df26d",
  },
  {
    name: "Green UI + Blue",
    desc: "Зелёный для базовой, синий для допродаж, красный для потерь",
    base: "#00cc00", upsell: "#0089ff", missed: "#ff000b",
    bar: "#0089ff", barHover: "#66c2ff",
  },
  {
    name: "Green UI + Orange",
    desc: "Зелёный для базовой, оранжевый для допродаж, красный для потерь",
    base: "#00cc00", upsell: "#ff8f00", missed: "#ff000b",
    bar: "#ff8f00", barHover: "#ffb733",
  },
  {
    name: "Blue + Purple",
    desc: "Синий Edtech Blue для базовой, фиолетовый для допродаж",
    base: "#66c2ff", upsell: "#0089ff", missed: "#c952de",
    bar: "#0089ff", barHover: "#66c2ff",
  },
  {
    name: "Мультицвет (все бренды)",
    desc: "Green → Blue → Red — полный набор брендовых цветов",
    base: "#5ee34d", upsell: "#0089ff", missed: "#ff5c52",
    bar: "#0089ff", barHover: "#66c2ff",
  },
  {
    name: "Green muted + Orange",
    desc: "Мягкий зелёный фон, оранжевый акцент, красный потери",
    base: "#b7f299", upsell: "#ff8f00", missed: "#ff5c52",
    bar: "#ff8f00", barHover: "#ffb733",
  },
  {
    name: "Yellow + Purple",
    desc: "Жёлтый Edtech Yellow для базовой, фиолетовый для допродаж",
    base: "#ffc933", upsell: "#c952de", missed: "#ff5c52",
    bar: "#c952de", barHover: "#d385e4",
  },
  {
    name: "Blue muted шкала",
    desc: "Edtech Blue от light до dark — монохромная синяя аналитика",
    base: "#99d6ff", upsell: "#0089ff", missed: "#006ecc",
    bar: "#0089ff", barHover: "#99d6ff",
  },
  {
    name: "Semantic (green/red clean)",
    desc: "Семантика: зелёный = заработано, красный = потеряно",
    base: "#b7f299", upsell: "#00cc00", missed: "#ff000b",
    bar: "#00cc00", barHover: "#b7f299",
  },
];

function PaletteDemo({ p }: { p: Palette }) {
  const w = 420, h = 160;
  const pad = { top: 4, right: 4, bottom: 20, left: 4 };
  const ch = h - pad.top - pad.bottom;
  const maxY = 55;
  const n = MONTHLY_REVENUE.length;
  const slotW = (w - pad.left - pad.right) / n;
  const barW = slotW * 0.22;
  const gap = 2;
  const baseline = pad.top + ch;

  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-1 flex items-baseline justify-between">
        <h4 className="text-sm font-medium">{p.name}</h4>
        <div className="flex gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: p.base }} />
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: p.upsell }} />
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: p.missed }} />
        </div>
      </div>
      <p className="mb-3 text-[11px] text-muted-foreground">{p.desc}</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Revenue grouped bars */}
        <div className="rounded-md border border-border/60 p-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Выручка</p>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
            {MONTHLY_REVENUE.map((d, i) => {
              const cx = pad.left + (i + 0.5) * slotW;
              const bH = (d.base / maxY) * ch;
              const uH = (d.upsell / maxY) * ch;
              const mH = (d.missed / maxY) * ch;
              return (
                <g key={d.month}>
                  <rect x={cx - barW * 1.5 - gap} y={baseline - bH} width={barW} height={bH} rx={2} fill={p.base} />
                  <rect x={cx - barW / 2} y={baseline - uH} width={barW} height={uH} rx={2} fill={p.upsell} />
                  <rect x={cx + barW / 2 + gap} y={baseline - mH} width={barW} height={mH} rx={2} fill={p.missed} opacity={0.6} />
                  <text x={cx} y={baseline + 13} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>
                </g>
              );
            })}
          </svg>
          <div className="mt-1 flex gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm" style={{ background: p.base }} />Баз.</span>
            <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm" style={{ background: p.upsell }} />Доп.</span>
            <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm" style={{ background: p.missed, opacity: 0.6 }} />Упущ.</span>
          </div>
        </div>

        {/* Destination sparkline rows */}
        <div className="rounded-md border border-border/60 p-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">По направлениям</p>
          <div className="flex flex-col">
            {REVENUE_BY_DEST.slice(0, 6).map((d) => {
              const pct = (d.value / maxVal) * 100;
              return (
                <div key={d.dest} className="flex items-center gap-2 border-b border-border/30 py-1.5 last:border-0">
                  <span className="w-16 shrink-0 text-[11px]">{d.dest}</span>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-muted/40">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: p.bar }} />
                    </div>
                  </div>
                  <span className="w-10 shrink-0 text-right text-[11px] tabular-nums">{d.value}M</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. COMPETENCY DETAIL VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const SAMPLE_COMPS = TEAM_DETAILS[1]?.competencies ?? [];

function compColor(score: number, max: number) {
  const v = (score / max) * 10;
  return v > 6.5 ? "var(--chart-green)" : v >= 3 ? "var(--chart-orange)" : "var(--chart-red)";
}

function CompV1() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-medium">Вариант 1 — Текущий (прогресс-бары)</h3>
      <div className="flex flex-col">
        {SAMPLE_COMPS.map((c, i) => {
          const pct = (c.current / c.max) * 100;
          return (
            <div key={c.name} className={`flex items-center gap-4 py-3 ${i < SAMPLE_COMPS.length - 1 ? "border-b border-border/40" : ""}`}>
              <span className="w-64 shrink-0 text-sm">{c.name}</span>
              <div className="h-2 flex-1 rounded-full bg-muted">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: compColor(c.current, c.max) }} />
              </div>
              <span className="w-12 text-right text-sm font-semibold tabular-nums">
                {c.current}<span className="font-normal text-muted-foreground"> / {c.max}</span>
              </span>
              {c.trend !== 0 ? (
                <span className={`w-6 text-right text-xs font-medium ${c.trend > 0 ? "text-primary" : "text-destructive"}`}>
                  {c.trend > 0 ? `+${c.trend}` : c.trend}
                </span>
              ) : <span className="w-6" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompV2() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-medium">Вариант 2 — Карточки-сетка</h3>
      <div className="grid grid-cols-4 gap-3">
        {SAMPLE_COMPS.map((c) => {
          const pct = (c.current / c.max) * 100;
          const color = compColor(c.current, c.max);
          return (
            <div key={c.name} className="rounded-lg border border-border p-3">
              <p className="mb-2 text-xs text-muted-foreground leading-tight">{c.name}</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold tabular-nums" style={{ color }}>{c.current}</span>
                <span className="text-xs text-muted-foreground">/ {c.max}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-muted">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
              </div>
              {c.trend !== 0 && (
                <p className={`mt-1.5 text-[11px] font-medium ${c.trend > 0 ? "text-primary" : "text-destructive"}`}>
                  {c.trend > 0 ? `↑ +${c.trend}` : `↓ ${c.trend}`} за месяц
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompV3() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-medium">Вариант 3 — Горизонтальные полосы с подписью внутри</h3>
      <div className="flex flex-col gap-2">
        {SAMPLE_COMPS.map((c) => {
          const pct = (c.current / c.max) * 100;
          const color = compColor(c.current, c.max);
          return (
            <div key={c.name} className="relative h-9 w-full overflow-hidden rounded-md bg-muted">
              <div className="absolute inset-y-0 left-0 rounded-md" style={{ width: `${pct}%`, background: color, opacity: 0.2 }} />
              <div className="absolute inset-y-0 left-0 flex items-center px-3">
                <span className="text-sm font-medium">{c.name}</span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-3">
                <span className="text-sm font-bold tabular-nums" style={{ color }}>{c.current}/{c.max}</span>
                {c.trend !== 0 && (
                  <span className={`text-[11px] font-medium ${c.trend > 0 ? "text-primary" : "text-destructive"}`}>
                    {c.trend > 0 ? `+${c.trend}` : c.trend}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompV4() {
  const size = 44;
  const sw = 3.5;
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-medium">Вариант 4 — Мини-донаты</h3>
      <div className="grid grid-cols-4 gap-4">
        {SAMPLE_COMPS.map((c) => {
          const pct = c.current / c.max;
          const color = compColor(c.current, c.max);
          return (
            <div key={c.name} className="flex flex-col items-center gap-1.5 rounded-lg border border-border/50 p-3">
              <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size}>
                  <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={sw} />
                  <circle
                    cx={size / 2} cy={size / 2} r={r} fill="none"
                    stroke={color} strokeWidth={sw} strokeLinecap="round"
                    strokeDasharray={`${pct * circ} ${circ}`}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold tabular-nums" style={{ color }}>{c.current}</span>
              </div>
              <p className="text-center text-[11px] leading-tight text-muted-foreground">{c.name}</p>
              {c.trend !== 0 && (
                <span className={`text-[10px] font-medium ${c.trend > 0 ? "text-primary" : "text-destructive"}`}>
                  {c.trend > 0 ? `+${c.trend}` : c.trend}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompV5() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-medium">Вариант 5 — Таблица с индикатором</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-[11px] uppercase tracking-wider text-muted-foreground">
            <th className="pb-2 font-medium">Компетенция</th>
            <th className="pb-2 text-center font-medium">Пред.</th>
            <th className="pb-2 text-center font-medium">Текущий</th>
            <th className="pb-2 text-center font-medium">Макс.</th>
            <th className="pb-2 text-center font-medium">Тренд</th>
            <th className="pb-2 font-medium">Прогресс</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_COMPS.map((c, i) => {
            const pct = (c.current / c.max) * 100;
            const color = compColor(c.current, c.max);
            return (
              <tr key={c.name} className={i < SAMPLE_COMPS.length - 1 ? "border-b border-border/30" : ""}>
                <td className="py-2.5 font-medium">{c.name}</td>
                <td className="py-2.5 text-center tabular-nums text-muted-foreground">{c.previous}</td>
                <td className="py-2.5 text-center font-semibold tabular-nums" style={{ color }}>{c.current}</td>
                <td className="py-2.5 text-center tabular-nums text-muted-foreground">{c.max}</td>
                <td className="py-2.5 text-center">
                  {c.trend !== 0 ? (
                    <span className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${c.trend > 0 ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
                      {c.trend > 0 ? `↑${c.trend}` : `↓${Math.abs(c.trend)}`}
                    </span>
                  ) : <span className="text-xs text-muted-foreground">—</span>}
                </td>
                <td className="w-28 py-2.5">
                  <div className="h-1.5 rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function VariantsPage() {
  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl font-medium tracking-tight">Варианты блоков</h1>
      <p className="mt-0.5 text-sm text-muted-foreground">
        5 вариантов для каждого блока дашборда. Выбери лучший.
      </p>

      <div className="mt-8">
        <Section title="1. KPI-метрики">
          <Variant n={1}><Kpi1 /></Variant>
          <Variant n={2}><Kpi2 /></Variant>
          <Variant n={3}><Kpi3 /></Variant>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Вариант 3L <span className="ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium normal-case tracking-normal text-primary">выбран</span>
            </p>
            <Kpi3Left />
          </div>
          <Variant n={4}><Kpi4 /></Variant>
          <Variant n={5}><Kpi5 /></Variant>
          <Variant n={6}><Kpi6 /></Variant>
          <Variant n={7}><Kpi7 /></Variant>
          <Variant n={8}><Kpi8 /></Variant>
          <Variant n={9}><Kpi9 /></Variant>
          <Variant n={10}><Kpi10 /></Variant>
        </Section>

        <Section title="2–3. Выручка и допродажи + По направлениям">
          <Variant n={1}>
            <div className="grid grid-cols-2 gap-4"><Rev1 /><Dest1 /></div>
          </Variant>
          <Variant n={2}>
            <div className="grid grid-cols-2 gap-4"><Rev2 /><Dest1b /></div>
          </Variant>
          <Variant n={3}>
            <div className="grid grid-cols-2 gap-4"><Rev3 /><Dest2 /></div>
          </Variant>
          <Variant n={4}>
            <div className="grid grid-cols-2 gap-4"><Rev4 /><Dest3 /></div>
          </Variant>
          <Variant n={5}>
            <div className="grid grid-cols-2 gap-4"><Rev5 /><Dest4 /></div>
          </Variant>
          <Variant n={6}>
            <div className="grid grid-cols-2 gap-4"><Rev6 /><Dest6 /></div>
          </Variant>
          <Variant n={7}>
            <div className="grid grid-cols-2 gap-4"><Rev7 /><Dest7 /></div>
          </Variant>
          <Variant n={8}>
            <div className="grid grid-cols-2 gap-4"><Rev8 /><Dest8 /></div>
          </Variant>
          <Variant n={9}>
            <div className="grid grid-cols-2 gap-4"><Rev9 /><Dest9 /></div>
          </Variant>
          <Variant n={10}>
            <div className="grid grid-cols-2 gap-4"><Rev10 /><Dest10 /></div>
          </Variant>
        </Section>

        <Section title="Цветовые палитры">
          {PALETTES.map((p, i) => (
            <Variant key={p.name} n={i + 1}><PaletteDemo p={p} /></Variant>
          ))}
        </Section>

        <Section title="4. Лучшие сотрудники">
          <Variant n={1}><Emp1 /></Variant>
          <Variant n={2}><Emp2 /></Variant>
          <Variant n={3}><Emp3 /></Variant>
          <Variant n={4}><Emp4 /></Variant>
          <Variant n={5}><Emp5 /></Variant>
        </Section>

        <Section title="5. Последние консультации">
          <Variant n={1}><Con1 /></Variant>
          <Variant n={2}><Con2 /></Variant>
          <Variant n={3}><Con3 /></Variant>
          <Variant n={4}><Con4 /></Variant>
          <Variant n={5}><Con5 /></Variant>
        </Section>

        <Section title="7. Детализация компетенций" defaultOpen>
          <Variant n={1}><CompV1 /></Variant>
          <Variant n={2}><CompV2 /></Variant>
          <Variant n={3}><CompV3 /></Variant>
          <Variant n={4}><CompV4 /></Variant>
          <Variant n={5}><CompV5 /></Variant>
        </Section>

        <Section title="6. Карточки команды">
          <Variant n={1}><TeamV1 /></Variant>
          <Variant n={2}><TeamV2 /></Variant>
          <Variant n={3}><TeamV3 /></Variant>
          <Variant n={4}><TeamV4 /></Variant>
          <Variant n={5}><TeamV5 /></Variant>
          <Variant n={6}><TeamV6 /></Variant>
          <Variant n={7}><TeamV7 /></Variant>
          <Variant n={8}><TeamV8 /></Variant>
          <Variant n={9}><TeamV9 /></Variant>
          <Variant n={10}><TeamV10 /></Variant>
        </Section>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. TEAM CARD VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const SAMPLE_TEAM = [...TEAM].sort((a, b) => b.score - a.score).slice(0, 4);

function teamScoreColor(s: number) {
  return s >= 8 ? "var(--chart-green)" : s >= 6 ? "currentColor" : s >= 5 ? "var(--chart-orange)" : "var(--chart-red)";
}

function MiniDonut({ score, size = 40 }: { score: number; size?: number }) {
  const r = (size - 5) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / 10;
  return (
    <div className="relative flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.06} strokeWidth={3} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={teamScoreColor(score)} strokeOpacity={0.8} strokeWidth={3} strokeLinecap="round" strokeDasharray={`${pct * circ} ${circ}`} />
      </svg>
      <span className="absolute text-xs font-semibold tabular-nums">{score.toFixed(1)}</span>
    </div>
  );
}

/* V1: Compact horizontal cards with stats row */
function TeamV1() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <Avatar initials={m.initials} size={40} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground/60">{m.specialization}</p>
            </div>
            <MiniDonut score={m.score} />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 border-t border-border/40 pt-3">
            <div><p className="text-[10px] text-muted-foreground">Конс./мес</p><p className="text-sm font-medium tabular-nums">{m.consultationsPerMonth}</p></div>
            <div><p className="text-[10px] text-muted-foreground">Удовл.</p><p className="text-sm font-medium tabular-nums">{m.satisfaction.toFixed(1)}</p></div>
            <div><p className="text-[10px] text-muted-foreground">Ср. чек</p><p className="text-sm font-medium tabular-nums">{m.avgCheck}</p></div>
            <div><p className="text-[10px] text-muted-foreground">Выручка</p><p className="text-sm font-medium tabular-nums">{m.revenue}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V2: Vertical centered cards with large score */
function TeamV2() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="flex flex-col items-center rounded-lg border border-border bg-card p-5 text-center">
          <Avatar initials={m.initials} size={56} />
          <p className="mt-3 text-sm font-semibold">{m.name}</p>
          <span className="mt-0.5 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">{m.role}</span>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{m.specialization}</p>
          <div className="mt-4 flex w-full items-center justify-center gap-3 border-t border-border/40 pt-4">
            <MiniDonut score={m.score} size={48} />
            <div className="text-left">
              <p className="text-lg font-bold tabular-nums">{m.revenue}</p>
              <p className="text-[10px] text-muted-foreground">Выручка</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V3: List rows with inline progress bar for score */
function TeamV3() {
  return (
    <div className="rounded-lg border border-border bg-card">
      {SAMPLE_TEAM.map((m, i) => (
        <div key={m.id} className={`flex items-center gap-4 px-5 py-3 ${i < SAMPLE_TEAM.length - 1 ? "border-b border-border/40" : ""}`}>
          <span className="w-4 text-xs tabular-nums text-muted-foreground">{i + 1}</span>
          <Avatar initials={m.initials} size={32} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{m.name}</p>
            <p className="text-xs text-muted-foreground">{m.role} · {m.experience}</p>
          </div>
          <div className="flex w-48 items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-muted">
              <div className="h-full rounded-full" style={{ width: `${(m.score / 10) * 100}%`, background: teamScoreColor(m.score) }} />
            </div>
            <span className="w-8 text-right text-sm font-semibold tabular-nums">{m.score.toFixed(1)}</span>
          </div>
          <span className="w-16 text-right text-xs tabular-nums text-muted-foreground">{m.revenue}</span>
          <span className="w-12 text-right text-xs tabular-nums text-muted-foreground">{m.consultationsPerMonth}/мес</span>
        </div>
      ))}
    </div>
  );
}

/* V4: Cards with competency bars visible */
function TeamV4() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SAMPLE_TEAM.map((m) => {
        const detail = TEAM_DETAILS[m.id];
        const comps = detail?.competencies?.slice(0, 3) ?? [];
        return (
          <div key={m.id} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <Avatar initials={m.initials} size={36} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{m.name}</p>
                  <span className="text-[10px] text-muted-foreground">{m.experience}</span>
                </div>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</p>
                <p className="text-[10px] text-muted-foreground">общий балл</p>
              </div>
            </div>
            <div className="mt-3 flex gap-4 border-t border-border/40 pt-3 text-xs">
              <span className="text-muted-foreground">Выручка <span className="font-medium text-foreground">{m.revenue}</span></span>
              <span className="text-muted-foreground">Конс. <span className="font-medium text-foreground">{m.consultationsPerMonth}</span></span>
              <span className="text-muted-foreground">Удовл. <span className="font-medium text-foreground">{m.satisfaction.toFixed(1)}</span></span>
            </div>
            {comps.length > 0 && (
              <div className="mt-3 flex flex-col gap-1.5 border-t border-border/40 pt-3">
                {comps.map((c) => (
                  <div key={c.name} className="flex items-center gap-2">
                    <span className="w-28 shrink-0 truncate text-[11px] text-muted-foreground">{c.name}</span>
                    <div className="h-1.5 flex-1 rounded-full bg-muted">
                      <div className="h-full rounded-full" style={{ width: `${(c.current / c.max) * 100}%`, background: teamScoreColor(c.current / c.max * 10) }} />
                    </div>
                    <span className="w-5 text-right text-[11px] tabular-nums">{c.current}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* V5: Minimal cards with green accent bar */
function TeamV5() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="relative overflow-hidden rounded-lg border border-border bg-card">
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg" style={{ background: teamScoreColor(m.score) }} />
          <div className="py-4 pl-5 pr-4">
            <div className="flex items-center gap-3">
              <Avatar initials={m.initials} size={36} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role} · {m.experience}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">{m.specialization}</p>
            <div className="mt-3 flex gap-6 text-xs">
              <div><span className="text-muted-foreground">Выручка</span> <span className="font-medium">{m.revenue}</span></div>
              <div><span className="text-muted-foreground">Чек</span> <span className="font-medium">{m.avgCheck}</span></div>
              <div><span className="text-muted-foreground">Конс.</span> <span className="font-medium">{m.consultationsPerMonth}</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V6: Dashboard-style cards with sparkline */
function TeamV6() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SAMPLE_TEAM.map((m) => {
        const detail = TEAM_DETAILS[m.id];
        const history = detail?.scoreHistory ?? [];
        const w = 120, h = 28, pad = 2;
        const min = Math.min(...history.map((d) => d.score)) - 0.3;
        const max = Math.max(...history.map((d) => d.score)) + 0.3;
        const pts = history.map((d, i) => ({
          x: pad + (i / Math.max(history.length - 1, 1)) * (w - pad * 2),
          y: pad + ((max - d.score) / (max - min)) * (h - pad * 2),
        }));
        const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
        const area = line + ` L${pts[pts.length - 1].x},${h} L${pts[0].x},${h} Z`;
        return (
          <div key={m.id} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <Avatar initials={m.initials} size={36} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-lg font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</span>
                {history.length > 1 && (
                  <svg width={w} height={h} className="shrink-0">
                    <path d={area} fill="var(--chart-green)" fillOpacity={0.1} />
                    <path d={line} fill="none" stroke="var(--chart-green)" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </div>
            <div className="mt-3 flex gap-5 border-t border-border/40 pt-3 text-xs">
              <span className="text-muted-foreground">Выручка <span className="font-medium text-foreground">{m.revenue}</span></span>
              <span className="text-muted-foreground">Удовл. <span className="font-medium text-foreground">{m.satisfaction.toFixed(1)}</span></span>
              <span className="text-muted-foreground">Конс. <span className="font-medium text-foreground">{m.consultationsPerMonth}</span></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* V7: Horizontal full-width with score badge + all stats inline */
function TeamV7() {
  return (
    <div className="flex flex-col gap-3">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-3">
          <Avatar initials={m.initials} size={36} />
          <div className="min-w-0 w-44 shrink-0">
            <p className="text-sm font-semibold">{m.name}</p>
            <p className="text-xs text-muted-foreground">{m.role} · {m.experience}</p>
          </div>
          <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">{m.specialization}</p>
          <div className="flex shrink-0 items-center gap-6 text-xs tabular-nums">
            <div className="text-center"><p className="font-medium">{m.consultationsPerMonth}</p><p className="text-[10px] text-muted-foreground">Конс.</p></div>
            <div className="text-center"><p className="font-medium">{m.satisfaction.toFixed(1)}</p><p className="text-[10px] text-muted-foreground">Удовл.</p></div>
            <div className="text-center"><p className="font-medium">{m.avgCheck}</p><p className="text-[10px] text-muted-foreground">Ср. чек</p></div>
            <div className="text-center"><p className="font-medium">{m.revenue}</p><p className="text-[10px] text-muted-foreground">Выручка</p></div>
          </div>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white tabular-nums"
            style={{ background: teamScoreColor(m.score) }}
          >{m.score.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}

/* V8: Compact 3-col cards with top colored border */
function TeamV8() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="h-1" style={{ background: teamScoreColor(m.score) }} />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Avatar initials={m.initials} size={32} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-[11px] text-muted-foreground">{m.role}</p>
              </div>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{m.specialization}</p>
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border/40 pt-3">
              <div>
                <p className="text-lg font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</p>
                <p className="text-[10px] text-muted-foreground">Оценка</p>
              </div>
              <div>
                <p className="text-lg font-bold tabular-nums">{m.revenue}</p>
                <p className="text-[10px] text-muted-foreground">Выручка</p>
              </div>
              <div>
                <p className="text-lg font-bold tabular-nums">{m.consultationsPerMonth}</p>
                <p className="text-[10px] text-muted-foreground">Конс./мес</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V9: Two-row layout — avatar row + metric pills */
function TeamV9() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SAMPLE_TEAM.map((m) => (
        <div key={m.id} className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <Avatar initials={m.initials} size={40} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role} · {m.experience}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground/60">{m.specialization}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
              <span className="font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</span>
              <span className="text-muted-foreground">балл</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
              <span className="font-medium tabular-nums">{m.revenue}</span>
              <span className="text-muted-foreground">выручка</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
              <span className="font-medium tabular-nums">{m.consultationsPerMonth}</span>
              <span className="text-muted-foreground">конс.</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
              <span className="font-medium tabular-nums">{m.satisfaction.toFixed(1)}</span>
              <span className="text-muted-foreground">удовл.</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
              <span className="font-medium tabular-nums">{m.avgCheck}</span>
              <span className="text-muted-foreground">чек</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* V10: Notion-like rows with subtle bg highlight for top performers */
function TeamV10() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto] items-center gap-x-4 px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="w-8" />
        <span>Сотрудник</span>
        <span className="w-16 text-right">Оценка</span>
        <span className="w-14 text-right">Выручка</span>
        <span className="w-10 text-right">Конс.</span>
        <span className="w-10 text-right">Удовл.</span>
        <span className="w-20 text-right">Ср. чек</span>
      </div>
      {SAMPLE_TEAM.map((m, i) => (
        <div
          key={m.id}
          className={`grid grid-cols-[auto_1fr_auto_auto_auto_auto_auto] items-center gap-x-4 border-t border-border/40 px-5 py-3 ${m.score >= 9 ? "bg-primary/[0.03]" : ""}`}
        >
          <Avatar initials={m.initials} size={28} />
          <div className="min-w-0">
            <p className="text-sm font-medium">{m.name}</p>
            <p className="text-[11px] text-muted-foreground">{m.role}</p>
          </div>
          <span className="w-16 text-right text-sm font-bold tabular-nums" style={{ color: teamScoreColor(m.score) }}>{m.score.toFixed(1)}</span>
          <span className="w-14 text-right text-xs font-medium tabular-nums">{m.revenue}</span>
          <span className="w-10 text-right text-xs tabular-nums">{m.consultationsPerMonth}</span>
          <span className="w-10 text-right text-xs tabular-nums">{m.satisfaction.toFixed(1)}</span>
          <span className="w-20 text-right text-xs tabular-nums text-muted-foreground">{m.avgCheck}</span>
        </div>
      ))}
    </div>
  );
}
