"use client";

import {
  IconBook,
  IconBrandNextjs,
  IconChevronDown,
  IconChevronRight,
  IconSearch,
  IconInbox,
  IconFile,
  IconSend,
  IconArchive,
  IconTrash,
  IconMail,
  IconSettings,
  IconBell,
  IconLock,
  IconShield,
  IconUser,
  IconNote,
  IconStar,
  IconDots,
  IconToggleRight,
} from "@tabler/icons-react";

function SidebarShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-64 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground ${className}`}
    >
      {children}
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  badge,
  chevron = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  badge?: string;
  chevron?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
        active
          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }`}
    >
      <Icon className="size-4 shrink-0" />
      <span className="truncate">{label}</span>
      {badge && (
        <span className="ml-auto text-xs tabular-nums text-muted-foreground">
          {badge}
        </span>
      )}
      {chevron && (
        <IconChevronRight className="ml-auto size-3.5 text-muted-foreground" />
      )}
    </button>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-8 items-center px-2 text-xs font-medium text-sidebar-foreground/70">
      {children}
    </div>
  );
}

function DocsSidebar() {
  return (
    <SidebarShell>
      <div className="flex flex-col gap-2 p-2">
        <button className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold hover:bg-sidebar-accent">
          <div className="flex size-5 items-center justify-center rounded-md bg-foreground">
            <IconBrandNextjs className="size-3.5 text-background" />
          </div>
          <span>Documentation</span>
          <span className="ml-auto text-xs text-muted-foreground">v1.0.1</span>
          <IconChevronDown className="size-3.5 text-muted-foreground" />
        </button>
      </div>

      <div className="px-4 pb-2">
        <div className="flex h-8 items-center rounded-md border bg-background px-2">
          <IconSearch className="size-3.5 text-muted-foreground" />
          <span className="ml-2 text-xs text-muted-foreground">Search documentation...</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <div className="flex flex-col gap-0.5 py-1">
          <GroupLabel>Getting started</GroupLabel>
          <NavItem icon={IconBook} label="Installation" active />
          <NavItem icon={IconBook} label="Project Structure" />
        </div>

        <div className="flex flex-col gap-0.5 py-1">
          <GroupLabel>Building Your Application</GroupLabel>
          {[
            "Routing",
            "Data Fetching",
            "Rendering",
            "Caching",
            "Styling",
            "Optimizing",
            "Configuring",
            "Testing",
            "Authentication",
            "Deploying",
            "Upgrading",
            "Examples",
          ].map((item) => (
            <NavItem key={item} icon={IconBook} label={item} />
          ))}
        </div>

        <div className="flex flex-col gap-0.5 py-1">
          <GroupLabel>API Reference</GroupLabel>
          {[
            "Components",
            "File Conventions",
            "Functions",
            "next.config.js Options",
            "CLI",
            "Edge Runtime",
          ].map((item) => (
            <NavItem key={item} icon={IconBook} label={item} chevron />
          ))}
        </div>
      </div>
    </SidebarShell>
  );
}

function SimpleNavSidebar() {
  return (
    <SidebarShell>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex size-5 items-center justify-center rounded-md bg-foreground">
            <IconMail className="size-3.5 text-background" />
          </div>
          <span className="text-sm font-semibold">Mailbox</span>
        </div>
      </div>

      <div className="mx-2 h-px bg-sidebar-border" />

      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="flex flex-col gap-0.5">
          <GroupLabel>Mail</GroupLabel>
          <NavItem icon={IconInbox} label="Inbox" active badge="128" />
          <NavItem icon={IconFile} label="Drafts" badge="9" />
          <NavItem icon={IconSend} label="Sent" />
          <NavItem icon={IconNote} label="Junk" badge="23" />
          <NavItem icon={IconTrash} label="Trash" />
        </div>

        <div className="flex flex-col gap-0.5 pt-4">
          <GroupLabel>Labels</GroupLabel>
          <NavItem icon={IconStar} label="Important" />
          <NavItem icon={IconBell} label="Notifications" badge="5" />
          <NavItem icon={IconUser} label="Personal" />
        </div>
      </div>

      <div className="mx-2 h-px bg-sidebar-border" />
      <div className="p-2 px-4">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face"
            alt="User avatar"
            className="size-7 rounded-full object-cover"
          />
          <div className="flex-1 truncate">
            <p className="text-xs font-medium">user@mail.com</p>
          </div>
          <IconDots className="size-4 text-muted-foreground" />
        </div>
      </div>
    </SidebarShell>
  );
}

