# Дизайн-система DS v2 — Обязательные правила

> **КРИТИЧЕСКИ ВАЖНО**: Этот документ описывает ОБЯЗАТЕЛЬНЫЕ правила оформления.
> Каждое правило содержит готовый код. Копируй и применяй буквально.
> Живой пример: https://mialegos.github.io/ds-teacher/example/more-ryadom-ds2/
> Компоненты: https://github.com/mialegos/ds-teacher

---

## ГЛАВНОЕ ПРАВИЛО

**Каждый логический блок информации = отдельная белая карточка на сером фоне.**

Фон страницы — тёплый серый (`bg-muted`, `#F7F6F3`).
Контент разбивается на карточки с отступами `mb-5` между ними.

```
НЕПРАВИЛЬНО: сплошной текст на белом фоне, одна большая простыня
ПРАВИЛЬНО: каждая секция обёрнута в отдельную белую карточку
```

---

## Карточка секции

Каждый блок информации оборачивается в:

```tsx
<div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
  style={{ animationDelay: "160ms" }}>
  <h2 className="text-lg font-medium">Заголовок секции</h2>
  {/* контент */}
</div>
```

**ЗАПРЕЩЕНО**: `shadow-*`, `rounded-[48px]`, `bg-card`. Только `rounded-xl border border-border bg-white`.

---

## Шаблон: детальная страница (урок, консультация, профиль)

Вот ТОЧНАЯ структура. Каждая детальная страница ОБЯЗАНА иметь эту разбивку:

```tsx
<div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 md:px-8 md:py-8">

  {/* 1. ХЛЕБНЫЕ КРОШКИ */}
  <div className="anim-fade-up mb-4 text-sm text-muted-foreground">
    <Link href="/lessons" className="hover:text-foreground">Уроки</Link>
    <span className="mx-1.5">›</span>
    <span>8а — Физика</span>
  </div>

  {/* 2. ЗАГОЛОВОК + БЕЙДЖ */}
  <div className="anim-fade-up mb-6" style={{ animationDelay: "40ms" }}>
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-medium tracking-tight">8а — Параллельное соединение</h1>
      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
        34/42 (81%)
      </span>
    </div>
    <p className="mt-1 text-sm text-muted-foreground">
      Учитель: Александр · 03.03.2026, 13:02 · Физика
    </p>
  </div>

  {/* 3. KPI-БЛОК (числовые метрики) — отдельная карточка */}
  <div className="anim-fade-up mb-5 overflow-hidden rounded-xl border border-border bg-white"
    style={{ animationDelay: "80ms" }}>
    <div className="kpi-grid">
      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="truncate text-2xl font-semibold sm:text-3xl">34/42</p>
        <p className="mt-1 truncate text-sm text-muted-foreground">Общий балл</p>
      </div>
      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="truncate text-2xl font-semibold sm:text-3xl">81%</p>
        <p className="mt-1 truncate text-sm text-muted-foreground">Результат</p>
      </div>
      <div className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="truncate text-2xl font-semibold sm:text-3xl">30:30</p>
        <p className="mt-1 truncate text-sm text-muted-foreground">Длительность</p>
      </div>
    </div>
  </div>

  {/* 4. ИНФОРМАЦИЯ — отдельная карточка */}
  <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
    style={{ animationDelay: "160ms" }}>
    <h2 className="text-lg font-medium">Информация</h2>
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div>
        <p className="text-sm text-muted-foreground">Предмет/Тема</p>
        <p className="mt-0.5 text-base text-foreground">Физика / Параллельное соединение</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Тип урока</p>
        <p className="mt-0.5 text-base text-foreground">Комбинированный</p>
      </div>
      <div className="sm:col-span-2">
        <p className="text-sm text-muted-foreground">Профиль класса</p>
        <p className="mt-0.5 text-base leading-relaxed text-foreground">
          8А (13-14 лет). Уровень дисциплины — borderline. Класс активный, шумный.
        </p>
      </div>
    </div>
  </div>

  {/* 5. ХРОНОЛОГИЯ / ТАЙМЛАЙН — отдельная карточка */}
  <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
    style={{ animationDelay: "240ms" }}>
    <h2 className="mb-4 text-lg font-medium">Хронология урока</h2>
    <div className="flex flex-col">
      {timeline.map((t, i) => (
        <div key={i} className={`flex gap-4 ${i < timeline.length - 1 ? "border-b border-border/40 pb-4 mb-4" : ""}`}>
          <div className="w-28 shrink-0">
            <span className="rounded-md bg-muted px-2 py-0.5 text-sm font-medium tabular-nums">
              {t.time}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-medium">{t.title}</p>
            <p className="mt-1 text-base leading-relaxed text-foreground">{t.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* 6. ОЦЕНКА ПО КРИТЕРИЯМ — отдельная карточка */}
  <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
    style={{ animationDelay: "320ms" }}>
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-medium">Сводная таблица баллов</h2>
      <ScoreDonut score={81} size={72} />
    </div>
    {/* Заголовок группы критериев */}
    <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      Блок 1: Структура урока
    </p>
    <div className="flex flex-col">
      {criteria.map((cr, i) => {
        const pct = (cr.score / cr.max) * 100;
        const color = pct >= 65 ? "var(--chart-green)" : pct >= 40 ? "var(--chart-orange)" : "var(--chart-red)";
        return (
          <div key={i} className="border-b border-border/40 py-3.5">
            <div className="flex items-baseline justify-between">
              <p className="text-base font-medium">{cr.name}</p>
              <span className="text-base font-semibold tabular-nums" style={{ color }}>
                {cr.score} / {cr.max}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
              style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
              <div className="anim-bar-x h-full rounded-full"
                style={{ width: `${pct}%`, background: color }} />
            </div>
            <p className="mt-1.5 text-base leading-relaxed text-foreground">{cr.comment}</p>
          </div>
        );
      })}
    </div>
  </div>

  {/* 7. РЕКОМЕНДАЦИИ — отдельная карточка с буллитами */}
  <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
    style={{ animationDelay: "400ms" }}>
    <h2 className="mb-3 text-lg font-medium">Рекомендации</h2>
    <ul className="flex flex-col gap-2.5">
      {recommendations.map((r, i) => (
        <li key={i} className="flex items-start gap-2.5 text-base text-foreground">
          <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
          <span className="leading-relaxed">{r}</span>
        </li>
      ))}
    </ul>
  </div>

</div>
```

