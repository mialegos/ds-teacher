"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/shadcn/collapsible";
import { Button } from "@/components/shadcn/button";
import { IconChevronDown } from "@tabler/icons-react";

export default function CollapsiblePage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p className="mt-2 text-muted-foreground">
          Сворачиваемый контейнер. Построен на Radix Collapsible.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Закрыт по умолчанию
        </h2>
        <Collapsible open={open1} onOpenChange={setOpen1} className="w-full max-w-md">
          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2">
            <span className="text-sm font-medium">3 модуля</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconChevronDown
                  className={`size-4 transition-transform ${open1 ? "rotate-180" : ""}`}
                />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2 space-y-2">
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              Модуль 1: Введение
            </div>
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              Модуль 2: Основы
            </div>
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              Модуль 3: Практика
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Открыт по умолчанию
        </h2>
        <Collapsible open={open2} onOpenChange={setOpen2} className="w-full max-w-md">
          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2">
            <span className="text-sm font-medium">Дополнительные настройки</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconChevronDown
                  className={`size-4 transition-transform ${open2 ? "rotate-180" : ""}`}
                />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2 space-y-2">
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              Автосохранение: включено
            </div>
            <div className="rounded-md border border-border px-4 py-2 text-sm">
              Язык интерфейса: Русский
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
