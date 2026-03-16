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

const figmaRadii = [
  { token: "xs", px: 2, tailwind: "rounded-[2px]" },
  { token: "sm", px: 6, tailwind: "rounded-[6px]" },
  { token: "md", px: 8, tailwind: "rounded-lg" },
  { token: "lg", px: 10, tailwind: "rounded-[10px]" },
  { token: "xl", px: 14, tailwind: "rounded-[14px]" },
  { token: "2xl", px: 16, tailwind: "rounded-2xl" },
  { token: "3xl", px: 24, tailwind: "rounded-3xl" },
  { token: "4xl", px: 32, tailwind: "rounded-[32px]" },
  { token: "5xl", px: 40, tailwind: "rounded-[40px]" },
  { token: "6xl", px: 48, tailwind: "rounded-[48px]" },
  { token: "7xl", px: 56, tailwind: "rounded-[56px]" },
  { token: "8xl", px: 64, tailwind: "rounded-[64px]" },
  { token: "9xl", px: 72, tailwind: "rounded-[72px]" },
  { token: "10xl", px: 80, tailwind: "rounded-[80px]" },
];

const tailwindRadii = [
  { name: "rounded-none", value: "0px" },
  { name: "rounded-sm", value: "4px", cssVar: "--radius-sm = calc(--radius - 4px)" },
  { name: "rounded-md", value: "6px", cssVar: "--radius-md = calc(--radius - 2px)" },
  { name: "rounded-lg", value: "8px", cssVar: "--radius-lg = var(--radius)" },
  { name: "rounded-xl", value: "12px", cssVar: "--radius-xl = calc(--radius + 4px)" },
  { name: "rounded-2xl", value: "16px", cssVar: "--radius-2xl = calc(--radius + 8px)" },
  { name: "rounded-3xl", value: "24px" },
  { name: "rounded-full", value: "9999px" },
];

const componentUsage: [string, string, string][] = [
  ["Checkbox", "xs", "rounded-[2px]"],
  ["Tabs trigger", "sm", "rounded-[6px]"],
  ["Button, Tooltip, Toggle, Sheet", "md", "rounded-lg"],
  ["Input, Select, Textarea, Alert", "lg", "rounded-[10px]"],
  ["Popover, Dropdown, Command", "lg", "rounded-[10px]"],
  ["Card, Dialog, AlertDialog", "xl", "rounded-[14px]"],
  ["Drawer (top)", "lg", "rounded-t-[10px]"],
  ["Badge, Avatar, Switch, Slider", "full", "rounded-full"],
];

export default function RadiusPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Border Radius</h1>
        <p className="mt-3 text-muted-foreground">
          Токены скруглений из Figma-переменных и их маппинг на Tailwind-классы.
        </p>
      </div>

      {/* Figma variables */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Figma Variables</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Шкала скруглений из Figma. Используйте имя токена при описании
          макета, например: &quot;скругление lg&quot; = 10px.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {figmaRadii.map((r) => (
            <div
              key={r.token}
              className="flex flex-col items-center gap-3 rounded-lg border border-border p-5"
            >
              <div
                className="flex size-20 items-center justify-center border-2 border-foreground/20 bg-muted"
                style={{ borderRadius: r.px }}
              />
              <div className="text-center">
                <code className="text-sm font-bold">{r.token}</code>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {r.px}px
                </p>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <code className="text-[10px] text-muted-foreground">
                    {r.tailwind}
                  </code>
                  <CopyBadge text={r.tailwind} />
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border p-5">
            <div className="flex size-20 items-center justify-center rounded-full border-2 border-foreground/20 bg-muted" />
            <div className="text-center">
              <code className="text-sm font-bold">full</code>
              <p className="mt-0.5 text-xs text-muted-foreground">9999px</p>
              <div className="mt-1 flex items-center justify-center gap-1">
                <code className="text-[10px] text-muted-foreground">
                  rounded-full
                </code>
                <CopyBadge text="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Сравнение</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Все скругления в одном ряду для визуального сравнения.
        </p>

        <div className="flex flex-wrap items-end gap-3">
          {figmaRadii.map((r) => (
            <div key={r.token} className="flex flex-col items-center gap-2">
              <div
                className="size-14 border-2 border-primary bg-primary/10"
                style={{ borderRadius: r.px }}
              />
              <span className="text-[10px] font-semibold">{r.token}</span>
              <span className="text-[9px] text-muted-foreground">
                {r.px}px
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <div className="size-14 rounded-full border-2 border-primary bg-primary/10" />
            <span className="text-[10px] font-semibold">full</span>
            <span className="text-[9px] text-muted-foreground">pill</span>
          </div>
        </div>
      </section>

      {/* Figma → Tailwind mapping table */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Figma &rarr; Tailwind</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Полная таблица маппинга токенов Figma на Tailwind-классы.
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Figma Token</th>
                <th className="px-4 py-2.5 font-medium">px</th>
                <th className="px-4 py-2.5 font-medium">Tailwind Class</th>
                <th className="px-4 py-2.5 font-medium" />
              </tr>
            </thead>
            <tbody>
              {figmaRadii.map((r) => (
                <tr
                  key={r.token}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2">
                    <code className="font-semibold">{r.token}</code>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{r.px}</td>
                  <td className="px-4 py-2">
                    <code className="font-medium">{r.tailwind}</code>
                  </td>
                  <td className="px-4 py-2">
                    <CopyBadge text={r.tailwind} />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-2">
                  <code className="font-semibold">full</code>
                </td>
                <td className="px-4 py-2 text-muted-foreground">9999</td>
                <td className="px-4 py-2">
                  <code className="font-medium">rounded-full</code>
                </td>
                <td className="px-4 py-2">
                  <CopyBadge text="rounded-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tailwind built-in radii */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">
          Tailwind built-in radii
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Встроенные классы Tailwind и их CSS-переменные (base{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            --radius: 0.5rem
          </code>
          ).
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Class</th>
                <th className="px-4 py-2.5 font-medium">Value</th>
                <th className="px-4 py-2.5 font-medium">CSS Variable</th>
              </tr>
            </thead>
            <tbody>
              {tailwindRadii.map((r) => (
                <tr
                  key={r.name}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2">
                    <code className="font-medium">{r.name}</code>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">
                    {r.value}
                  </td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">
                    {r.cssVar ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Component mapping */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">
          Использование в компонентах
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Какие скругления применяются к каким компонентам.
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Компонент</th>
                <th className="px-4 py-2.5 font-medium">Figma Token</th>
                <th className="px-4 py-2.5 font-medium">Tailwind</th>
              </tr>
            </thead>
            <tbody>
              {componentUsage.map(([comp, token, tw]) => (
                <tr
                  key={comp}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2 text-muted-foreground">{comp}</td>
                  <td className="px-4 py-2">
                    <code className="font-semibold">{token}</code>
                  </td>
                  <td className="px-4 py-2">
                    <code className="font-medium">{tw}</code>
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