---

## Шаблон: страница-список (учителя, уроки, классы)

```tsx
<div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">

  {/* Заголовок */}
  <div className="anim-fade-up mb-6">
    <h1 className="text-3xl font-bold sm:text-4xl">Учителя</h1>
    <p className="mt-1 text-base text-muted-foreground">67 учителей в системе</p>
  </div>

  {/* KPI */}
  <div className="anim-fade-up mb-5 overflow-hidden rounded-xl border border-border bg-white"
    style={{ animationDelay: "60ms" }}>
    <div className="kpi-grid">
      {/* ... KPI ячейки ... */}
    </div>
  </div>

  {/* Таблица — ОТДЕЛЬНАЯ карточка, ТОЛЬКО Shadcn Table */}
  <div className="anim-fade-up rounded-xl border border-border bg-white"
    style={{ animationDelay: "120ms" }}>

    {/* Заголовок таблицы с фильтрами */}
    <div className="flex items-center justify-between p-5">
      <h2 className="text-lg font-medium">Все учителя</h2>
      {/* фильтры */}
    </div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead>Уроков</TableHead>
          <TableHead className="text-right">Ср. балл</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map(t => (
          <TableRow key={t.id} className="cursor-pointer"
            onClick={() => router.push(`/teachers/${t.id}`)}>
            <TableCell className="font-medium">{t.name}</TableCell>
            <TableCell>{t.lessons}</TableCell>
            <TableCell className="text-right font-medium tabular-nums"
              style={{ color: scoreColor(t.avg) }}>
              {t.avg}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>
```

---

## Шаблон: дашборд

