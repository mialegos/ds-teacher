"use client";

import { useState } from "react";
import { Button } from "@/components/shadcn/button";
import {
  IconPlus,
  IconDownload,
  IconArrowRight,
  IconLoader2,
  IconTrash,
  IconSettings,
  IconMail,
} from "@tabler/icons-react";

type ViewMode = "playground" | "components";

type VariantKey = "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
type SizeKey = "xs" | "sm" | "default" | "lg";
type IconSizeKey = "icon-xs" | "icon-sm" | "icon" | "icon-lg";
type StateKey = "default" | "hover" | "active" | "loading" | "disabled" | "focused";

const variants: { key: VariantKey; label: string }[] = [
  { key: "default", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "outline", label: "Outline" },
  { key: "ghost", label: "Ghost" },
  { key: "destructive", label: "Destructive" },
  { key: "link", label: "Link" },
];

const sizes: { key: SizeKey; label: string }[] = [
  { key: "lg", label: "lg" },
  { key: "default", label: "default" },
  { key: "sm", label: "sm" },
  { key: "xs", label: "xs" },
];

const iconSizes: { key: IconSizeKey; label: string }[] = [
  { key: "icon-lg", label: "icon-lg" },
  { key: "icon", label: "icon" },
  { key: "icon-sm", label: "icon-sm" },
  { key: "icon-xs", label: "icon-xs" },
];

const states: { key: StateKey; label: string }[] = [
  { key: "default", label: "Default" },
  { key: "hover", label: "Hover" },
  { key: "active", label: "Active" },
  { key: "loading", label: "Loading" },
  { key: "disabled", label: "Disabled" },
  { key: "focused", label: "Focused" },
];

const hoverClasses: Record<VariantKey, string> = {
  default: "bg-primary/90 text-primary-foreground",
  destructive: "bg-destructive/90 text-white",
  outline: "bg-accent text-accent-foreground border shadow-xs",
  secondary: "bg-secondary/80 text-secondary-foreground",
  ghost: "bg-accent text-accent-foreground",
  link: "text-primary underline underline-offset-4",
};

const activeClasses: Record<VariantKey, string> = {
  default: "bg-primary/80 text-primary-foreground scale-[0.98]",
  destructive: "bg-destructive/80 text-white scale-[0.98]",
  outline: "bg-accent/80 text-accent-foreground border shadow-xs scale-[0.98]",
  secondary: "bg-secondary/70 text-secondary-foreground scale-[0.98]",
  ghost: "bg-accent/80 text-accent-foreground scale-[0.98]",
  link: "text-primary/80 underline underline-offset-4",
};

const focusClasses: Record<VariantKey, string> = {
  default: "ring-[3px] ring-ring/50",
  destructive: "ring-[3px] ring-destructive/20",
  outline: "ring-[3px] ring-ring/50 border-ring",
  secondary: "ring-[3px] ring-ring/50",
  ghost: "ring-[3px] ring-ring/50",
  link: "ring-[3px] ring-ring/50",
};

function StateButton({
  variant,
  size,
  state,
  children,
  iconOnly,
}: {
  variant: VariantKey;
  size: SizeKey | IconSizeKey;
  state: StateKey;
  children: React.ReactNode;
  iconOnly?: boolean;
}) {
  if (state === "disabled") {
    return (
      <Button variant={variant} size={size} disabled>
        {children}
      </Button>
    );
  }

  if (state === "loading") {
    return (
      <Button variant={variant} size={size} disabled>
        <IconLoader2 className="animate-spin" />
        {!iconOnly && "Loading"}
      </Button>
    );
  }

  const stateClass =
    state === "hover"
      ? hoverClasses[variant]
      : state === "active"
        ? activeClasses[variant]
        : state === "focused"
          ? focusClasses[variant]
          : "";

  return (
    <Button
      variant={variant}
      size={size}
      className={`${stateClass} transition-none`}
    >
      {children}
    </Button>
  );
}

