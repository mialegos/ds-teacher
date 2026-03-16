"use client";

import { useState } from "react";
import { Button } from "@/components/shadcn/button";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconList,
  IconListNumbers,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
  IconCopy,
  IconDownload,
  IconShare,
  IconGrid3x3,
  IconLayoutList,
  IconLayoutGrid,
} from "@tabler/icons-react";

export default function ButtonGroupShowcase() {
  const [alignment, setAlignment] = useState("left");
  const [view, setView] = useState("grid");

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Button Group</h1>
        <p className="mt-2 text-muted-foreground">
          Group a series of buttons together on a single line with connected
          borders for toolbars, actions, and navigation.
        </p>
      </div>

      {/* Basic text button groups */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Basic text groups
        </h2>
        <div className="flex flex-col gap-4">
          <div className="inline-flex rounded-md">
            <Button variant="outline" className="rounded-r-none">
              Years
            </Button>
            <Button variant="outline" className="rounded-none border-l-0">
              Months
            </Button>
            <Button variant="outline" className="rounded-l-none border-l-0">
              Days
            </Button>
          </div>

          <div className="inline-flex rounded-md">
            <Button variant="outline" className="rounded-r-none bg-accent">
              All
            </Button>
            <Button variant="outline" className="rounded-none border-l-0">
              Active
            </Button>
            <Button variant="outline" className="rounded-l-none border-l-0">
              Inactive
            </Button>
          </div>
        </div>
      </section>

      {/* Icon toolbar — formatting */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Icon toolbar (formatting)
        </h2>
        <div className="inline-flex rounded-md border border-border">
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none rounded-l-md border-r border-border"
          >
            <IconBold />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none border-r border-border"
          >
            <IconItalic />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none border-r border-border"
          >
            <IconUnderline />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none rounded-r-md"
          >
            <IconStrikethrough />
          </Button>
        </div>
      </section>

      {/* Icon toolbar — alignment toggle */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Toggle group (alignment)
        </h2>
        <div className="inline-flex rounded-md border border-border">
          {(
            [
              { value: "left", icon: IconAlignLeft },
              { value: "center", icon: IconAlignCenter },
              { value: "right", icon: IconAlignRight },
              { value: "justify", icon: IconAlignJustified },
            ] as const
          ).map(({ value, icon: Icon }, i, arr) => (
            <Button
              key={value}
              variant="ghost"
              size="icon-sm"
              className={`rounded-none ${i === 0 ? "rounded-l-md" : ""} ${i === arr.length - 1 ? "rounded-r-md" : "border-r border-border"} ${alignment === value ? "bg-accent" : ""}`}
              onClick={() => setAlignment(value)}
            >
              <Icon />
            </Button>
          ))}
        </div>
      </section>

      {/* Text + icon group */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Text with icons
        </h2>
        <div className="inline-flex rounded-md border border-border">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 rounded-none rounded-l-md border-r border-border"
          >
            <IconList className="size-4" />
            Bulleted
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 rounded-none rounded-r-md"
          >
            <IconListNumbers className="size-4" />
            Numbered
          </Button>
        </div>
      </section>

      {/* Split button */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Split buttons (action + dropdown)
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex rounded-md">
            <Button className="rounded-r-none">Save</Button>
            <Button className="rounded-l-none border-l border-primary-foreground/20 px-2">
              <IconChevronDown className="size-4" />
            </Button>
          </div>

          <div className="inline-flex rounded-md">
            <Button variant="outline" className="rounded-r-none">
              Download
            </Button>
            <Button variant="outline" className="rounded-l-none border-l-0 px-2">
              <IconChevronDown className="size-4" />
            </Button>
          </div>

          <div className="inline-flex rounded-md">
            <Button variant="destructive" className="rounded-r-none">
              Delete
            </Button>
            <Button
              variant="destructive"
              className="rounded-l-none border-l border-white/20 px-2"
            >
              <IconChevronDown className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Segmented control / view toggle */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Segmented control
        </h2>
        <div className="inline-flex rounded-md bg-muted p-1">
          {(
            [
              { value: "grid", icon: IconLayoutGrid, label: "Grid" },
              { value: "list", icon: IconLayoutList, label: "List" },
              { value: "board", icon: IconGrid3x3, label: "Board" },
            ] as const
          ).map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              onClick={() => setView(value)}
              className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-medium transition-colors ${
                view === value
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Icon action group */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Icon action group
        </h2>
        <div className="inline-flex rounded-md">
          <Button variant="outline" size="icon" className="rounded-r-none">
            <IconPlus />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-l-0"
          >
            <IconCopy />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-l-0"
          >
            <IconDownload />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-l-none border-l-0"
          >
            <IconShare />
          </Button>
        </div>
      </section>

      {/* Size variants */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Size variants
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <span className="mb-2 block text-xs text-muted-foreground">
              Small
            </span>
            <div className="inline-flex rounded-md">
              <Button variant="outline" size="sm" className="rounded-r-none">
                Left
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border-l-0"
              >
                Center
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-l-none border-l-0"
              >
                Right
              </Button>
            </div>
          </div>
          <div>
            <span className="mb-2 block text-xs text-muted-foreground">
              Default
            </span>
            <div className="inline-flex rounded-md">
              <Button variant="outline" className="rounded-r-none">
                Left
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-l-0"
              >
                Center
              </Button>
              <Button
                variant="outline"
                className="rounded-l-none border-l-0"
              >
                Right
              </Button>
            </div>
          </div>
          <div>
            <span className="mb-2 block text-xs text-muted-foreground">
              Large
            </span>
            <div className="inline-flex rounded-md">
              <Button variant="outline" size="lg" className="rounded-r-none">
                Left
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none border-l-0"
              >
                Center
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-l-none border-l-0"
              >
                Right
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination-style */}
      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Pagination
        </h2>
        <div className="inline-flex rounded-md">
          <Button variant="outline" size="icon" className="rounded-r-none">
            <IconChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-l-0 min-w-9"
          >
            1
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-l-0 min-w-9 bg-accent"
          >
            2
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-l-0 min-w-9"
          >
            3
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-l-0 min-w-9"
          >
            ...
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-l-0 min-w-9"
          >
            10
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-l-none border-l-0"
          >
            <IconChevronRight className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