```tsx
<div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">

  {/* Заголовок */}
  <div className="anim-fade-up mb-6">
    <h1 className="text-3xl font-bold sm:text-4xl">Дашборд</h1>
    <p className="mt-1 text-base text-muted-foreground">Обзор за текущий период</p>
  </div>

  {/* KPI */}
  <div className="anim-fade-up mb-5 overflow-hidden rounded-xl border border-border bg-white"
    style={{ animationDelay: "60ms" }}>
    <div className="kpi-grid">
      {/* 3-4 KPI ячейки */}
    </div>
  </div>

  {/* График — ОТДЕЛЬНАЯ карточка */}
  <div className="anim-fade-up mb-5 rounded-xl border border-border bg-white p-5 sm:p-6"
    style={{ animationDelay: "120ms" }}>
    <h2 className="text-lg font-medium">Динамика среднего балла</h2>
    <div className="mt-4 h-64">
      {/* Recharts график */}
    </div>
  </div>

  {/* Две колонки: Лучшие учителя + Последние уроки */}
  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

    {/* Лучшие учителя — карточка */}
    <div className="anim-fade-up rounded-xl border border-border bg-white"
      style={{ animationDelay: "180ms" }}>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-lg font-medium">Лучшие учителя</h2>
        <Link href="/teachers" className="text-sm text-muted-foreground hover:text-foreground">Все</Link>
      </div>
      {items.map(item => (
        <Link key={item.id} href={`/teachers/${item.id}`}
          className="flex items-center gap-3 border-t border-border/40 px-5 py-3 transition-colors hover:bg-black/[0.03]">
          {/* ... */}
        </Link>
      ))}
    </div>

    {/* Последние уроки — карточка */}
    <div className="anim-fade-up rounded-xl border border-border bg-white"
      style={{ animationDelay: "240ms" }}>
      {/* аналогичная структура */}
    </div>
  </div>
</div>
```

---

## Типографика

| Элемент | Класс | Пример |
|---|---|---|
| Заголовок страницы | `text-3xl font-bold sm:text-4xl` | «Дашборд», «Учителя» |
| Заголовок блока/карточки | `text-lg font-medium` | «Резюме», «Оценка по критериям» |
| Наборный текст | `text-base leading-relaxed text-foreground` | Описания, комментарии |
| Мета-информация | `text-sm text-muted-foreground` | Даты, подписи, метки |
| Uppercase-метка | `text-xs font-semibold uppercase tracking-wider text-muted-foreground` | «БЛОК 1: СТРУКТУРА» |
| KPI значение | `text-2xl sm:text-3xl font-semibold` | «67», «81%» |

---

## Цвета

```css
--primary: hsl(125 100% 35%);     /* зелёный — основной */
--muted: #F7F6F3;                  /* тёплый серый — фон страницы */
--border: hsl(240 5.9% 90%);      /* границы карточек */
--foreground: hsl(240 10% 3.9%);  /* чёрный текст */
--muted-foreground: hsl(240 3.8% 46.1%); /* серый текст */
--chart-green: #00cc00;
--chart-orange: #ff8f00;
--chart-red: #ff000b;
```

Цвет оценки: `≥65% = green`, `≥40% = orange`, `<40% = red`

---

## Бейджи

```
Положительный:  bg-primary/10 text-primary
Отрицательный:  bg-red-50 text-red-700
Нейтральный:    bg-black/[0.06] text-muted-foreground
Предупреждение: bg-amber-50 text-amber-700
Формат:         rounded-full px-2.5 py-0.5 text-xs font-medium
```

---

## Анимации

Каждая карточка на странице получает `anim-fade-up` с нарастающей задержкой:

```
Блок 1: animationDelay: "60ms"
Блок 2: animationDelay: "120ms"
Блок 3: animationDelay: "180ms"
...шаг 60–80ms
```

---

## Сайдбар

- Фон: `bg-sidebar` = `#F7F6F3`
- Desktop: `w-64`, сворачивается в `w-16` кликом
- Mobile: shadcn `Sheet` с `side="left"`
- Активный пункт: `bg-black/[0.06] font-medium text-foreground`
- Hover: `hover:bg-black/[0.04]`
- Иконка активного: `text-primary`

---

## ЗАПРЕЩЕНО: сырой HTML

**Никогда** не используй нативные HTML-элементы для таблиц, кнопок, инпутов, диалогов и т.д.
Всегда импортируй Shadcn-компоненты из `@/components/ui/`:

