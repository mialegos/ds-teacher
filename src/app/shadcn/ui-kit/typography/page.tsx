export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="mt-3 text-muted-foreground">
          Шрифт Struve подключён со всеми начертаниями. Используется как{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            font-sans
          </code>{" "}
          по всему проекту.
        </p>
      </div>

      <section className="border-b border-border pb-12">
        <h2 className="mb-6 text-lg font-semibold">Начертания</h2>
        <div className="space-y-5">
          {[
            { weight: "font-light", label: "Light", value: "300" },
            { weight: "font-normal", label: "Regular", value: "400" },
            { weight: "font-medium", label: "Medium", value: "500" },
            { weight: "font-semibold", label: "Semibold", value: "600" },
            { weight: "font-bold", label: "Bold", value: "700" },
          ].map((f) => (
            <div key={f.value} className="flex items-baseline gap-6">
              <span className="w-32 shrink-0 text-xs text-muted-foreground">
                {f.label} ({f.value})
              </span>
              <span className={`text-2xl ${f.weight}`}>
                Struve — The quick brown fox jumps
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-12">
        <h2 className="mb-6 text-lg font-semibold">Slanted</h2>
        <div className="space-y-5">
          {[
            { weight: "font-light", label: "Light Slanted", value: "300" },
            { weight: "font-normal", label: "Regular Slanted", value: "400" },
            { weight: "font-medium", label: "Medium Slanted", value: "500" },
            { weight: "font-semibold", label: "Semibold Slanted", value: "600" },
            { weight: "font-bold", label: "Bold Slanted", value: "700" },
          ].map((f) => (
            <div key={f.value} className="flex items-baseline gap-6">
              <span className="w-32 shrink-0 text-xs text-muted-foreground">
                {f.label}
              </span>
              <span className={`text-2xl italic ${f.weight}`}>
                Struve — The quick brown fox jumps
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-12">
        <h2 className="mb-6 text-lg font-semibold">Масштаб</h2>
        <div className="space-y-4">
          {[
            { cls: "text-xs", label: "text-xs", size: "12px / 16px" },
            { cls: "text-sm", label: "text-sm", size: "14px / 20px" },
            { cls: "text-base", label: "text-base", size: "16px / 24px" },
            { cls: "text-lg", label: "text-lg", size: "18px / 28px" },
            { cls: "text-xl", label: "text-xl", size: "20px / 28px" },
            { cls: "text-2xl", label: "text-2xl", size: "24px / 32px" },
            { cls: "text-3xl", label: "text-3xl", size: "30px / 36px" },
            { cls: "text-4xl", label: "text-4xl", size: "36px / 40px" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-6">
              <div className="w-32 shrink-0">
                <span className="text-xs text-muted-foreground">{t.label}</span>
                <span className="ml-2 text-xs text-muted-foreground/60">
                  {t.size}
                </span>
              </div>
              <span className={t.cls}>Съешь ещё этих мягких французских булок</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-lg font-semibold">Пример текста</h2>
        <div className="max-w-2xl space-y-4">
          <h3 className="text-2xl font-bold">Заголовок статьи</h3>
          <p className="text-muted-foreground">
            Обучение должно быть доступным, персонализированным и вовлекающим.
            Мы создаём инструменты, которые помогают учителям сосредоточиться
            на главном — передаче знаний.
          </p>
          <p className="text-sm">
            Платформа поддерживает создание интерактивных артефактов,
            автоматическую проверку заданий и{" "}
            <span className="font-semibold">аналитику прогресса</span>{" "}
            каждого ученика.
          </p>
        </div>
      </section>
    </div>
  );
}
