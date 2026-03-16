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

const spacingScale = [
  { name: "0", px: 0, rem: "0" },
  { name: "px", px: 1, rem: "1px" },
  { name: "0.5", px: 2, rem: "0.125rem" },
  { name: "1", px: 4, rem: "0.25rem" },
  { name: "1.5", px: 6, rem: "0.375rem" },
  { name: "2", px: 8, rem: "0.5rem" },
  { name: "2.5", px: 10, rem: "0.625rem" },
  { name: "3", px: 12, rem: "0.75rem" },
  { name: "3.5", px: 14, rem: "0.875rem" },
  { name: "4", px: 16, rem: "1rem" },
  { name: "5", px: 20, rem: "1.25rem" },
  { name: "6", px: 24, rem: "1.5rem" },
  { name: "7", px: 28, rem: "1.75rem" },
  { name: "8", px: 32, rem: "2rem" },
  { name: "9", px: 36, rem: "2.25rem" },
  { name: "10", px: 40, rem: "2.5rem" },
  { name: "11", px: 44, rem: "2.75rem" },
  { name: "12", px: 48, rem: "3rem" },
  { name: "14", px: 56, rem: "3.5rem" },
  { name: "16", px: 64, rem: "4rem" },
  { name: "20", px: 80, rem: "5rem" },
  { name: "24", px: 96, rem: "6rem" },
  { name: "28", px: 112, rem: "7rem" },
  { name: "32", px: 128, rem: "8rem" },
  { name: "36", px: 144, rem: "9rem" },
  { name: "40", px: 160, rem: "10rem" },
  { name: "44", px: 176, rem: "11rem" },
  { name: "48", px: 192, rem: "12rem" },
  { name: "52", px: 208, rem: "13rem" },
  { name: "56", px: 224, rem: "14rem" },
  { name: "60", px: 240, rem: "15rem" },
  { name: "64", px: 256, rem: "16rem" },
  { name: "72", px: 288, rem: "18rem" },
  { name: "80", px: 320, rem: "20rem" },
  { name: "96", px: 384, rem: "24rem" },
];

const componentSpacing = [
  { where: "Button (sm)", classes: "h-7 px-2", px: "28px / 8px" },
  { where: "Button (default)", classes: "h-8 px-2.5 py-2", px: "32px / 10px / 8px" },
  { where: "Button (lg)", classes: "h-9 px-3", px: "36px / 12px" },
  { where: "Button (icon)", classes: "size-8", px: "32 x 32px" },
  { where: "Input, Select", classes: "h-8 px-2.5", px: "32px / 10px" },
  { where: "Textarea", classes: "px-2.5 py-2", px: "10px / 8px" },
  { where: "Card padding", classes: "p-4", px: "16px" },
  { where: "Dialog padding", classes: "p-4", px: "16px" },
  { where: "Alert padding", classes: "px-2.5 py-2", px: "10px / 8px" },
  { where: "Popover padding", classes: "p-4", px: "16px" },
  { where: "Sheet padding", classes: "p-6", px: "24px" },
  { where: "Tab bar height", classes: "h-8", px: "32px" },
  { where: "Avatar (sm)", classes: "size-6", px: "24px" },
  { where: "Avatar (default)", classes: "size-8", px: "32px" },
  { where: "Avatar (lg)", classes: "size-10", px: "40px" },
  { where: "Avatar (xl)", classes: "size-12", px: "48px" },
  { where: "Icon (sm)", classes: "size-3", px: "12px" },
  { where: "Icon (default)", classes: "size-4", px: "16px" },
  { where: "Icon (lg)", classes: "size-5", px: "20px" },
  { where: "Badge padding", classes: "px-2 py-0.5", px: "8px / 2px" },
  { where: "Tooltip padding", classes: "px-3 py-1.5", px: "12px / 6px" },
  { where: "Dropdown item", classes: "px-2 py-1.5", px: "8px / 6px" },
];