```
ЗАПРЕЩЕНО                           ПРАВИЛЬНО
─────────                           ─────────
<table>, <th>, <td>                 Table, TableHead, TableCell
<button>                            Button
<input>                             Input
<select>                            Select, SelectTrigger, SelectContent
<dialog>                            Dialog, DialogContent
```

### Таблицы — ТОЛЬКО через Shadcn Table

```tsx
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Название</TableHead>
      <TableHead className="text-right">Балл</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {items.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-medium">{item.name}</TableCell>
        <TableCell className="text-right">{item.score}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Ссылки в таблицах — чёрные, не зелёные

```
ЗАПРЕЩЕНО: className="text-primary hover:underline"
ПРАВИЛЬНО: className="text-foreground hover:underline font-medium"
```

`text-primary` (зелёный) используется ТОЛЬКО для:
- CTA-кнопок (`bg-primary text-primary-foreground`)
- Активных вкладок (`border-primary text-primary`)
- Иконок активного пункта сайдбара

---

## Цвета диаграмм

Основной цвет для графиков — **зелёный** (совпадает с `--primary`).

| Переменная | Цвет | Использование |
|---|---|---|
| `--chart-1` | `#00b330` зелёный | **Основной** — одиночные графики |
| `--chart-2` | `#0089ff` синий | Вторая серия |
| `--chart-3` | `#c952de` фиолетовый | Третья серия |
| `--chart-4` | `#ff8f00` оранжевый | Четвёртая серия |
| `--chart-5` | `#ff000b` красный | Пятая серия / негатив |

```tsx
<Line stroke="var(--chart-1)" />
<ChartContainer config={{ score: { label: "Балл", color: "var(--chart-1)" } }} />
```

**ЗАПРЕЩЕНО**: hardcoded hex-коды (`#60a5fa`, `#ff8f00`). Только `var(--chart-*)`.

---

## Чеклист

Перед сдачей страницы проверь:

1. ✅ Фон страницы — серый (`bg-muted`)
2. ✅ Каждая секция — **отдельная белая карточка** (`rounded-xl border border-border bg-white`)
3. ✅ Между карточками `mb-5`
4. ✅ Нет теней на карточках
5. ✅ Наборный текст чёрный `text-foreground`, размер `text-base`
6. ✅ Заголовки карточек: `text-lg font-medium`
7. ✅ KPI вынесены в отдельную полоску с `kpi-grid`
8. ✅ Таблицы: **только Shadcn Table**, хедер `font-medium text-foreground`
9. ✅ Анимации `anim-fade-up` на каждом блоке
10. ✅ Цвета оценок: green/orange/red по порогам
11. ✅ Нет сырого HTML (`<table>`, `<th>`, `<td>`, `<button>`)
12. ✅ Ссылки в таблицах — `text-foreground`, не `text-primary`
13. ✅ Action-иконки в таблицах — `text-muted-foreground`, не `text-primary`
14. ✅ Нет `bg-card` — только `bg-white` для карточек
15. ✅ Нет `text-gray-*`, `bg-gray-*`, `border-gray-*` — только DS-токены
16. ✅ Прогресс-бары используют `color-mix(in srgb, ${color} 12%, transparent)` для незалитой части

---

## Рендеринг AI-результатов (report-blocks)

Компоненты в `lib/report-blocks/renderer/blocks/` рендерят структурированные данные (JSON) от AI-ядра. На них распространяются **все те же правила DS**.

### Обязательно

- Импортировать Shadcn `Table`, `Button` и т.д. — не использовать raw HTML
- `bg-white` для карточек, `rounded-xl border border-border`
- `text-lg font-medium` для заголовков блоков
- `text-base text-foreground leading-relaxed` для наборного текста
- `color-mix` для незалитой части прогресс-баров и score-dots

### Шаблон нового блока

```tsx
"use client";

import type { MyBlock as MyBlockType } from "../../types";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

export function MyBlock({ ... }: MyBlockType) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 sm:p-6">
      <h3 className="text-lg font-medium text-foreground">Заголовок</h3>
      <div className="text-base text-foreground leading-relaxed">
        {/* контент */}
      </div>
    </div>
  );
}
```
