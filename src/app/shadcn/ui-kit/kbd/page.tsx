import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { IconSearch, IconCheck } from "@tabler/icons-react";

const Kbd = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <kbd
    className={`inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 py-0.5 text-xs font-mono ${className}`}
  >
    {children}
  </kbd>
);

export default function KbdShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Kbd</h1>
        <p className="mt-2 text-muted-foreground">
          Keyboard input element to display keyboard shortcuts and key
          combinations.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Ctrl + K */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Simple shortcut
          </h2>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-xs text-muted-foreground">+</span>
            <Kbd>K</Kbd>
          </div>
        </section>

        {/* Save Changes button + shortcut */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Button with shortcut
          </h2>
          <div className="flex items-center gap-4">
            <Button>Save Changes</Button>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </div>
          </div>
        </section>

        {/* Search bar with ⌘K hint */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Search with shortcut hint
          </h2>
          <div className="relative max-w-sm">
            <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9 pr-16" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
          </div>
        </section>

        {/* Key combinations */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Key combinations
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <Kbd>Ctrl</Kbd>
              <Kbd>⌫</Kbd>
            </div>
            <div className="flex items-center gap-1">
              <Kbd>Ctrl</Kbd>
              <Kbd>S</Kbd>
            </div>
          </div>
        </section>

        {/* Arrow keys */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Arrow keys
          </h2>
          <div className="flex items-center gap-2">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
          </div>
        </section>

        {/* Modifier combos */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Modifier combinations
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>K</Kbd>
            </div>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>⌥</Kbd>
              <Kbd>⌃</Kbd>
            </div>
          </div>
        </section>

        {/* Special keys */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Special keys
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>↵ Enter</Kbd>
            <Kbd>⌫ Backspace</Kbd>
            <Kbd className="min-w-[80px]">Space</Kbd>
            <Kbd>Fn</Kbd>
            <Kbd>Esc</Kbd>
          </div>
        </section>

        {/* Accept / Cancel */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Action keys
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Accept</span>
              <Kbd>
                <IconCheck className="size-3" />
              </Kbd>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Cancel</span>
              <Kbd>Esc</Kbd>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
