"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/shadcn/progress";

export default function ProgressShowcase() {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimated(25), 300);
    const timer2 = setTimeout(() => setAnimated(50), 800);
    const timer3 = setTimeout(() => setAnimated(75), 1300);
    const timer4 = setTimeout(() => setAnimated(90), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="mt-2 text-muted-foreground">
          Индикатор прогресса выполнения. Построен на Radix Progress.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Фиксированные значения
        </h2>
        <div className="flex max-w-md flex-col gap-6">
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Начальный уровень</span>
              <span className="text-muted-foreground">25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Средний уровень</span>
              <span className="text-muted-foreground">50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Продвинутый уровень</span>
              <span className="text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>Завершено</span>
              <span className="text-muted-foreground">100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Анимированный
        </h2>
        <div className="max-w-md space-y-1.5">
          <div className="flex justify-between text-sm">
            <span>Загрузка данных…</span>
            <span className="text-muted-foreground">{animated}%</span>
          </div>
          <Progress value={animated} />
        </div>
      </section>
    </div>
  );
}
