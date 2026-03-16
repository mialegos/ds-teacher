import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/shadcn/command";
import {
  IconCalendar,
  IconMoodSmile,
  IconCalculator,
  IconUser,
  IconCreditCard,
  IconSettings,
  IconHome,
  IconInbox,
  IconFile,
  IconFolder,
  IconFilePlus,
  IconFolderPlus,
  IconCopy,
} from "@tabler/icons-react";

export default function CommandShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Command</h1>
        <p className="mt-2 text-muted-foreground">
          A command palette with search, built on cmdk.
        </p>
      </div>

      <div className="space-y-10">
        {/* Full command with suggestions + settings */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Full Command
          </h2>
          <Command className="max-w-md rounded-lg border border-border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <IconCalendar className="mr-2 size-4" />
                  Calendar
                </CommandItem>
                <CommandItem>
                  <IconMoodSmile className="mr-2 size-4" />
                  Search Emoji
                </CommandItem>
                <CommandItem>
                  <IconCalculator className="mr-2 size-4" />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <IconUser className="mr-2 size-4" />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconCreditCard className="mr-2 size-4" />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconSettings className="mr-2 size-4" />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>

        {/* No results found */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            No Results
          </h2>
          <Command className="max-w-md rounded-lg border border-border shadow-md">
            <CommandInput placeholder="Type a command or search..." value="xyzabc" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <IconCalendar className="mr-2 size-4" />
                  Calendar
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>

        {/* Without icons */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Without Icons
          </h2>
          <Command className="max-w-md rounded-lg border border-border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>

        {/* Settings group only */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Settings Only
          </h2>
          <Command className="max-w-md rounded-lg border border-border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Settings">
                <CommandItem>
                  <IconUser className="mr-2 size-4" />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconCreditCard className="mr-2 size-4" />
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconSettings className="mr-2 size-4" />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>

        {/* Large command with multiple groups */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Multiple Groups
          </h2>
          <Command className="max-w-md rounded-lg border border-border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <IconHome className="mr-2 size-4" />
                  Home
                </CommandItem>
                <CommandItem>
                  <IconInbox className="mr-2 size-4" />
                  Inbox
                </CommandItem>
                <CommandItem>
                  <IconFile className="mr-2 size-4" />
                  Documents
                </CommandItem>
                <CommandItem>
                  <IconFolder className="mr-2 size-4" />
                  Folders
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <IconFilePlus className="mr-2 size-4" />
                  New File
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconFolderPlus className="mr-2 size-4" />
                  New Folder
                  <CommandShortcut>⌘⇧N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <IconCopy className="mr-2 size-4" />
                  Copy
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>
      </div>
    </div>
  );
}
