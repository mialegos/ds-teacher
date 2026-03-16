# Промпт для сборки проекта на DS v2

> Этот документ — инструкция для AI (Cursor, Replit, Claude) и разработчиков.
> Вставь его как системный промпт или правило, чтобы новые страницы собирались в едином стиле.
> Живой пример: https://mialegos.github.io/ds-teacher/example/more-ryadom-ds2/

---

## Стек

- Next.js 15+ (App Router)
- Tailwind CSS v4
- shadcn/ui (Radix UI)
- Recharts (графики)
- Lucide React (иконки)

## Репозиторий с компонентами

GitHub: https://github.com/mialegos/ds-teacher

Компоненты: `src/components/shadcn/` (45 штук)
Утилиты: `src/lib/utils.ts` — функция `cn()`
Тема: `src/app/example/more-ryadom-ds2/theme.css`

---

## 1. Layout (layout.tsx)

Каждый проект = `layout.tsx` + `page.tsx` + `theme.css`.

### Обёртка

```tsx
<div data-ds-v2 className="flex min-h-screen bg-background text-foreground">
  <aside>...</aside>
  <main className="flex-1 overflow-y-auto bg-muted">
    <div className="mx-auto max-w-screen-xl">{children}</div>
  </main>
</div>
```

### Сайдбар Desktop

```tsx
<aside
  onClick={() => setCollapsed(c => !c)}
  className={`sticky top-0 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200 md:flex ${
    collapsed ? "w-16 cursor-e-resize" : "w-64 cursor-w-resize"
  }`}
>
```

- Клик по пустому месту — сворачивает/разворачивает
- Ссылки: `e.stopPropagation()` чтобы клик по ним не сворачивал
- Лого: `h-8 w-8 rounded-md bg-foreground text-background` + название рядом
- Футер: аватар `h-9 w-9 rounded-full` + имя + роль

### Сайдбар Mobile

```tsx
<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
  <SheetContent side="left" className="w-64 bg-sidebar p-0">
    <VisuallyHidden.Root><SheetTitle>Навигация</SheetTitle></VisuallyHidden.Root>
    ...
  </SheetContent>
</Sheet>
```

Кнопка-гамбургер в sticky top bar `h-12`.

### Стили навигации

```
Активный:  bg-black/[0.06] font-medium text-foreground
Hover:     hover:bg-black/[0.04] hover:text-foreground
Иконка:    активная — text-primary, неактивная — text-muted-foreground
Высота:    h-10, gap-2.5, px-3, text-[15px]
```

### Иконки навигации

Инлайн SVG, viewBox `0 0 16 16`, пропсы `{ active, size }`.
Активная: `text-primary`. Заливка: `fillOpacity` для объёма.

---

## 2. Страницы (page.tsx)

### Обёртка контента

```tsx
<div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
  {/* секции через gap-5 или mb-5 */}
</div>
```

### Секции — белые карточки

```tsx
<div className="rounded-xl border border-border bg-white p-5 sm:p-6">
```

**НЕЛЬЗЯ**: `rounded-[48px]`, `bg-card`, `shadow-sm`. Без теней, без крупных скруглений.

---

## 3. Типографика

| Элемент | Класс |
|---|---|
| Заголовок страницы | `text-3xl font-bold sm:text-4xl` |
| Подзаголовок | `text-base text-muted-foreground` |
| Заголовок блока | `text-lg font-medium` |
| Наборный текст | `text-base leading-relaxed text-foreground` (чёрный, 16px) |
| Мета-информация | `text-sm text-muted-foreground` |
| KPI значение | `text-2xl sm:text-3xl font-semibold` |
| KPI подпись | `text-sm text-muted-foreground` |
| Uppercase-метка | `text-xs font-semibold uppercase tracking-wider text-muted-foreground` |

---

## 4. KPI-блок

```tsx
<div className="overflow-hidden rounded-xl border border-border bg-white">
  <div className="kpi-grid">
    {kpis.map(kpi => (
      <div key={kpi.label} className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="truncate text-2xl font-semibold sm:text-3xl">{kpi.value}</p>
        <p className="mt-1 truncate text-sm text-muted-foreground">{kpi.label}</p>
      </div>
    ))}
  </div>
</div>
```

CSS-класс `kpi-grid` определён в `theme.css`: 2 cols → 3 cols (sm) → flex row (lg), разделители через `gap: 1px`.

---

## 5. Таблицы и списки

