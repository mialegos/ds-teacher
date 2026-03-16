"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Avatar,
  KPI_CARDS,
  MONTHLY_REVENUE,
  REVENUE_BY_DEST,
  TEAM,
  CONSULTATIONS,
  scoreColor,
} from "../data";

/* ── Trend helpers ── */
function trendColor(t: string) { return t.startsWith("-") ? "text-destructive" : "text-primary"; }
function trendBg(t: string) { return t.startsWith("-") ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"; }
function trendArrow(t: string) { return t.startsWith("-") ? "↓" : "↑"; }

/* ── KPI Row (variant 3L) ── */
function KpiRow() {
  return (
    <div className="flex divide-x divide-border/60">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="flex-1 px-5 py-4">
          <p className="text-2xl font-semibold tracking-tight">{k.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{k.label}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-xs font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── KPI Row Large (one step bigger fonts) ── */
function KpiRowLarge() {
  return (
    <div className="kpi-grid">
      {KPI_CARDS.map((k) => (
        <div key={k.label} className="px-4 py-4 sm:px-5 sm:py-5">
          <p className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">{k.value}</p>
          <p className="mt-1 truncate text-sm text-muted-foreground">{k.label}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${trendBg(k.trend)}`}>{trendArrow(k.trend)}</span>
            <span className={`text-sm font-medium ${trendColor(k.trend)}`}>{k.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Stacked Bar Chart (base+upsell stacked, missed separate) with green brand colors ── */
function RevenueChart() {
  const [hover, setHover] = useState<number | null>(null);

  const w = 440, h = 220;
  const pad = { top: 6, right: 6, bottom: 24, left: 28 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const maxY = 55;
  const n = MONTHLY_REVENUE.length;
  const slotW = cw / n;
  const barW = slotW * 0.32;
  const gapBars = 3;
  const baseline = pad.top + ch;
  const ticks = [0, 15, 30, 45];
  const r = 3;

  return (
    <div className="flex flex-col p-5">
      <h3 className="mb-4 text-lg font-medium">Выручка и допродажи</h3>
      <div className="relative flex-1">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
          {ticks.map((t) => {
            const y = baseline - (t / maxY) * ch;
            return (
              <g key={t}>
                <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} />
                <text x={pad.left - 5} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[9px]">{t}M</text>
              </g>
            );
          })}
          {MONTHLY_REVENUE.map((d, i) => {
            const cx = pad.left + (i + 0.5) * slotW;
            const bH = (d.base / maxY) * ch;
            const uH = (d.upsell / maxY) * ch;
            const mH = (d.missed / maxY) * ch;
            const groupW = barW * 2 + gapBars;
            const mx = cx - groupW / 2;
            const rx = mx + barW + gapBars;
            const isHovered = hover === i;
            return (
              <g
                key={d.month}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
              >
                <rect x={cx - slotW / 2} y={pad.top} width={slotW} height={ch + pad.bottom} fill="transparent" />
                {isHovered && <rect x={cx - slotW / 2} y={pad.top} width={slotW} height={ch} rx={4} fill="rgba(0,0,0,0.06)" />}
                {/* Base — green-muted */}
                <rect x={mx} y={baseline - bH} width={barW} height={bH} fill="var(--chart-green-muted)" className="anim-bar-y" style={{ animationDelay: `${i * 60}ms` }} />
                {/* Upsell stacked on top — green solid, rounded top */}
                <path
                  d={`M${mx},${baseline - bH} L${mx},${baseline - bH - uH + r} Q${mx},${baseline - bH - uH} ${mx + r},${baseline - bH - uH} L${mx + barW - r},${baseline - bH - uH} Q${mx + barW},${baseline - bH - uH} ${mx + barW},${baseline - bH - uH + r} L${mx + barW},${baseline - bH} Z`}
                  fill="var(--chart-green)"
                  className="anim-bar-y" style={{ animationDelay: `${i * 60 + 30}ms` }}
                />
                {/* Missed — same width bar next to main, from baseline up */}
                <rect x={rx} y={baseline - mH} width={barW} height={mH} rx={2} fill="var(--chart-red-muted)" className="anim-bar-y" style={{ animationDelay: `${i * 60 + 50}ms` }} />
                <text x={cx} y={baseline + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>
              </g>
            );
          })}
        </svg>

        <div
          className={`pointer-events-none absolute z-10 min-w-[200px] -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-white px-4 py-3 shadow-lg transition-all duration-150 ease-out ${hover !== null ? "opacity-100" : "opacity-0"}`}
          style={{
            left: hover !== null ? `${((pad.left + (hover + 0.5) * slotW) / w) * 100}%` : "50%",
            top: 0,
          }}
        >
          {hover !== null && (() => {
            const d = MONTHLY_REVENUE[hover];
            return (
              <>
                <p className="mb-2 text-sm font-medium">{d.month}</p>
                <div className="flex items-center gap-2 py-0.5 text-xs">
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--chart-green-muted)" }} />
                  <span className="text-muted-foreground">Базовая выручка</span>
                  <span className="ml-auto pl-4 font-medium tabular-nums">{d.base} млн ₽</span>
                </div>
                <div className="flex items-center gap-2 py-0.5 text-xs">
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--chart-green)" }} />
                  <span className="text-muted-foreground">Допродажи</span>
                  <span className="ml-auto pl-4 font-medium tabular-nums">{d.upsell} млн ₽</span>
                </div>
                <div className="flex items-center gap-2 py-0.5 text-xs">
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--chart-red)" }} />
                  <span className="text-destructive">Упущенная прибыль</span>
                  <span className="ml-auto pl-4 font-medium tabular-nums text-destructive">{d.missed} млн ₽</span>
                </div>
                <div className="mt-1.5 border-t border-border pt-1.5 text-xs">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Итого</span>
                    <span className="font-semibold tabular-nums">{(d.base + d.upsell).toFixed(1)} млн ₽</span>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
      <div className="mt-1 flex justify-center gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "var(--chart-green-muted)" }} />Базовая выручка</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "var(--chart-green)" }} />Допродажи</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "var(--chart-red)" }} />Упущенная прибыль</span>
      </div>
    </div>
  );
}

/* ── Sparkline rows with tooltips ── */
function DestBars() {
  const [tooltip, setTooltip] = useState<{ dest: string; x: number; y: number } | null>(null);
  const maxVal = Math.max(...REVENUE_BY_DEST.map((d) => d.value));
  const total = REVENUE_BY_DEST.reduce((s, d) => s + d.value, 0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(dest: string, e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({ dest, x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div ref={containerRef} className="relative p-5">
      <h3 className="mb-4 text-lg font-medium">Выручка по направлениям</h3>
      <div className="flex flex-col">
        {REVENUE_BY_DEST.map((d, i) => {
          const pct = (d.value / maxVal) * 100;
          const isHovered = tooltip?.dest === d.dest;
          return (
            <div
              key={d.dest}
              className="flex items-center gap-3 border-b border-border/40 py-2.5 last:border-0"
              onMouseMove={(e) => handleMouseMove(d.dest, e)}
              onMouseLeave={() => setTooltip(null)}
            >
              <span className="w-20 shrink-0 text-sm">{d.dest}</span>
              <div className="flex-1">
                <div className="h-2.5 rounded-full bg-muted/30">
                  <div
                    className="anim-bar-x h-full rounded-full transition-colors"
                    style={{ width: `${pct}%`, background: isHovered ? "var(--chart-green-muted)" : "var(--chart-green)", animationDelay: `${i * 70}ms` }}
                  />
                </div>
              </div>
              <span className="w-14 shrink-0 text-right text-sm font-medium tabular-nums">{d.value}M</span>
            </div>
          );
        })}
      </div>

      <div
        className={`pointer-events-none absolute z-10 min-w-[160px] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border border-border bg-white px-4 py-3 shadow-lg transition-all duration-150 ease-out ${tooltip ? "opacity-100" : "opacity-0"}`}
        style={{
          left: tooltip ? tooltip.x : 0,
          top: tooltip ? tooltip.y - 12 : 0,
        }}
      >
        {tooltip && (() => {
          const d = REVENUE_BY_DEST.find((r) => r.dest === tooltip.dest);
          if (!d) return null;
          const sharePct = ((d.value / total) * 100).toFixed(0);
          return (
            <>
              <p className="mb-1.5 text-sm font-medium">{d.dest}</p>
              <div className="flex items-center gap-4 py-0.5 text-xs">
                <span className="text-muted-foreground">Выручка</span>
                <span className="ml-auto font-medium tabular-nums">{d.value} млн ₽</span>
              </div>
              <div className="flex items-center gap-4 py-0.5 text-xs">
                <span className="text-muted-foreground">Доля</span>
                <span className="ml-auto font-medium tabular-nums">{sharePct}%</span>
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}

/* ── Top Employees ── */
function TopEmployees() {
  const sorted = [...TEAM].sort((a, b) => b.score - a.score).slice(0, 5);
  return (
    <div className="p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-lg font-medium">Лучшие сотрудники</h3>
        <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">Все</Link>
      </div>
      <div className="flex flex-col">
        {sorted.map((m, i) => (
          <Link key={m.id} href={`/team/${m.id}`} className="-mx-5 flex items-center gap-3 border-b border-border/60 px-5 py-2.5 transition-colors hover:bg-black/[0.06] last:border-0">
            <Avatar initials={m.initials} size={28} />
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium leading-tight">{m.name}</p><p className="text-sm text-muted-foreground">{m.role}</p></div>
            <span className="w-16 shrink-0 text-right text-xs tabular-nums text-muted-foreground">{m.revenue}</span>
            <span className={`ml-2 text-sm font-semibold tabular-nums ${scoreColor(m.score)}`}>{m.score.toFixed(1)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Recent Consultations ── */
function RecentConsultations() {
  const recent = CONSULTATIONS.slice(0, 5);
  return (
    <div className="p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-lg font-medium">Последние консультации</h3>
        <Link href="/consultations" className="text-sm text-muted-foreground hover:text-foreground">Все</Link>
      </div>
      <div className="flex flex-col">
        {recent.map((c) => (
          <Link key={c.id} href={`/consultations/${c.id}`} className="-mx-5 flex items-center gap-3 border-b border-border/60 px-5 py-2.5 transition-colors hover:bg-black/[0.06] last:border-0 sm:gap-5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium leading-tight">{c.topic}</p>
              <p className="text-sm text-muted-foreground">{c.destination} · {c.duration}</p>
            </div>
            <div className="hidden w-[170px] shrink-0 items-center gap-2 md:flex">
              <Avatar initials={c.managerInitials} size={24} />
              <span className="truncate text-sm">{c.managerName}</span>
            </div>
            <span className={`w-8 shrink-0 text-center text-sm font-semibold tabular-nums ${scoreColor(c.score)}`}>{c.score.toFixed(1)}</span>
            <span className={`hidden w-[100px] shrink-0 text-center rounded-full px-2 py-0.5 text-[11px] sm:inline ${c.result === "Бронирование" ? "bg-primary/10 text-primary" : c.result === "В работе" ? "bg-amber-100 text-amber-700" : "bg-black/[0.06] text-foreground/60"}`}>{c.result}</span>
            <span className="hidden w-[80px] shrink-0 text-right text-sm font-medium tabular-nums sm:inline">{c.amount ?? "—"}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Page ── */
export default function DashboardPage() {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="anim-fade-up mb-6">
        <h1 className="text-2xl font-medium tracking-tight">Дашборд</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">Обзор за февраль 2026</p>
      </div>

      {/* Section 1: KPI Large */}
      <div className="anim-fade-up overflow-hidden rounded-xl border border-border bg-white">
        <KpiRowLarge />
      </div>

      {/* Section 2: Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="anim-fade-up rounded-xl border border-border bg-white" style={{ animationDelay: "80ms" }}>
          <RevenueChart />
        </div>
        <div className="anim-fade-up rounded-xl border border-border bg-white" style={{ animationDelay: "160ms" }}>
          <DestBars />
        </div>
      </div>

      {/* Section 3: Employees & Consultations */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="anim-fade-up rounded-xl border border-border bg-white" style={{ animationDelay: "240ms" }}>
          <TopEmployees />
        </div>
        <div className="anim-fade-up rounded-xl border border-border bg-white lg:col-span-2" style={{ animationDelay: "320ms" }}>
          <RecentConsultations />
        </div>
      </div>
    </div>
  );
}
