"use client";

import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shadcn/toggle-group";
import {
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
} from "@tabler/icons-react";

export default function ToggleGroupShowcase() {
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p className="mt-2 text-muted-foreground">
          Группа кнопок-переключателей с поддержкой одиночного и множественного
          выбора.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Одиночный выбор (выравнивание)
        </h2>
        <div className="space-y-3">
          <ToggleGroup
            type="single"
            value={alignment}
            onValueChange={(val) => {
              if (val) setAlignment(val);
            }}
          >
            <ToggleGroupItem value="left" aria-label="По левому краю">
              <IconAlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="По центру">
              <IconAlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="По правому краю">
              <IconAlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="По ширине">
              <IconAlignJustified className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground">
            Выбрано: <span className="font-medium text-foreground">{alignment}</span>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Множественный выбор (форматирование)
        </h2>
        <div className="space-y-3">
          <ToggleGroup
            type="multiple"
            value={formats}
            onValueChange={setFormats}
          >
            <ToggleGroupItem value="bold" aria-label="Жирный">
              <IconBold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Курсив">
              <IconItalic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Подчёркнутый">
              <IconUnderline className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Зачёркнутый">
              <IconStrikethrough className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground">
            Выбрано:{" "}
            <span className="font-medium text-foreground">
              {formats.length > 0 ? formats.join(", ") : "ничего"}
            </span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Outline вариант
        </h2>
        <ToggleGroup type="single" variant="outline" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="По левому краю">
            <IconAlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="По центру">
            <IconAlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="По правому краю">
            <IconAlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    </div>
  );
}
