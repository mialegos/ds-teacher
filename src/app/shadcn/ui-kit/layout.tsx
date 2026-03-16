"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string; exact?: boolean; external?: boolean };

const navSections: { title: string | null; items: NavItem[] }[] = [
  {
    title: null,
    items: [{ href: "/shadcn/ui-kit", label: "Обзор", exact: true }],
  },
  {
    title: "Examples",
    items: [
      { href: "/example/lesson-report", label: "Описание урока", external: true },
      { href: "/example/more-ryadom-ds2", label: "Море рядом (DS v2)", external: true },
    ],
  },
  {
    title: "Foundations",
    items: [
      { href: "/shadcn/ui-kit/typography", label: "Typography" },
      { href: "/shadcn/ui-kit/colors", label: "Colors" },
      { href: "/shadcn/ui-kit/icons", label: "Icons" },
      { href: "/shadcn/ui-kit/shadows", label: "Shadows" },
      { href: "/shadcn/ui-kit/radius", label: "Radius" },
      { href: "/shadcn/ui-kit/spacing", label: "Spacing" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/shadcn/ui-kit/accordion", label: "Accordion" },
      { href: "/shadcn/ui-kit/alert", label: "Alert" },
      { href: "/shadcn/ui-kit/alert-dialog", label: "Alert Dialog" },
      { href: "/shadcn/ui-kit/aspect-ratio", label: "Aspect Ratio" },
      { href: "/shadcn/ui-kit/avatar", label: "Avatar" },
      { href: "/shadcn/ui-kit/badge", label: "Badge" },
      { href: "/shadcn/ui-kit/breadcrumb", label: "Breadcrumb" },
      { href: "/shadcn/ui-kit/button", label: "Button" },
      { href: "/shadcn/ui-kit/button-group", label: "Button Group" },
      { href: "/shadcn/ui-kit/calendar", label: "Calendar" },
      { href: "/shadcn/ui-kit/card", label: "Card" },
      { href: "/shadcn/ui-kit/carousel", label: "Carousel" },
      { href: "/shadcn/ui-kit/chart", label: "Chart" },
      { href: "/shadcn/ui-kit/checkbox", label: "Checkbox" },
      { href: "/shadcn/ui-kit/collapsible", label: "Collapsible" },
      { href: "/shadcn/ui-kit/combobox", label: "Combobox" },
      { href: "/shadcn/ui-kit/command", label: "Command" },
      { href: "/shadcn/ui-kit/context-menu", label: "Context Menu" },
      { href: "/shadcn/ui-kit/data-table", label: "Data Table" },
      { href: "/shadcn/ui-kit/date-picker", label: "Date Picker" },
      { href: "/shadcn/ui-kit/dialog", label: "Dialog" },
      { href: "/shadcn/ui-kit/direction", label: "Direction" },
      { href: "/shadcn/ui-kit/drawer", label: "Drawer" },
      { href: "/shadcn/ui-kit/dropdown-menu", label: "Dropdown Menu" },
      { href: "/shadcn/ui-kit/empty", label: "Empty State" },
      { href: "/shadcn/ui-kit/field", label: "Field" },
      { href: "/shadcn/ui-kit/hover-card", label: "Hover Card" },
      { href: "/shadcn/ui-kit/input", label: "Input" },
      { href: "/shadcn/ui-kit/input-group", label: "Input Group" },
      { href: "/shadcn/ui-kit/input-otp", label: "Input OTP" },
      { href: "/shadcn/ui-kit/item", label: "Item" },
      { href: "/shadcn/ui-kit/kbd", label: "Kbd" },
      { href: "/shadcn/ui-kit/label", label: "Label" },
      { href: "/shadcn/ui-kit/menubar", label: "Menubar" },
      { href: "/shadcn/ui-kit/navigation-menu", label: "Navigation Menu" },
      { href: "/shadcn/ui-kit/pagination", label: "Pagination" },
      { href: "/shadcn/ui-kit/popover", label: "Popover" },
      { href: "/shadcn/ui-kit/progress", label: "Progress" },
      { href: "/shadcn/ui-kit/radio-group", label: "Radio Group" },
      { href: "/shadcn/ui-kit/resizable", label: "Resizable" },
      { href: "/shadcn/ui-kit/scroll-area", label: "Scroll Area" },
      { href: "/shadcn/ui-kit/select", label: "Select" },
      { href: "/shadcn/ui-kit/separator", label: "Separator" },
      { href: "/shadcn/ui-kit/sheet", label: "Sheet" },
      { href: "/shadcn/ui-kit/sidebar", label: "Sidebar" },
      { href: "/shadcn/ui-kit/skeleton", label: "Skeleton" },
      { href: "/shadcn/ui-kit/slider", label: "Slider" },
      { href: "/shadcn/ui-kit/sonner", label: "Sonner" },
      { href: "/shadcn/ui-kit/spinner", label: "Spinner" },
      { href: "/shadcn/ui-kit/switch", label: "Switch" },
      { href: "/shadcn/ui-kit/table", label: "Table" },
      { href: "/shadcn/ui-kit/tabs", label: "Tabs" },
      { href: "/shadcn/ui-kit/textarea", label: "Textarea" },
      { href: "/shadcn/ui-kit/toggle", label: "Toggle" },
      { href: "/shadcn/ui-kit/toggle-group", label: "Toggle Group" },
      { href: "/shadcn/ui-kit/tooltip", label: "Tooltip" },
    ],
  },
];

export default function ShadcnUiKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-sidebar-border bg-sidebar p-6">
        <Link
          href="/"
          className="text-lg font-bold text-sidebar-foreground transition-colors hover:text-primary"
        >
          Artifact Teacher
        </Link>
        <p className="mt-1 text-xs text-muted-foreground">Shadcn UI Kit</p>

        <nav className="mt-6 flex flex-col gap-5">
          {navSections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </p>
              )}
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => {
                  const isExternal = "external" in item && item.external;
                  const isActive = isExternal
                    ? false
                    : item.exact
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      {item.label}
                      {isExternal && (
                        <span className="ml-1 text-[10px] text-muted-foreground">↗</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
