export default function DirectionShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Direction</h1>
        <p className="mt-2 text-muted-foreground">
          Примеры направления текста: LTR (слева направо) и RTL (справа налево).
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          LTR — слева направо
        </h2>
        <div
          dir="ltr"
          className="rounded-lg border border-border p-6 space-y-2"
        >
          <p className="text-sm font-medium">Left-to-Right текст</p>
          <p className="text-sm text-muted-foreground">
            Это стандартное направление для русского и английского языков.
            Текст читается слева направо.
          </p>
          <div className="flex gap-2 pt-2">
            <span className="rounded bg-muted px-2 py-1 text-xs">Первый</span>
            <span className="rounded bg-muted px-2 py-1 text-xs">Второй</span>
            <span className="rounded bg-muted px-2 py-1 text-xs">Третий</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          RTL — справа налево
        </h2>
        <div
          dir="rtl"
          className="rounded-lg border border-border p-6 space-y-2"
        >
          <p className="text-sm font-medium">نص من اليمين إلى اليسار</p>
          <p className="text-sm text-muted-foreground">
            هذا مثال على النص العربي الذي يُقرأ من اليمين إلى اليسار.
            الاتجاه يتغير تلقائيًا.
          </p>
          <div className="flex gap-2 pt-2">
            <span className="rounded bg-muted px-2 py-1 text-xs">الأول</span>
            <span className="rounded bg-muted px-2 py-1 text-xs">الثاني</span>
            <span className="rounded bg-muted px-2 py-1 text-xs">الثالث</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Сравнение
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div
            dir="ltr"
            className="rounded-lg border border-border p-4"
          >
            <p className="text-xs font-medium text-muted-foreground mb-2">
              dir=&quot;ltr&quot;
            </p>
            <p className="text-sm">Имя: Иван Иванов</p>
            <p className="text-sm">Email: ivan@example.com</p>
          </div>
          <div
            dir="rtl"
            className="rounded-lg border border-border p-4"
          >
            <p className="text-xs font-medium text-muted-foreground mb-2">
              dir=&quot;rtl&quot;
            </p>
            <p className="text-sm">الاسم: أحمد محمد</p>
            <p className="text-sm">البريد: ahmed@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
