import Link from "next/link";

const sections = [
  {
    title: "Shadcn",
    description: "Компоненты на базе Tailwind CSS + shadcn/ui",
    href: "/shadcn/ui-kit",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          Artifact Teacher
        </h1>
        <p className="mt-3 text-lg text-text-muted">
          Тестовый стенд для разработки UI Kit
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group rounded-xl border border-border bg-surface p-8 transition-all hover:border-primary hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-text group-hover:text-primary">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-text-muted">{s.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
