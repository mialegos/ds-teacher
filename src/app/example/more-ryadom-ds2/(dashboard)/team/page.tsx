"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  TEAM,
  TEAM_DETAILS,
  scoreColor,
  type TeamMember,
} from "../../data";

/* ── Score Donut ── */
function ScoreDonut({ score, size = 56 }: { score: number; size?: number }) {
  const sw = 4;
  const r = (size - sw * 2) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / 10;
  const color =
    score > 6.5 ? "var(--chart-green)" : score >= 3 ? "var(--chart-orange)" : "var(--chart-red)";
  return (
    <div className="relative flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.07} strokeWidth={sw} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeDasharray={`${pct * circ} ${circ}`} />
      </svg>
      <span className="absolute text-base font-bold tabular-nums">{score.toFixed(1)}</span>
    </div>
  );
}

/* ── Stat Pill ── */
function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-base font-medium tabular-nums">{value}</span>
    </div>
  );
}

/* ── Team Card ── */
function TeamCard({ member }: { member: TeamMember }) {
  const detail = TEAM_DETAILS[member.id];

  return (
    <Link href={`/team/${member.id}`} className="block rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="flex items-start gap-3">
            <Avatar initials={member.initials} size={48} className="shrink-0" />
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{member.role}</span>
              <h3 className="mt-1 truncate text-sm font-semibold">{member.name}</h3>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{member.specialization} · Опыт {member.experience}</p>
        </div>
        <ScoreDonut score={member.score} size={52} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border/40 pt-4">
        <Stat label="Конс./мес" value={member.consultationsPerMonth} />
        <Stat label="Ср. чек" value={member.avgCheck} />
        <Stat label="Удовл." value={member.satisfaction.toFixed(1)} />
        <Stat label="Выручка" value={member.revenue} />
      </div>

    </Link>
  );
}

/* ── Filter Tabs ── */
type Filter = "all" | "managers" | "senior" | "admins";

function FilterTabs({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  const mCount = TEAM.filter((m) => m.role === "Менеджер").length;
  const smCount = TEAM.filter((m) => m.role === "Старший менеджер").length;
  const aCount = TEAM.filter((m) => m.role === "Администратор").length;
  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: `Все ${TEAM.length}` },
    { key: "managers", label: `Менеджеры ${mCount}` },
    { key: "senior", label: `Старшие менеджеры ${smCount}` },
    { key: "admins", label: `Администраторы ${aCount}` },
  ];
  return (
    <div className="inline-flex rounded-lg bg-black/[0.04] p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
            active === t.key
              ? "bg-background text-foreground font-medium shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ── Page ── */
export default function TeamPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = TEAM.filter((m) => {
    if (filter === "managers") return m.role === "Менеджер";
    if (filter === "senior") return m.role === "Старший менеджер";
    if (filter === "admins") return m.role === "Администратор";
    return true;
  }).sort((a, b) => b.score - a.score);

  const mCount = TEAM.filter((m) => m.role === "Менеджер").length;
  const smCount = TEAM.filter((m) => m.role === "Старший менеджер").length;
  const aCount = TEAM.filter((m) => m.role === "Администратор").length;

  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="anim-fade-up mb-6">
        <h1 className="text-2xl font-medium tracking-tight">Команда</h1>
      </div>

      <div className="anim-fade-up mb-5 overflow-x-auto" style={{ animationDelay: "60ms" }}>
        <FilterTabs active={filter} onChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m, i) => (
          <div key={m.id} className="anim-fade-up" style={{ animationDelay: `${120 + i * 60}ms` }}>
            <TeamCard member={m} />
          </div>
        ))}
      </div>
    </div>
  );
}
