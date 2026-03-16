"use client";

import { useState } from "react";

type ColorEntry = {
  name: string;
  variable: string;
  value: string;
};

type ColorGroup = {
  title: string;
  colors: ColorEntry[];
};

const semanticColors: ColorGroup[] = [
  {
    title: "Core",
    colors: [
      { name: "Background", variable: "--background", value: "#ffffff" },
      { name: "Foreground", variable: "--foreground", value: "#0a0a0a" },
      { name: "Primary", variable: "--primary", value: "#00cc00" },
      { name: "Primary FG", variable: "--primary-foreground", value: "#fafafa" },
    ],
  },
  {
    title: "Secondary & Muted",
    colors: [
      { name: "Secondary", variable: "--secondary", value: "#f5f5f5" },
      { name: "Secondary FG", variable: "--secondary-foreground", value: "#171717" },
      { name: "Muted", variable: "--muted", value: "#f5f5f5" },
      { name: "Muted FG", variable: "--muted-foreground", value: "#737373" },
    ],
  },
  {
    title: "Accent & Destructive",
    colors: [
      { name: "Accent", variable: "--accent", value: "#f5f5f5" },
      { name: "Accent FG", variable: "--accent-foreground", value: "#171717" },
      { name: "Destructive", variable: "--destructive", value: "#ff000b" },
      { name: "Destructive FG", variable: "--destructive-foreground", value: "#fff2f1" },
    ],
  },
  {
    title: "Surfaces",
    colors: [
      { name: "Card", variable: "--card", value: "#ffffff" },
      { name: "Card FG", variable: "--card-foreground", value: "#0a0a0a" },
      { name: "Popover", variable: "--popover", value: "#ffffff" },
      { name: "Popover FG", variable: "--popover-foreground", value: "#0a0a0a" },
      { name: "Background 1", variable: "--background-1", value: "#f8f6f3" },
    ],
  },
  {
    title: "Borders & Inputs",
    colors: [
      { name: "Border", variable: "--border", value: "#e5e5e5" },
      { name: "Input", variable: "--input", value: "#e5e5e5" },
      { name: "Ring", variable: "--ring", value: "#a3a3a3" },
    ],
  },
  {
    title: "Sidebar",
    colors: [
      { name: "Sidebar", variable: "--sidebar", value: "#f8f6f3" },
      { name: "Sidebar FG", variable: "--sidebar-foreground", value: "#0a0a0a" },
      { name: "Sidebar Primary", variable: "--sidebar-primary", value: "#171717" },
      { name: "Sidebar Primary FG", variable: "--sidebar-primary-foreground", value: "#fafafa" },
      { name: "Sidebar Accent", variable: "--sidebar-accent", value: "#f5f5f5" },
      { name: "Sidebar Accent FG", variable: "--sidebar-accent-foreground", value: "#171717" },
      { name: "Sidebar Border", variable: "--sidebar-border", value: "#e5e5e5" },
      { name: "Sidebar Ring", variable: "--sidebar-ring", value: "#a3a3a3" },
    ],
  },
  {
    title: "Sidebar Icon Backgrounds",
    colors: [
      { name: "Icon BG 1", variable: "--sidebar-icon-bg-1", value: "#00cc00" },
      { name: "Icon BG 2", variable: "--sidebar-icon-bg-2", value: "#f5b800" },
      { name: "Icon BG 3", variable: "--sidebar-icon-bg-3", value: "#0089ff" },
      { name: "Icon BG 4", variable: "--sidebar-icon-bg-4", value: "#c952de" },
    ],
  },
  {
    title: "Semantic",
    colors: [
      { name: "Success", variable: "--success", value: "#00cc00" },
      { name: "Success BG", variable: "--success-background", value: "#edfce2" },
      { name: "Warning", variable: "--warning", value: "#ff8f00" },
      { name: "Warning BG", variable: "--warning-background", value: "#fff6e6" },
      { name: "Error", variable: "--error", value: "#ff000b" },
      { name: "Info", variable: "--info", value: "#0089ff" },
    ],
  },
  {
    title: "Charts",
    colors: [
      { name: "Chart 1", variable: "--chart-1", value: "#ff8f00" },
      { name: "Chart 2", variable: "--chart-2", value: "#0089ff" },
      { name: "Chart 3", variable: "--chart-3", value: "#c952de" },
      { name: "Chart 4", variable: "--chart-4", value: "#f5b800" },
      { name: "Chart 5", variable: "--chart-5", value: "#ff000b" },
    ],
  },
];

type PaletteEntry = { shade: string; value: string };

type BrandPalette = {
  name: string;
  prefix: string;
  shades: PaletteEntry[];
};

