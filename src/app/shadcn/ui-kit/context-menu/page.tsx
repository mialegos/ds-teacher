"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/shadcn/context-menu";
import {
  IconArrowLeft,
  IconArrowRight,
  IconReload,
  IconDeviceFloppy,
  IconLink,
  IconAppWindow,
  IconCode,
  IconSearch,
  IconCopy,
  IconBold,
  IconEdit,
  IconShare,
  IconTrash,
} from "@tabler/icons-react";

export default function ContextMenuShowcase() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [person, setPerson] = useState("pedro");

  const [boldChecked, setBoldChecked] = useState(true);
  const [italicChecked, setItalicChecked] = useState(false);
  const [underlineChecked, setUnderlineChecked] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p className="mt-2 text-muted-foreground">
          A context menu triggered by right-click, built on Radix ContextMenu.
        </p>
      </div>

      <div className="space-y-10">
        {/* Standard context menu */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Standard Menu
          </h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <IconArrowLeft className="mr-2 size-4" />
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <IconArrowRight className="mr-2 size-4" />
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <IconReload className="mr-2 size-4" />
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                    <IconDeviceFloppy className="mr-2 size-4" />
                    Save Page
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <IconLink className="mr-2 size-4" />
                    Create Shortcut
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <IconAppWindow className="mr-2 size-4" />
                    Name Window
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <IconCode className="mr-2 size-4" />
                    Developer Tools
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Save As...
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
              <ContextMenuItem>
                <IconSearch className="mr-2 size-4" />
                Search with...
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* With checkboxes and shortcuts */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Checkboxes
          </h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <IconCopy className="mr-2 size-4" />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={boldChecked}
                onCheckedChange={setBoldChecked}
              >
                <IconBold className="mr-2 size-4" />
                Bold
                <ContextMenuShortcut>⌘B</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={italicChecked}
                onCheckedChange={setItalicChecked}
              >
                Italic
                <ContextMenuShortcut>⌘I</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={underlineChecked}
                onCheckedChange={setUnderlineChecked}
              >
                Underline
                <ContextMenuShortcut>⌘U</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                Activity Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* With radio items */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Radio Items
          </h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="joe">
                  Joe Smith
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* With icons - Edit, Share, Delete */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Icon Items
          </h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-md items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem>
                <IconEdit className="mr-2 size-4" />
                Edit
              </ContextMenuItem>
              <ContextMenuItem>
                <IconShare className="mr-2 size-4" />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive focus:text-destructive">
                <IconTrash className="mr-2 size-4" />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>
      </div>
    </div>
  );
}