const gapReference = [
  { where: "Form fields (vertical)", classes: "gap-4", px: "16px" },
  { where: "Button group", classes: "gap-2", px: "8px" },
  { where: "Card sections", classes: "gap-4", px: "16px" },
  { where: "Page sections", classes: "gap-8 / gap-12", px: "32px / 48px" },
  { where: "Inline items (icon + text)", classes: "gap-1.5 / gap-2", px: "6px / 8px" },
  { where: "Grid cards", classes: "gap-4 / gap-6", px: "16px / 24px" },
  { where: "Stack items", classes: "gap-1 / gap-2", px: "4px / 8px" },
];

export default function SpacingPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
        <p className="mt-3 text-muted-foreground">
          Шкала отступов Tailwind (base 4px). Применяется для{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">p-*</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">m-*</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">gap-*</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">size-*</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">w-*</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">h-*</code>.
        </p>
      </div>

      {/* Visual scale */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Шкала</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Визуальное сравнение всех значений. Нажмите на строку, чтобы
          скопировать число.
        </p>

        <div className="space-y-1">
          {spacingScale
            .filter((s) => s.px <= 128)
            .map((s) => (
              <SpacingRow key={s.name} item={s} />
            ))}
        </div>
      </section>

      {/* Full table */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">Полная таблица</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Все значения шкалы с rem и px.
        </p>
        <div className="max-h-[500px] overflow-y-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-card">
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Tailwind</th>
                <th className="px-4 py-2.5 font-medium">rem</th>
                <th className="px-4 py-2.5 font-medium">px</th>
                <th className="px-4 py-2.5 font-medium" />
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((s) => (
                <tr key={s.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-1.5">
                    <code className="font-medium">{s.name}</code>
                  </td>
                  <td className="px-4 py-1.5 text-muted-foreground">
                    {s.rem}
                  </td>
                  <td className="px-4 py-1.5 text-muted-foreground">
                    {s.px}px
                  </td>
                  <td className="px-4 py-1.5">
                    <CopyBadge text={s.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Component sizes & padding */}
      <section className="mb-16">
        <h2 className="mb-2 text-lg font-semibold">
          Размеры и отступы компонентов
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Какие значения используются в компонентах дизайн-системы.
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Элемент</th>
                <th className="px-4 py-2.5 font-medium">Tailwind</th>
                <th className="px-4 py-2.5 font-medium">Значение</th>
              </tr>
            </thead>
            <tbody>
              {componentSpacing.map((row) => (
                <tr
                  key={row.where}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2 text-muted-foreground">
                    {row.where}
                  </td>
                  <td className="px-4 py-2">
                    <code className="font-medium">{row.classes}</code>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{row.px}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gap reference */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Рекомендуемые gap</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Типовые расстояния между элементами.
        </p>
        <div className="rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Контекст</th>
                <th className="px-4 py-2.5 font-medium">Tailwind</th>
                <th className="px-4 py-2.5 font-medium">Значение</th>
              </tr>
            </thead>
            <tbody>
              {gapReference.map((row) => (
                <tr
                  key={row.where}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2 text-muted-foreground">
                    {row.where}
                  </td>
                  <td className="px-4 py-2">
                    <code className="font-medium">{row.classes}</code>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{row.px}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SpacingRow({ item }: { item: { name: string; px: number; rem: string } }) {
  const [copied, setCopied] = useState(false);
  const maxWidth = 128;
  const barWidth = Math.min(item.px, maxWidth);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(item.name);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="flex w-full items-center gap-3 rounded px-2 py-1 text-left transition-colors hover:bg-muted"
    >
      <code className="w-8 shrink-0 text-right text-xs font-medium">
        {item.name}
      </code>
      <div className="flex-1">
        <div
          className="h-4 rounded-sm bg-primary transition-all"
          style={{ width: barWidth || 1 }}
        />
      </div>
      <span className="w-12 shrink-0 text-right text-xs text-muted-foreground">
        {item.px}px
      </span>
      <span className="w-10 shrink-0 text-right text-[10px] text-muted-foreground">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}
