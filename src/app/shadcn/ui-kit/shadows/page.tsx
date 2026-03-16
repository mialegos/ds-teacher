"use client";

import { useState } from "react";

function CopyBadge({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="rounded px-1.5 py-0.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

const boxShadows = [
  {
    name: "shadow-xs",
    tailwind: "shadow-xs",
    css: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    usage: "Inputs, outline buttons",
  },
  {
    name: "shadow-sm",
    tailwind: "shadow-sm",
    css: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    usage: "Cards, elevated surfaces",
  },
  {
    name: "shadow-md",
    tailwind: "shadow-md",
    css: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    usage: "Dropdowns, popovers",
  },
  {
    name: "shadow-lg",
    tailwind: "shadow-lg",
    css: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    usage: "Dialogs, modals, sheets",
  },
  {
    name: "shadow-xl",
    tailwind: "shadow-xl",
    css: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    usage: "Notifications, floating panels",
  },
  {
    name: "shadow-2xl",
    tailwind: "shadow-2xl",
    css: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    usage: "Large overlay elements",
  },
  {
    name: "shadow-none",
    tailwind: "shadow-none",
    css: "none",
    usage: "Reset / remove shadow",
  },
];

const insetShadows = [
  {
    name: "inset-shadow-xs",
    tailwind: "inset-shadow-xs",
    css: "inset 0 1px 1px rgb(0 0 0 / 0.05)",
  },
  {
    name: "inset-shadow-sm",
    tailwind: "inset-shadow-sm",
    css: "inset 0 2px 4px rgb(0 0 0 / 0.05)",
  },
];

const dropShadows = [
  {
    name: "drop-shadow-xs",
    tailwind: "drop-shadow-xs",
    css: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
  },
  {
    name: "drop-shadow-sm",
    tailwind: "drop-shadow-sm",
    css: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
  },
  {
    name: "drop-shadow-md",
    tailwind: "drop-shadow-md",
    css: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
  },
  {
    name: "drop-shadow-lg",
    tailwind: "drop-shadow-lg",
    css: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
  },
  {
    name: "drop-shadow-xl",
    tailwind: "drop-shadow-xl",
    css: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  },
  {
    name: "drop-shadow-2xl",
    tailwind: "drop-shadow-2xl",
    css: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
  },
  {
    name: "drop-shadow-none",
    tailwind: "drop-shadow-none",
    css: "none",
  },
];

export default function ShadowsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Shadows</h1>
        <p className="mt-3 text-muted-foreground">
          Все уровни теней из Tailwind. Используйте при создании макетов,
          например: &quot;примени shadow-md&quot;.
        </p>
      </div>

      {/* Box Shadows */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Box Shadow</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Основные тени. Наносятся классом <code className="rounded bg-muted px-1.5 py-0.5 text-xs">shadow-*</code>.
        </p>

        <div className="grid gap-4">
          {boxShadows.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-6 rounded-lg border border-border p-4"
            >
              <div
                className={`flex size-20 shrink-0 items-center justify-center rounded-xl border border-border bg-card ${s.tailwind}`}
              >
                <span className="text-[10px] font-medium text-muted-foreground">
                  Aa
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-semibold">{s.name}</code>
                  <CopyBadge text={s.tailwind} />
                </div>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {s.css}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {s.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inset Shadows */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Inset Shadow</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Внутренние тени. Класс <code className="rounded bg-muted px-1.5 py-0.5 text-xs">inset-shadow-*</code>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {insetShadows.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-5 rounded-lg border border-border p-4"
            >
              <div
                className={`flex size-20 shrink-0 items-center justify-center rounded-xl border border-border bg-muted ${s.tailwind}`}
              >
                <span className="text-[10px] font-medium text-muted-foreground">
                  Aa
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-semibold">{s.name}</code>
                  <CopyBadge text={s.tailwind} />
                </div>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {s.css}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drop Shadows */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Drop Shadow</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Filter-тени для непрямоугольных элементов (SVG, PNG с прозрачностью).
          Класс <code className="rounded bg-muted px-1.5 py-0.5 text-xs">drop-shadow-*</code>.
        </p>

        <div className="grid gap-4">
          {dropShadows.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-6 rounded-lg border border-border p-4"
            >
              <div className={`flex size-20 shrink-0 items-center justify-center ${s.tailwind}`}>
                <svg viewBox="0 0 80 80" className="size-16">
                  <polygon
                    points="40,8 72,64 8,64"
                    className="fill-card stroke-border"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-semibold">{s.name}</code>
                  <CopyBadge text={s.tailwind} />
                </div>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {s.css}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage in components */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Использование в компонентах</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Какие тени применяются к каким компонентам в дизайн-системе.
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Компонент</th>
                <th className="px-4 py-2.5 font-medium">Тень</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ["Input, Textarea, Select", "shadow-xs"],
                ["Button (outline, secondary)", "shadow-xs"],
                ["Card", "shadow-sm"],
                ["Badge", "shadow-xs"],
                ["Checkbox, Radio, Switch", "shadow-xs"],
                ["Dropdown, Popover, Command", "shadow-md"],
                ["Tooltip", "shadow-md"],
                ["Dialog, AlertDialog", "shadow-lg"],
                ["Sheet", "shadow-lg"],
                ["Sonner / Toast", "shadow-lg"],
              ].map(([comp, shadow]) => (
                <tr key={comp} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 text-muted-foreground">{comp}</td>
                  <td className="px-4 py-2">
                    <code className="font-medium">{shadow}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
