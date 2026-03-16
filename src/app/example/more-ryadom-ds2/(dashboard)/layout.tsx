"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle } from "@/components/shadcn/sheet";
import { VisuallyHidden } from "radix-ui";
import "../theme.css";

const BASE = "/example/more-ryadom-ds2";

const NAV_MAIN = [
  { href: `${BASE}`, label: "Дашборд", icon: BarIcon, exact: true },
  { href: `${BASE}/consultations`, label: "Консультации", icon: ChatIcon },
  { href: `${BASE}/team`, label: "Команда", icon: UsersIcon },
];

function NavItems({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      {NAV_MAIN.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex h-10 items-center gap-2.5 rounded-md px-3 text-[15px] transition-colors ${
              active
                ? "bg-black/[0.06] font-medium text-foreground"
                : "text-muted-foreground hover:bg-black/[0.04] hover:text-foreground"
            }`}
          >
            <item.icon active={active} size={18} />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}

function UserFooter() {
  return (
    <div className="border-t border-sidebar-border p-3">
      <div className="flex items-center gap-2.5">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
          alt="ЕС"
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium leading-tight">Елена Соколова</p>
          <p className="truncate text-xs leading-tight text-sidebar-foreground/50">Директор агентства</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div data-ds-v2 className="flex min-h-screen bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside
        onClick={() => setCollapsed((c) => !c)}
        className={`sticky top-0 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200 md:flex ${
          collapsed ? "w-16 cursor-e-resize" : "w-64 cursor-w-resize"
        }`}
      >
        <div className={`flex h-14 items-center ${collapsed ? "justify-center px-2" : "px-4"}`}>
          <div className={`flex items-center gap-2.5 ${collapsed ? "justify-center" : ""}`}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground text-[11px] font-bold text-background">МР</span>
            {!collapsed && <span className="text-base font-semibold">Море рядом</span>}
          </div>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto">
          <div className={`flex flex-col gap-1 pb-2 pt-6 ${collapsed ? "items-center px-2" : "px-3"}`}>
            {NAV_MAIN.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className={`flex items-center rounded-md transition-colors ${
                    collapsed
                      ? `h-10 w-10 justify-center ${
                          active
                            ? "bg-black/[0.06] text-foreground"
                            : "text-muted-foreground hover:bg-black/[0.04] hover:text-foreground"
                        }`
                      : `h-10 gap-2.5 px-3 text-[15px] ${
                          active
                            ? "bg-black/[0.06] font-medium text-foreground"
                            : "text-muted-foreground hover:bg-black/[0.04] hover:text-foreground"
                        }`
                  }`}
                >
                  <item.icon active={active} size={collapsed ? 20 : 18} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className={`border-t border-sidebar-border ${collapsed ? "flex justify-center p-3" : "p-3"}`}>
          <div className={`flex items-center ${collapsed ? "justify-center" : "gap-2.5"}`}>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
              alt="ЕС"
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium leading-tight">Елена Соколова</p>
                <p className="truncate text-xs leading-tight text-sidebar-foreground/50">Директор агентства</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile sidebar (Sheet) */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-64 bg-sidebar p-0 text-sidebar-foreground" showCloseButton={false}>
          <VisuallyHidden.Root><SheetTitle>Навигация</SheetTitle></VisuallyHidden.Root>
          <div className="flex h-14 items-center px-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground text-[11px] font-bold text-background">МР</span>
              <span className="text-base font-semibold">Море рядом</span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto px-3 pt-4">
            <div className="flex flex-col gap-1">
              <NavItems pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            </div>
          </nav>
          <UserFooter />
        </SheetContent>
      </Sheet>

      {/* Content */}
      <main className="flex-1 overflow-y-auto bg-muted">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-border bg-sidebar px-4 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-black/[0.04]"
          >
            <HamburgerIcon />
          </button>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-[10px] font-bold text-background">МР</span>
          <span className="text-sm font-semibold">Море рядом</span>
        </div>

        <div className="mx-auto max-w-screen-xl">{children}</div>
      </main>
    </div>
  );
}

/* ── Icons ── */

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="2" y1="4" x2="14" y2="4" />
      <line x1="2" y1="8" x2="14" y2="8" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </svg>
  );
}

function BarIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={active ? "text-primary" : "text-muted-foreground"}>
      <rect x="2" y="8" width="3" height="6" rx="0.75" fill="currentColor" fillOpacity={0.6} />
      <rect x="6.5" y="5" width="3" height="9" rx="0.75" fill="currentColor" fillOpacity={0.8} />
      <rect x="11" y="2" width="3" height="12" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function ChatIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={active ? "text-primary" : "text-muted-foreground"}>
      <path d="M3 2.5h10A1.5 1.5 0 0 1 14.5 4v6A1.5 1.5 0 0 1 13 11.5H5.5L3 14V11.5H3A1.5 1.5 0 0 1 1.5 10V4A1.5 1.5 0 0 1 3 2.5Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity={0.1} />
      <line x1="4.5" y1="6" x2="11.5" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity={0.6} />
      <line x1="4.5" y1="8.5" x2="9" y2="8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity={0.4} />
    </svg>
  );
}

function UsersIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={active ? "text-primary" : "text-muted-foreground"}>
      <circle cx="6" cy="5" r="2.5" fill="currentColor" fillOpacity={0.8} />
      <path d="M1.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="11" cy="5.5" r="1.8" fill="currentColor" fillOpacity={0.5} />
      <path d="M11 9.5c1.8 0 3.5 1.2 3.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity={0.5} />
    </svg>
  );
}