function MailClientSidebar() {
  const iconBarItems = [
    { icon: IconInbox, active: true },
    { icon: IconFile },
    { icon: IconNote },
    { icon: IconSend },
    { icon: IconArchive },
    { icon: IconTrash },
  ];

  const mailItems = [
    {
      sender: "William Smith",
      time: "09:34 AM",
      subject: "Meeting Tomorrow",
      preview: "Hi, let's have a meeting tomorrow to discuss the project...",
      unread: true,
    },
    {
      sender: "Alice Smith",
      time: "Yesterday",
      subject: "Re: Project Update",
      preview: "Thank you for the project update. It looks great! I've reviewed...",
      unread: true,
    },
    {
      sender: "Bob Johnson",
      time: "2d ago",
      subject: "Weekend Plans",
      preview: "Any plans for the weekend? I was thinking of going hiking...",
      unread: false,
    },
    {
      sender: "Emily Davis",
      time: "2d ago",
      subject: "Re: Question about Budget",
      preview: "I've reviewed the budget numbers you sent over. I think we can...",
      unread: false,
    },
    {
      sender: "Michael Wilson",
      time: "1w ago",
      subject: "Important Announcement",
      preview: "I have an important announcement to make during our team meeting...",
      unread: false,
    },
  ];

  return (
    <div className="flex h-full">
      <div className="flex w-12 shrink-0 flex-col items-center gap-1 border-r bg-sidebar py-2">
        {iconBarItems.map(({ icon: Icon, active }, i) => (
          <button
            key={i}
            className={`flex size-8 items-center justify-center rounded-md ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon className="size-4" />
          </button>
        ))}
      </div>

      <div className="flex w-72 shrink-0 flex-col border-r bg-sidebar">
        <div className="flex items-center justify-between p-3">
          <h3 className="text-sm font-semibold">Inbox</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Unreads</span>
            <IconToggleRight className="size-4 text-muted-foreground" />
          </div>
        </div>

        <div className="px-3 pb-2">
          <div className="flex h-8 items-center rounded-md border bg-background px-2">
            <IconSearch className="size-3.5 text-muted-foreground" />
            <span className="ml-2 text-xs text-muted-foreground">Search...</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mailItems.map((mail, i) => (
            <button
              key={i}
              className={`flex w-full flex-col gap-0.5 border-b px-3 py-2 text-left hover:bg-sidebar-accent ${
                i === 0 ? "bg-sidebar-accent" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs ${mail.unread ? "font-semibold" : ""}`}
                >
                  {mail.sender}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {mail.time}
                </span>
              </div>
              <span className="text-xs font-medium">{mail.subject}</span>
              <span className="line-clamp-1 text-[11px] text-muted-foreground">
                {mail.preview}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsSidebar() {
  return (
    <SidebarShell>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex size-5 items-center justify-center rounded-md bg-foreground">
            <IconSettings className="size-3.5 text-background" />
          </div>
          <span className="text-sm font-semibold">Settings</span>
        </div>
      </div>

      <div className="mx-2 h-px bg-sidebar-border" />

      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="flex flex-col gap-0.5">
          <GroupLabel>Account</GroupLabel>
          <NavItem icon={IconSettings} label="General" active />
          <NavItem icon={IconBell} label="Notifications" />
          <NavItem icon={IconLock} label="Privacy" />
          <NavItem icon={IconShield} label="Security" />
        </div>

        <div className="flex flex-col gap-0.5 pt-4">
          <GroupLabel>Preferences</GroupLabel>
          <NavItem icon={IconUser} label="Profile" />
          <NavItem icon={IconMail} label="Email" />
          <NavItem icon={IconBook} label="Appearance" />
        </div>

        <div className="flex flex-col gap-0.5 pt-4">
          <GroupLabel>Danger Zone</GroupLabel>
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10">
            <IconTrash className="size-4 shrink-0" />
            <span>Delete Account</span>
          </button>
        </div>
      </div>

      <div className="mx-2 h-px bg-sidebar-border" />
      <div className="p-3 px-4">
        <p className="text-xs text-muted-foreground">v2.4.1 · Help & Support</p>
      </div>
    </SidebarShell>
  );
}

export default function SidebarShowcasePage() {
  return (
    <div className="max-w-4xl px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
      <p className="mt-2 text-muted-foreground">
        Composable sidebar layouts for navigation, mail clients, documentation, and settings panels.
      </p>

      <div className="mt-10 space-y-10">
        {/* Sidebar 01 — Documentation */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">
            Documentation Sidebar
          </h2>
          <div className="rounded-lg border overflow-hidden h-[500px]">
            <div className="flex h-full">
              <DocsSidebar />
              <div className="flex-1 bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  Hierarchical navigation with search, grouped sections, and collapsible API reference items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar 02–05 — Simple Nav */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">
            Simple Nav Sidebar
          </h2>
          <div className="rounded-lg border overflow-hidden h-[500px]">
            <div className="flex h-full">
              <SimpleNavSidebar />
              <div className="flex-1 bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  Icon-based navigation with badge counts, grouped labels, and a user footer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar 09 — Mail Client */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">
            Mail Client Sidebar
          </h2>
          <div className="rounded-lg border overflow-hidden h-[500px]">
            <div className="flex h-full">
              <MailClientSidebar />
              <div className="flex-1 bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  Multi-panel layout with an icon strip, a mail list with sender, subject and preview, search, and unread filtering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings Sidebar */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">
            Settings Sidebar
          </h2>
          <div className="rounded-lg border overflow-hidden h-[500px]">
            <div className="flex h-full">
              <SettingsSidebar />
              <div className="flex-1 bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  Section-based settings navigation with account, preference, and danger-zone groups.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