const brandPalettes: BrandPalette[] = [
  {
    name: "Green UI",
    prefix: "--green-ui",
    shades: [
      { shade: "50", value: "#edfce2" },
      { shade: "100", value: "#d9f7c4" },
      { shade: "200", value: "#b7f299" },
      { shade: "300", value: "#8df26d" },
      { shade: "400", value: "#5ee34d" },
      { shade: "500", value: "#00cc00" },
      { shade: "600", value: "#00a300" },
      { shade: "700", value: "#008000" },
      { shade: "800", value: "#005c00" },
      { shade: "900", value: "#003300" },
    ],
  },
  {
    name: "Light Green Marketing",
    prefix: "--green-marketing",
    shades: [
      { shade: "50", value: "#f4fbe6" },
      { shade: "100", value: "#efffcc" },
      { shade: "200", value: "#e1ff99" },
      { shade: "300", value: "#d3ff66" },
      { shade: "400", value: "#c6ff33" },
      { shade: "500", value: "#c3ff01" },
      { shade: "600", value: "#9ccb01" },
      { shade: "700", value: "#769901" },
      { shade: "800", value: "#506801" },
      { shade: "900", value: "#2a3700" },
    ],
  },
  {
    name: "Blue",
    prefix: "--edtech-blue",
    shades: [
      { shade: "50", value: "#e6f5ff" },
      { shade: "100", value: "#ccebff" },
      { shade: "200", value: "#99d6ff" },
      { shade: "300", value: "#66c2ff" },
      { shade: "400", value: "#33adff" },
      { shade: "500", value: "#0089ff" },
      { shade: "600", value: "#006ecc" },
      { shade: "700", value: "#005299" },
      { shade: "800", value: "#003766" },
      { shade: "900", value: "#001b33" },
    ],
  },
  {
    name: "Red",
    prefix: "--edtech-red",
    shades: [
      { shade: "50", value: "#fff2f1" },
      { shade: "100", value: "#ffe4e1" },
      { shade: "200", value: "#ffc7c2" },
      { shade: "300", value: "#ff9b94" },
      { shade: "400", value: "#ff5c52" },
      { shade: "500", value: "#ff000b" },
      { shade: "600", value: "#d60009" },
      { shade: "700", value: "#ad0007" },
      { shade: "800", value: "#850006" },
      { shade: "900", value: "#5c0004" },
    ],
  },
  {
    name: "Orange",
    prefix: "--edtech-orange",
    shades: [
      { shade: "50", value: "#fff6e6" },
      { shade: "100", value: "#ffedcc" },
      { shade: "200", value: "#ffdb99" },
      { shade: "300", value: "#ffc966" },
      { shade: "400", value: "#ffb733" },
      { shade: "500", value: "#ff8f00" },
      { shade: "600", value: "#cc7200" },
      { shade: "700", value: "#995600" },
      { shade: "800", value: "#663900" },
      { shade: "900", value: "#331d00" },
    ],
  },
  {
    name: "Purple",
    prefix: "--edtech-purple",
    shades: [
      { shade: "50", value: "#f9f0fb" },
      { shade: "100", value: "#f4e1f8" },
      { shade: "200", value: "#e8c2f1" },
      { shade: "300", value: "#dda4ea" },
      { shade: "400", value: "#d385e4" },
      { shade: "500", value: "#c952de" },
      { shade: "600", value: "#a142b2" },
      { shade: "700", value: "#793185" },
      { shade: "800", value: "#502159" },
      { shade: "900", value: "#28102c" },
    ],
  },
  {
    name: "Yellow",
    prefix: "--edtech-yellow",
    shades: [
      { shade: "50", value: "#fffbe6" },
      { shade: "100", value: "#fff4cc" },
      { shade: "200", value: "#ffe799" },
      { shade: "300", value: "#ffda66" },
      { shade: "400", value: "#ffc933" },
      { shade: "500", value: "#f5b800" },
      { shade: "600", value: "#cc9900" },
      { shade: "700", value: "#a37a00" },
      { shade: "800", value: "#7a5c00" },
      { shade: "900", value: "#523d00" },
    ],
  },
];

function ColorSwatch({ color }: { color: ColorEntry }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col overflow-hidden rounded-lg border border-border transition-all hover:shadow-md"
    >
      <div
        className="relative h-16 w-full"
        style={{ backgroundColor: color.value }}
      >
        {copied && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-medium text-white">
            Скопировано
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5 px-3 py-2">
        <span className="text-left text-xs font-medium">{color.name}</span>
        <span className="text-left text-xs text-muted-foreground">
          {color.variable}
        </span>
        <span className="text-left text-xs text-muted-foreground">
          {color.value}
        </span>
      </div>
    </button>
  );
}

function PaletteRow({ palette }: { palette: BrandPalette }) {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section className="mb-8">
      <h3 className="mb-3 text-sm font-semibold">{palette.name}</h3>
      <div className="flex overflow-hidden rounded-lg border border-border">
        {palette.shades.map((s) => (
          <button
            key={s.shade}
            onClick={() => {
              navigator.clipboard.writeText(s.value);
              setCopied(s.shade);
              setTimeout(() => setCopied(null), 1500);
            }}
            className="group relative flex-1 transition-all hover:flex-[1.5]"
          >
            <div
              className="h-16"
              style={{ backgroundColor: s.value }}
            />
            <div className="px-1 py-1.5 text-center">
              <span className="block text-xs font-medium">{s.shade}</span>
              <span className="block text-xs text-muted-foreground">
                {copied === s.shade ? "✓" : s.value}
              </span>
            </div>
          </button>
        ))}
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {palette.prefix}-[50–900]
      </p>
    </section>
  );
}

export default function ColorsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Colors</h1>
        <p className="mt-3 text-muted-foreground">
          Все переменные из Figma дизайн-системы. Нажмите на цвет, чтобы
          скопировать HEX.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-semibold">Semantic tokens</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          Семантические цвета из коллекции «Theme». Адаптируются под light/dark
          режим.
        </p>

        {semanticColors.map((group) => (
          <section key={group.title} className="mb-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {group.colors.map((color) => (
                <ColorSwatch key={color.variable} color={color} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div>
        <h2 className="mb-6 text-xl font-semibold">Edtech brand palette</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          Брендовые палитры из коллекции «Edtech». Каждая содержит 10
          оттенков (50–900).
        </p>

        {brandPalettes.map((p) => (
          <PaletteRow key={p.prefix} palette={p} />
        ))}
      </div>
    </div>
  );
}
