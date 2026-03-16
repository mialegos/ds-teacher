"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Button } from "@/components/shadcn/button";
import {
  IconEdit,
  IconShare,
  IconTrash,
  IconChevronDown,
  IconMail,
  IconBell,
  IconDeviceMobile,
  IconCloudUpload,
  IconUser,
  IconUsers,
  IconPlus,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

export default function DropdownMenuShowcase() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [fontWeight, setFontWeight] = useState("normal");
  const [emailNotif, setEmailNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="mt-2 text-muted-foreground">
          Dropdown menus with items, separators, checkboxes, radio groups, sub-menus and shortcuts.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Standard menu with label */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Standard menu
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Open menu
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Label</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Checkbox item 1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showFullUrls}
                onCheckedChange={setShowFullUrls}
              >
                Checkbox item 2
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={fontWeight} onValueChange={setFontWeight}>
                <DropdownMenuRadioItem value="bold">
                  Radio item 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="normal">
                  Radio item 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">
                  Radio item 3
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Menu with shortcuts */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With shortcuts
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                File
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                New Tab
                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                New Window
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Save
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Open
                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Print
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Menu with sub-menus */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With sub-menus
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Options
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconUser />
                  Profile
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconSettings />
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconPlus />
                  Invite users
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <IconMail />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconDeviceMobile />
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <IconPlus />
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconUsers />
                  Team
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Create Team</DropdownMenuItem>
                  <DropdownMenuItem>Join Team</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconLogout />
                Log out
                <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Checkbox menu */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkbox items
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                View
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Show Bookmarks Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showFullUrls}
                onCheckedChange={setShowFullUrls}
              >
                Always Show Full URL
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Radio group menu */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Radio group
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Font weight
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Text Style</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={fontWeight} onValueChange={setFontWeight}>
                <DropdownMenuRadioItem value="bold">
                  Bold
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="normal">
                  Normal
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">
                  Light
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Menu with icons and destructive */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With icons
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Actions
                <IconChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <IconEdit />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconShare />
                Share
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <IconTrash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Notifications group */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Notifications
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <IconBell className="mr-2 size-4" />
                Notifications
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={emailNotif}
                onCheckedChange={setEmailNotif}
              >
                <IconMail />
                Email Notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={inAppNotif}
                onCheckedChange={setInAppNotif}
              >
                <IconBell />
                In-App Notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={smsNotif}
                onCheckedChange={setSmsNotif}
              >
                <IconDeviceMobile />
                SMS Notifications
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Comprehensive sidebar-like menu */}
        <section className="sm:col-span-2 lg:col-span-1">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Comprehensive
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <IconSettings className="mr-2 size-4" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Application</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconUser />
                  Profile
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconMail />
                  Messages
                  <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconSettings />
                  Settings
                  <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconUsers />
                  Team
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <IconPlus />
                    New
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Project</DropdownMenuItem>
                    <DropdownMenuItem>Repository</DropdownMenuItem>
                    <DropdownMenuItem>Organization</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconCloudUpload />
                Cloud
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconLogout />
                Log out
                <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
    </div>
  );
}
