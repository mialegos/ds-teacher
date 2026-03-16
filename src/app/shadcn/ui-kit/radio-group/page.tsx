"use client";

import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import { Label } from "@/components/shadcn/label";

export default function RadioGroupShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="mt-2 text-muted-foreground">
          A set of checkable buttons—known as radio buttons—where no more than
          one of the buttons can be checked at a time.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Single unselected */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Single radio
          </h2>
          <div className="flex gap-6">
            <RadioGroup>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="unselected" id="r-unselected" />
                <Label htmlFor="r-unselected">Unselected</Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="selected">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="selected" id="r-selected" />
                <Label htmlFor="r-selected">Selected</Label>
              </div>
            </RadioGroup>
          </div>
        </section>

        {/* Radio with text + description */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With description
          </h2>
          <RadioGroup className="gap-4">
            <div className="flex items-start gap-3">
              <RadioGroupItem value="text-1" id="r-text-1" className="mt-0.5" />
              <div>
                <Label htmlFor="r-text-1" className="font-medium">
                  Radio Button Text
                </Label>
                <p className="text-sm text-muted-foreground">
                  This is a radio description.
                </p>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="text-2" className="mt-3 gap-4">
            <div className="flex items-start gap-3">
              <RadioGroupItem value="text-2" id="r-text-2" className="mt-0.5" />
              <div>
                <Label htmlFor="r-text-2" className="font-medium">
                  Radio Button Text
                </Label>
                <p className="text-sm text-muted-foreground">
                  This is a radio description.
                </p>
              </div>
            </div>
          </RadioGroup>
        </section>

        {/* Default / Comfortable / Compact */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Radio group
          </h2>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="r-default" />
              <Label htmlFor="r-default">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r-comfortable" />
              <Label htmlFor="r-comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="r-compact" />
              <Label htmlFor="r-compact">Compact</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Radio card */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Card variant
          </h2>
          <RadioGroup defaultValue="starter" className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer rounded-lg border-2 p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <div className="flex items-start gap-3">
                <RadioGroupItem value="starter" id="plan-starter" className="mt-0.5" />
                <div>
                  <span className="text-sm font-semibold">Starter Plan</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Perfect for getting started
                  </p>
                </div>
              </div>
            </label>
            <label className="cursor-pointer rounded-lg border-2 p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <div className="flex items-start gap-3">
                <RadioGroupItem value="pro" id="plan-pro" className="mt-0.5" />
                <div>
                  <span className="text-sm font-semibold">Pro Plan</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    For professional use
                  </p>
                </div>
              </div>
            </label>
          </RadioGroup>
        </section>

        {/* Error state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error state
          </h2>
          <div className="space-y-2">
            <RadioGroup aria-invalid="true">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="r-err-default" aria-invalid="true" />
                <Label htmlFor="r-err-default" className="text-destructive">
                  Default
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="r-err-comfortable" aria-invalid="true" />
                <Label htmlFor="r-err-comfortable" className="text-destructive">
                  Comfortable
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="r-err-compact" aria-invalid="true" />
                <Label htmlFor="r-err-compact" className="text-destructive">
                  Compact
                </Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-destructive">
              Please select an option.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