function PlaygroundView() {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Варианты
        </h3>
        <div className="flex flex-col items-start gap-3">
          {variants.map((v) => (
            <div key={v.key} className="flex items-center gap-4">
              <span className="w-24 text-xs text-muted-foreground">
                {v.label}
              </span>
              <Button variant={v.key}>Button</Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Размеры
        </h3>
        <div className="flex flex-col items-start gap-3">
          {sizes.map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <span className="w-24 text-xs text-muted-foreground">
                {s.label}
              </span>
              <Button size={s.key}>Button</Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          С иконкой
        </h3>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">
              Icon left
            </span>
            <Button>
              <IconPlus /> Button
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">
              Icon right
            </span>
            <Button>
              Button <IconArrowRight />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">
              Icon only
            </span>
            <Button size="icon">
              <IconSettings />
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Destructive
        </h3>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">Text</span>
            <Button variant="destructive">Delete</Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">
              With icon
            </span>
            <Button variant="destructive">
              <IconTrash /> Delete
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Состояния
        </h3>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">Loading</span>
            <Button disabled>
              <IconLoader2 className="animate-spin" /> Loading
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">
              Disabled
            </span>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ComponentsView() {
  return (
    <div className="space-y-12">
      {variants.map((variant) => (
        <section key={variant.key}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {variant.label}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-24 pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground" />
                  {states.map((state) => (
                    <th
                      key={state.key}
                      className="pb-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {state.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr
                    key={size.key}
                    className="border-t border-dashed border-border/50"
                  >
                    <td className="py-3 pr-4 text-xs text-muted-foreground">
                      {size.label}
                    </td>
                    {states.map((state) => (
                      <td key={state.key} className="px-2 py-3 text-center">
                        <div className="inline-flex">
                          <StateButton
                            variant={variant.key}
                            size={size.key}
                            state={state.key}
                          >
                            Button
                          </StateButton>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                {iconSizes.map((size) => (
                  <tr
                    key={size.key}
                    className="border-t border-dashed border-border/50"
                  >
                    <td className="py-3 pr-4 text-xs text-muted-foreground">
                      {size.label}
                    </td>
                    {states.map((state) => (
                      <td key={state.key} className="px-2 py-3 text-center">
                        <div className="inline-flex">
                          <StateButton
                            variant={variant.key}
                            size={size.key}
                            state={state.key}
                            iconOnly
                          >
                            <IconSettings />
                          </StateButton>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="border-t border-dashed border-border/50">
                  <td className="py-3 pr-4 text-xs text-muted-foreground">
                    icon left
                  </td>
                  {states.map((state) => (
                    <td key={state.key} className="px-2 py-3 text-center">
                      <div className="inline-flex">
                        <StateButton
                          variant={variant.key}
                          size="default"
                          state={state.key}
                        >
                          <IconDownload /> Button
                        </StateButton>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-t border-dashed border-border/50">
                  <td className="py-3 pr-4 text-xs text-muted-foreground">
                    icon right
                  </td>
                  {states.map((state) => (
                    <td key={state.key} className="px-2 py-3 text-center">
                      <div className="inline-flex">
                        <StateButton
                          variant={variant.key}
                          size="default"
                          state={state.key}
                        >
                          Button <IconArrowRight />
                        </StateButton>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

export default function ButtonPage() {
  const [view, setView] = useState<ViewMode>("playground");

  return (
    <div className="mx-auto max-w-6xl px-8 py-12">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Button</h1>
          <p className="mt-2 text-muted-foreground">
            Кнопка shadcn/ui с вариантами, размерами и состояниями.
          </p>
        </div>

        <div className="flex rounded-lg border border-border bg-muted p-0.5">
          <button
            onClick={() => setView("playground")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
              view === "playground"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Playground
          </button>
          <button
            onClick={() => setView("components")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
              view === "components"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Components
          </button>
        </div>
      </div>

      {view === "playground" ? <PlaygroundView /> : <ComponentsView />}
    </div>
  );
}