### Desktop (hidden md:grid)

```tsx
<div className="grid grid-cols-[...] border-t border-border/40 px-5 py-3 text-sm transition-colors hover:bg-black/[0.03]">
```

### Mobile (md:hidden)

Отдельные карточки `rounded-lg border border-border p-3`.

**НЕ** использовать `md:contents`. Делать два отдельных блока.

### Списки с буллитами

```tsx
<li className="flex items-start gap-2.5 text-base text-foreground">
  <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
  <span className="leading-relaxed">{text}</span>
</li>
```

---

## 6. Бейджи и статусы

```tsx
// Положительный (зелёный)
"bg-primary/10 text-primary"

// Отрицательный (красный)
"bg-red-50 text-red-700"

// Нейтральный
"bg-black/[0.06] text-muted-foreground"

// Предупреждение (оранжевый)
"bg-amber-50 text-amber-700"
```

Формат: `rounded-full px-2.5 py-0.5 text-xs font-medium`

---

## 7. Progress bars

```tsx
const color = percent >= 65 ? "var(--chart-green)" : percent >= 40 ? "var(--chart-orange)" : "var(--chart-red)";

<div className="h-2 w-full overflow-hidden rounded-full"
  style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
  <div className="anim-progress h-full rounded-full"
    style={{ width: `${percent}%`, background: color }} />
</div>
```

---

## 8. Score Donut (круговой прогресс)

```tsx
function ScoreDonut({ score, size = 64, label }: { score: number; size?: number; label?: string }) {
  const sw = size > 56 ? 5 : 4;
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / 100;
  const color = score >= 65 ? "var(--chart-green)" : score >= 40 ? "var(--chart-orange)" : "var(--chart-red)";
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={sw} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round"
          strokeDasharray={`${pct*circ} ${circ}`} transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-bold" style={{ color }}>
        {label ?? `${score}%`}
      </span>
    </div>
  );
}
```

---

## 9. Анимации

Каждая секция на странице — `anim-fade-up` с пошаговой задержкой:

```tsx
<div className="anim-fade-up" style={{ animationDelay: "80ms" }}>...</div>
<div className="anim-fade-up" style={{ animationDelay: "160ms" }}>...</div>
<div className="anim-fade-up" style={{ animationDelay: "240ms" }}>...</div>
```

Шаг: 60–80ms. Доступные классы:
- `anim-fade-up` — появление снизу
- `anim-bar-x` — рост полоски по X
- `anim-bar-y` — рост полоски по Y
- `anim-progress` — рост progress bar
- `anim-radar` — появление радара
- `anim-dot` — появление точки
- `anim-line-draw` — рисование линии

---

## 10. Цвета (theme.css)

```css
--primary: hsl(125 100% 35%);          /* зелёный */
--muted: #F7F6F3;                       /* тёплый серый фон */
--sidebar: #F7F6F3;
--border: hsl(240 5.9% 90%);
--foreground: hsl(240 10% 3.9%);        /* почти чёрный */
--muted-foreground: hsl(240 3.8% 46.1%); /* серый текст */

--chart-green: #00cc00;
--chart-orange: #ff8f00;
--chart-red: #ff000b;
```

---

## 11. Hover-стили

```
Сайдбар:                hover:bg-black/[0.04]
Сайдбар активный:       bg-black/[0.06]
Таблицы/списки:         hover:bg-black/[0.03]
Карточки:               hover:border-primary hover:shadow-md (опционально)
```

---

## 12. Адаптив

- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Mobile sidebar: shadcn `Sheet`
- Текст: `truncate` для длинных значений
- Отступы: `px-4 py-6 sm:px-6 md:px-8 md:py-8`

---

## Чеклист перед сдачей страницы

- [ ] Обёртка `data-ds-v2` есть
- [ ] `theme.css` подключён
- [ ] Секции — белые карточки `rounded-xl border border-border bg-white`
- [ ] Нет теней (`shadow-*`) на карточках
- [ ] Наборный текст: `text-base leading-relaxed text-foreground`
- [ ] Заголовки блоков: `text-lg font-medium`
- [ ] KPI через `kpi-grid`
- [ ] Анимации `anim-fade-up` с шагом 60–80ms
- [ ] Цвета прогресса: green ≥65, orange ≥40, red <40
- [ ] Сайдбар: сворачивается, mobile Sheet
- [ ] Адаптив: отдельные блоки для mobile и desktop таблиц
