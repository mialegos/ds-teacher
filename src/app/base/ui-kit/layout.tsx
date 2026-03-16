import Link from "next/link";

const sections = [
  { id: "button", label: "Button" },
  { id: "typography", label: "Typography" },
  { id: "input", label: "Input" },
  { id: "textarea", label: "Textarea" },
  { id: "select", label: "Select" },
  { id: "date-picker", label: "Date Picker" },
  { id: "checkbox", label: "Checkbox" },
  { id: "badge", label: "Badge" },
  { id: "card", label: "Card" },
  { id: "toggle", label: "Toggle" },
];

export default function UiKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-border bg-surface p-6">
        <Link href="/" className="text-lg font-bold text-text hover:text-primary transition-colors">
          Artifact Teacher
        </Link>
        <p className="mt-1 text-xs text-text-muted">Base UI Kit</p>

        <nav className="mt-8 flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
