import { Separator } from "@/components/shadcn/separator";

export default function SeparatorShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
        <p className="mt-2 text-muted-foreground">
          Visually or semantically separates content.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Header style */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Header
          </h2>
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">shadcn/ui</h4>
              <p className="text-sm text-muted-foreground">
                The Foundation for your Design System
              </p>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              An open-source UI component library built with Radix UI and
              Tailwind CSS. Fully customizable. Copy and paste into your apps.
            </p>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <a href="#" className="hover:underline">Blog</a>
              <Separator orientation="vertical" />
              <a href="#" className="hover:underline">Docs</a>
              <Separator orientation="vertical" />
              <a href="#" className="hover:underline">Source</a>
            </div>
          </div>
        </section>

        {/* Three columns */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Vertical separators
          </h2>
          <div className="flex divide-x">
            <div className="px-6 first:pl-0">
              <h4 className="text-sm font-medium">Settings</h4>
              <p className="text-xs text-muted-foreground">Manage preferences</p>
            </div>
            <div className="px-6">
              <h4 className="text-sm font-medium">Account</h4>
              <p className="text-xs text-muted-foreground">
                Profile &amp; security
              </p>
            </div>
            <div className="px-6">
              <h4 className="text-sm font-medium">Help</h4>
              <p className="text-xs text-muted-foreground">
                Support &amp; docs
              </p>
            </div>
          </div>
        </section>

        {/* Table-like list */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            List with separators
          </h2>
          <div className="max-w-sm">
            {[
              { label: "Item 1", value: "Value 1" },
              { label: "Item 2", value: "Value 2" },
              { label: "Item 3", value: "Value 3" },
            ].map((item, i, arr) => (
              <div key={item.label}>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                {i < arr.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
