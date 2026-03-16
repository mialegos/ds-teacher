"use client";

import Link from "next/link";
import {
  Avatar,
  CONSULTATIONS,
  CONSULTATION_DETAILS,
  fmtDate,
} from "../../../data";

function scoreDonutColor(s: number) {
  return s > 6.5 ? "var(--chart-green)" : s >= 3 ? "var(--chart-orange)" : "var(--chart-red)";
}

function ScoreDonut({ score, maxScore, size = 64 }: { score: number; maxScore: number; size?: number }) {
  const sw = 5;
  const r = (size - sw * 2) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / maxScore;
  const color = scoreDonutColor(pct * 10);
  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.06} strokeWidth={sw} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round"
        strokeDasharray={`${circ * pct} ${circ * (1 - pct)}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
        className="text-base font-bold" fill={color}>{score}/{maxScore}</text>
    </svg>
  );
}

export default function ConsultationDetailPage({ id }: { id: string }) {
  const c = CONSULTATIONS.find((x) => x.id === id);
  const detail = id ? CONSULTATION_DETAILS[id] : undefined;

  if (!c) return <div className="px-4 py-6 text-muted-foreground sm:px-6 md:px-8">Консультация не найдена</div>;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 md:px-8 md:py-8">
      {/* Breadcrumb */}
      <div className="anim-fade-up mb-4 text-sm text-muted-foreground">
        <Link href="/example/more-ryadom-ds2/consultations" className="hover:text-foreground">Консультации</Link>
        <span className="mx-1.5">›</span>
        <span>{c.topic}</span>
      </div>

      {/* Header */}
      <div className="anim-fade-up mb-6 flex items-start gap-4" style={{ animationDelay: "40ms" }}>
        <Link href={`/example/more-ryadom-ds2/team/${c.managerId}`} className="shrink-0">
          <Avatar initials={c.managerInitials} size={48} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-medium tracking-tight">{c.topic}</h1>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              c.result === "Бронирование" ? "bg-primary/10 text-primary" : c.result === "В работе" ? "bg-amber-100 text-amber-700" : "bg-black/[0.06] text-foreground/60"
            }`}>{c.result}</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href={`/example/more-ryadom-ds2/team/${c.managerId}`} className="hover:text-foreground">
              {c.managerName} ({c.managerRole})
            </Link>
            <span>·</span>
            <span>{fmtDate(c.date)}</span>
            <span>·</span>
            <span>{c.duration}</span>
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="anim-fade-up mb-6 overflow-hidden rounded-xl border border-border bg-white" style={{ animationDelay: "80ms" }}>
        <div className="grid grid-cols-3 divide-x divide-border">
          <div className="px-3 py-3 sm:px-5 sm:py-4">
            <p className="truncate text-[11px] text-muted-foreground">Общий балл</p>
            <p className="mt-1 truncate text-xl font-bold tabular-nums sm:text-2xl" style={{ color: scoreDonutColor(c.score) }}>{c.score.toFixed(1)}</p>
          </div>
          <div className="px-3 py-3 sm:px-5 sm:py-4">
            <p className="truncate text-[11px] text-muted-foreground">Направление</p>
            <p className="mt-1 truncate text-base font-semibold sm:text-lg">{c.destination}</p>
          </div>
          <div className="px-3 py-3 sm:px-5 sm:py-4">
            <p className="truncate text-[11px] text-muted-foreground">Сумма</p>
            <p className="mt-1 truncate text-base font-semibold tabular-nums sm:text-lg">{c.amount ?? "—"}</p>
          </div>
        </div>
      </div>

      {!detail && <p className="text-sm text-muted-foreground">Детальная информация отсутствует</p>}

      {detail && (
        <>
          {/* Summary + Timeline — one section */}
          <div className="anim-fade-up mb-6 rounded-xl border border-border bg-white" style={{ animationDelay: "160ms" }}>
            <div className="p-5">
              <h2 className="mb-2 text-lg font-medium">Резюме</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{detail.summary}</p>
            </div>

            <div className="border-t border-border/60 p-5">
              <h2 className="mb-4 text-lg font-medium">Таймлайн консультации</h2>
            <div className="flex flex-col">
              {detail.timeline.map((t, i) => (
                <div key={i} className={`flex gap-4 ${i < detail.timeline.length - 1 ? "border-b border-border/40 pb-4 mb-4" : ""}`}>
                  <div className="w-28 shrink-0">
                    <span className="rounded-md bg-muted px-2 py-0.5 text-sm font-medium tabular-nums">{t.time}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium">{t.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/50">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Criteria */}
          <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5" style={{ animationDelay: "240ms" }}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium">Оценка по критериям</h2>
              <ScoreDonut score={detail.totalScore} maxScore={detail.totalMaxScore} size={80} />
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-0 sm:grid-cols-2">
              {detail.criteria.map((cr, i) => {
                const pct = (cr.score / cr.max) * 100;
                const crColor = scoreDonutColor(cr.score / cr.max * 10);
                return (
                  <div key={i} className="border-b border-border/40 py-3.5">
                    <div className="flex items-baseline justify-between">
                      <p className="text-base font-medium">{cr.name}</p>
                      <span className="text-base font-semibold tabular-nums" style={{ color: crColor }}>
                        {cr.score} / {cr.max}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1 w-full rounded-full" style={{ background: `color-mix(in srgb, ${crColor} 15%, transparent)` }}>
                      <div
                        className="anim-bar-x h-full rounded-full"
                        style={{ width: `${pct}%`, background: crColor, animationDelay: `${i * 60}ms` }}
                      />
                    </div>
                    <p className="mt-1.5 text-sm text-foreground/50">{cr.comment}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          {detail.recommendations.length > 0 && (
            <div className="anim-fade-up mb-6 rounded-xl border border-border bg-white p-5" style={{ animationDelay: "320ms" }}>
              <h2 className="mb-3 text-lg font-medium">Рекомендации</h2>
              <ul className="flex flex-col gap-2">
                {detail.recommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base text-foreground">
                    <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
