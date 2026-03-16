"use client";

import { Toggle } from "@/components/shadcn/toggle";
import { IconBold } from "@tabler/icons-react";

export default function ToggleShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="mt-2 text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Default variant */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Default
          </h2>
          <div className="flex flex-wrap gap-3">
            <Toggle aria-label="Bold">
              <IconBold className="size-4" />
            </Toggle>
            <Toggle aria-label="Bold" defaultPressed>
              <IconBold className="size-4" />
            </Toggle>
            <Toggle aria-label="Bold">
              <IconBold className="size-4" />
              Bold
            </Toggle>
            <Toggle aria-label="Bold" defaultPressed>
              <IconBold className="size-4" />
              Bold
            </Toggle>
            <Toggle aria-label="Bold" disabled>
              <IconBold className="size-4" />
              Bold
            </Toggle>
          </div>
        </section>

        {/* Outline variant */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Outline
          </h2>
          <div className="flex flex-wrap gap-3">
            <Toggle variant="outline" aria-label="Bold">
              <IconBold className="size-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Bold" defaultPressed>
              <IconBold className="size-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Bold">
              <IconBold className="size-4" />
              Bold
            </Toggle>
            <Toggle variant="outline" aria-label="Bold" defaultPressed>
              <IconBold className="size-4" />
              Bold
            </Toggle>
            <Toggle variant="outline" aria-label="Bold" disabled>
              <IconBold className="size-4" />
              Bold
            </Toggle>
          </div>
        </section>
      </div>
    </div>
  );
}
