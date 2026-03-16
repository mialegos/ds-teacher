"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Avatar,
  TEAM,
  TEAM_DETAILS,
  CONSULTATIONS,
  fmtDate,
  type Competency,
} from "../../../data";

function donutColor(s: number) {
  return s > 6.5 ? "var(--chart-green)" : s >= 3 ? "var(--chart-orange)" : "var(--chart-red)";
}

function ScoreDonut({ score, size: sizeOverride }: { score: number; size?: number }) {
  const size = sizeOverride ?? 56;
  const sw = 4;
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / 10;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={sw} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={donutColor(score)} strokeWidth={sw} strokeLinecap="round"
          strokeDasharray={`${pct * circ} ${circ}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-base font-bold tabular-nums" style={{ color: donutColor(score) }}>
        {score.toFixed(1)}
      </span>
    </div>
  );
}

/* ── Radar Chart ── */
function splitLabel(name: string, maxChars = 16): string[] {
  const words = name.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if (cur && (cur + " " + w).length > maxChars) {
      lines.push(cur);
      cur = w;
    } else {
      cur = cur ? cur + " " + w : w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function RadarChart({ competencies }: { competencies: Competency[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const rMax = 100;
  const padV = 50;
  const padH = 120;
  const vbW = rMax * 2 + padH * 2;
  const vbH = rMax * 2 + padV * 2;
  const cx = vbW / 2, cy = vbH / 2;
  const levels = 5;
  const maxVal = 10;
  const n = competencies.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  function polar(val: number, i: number) {
    const r = (val / maxVal) * rMax;
    const a = startAngle + i * angleStep;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  function polygonPoints(getValue: (c: Competency) => number) {
    return competencies.map((c, i) => {
      const p = polar(getValue(c), i);
      return `${p.x},${p.y}`;
    }).join(" ");
  }

  const labelOffset = 14;

  return (
    <div className="relative flex flex-col items-center">
      <svg viewBox={`0 0 ${vbW} ${vbH}`} className="mx-auto w-full" onMouseLeave={() => setHover(null)}>
        {/* Grid levels */}
        {Array.from({ length: levels }, (_, l) => {
          const r = ((l + 1) / levels) * rMax;
          const pts = Array.from({ length: n }, (_, i) => {
            const a = startAngle + i * angleStep;
            return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
          }).join(" ");
          return <polygon key={l} points={pts} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} />;
        })}
        {/* Axis lines */}
        {competencies.map((_, i) => {
          const p = polar(maxVal, i);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="currentColor" strokeOpacity={0.06} strokeWidth={1} />;
        })}
        {/* Previous month polygon */}
        <polygon points={polygonPoints((c) => c.previous)} fill="currentColor" fillOpacity={0.04} stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} strokeDasharray="4 3" className="anim-radar" style={{ animationDelay: "200ms" }} />
        {/* Current month polygon */}
        <polygon points={polygonPoints((c) => c.current)} fill="var(--chart-green)" fillOpacity={0.12} stroke="var(--chart-green)" strokeWidth={1.5} className="anim-radar" style={{ animationDelay: "350ms" }} />
        {/* Dots + hover zones */}
        {competencies.map((c, i) => {
          const p = polar(c.current, i);
          const isH = hover === i;
          return (
            <g key={i} onMouseEnter={() => setHover(i)} className="cursor-pointer">
              <circle cx={p.x} cy={p.y} r={16} fill="transparent" />
              <circle cx={p.x} cy={p.y} r={isH ? 4 : 2.5} fill="var(--chart-green)" className="transition-all duration-100" />
            </g>
          );
        })}
        {/* Labels */}
        {competencies.map((c, i) => {
          const a = startAngle + i * angleStep;
          const cosA = Math.cos(a);
          const sinA = Math.sin(a);
          const lx = cx + (rMax + labelOffset) * cosA;
          const ly = cy + (rMax + labelOffset) * sinA;
          const anchor = Math.abs(cosA) < 0.15 ? "middle" : cosA > 0 ? "start" : "end";
          const lines = splitLabel(c.name);
          const totalH = lines.length * 11;
          const startY = ly - totalH / 2 + 5;
          return (
            <text key={i} textAnchor={anchor} className="fill-muted-foreground text-[9px]">
              {lines.map((ln, li) => (
                <tspan key={li} x={lx} y={startY + li * 11}>{ln}</tspan>
              ))}
            </text>
          );
        })}
      </svg>
      {/* Tooltip */}
      {hover !== null && (() => {
        const c = competencies[hover];
        const p = polar(c.current, hover);
        return (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 rounded-xl border border-border bg-white px-3 py-2 shadow-md"
            style={{ left: `${(p.x / vbW) * 100}%`, top: `${(p.y / vbH) * 100}%` }}
          >
            <p className="text-xs font-medium">{c.name}</p>
            <div className="mt-1 flex items-center gap-2 text-xs">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--chart-green)" }} />
              <span className="text-muted-foreground">Текущий:</span>
              <span className="font-medium">{c.current}/{c.max}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="text-muted-foreground">Прошлый:</span>
              <span className="font-medium">{c.previous}/{c.max}</span>
            </div>
          </div>
        );
      })()}
      <div className="mt-2 flex gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded-full" style={{ background: "var(--chart-green)" }} />
          Текущий
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded-full border-t border-dashed border-muted-foreground" />
          Прошлый месяц
        </span>
      </div>
    </div>
  );
}

/* ── Score Line Chart ── */
function ScoreLineChart({ data }: { data: { month: string; score: number }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const w = 400, h = 260;
  const pad = { top: 16, right: 20, bottom: 30, left: 30 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const minY = 5;
  const maxY = 10;
  const range = maxY - minY;
  const ticks = [5, 7, 10];

  const pts = data.map((d, i) => ({
    x: pad.left + (i / Math.max(data.length - 1, 1)) * cw,
    y: pad.top + ((maxY - d.score) / range) * ch,
  }));
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = line + ` L${pts[pts.length - 1].x},${pad.top + ch} L${pts[0].x},${pad.top + ch} Z`;
  const slotW = cw / data.length;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" onMouseLeave={() => setHover(null)}>
        {/* Horizontal grid */}
        {ticks.map((t) => {
          const y = pad.top + ((maxY - t) / range) * ch;
          return (
            <g key={t}>
              <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} />
              <text x={pad.left - 8} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[10px]">{t}</text>
            </g>
          );
        })}
        {/* Vertical grid lines */}
        {data.map((_, i) => {
          const x = pts[i].x;
          return <line key={i} x1={x} x2={x} y1={pad.top} y2={pad.top + ch} stroke="currentColor" strokeOpacity={0.04} />;
        })}
        {/* Area + Line */}
        <path d={area} fill="var(--chart-green)" fillOpacity={0.06} className="anim-fade-up" style={{ animationDelay: "200ms" }} />
        <path d={line} fill="none" stroke="var(--chart-green)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="anim-fade-up" style={{ animationDelay: "200ms" }} />
        {/* Dots */}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={hover === i ? 5 : 3.5} fill="var(--chart-green)" className="anim-dot transition-all duration-100" style={{ animationDelay: `${300 + i * 50}ms` }} />
        ))}
        {/* Hover vertical line */}
        {hover !== null && (
          <line x1={pts[hover].x} x2={pts[hover].x} y1={pad.top} y2={pad.top + ch} stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
        )}
        {/* Month labels */}
        {data.map((d, i) => {
          const x = pts[i].x;
          return <text key={i} x={x} y={h - 6} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.month}</text>;
        })}
        {/* Invisible hover zones */}
        {data.map((_, i) => (
          <rect
            key={`h${i}`}
            x={pts[i].x - slotW / 2}
            y={pad.top}
            width={slotW}
            height={ch + pad.bottom}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            className="cursor-pointer"
          />
        ))}
      </svg>
      {/* Tooltip */}
      <div
        className={`pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap rounded-xl border border-border bg-white px-3 py-2 shadow-md transition-opacity duration-150 ${hover !== null ? "opacity-100" : "opacity-0"}`}
        style={{
          left: hover !== null ? `${(pts[hover].x / w) * 100}%` : "50%",
          top: hover !== null ? `${((pts[hover].y / h) * 100) + 8}%` : "50%",
        }}
      >
        {hover !== null && (
          <>
            <p className="text-xs font-medium">{data[hover].month}</p>
            <p className="text-xs" style={{ color: "var(--chart-green)" }}>Балл: {data[hover].score.toFixed(1)}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default function TeamMemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const member = TEAM.find((m) => m.id === Number(id));
  const detail = member ? TEAM_DETAILS[member.id] : undefined;
  const memberConsultations = member ? CONSULTATIONS.filter((c) => c.managerId === member.id) : [];

  if (!member) return <div className="px-4 py-6 text-muted-foreground sm:px-6 md:px-8">Сотрудник не найден</div>;

  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
      {/* Breadcrumb */}
      <div className="anim-fade-up mb-4 text-sm text-muted-foreground">
        <Link href="/team" className="hover:text-foreground">Команда</Link>
        <span className="mx-1.5">›</span>
        <span>{member.name}</span>
      </div>

      {/* Header */}
      <div className="anim-fade-up mb-6 flex items-center gap-2" style={{ animationDelay: "40ms" }}>
        <Avatar initials={member.initials} size={56} />
        <ScoreDonut score={member.score} size={56} />
        <div className="min-w-0 flex-1 pl-3">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-medium tracking-tight">{member.name}</h1>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-sm text-muted-foreground">{member.role}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{member.specialization} · {member.experience} опыта</p>
          <p className="mt-1 text-sm">
            Общий балл: <span className="font-bold tabular-nums">{member.score.toFixed(1)}</span>
            <span className="text-muted-foreground"> / 10</span>
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="anim-fade-up mb-6 overflow-hidden rounded-xl border border-border bg-white" style={{ animationDelay: "80ms" }}>
        <div className="kpi-grid">
          {[
            { value: member.consultationsPerMonth, label: "Конс./мес" },
            { value: member.satisfaction.toFixed(1), label: "Удовлетворённость" },
            { value: member.avgCheck, label: "Средний чек" },
            { value: member.revenue, label: "Выручка/мес" },
            ...(member.upsellsPerMonth !== "0" ? [{ value: member.upsellsPerMonth, label: "Допродажи/мес" }] : []),
          ].map((s) => (
            <div key={s.label} className="px-4 py-3 sm:px-5 sm:py-4">
              <p className="truncate text-2xl font-semibold tracking-tight tabular-nums">{s.value}</p>
              <p className="mt-1 truncate text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {detail && (
        <>
          {/* Radar + Score history */}
          <div className="anim-fade-up mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2" style={{ animationDelay: "160ms" }}>
            <div className="rounded-xl border border-border bg-white p-4 sm:p-5">
              <h2 className="mb-4 text-lg font-medium">Компетенции</h2>
              <RadarChart competencies={detail.competencies} />
            </div>

            {detail.scoreHistory.length > 1 && (
              <div className="rounded-xl border border-border bg-white p-4 sm:p-5">
                <h2 className="mb-4 text-lg font-medium">Динамика общего балла</h2>
                <ScoreLineChart data={detail.scoreHistory} />
              </div>
            )}
          </div>

          {/* Strengths & Recommendations */}
          <div className="anim-fade-up mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2" style={{ animationDelay: "240ms" }}>
            {detail.strengths.length > 0 && (
              <div className="rounded-xl border border-border bg-white p-5">
                <h2 className="mb-3 text-lg font-medium">Сильные стороны и хайлайты</h2>
                <ul className="flex flex-col gap-2.5">
                  {detail.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-base text-foreground">
                      <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "var(--chart-green)" }} />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detail.recommendations.length > 0 && (
              <div className="rounded-xl border border-border bg-white p-5">
                <h2 className="mb-3 text-lg font-medium">Рекомендации по развитию</h2>
                <ul className="flex flex-col gap-2.5">
                  {detail.recommendations.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-base text-foreground">
                      <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "var(--chart-orange)" }} />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Consultations */}
          {memberConsultations.length > 0 && (
            <div className="anim-fade-up mb-6 rounded-xl border border-border bg-white p-5" style={{ animationDelay: "320ms" }}>
              <h2 className="mb-3 text-lg font-medium">Последние консультации</h2>
              <div className="flex flex-col">
                {memberConsultations.map((c, i) => (
                  <Link
                    key={c.id}
                    href={`/consultations/${c.id}`}
                    className={`-mx-5 flex items-center gap-4 px-5 py-2.5 transition-colors hover:bg-black/[0.06] ${i < memberConsultations.length - 1 ? "border-b border-border/40" : ""}`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-medium">{c.topic}</p>
                      <p className="text-base text-muted-foreground">{fmtDate(c.date)} · {c.duration} · {c.destination}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs ${
                      c.result === "Бронирование" ? "bg-primary/10 text-primary" : c.result === "В работе" ? "bg-amber-100 text-amber-700" : "bg-black/[0.06] text-foreground/60"
                    }`}>{c.result}</span>
                    <span className="text-base font-medium tabular-nums">{c.amount ?? "—"}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Competency detail cards */}
          <div className="anim-fade-up rounded-xl border border-border bg-white p-5" style={{ animationDelay: "400ms" }}>
            <h2 className="mb-4 text-lg font-medium">Детализация компетенций</h2>
            <div className="grid grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
              {detail.competencies.slice(0, 4).map((comp, idx) => {
                const pct = (comp.current / comp.max) * 100;
                const color = donutColor(comp.current / comp.max * 10);
                const trendPct = comp.previous > 0 ? Math.round(((comp.current - comp.previous) / comp.previous) * 100) : 0;
                return (
                  <div key={comp.name} className="px-4 py-3 transition-colors hover:bg-black/[0.03] first:pl-0 last:pr-0">
                    <p className="mb-2 min-h-[40px] text-sm text-muted-foreground leading-tight">{comp.name}</p>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-bold tabular-nums" style={{ color }}>{comp.current}</span>
                      {idx === 0 && <span className="text-2xl font-bold tabular-nums text-muted-foreground/30">/ {comp.max}</span>}
                    </div>
                    <div className="mt-2 h-1.5 rounded-full" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                      <div className="anim-bar-x h-full rounded-full" style={{ width: `${pct}%`, background: color, animationDelay: `${idx * 80}ms` }} />
                    </div>
                    {comp.trend !== 0 && (
                      <div className={`mt-2 flex items-center gap-1.5 ${comp.trend > 0 ? "text-primary" : "text-destructive"}`}>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${comp.trend > 0 ? "bg-primary/10" : "bg-destructive/10"}`}>
                          {comp.trend > 0 ? "↑" : "↓"}
                        </span>
                        <span className="text-sm font-medium">{comp.trend > 0 ? "+" : ""}{trendPct}%</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {detail.competencies.length > 4 && (
              <div className="mt-0 grid grid-cols-2 divide-x divide-border/60 border-t border-border/60 sm:grid-cols-4">
                {detail.competencies.slice(4).map((comp, idx) => {
                  const pct = (comp.current / comp.max) * 100;
                  const color = donutColor(comp.current / comp.max * 10);
                  const trendPct = comp.previous > 0 ? Math.round(((comp.current - comp.previous) / comp.previous) * 100) : 0;
                  return (
                    <div key={comp.name} className="px-4 py-3 transition-colors hover:bg-black/[0.03] first:pl-0 last:pr-0">
                      <p className="mb-2 min-h-[40px] text-sm text-muted-foreground leading-tight">{comp.name}</p>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-2xl font-bold tabular-nums" style={{ color }}>{comp.current}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                        <div className="anim-bar-x h-full rounded-full" style={{ width: `${pct}%`, background: color, animationDelay: `${(idx + 4) * 80}ms` }} />
                      </div>
                      {comp.trend !== 0 && (
                        <div className={`mt-2 flex items-center gap-1.5 ${comp.trend > 0 ? "text-primary" : "text-destructive"}`}>
                          <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${comp.trend > 0 ? "bg-primary/10" : "bg-destructive/10"}`}>
                            {comp.trend > 0 ? "↑" : "↓"}
                          </span>
                          <span className="text-sm font-medium">{comp.trend > 0 ? "+" : ""}{trendPct}%</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
