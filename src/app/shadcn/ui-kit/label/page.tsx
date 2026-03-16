import { Label } from "@/components/shadcn/label";
import { Input } from "@/components/shadcn/input";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Alert, AlertDescription } from "@/components/shadcn/alert";
import { IconSearch, IconInfoCircle } from "@tabler/icons-react";

export default function LabelShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="mt-2 text-muted-foreground">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <Alert variant="warning" className="mb-8">
        <IconInfoCircle className="size-4" />
        <AlertDescription>
          The Label is already added to the Field components and controls for
          improved usability in Figma.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-10 max-w-sm">
        {/* Label + Input with search icon + shortcut badge + description */}
        <section>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="search-input">Search</Label>
              <kbd className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                ⌘F
              </kbd>
            </div>
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="search-input"
                placeholder="Search..."
                className="pl-9"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              This is an input description.
            </p>
          </div>
        </section>

        {/* Checkbox Label */}
        <section>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-label" />
            <Label htmlFor="checkbox-label">
              Accept terms and conditions
            </Label>
          </div>
        </section>
      </div>
    </div>
  );
}
