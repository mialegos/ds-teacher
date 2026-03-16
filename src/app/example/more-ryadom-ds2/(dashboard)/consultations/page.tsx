"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  CONSULTATIONS,
  TOTAL_AMOUNT,
  TEAM,
  scoreColor,
  fmtDate,
} from "../../data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Button } from "@/components/shadcn/button";
import { IconChevronDown } from "@tabler/icons-react";

type ResultFilter = "all" | "Бронирование" | "Без брони" | "В работе";
type ManagerFilter = "all" | number;

function scoreDonutColor(s: number) {
  return s > 6.5 ? "var(--chart-green)" : s >= 3 ? "var(--chart-orange)" : "var(--chart-red)";
}

export default function ConsultationsPage() {
  const [resultFilter, setResultFilter] = useState<ResultFilter>("all");
  const [managerFilter, setManagerFilter] = useState<ManagerFilter>("all");

  const filtered = CONSULTATIONS.filter((c) => {
    if (resultFilter !== "all" && c.result !== resultFilter) return false;
    if (managerFilter !== "all" && c.managerId !== managerFilter) return false;
    return true;
  });

  const managers = [...new Map(TEAM.map((m) => [m.id, m])).values()];

  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="anim-fade-up mb-6">
        <h1 className="text-2xl font-medium tracking-tight">Консультации</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {CONSULTATIONS.length} записей · Сумма: {TOTAL_AMOUNT}
        </p>
      </div>

      <div className="anim-fade-up mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4" style={{ animationDelay: "60ms" }}>
        <div className="inline-flex overflow-x-auto rounded-lg bg-black/[0.04] p-1">
          {(["all", "Бронирование", "Без брони", "В работе"] as ResultFilter[]).map((r) => (
            <button
              key={r}
              onClick={() => setResultFilter(r)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                resultFilter === r
                  ? "bg-background text-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r === "all" ? "Все результаты" : r}
            </button>
          ))}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 gap-1.5 px-3 text-sm font-normal">
              {managerFilter === "all"
                ? "Все сотрудники"
                : managers.find((m) => m.id === managerFilter)?.name ?? "Все сотрудники"}
              <IconChevronDown className="size-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuRadioGroup
              value={managerFilter === "all" ? "all" : String(managerFilter)}
              onValueChange={(v) => setManagerFilter(v === "all" ? "all" : Number(v))}
            >
              <DropdownMenuRadioItem value="all">Все сотрудники</DropdownMenuRadioItem>
              {managers.map((m) => (
                <DropdownMenuRadioItem key={m.id} value={String(m.id)}>
                  {m.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="anim-fade-up rounded-xl border border-border bg-white" style={{ animationDelay: "120ms" }}>
        {filtered.map((c, i) => (
          <Link
            key={c.id}
            href={`/consultations/${c.id}`}
            className={`block px-4 py-3 transition-colors hover:bg-black/[0.06] sm:px-5 ${i > 0 ? "border-t border-border/40" : ""}`}
          >
            {/* Mobile layout */}
            <div className="md:hidden">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{c.topic}</p>
                  <p className="text-sm text-muted-foreground">{c.destination} · {c.duration}</p>
                </div>
                <span className="shrink-0 text-sm font-bold tabular-nums" style={{ color: scoreDonutColor(c.score) }}>{c.score.toFixed(1)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Avatar initials={c.managerInitials} size={24} />
                  <span className="text-sm">{c.managerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs ${
                    c.result === "Бронирование" ? "bg-primary/10 text-primary" : c.result === "В работе" ? "bg-amber-100 text-amber-700" : "bg-black/[0.06] text-foreground/60"
                  }`}>{c.result}</span>
                  <span className="text-sm font-medium tabular-nums">{c.amount ?? "—"}</span>
                </div>
              </div>
            </div>
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[1fr_200px_60px_120px_120px_120px] md:items-center md:gap-x-8">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{c.topic}</p>
                <p className="text-sm text-muted-foreground">{c.destination} · {c.duration}</p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar initials={c.managerInitials} size={24} />
                <div className="min-w-0">
                  <p className="truncate text-sm">{c.managerName}</p>
                  <p className="text-sm text-foreground/50">{c.managerRole}</p>
                </div>
              </div>
              <span className="text-center text-sm font-bold tabular-nums" style={{ color: scoreDonutColor(c.score) }}>{c.score.toFixed(1)}</span>
              <span className={`justify-self-center rounded-full px-2.5 py-0.5 text-xs ${
                c.result === "Бронирование" ? "bg-primary/10 text-primary" : c.result === "В работе" ? "bg-amber-100 text-amber-700" : "bg-black/[0.06] text-foreground/60"
              }`}>{c.result}</span>
              <span className="text-right text-sm font-medium tabular-nums">{c.amount ?? "—"}</span>
              <span className="text-right text-sm tabular-nums text-muted-foreground">{fmtDate(c.date)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
