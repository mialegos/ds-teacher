"use client";

import { useState } from "react";
import { Slider } from "@/components/shadcn/slider";

export default function SliderShowcase() {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="mt-2 text-muted-foreground">
          Ползунок для выбора значения из диапазона.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          По умолчанию
        </h2>
        <div className="max-w-sm">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          С отображением значения
        </h2>
        <div className="max-w-sm space-y-3">
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">
            Текущее значение:{" "}
            <span className="font-medium text-foreground">{value[0]}</span>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Диапазон (min/max)
        </h2>
        <div className="max-w-sm space-y-3">
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">
            Диапазон:{" "}
            <span className="font-medium text-foreground">
              {rangeValue[0]} – {rangeValue[1]}
            </span>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          С шагом 10
        </h2>
        <div className="max-w-sm">
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Отключённый
        </h2>
        <div className="max-w-sm">
          <Slider defaultValue={[40]} max={100} step={1} disabled />
        </div>
      </section>
    </div>
  );
}
