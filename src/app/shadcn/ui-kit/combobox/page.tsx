"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/shadcn/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import { Button } from "@/components/shadcn/button";
import { Label } from "@/components/shadcn/label";
import {
  IconCheck,
  IconSelector,
  IconBrandReact,
  IconBrandAngular,
  IconBrandVue,
  IconBrandSvelte,
  IconBrandNextjs,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const frameworks = [
  { value: "react", label: "React", icon: IconBrandReact },
  { value: "angular", label: "Angular", icon: IconBrandAngular },
  { value: "vue", label: "Vue", icon: IconBrandVue },
  { value: "svelte", label: "Svelte", icon: IconBrandSvelte },
  { value: "nextjs", label: "Next.js", icon: IconBrandNextjs },
];

const jiraItems = [
  { value: "jira-11234", label: "JIRA-11234", color: "bg-blue-500" },
  { value: "jira-11235", label: "JIRA-11235", color: "bg-green-500" },
  { value: "jira-11236", label: "JIRA-11236", color: "bg-yellow-500" },
  { value: "jira-11237", label: "JIRA-11237", color: "bg-red-500" },
  { value: "jira-11238", label: "JIRA-11238", color: "bg-purple-500" },
];

const categorizedItems = [
  {
    category: "Frontend",
    items: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
    ],
  },
  {
    category: "Backend",
    items: [
      { value: "node", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "go", label: "Go" },
    ],
  },
];

export default function ComboboxShowcase() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [basicValue, setBasicValue] = useState("");

  const [iconOpen, setIconOpen] = useState(false);
  const [iconValue, setIconValue] = useState("");

  const [jiraOpen, setJiraOpen] = useState(false);
  const [jiraValue, setJiraValue] = useState("");

  const [catOpen, setCatOpen] = useState(false);
  const [catValue, setCatValue] = useState("");

  const [errorOpen, setErrorOpen] = useState(false);
  const [errorValue, setErrorValue] = useState("");

  const [tabFilter, setTabFilter] = useState("all");
  const [tabOpen, setTabOpen] = useState(false);
  const [tabValue, setTabValue] = useState("");

  const filteredFrameworks =
    tabFilter === "all"
      ? frameworks
      : frameworks.filter((f) => f.value === tabFilter);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Combobox</h1>
        <p className="mt-2 text-muted-foreground">
          A searchable dropdown built on Command + Popover.
        </p>
      </div>

      <div className="space-y-10">
        {/* Basic combobox */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Basic
          </h2>
          <Popover open={basicOpen} onOpenChange={setBasicOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={basicOpen}
                className="w-[280px] justify-between"
              >
                {basicValue
                  ? frameworks.find((f) => f.value === basicValue)?.label
                  : "Select a framework..."}
                <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(v) => {
                          setBasicValue(v === basicValue ? "" : v);
                          setBasicOpen(false);
                        }}
                      >
                        <IconCheck
                          className={cn(
                            "mr-2 size-4",
                            basicValue === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>

        {/* Combobox with tab filters */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Tabs
          </h2>
          <Popover open={tabOpen} onOpenChange={setTabOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={tabOpen}
                className="w-[280px] justify-between"
              >
                {tabValue
                  ? frameworks.find((f) => f.value === tabValue)?.label
                  : "Select a framework..."}
                <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0">
              <div className="flex gap-1 border-b border-border p-1">
                {["all", "react", "angular", "vue"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTabFilter(tab)}
                    className={cn(
                      "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                      tabFilter === tab
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {tab === "all"
                      ? "All"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {filteredFrameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(v) => {
                          setTabValue(v === tabValue ? "" : v);
                          setTabOpen(false);
                        }}
                      >
                        <IconCheck
                          className={cn(
                            "mr-2 size-4",
                            tabValue === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>

        {/* Combobox with icons */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Icons
          </h2>
          <Popover open={iconOpen} onOpenChange={setIconOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={iconOpen}
                className="w-[280px] justify-between"
              >
                {iconValue ? (
                  <span className="flex items-center gap-2">
                    {(() => {
                      const fw = frameworks.find(
                        (f) => f.value === iconValue
                      );
                      if (!fw) return null;
                      const Icon = fw.icon;
                      return (
                        <>
                          <Icon className="size-4" />
                          {fw.label}
                        </>
                      );
                    })()}
                  </span>
                ) : (
                  "Select a framework..."
                )}
                <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => {
                      const Icon = framework.icon;
                      return (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(v) => {
                            setIconValue(v === iconValue ? "" : v);
                            setIconOpen(false);
                          }}
                        >
                          <Icon className="mr-2 size-4" />
                          {framework.label}
                          <IconCheck
                            className={cn(
                              "ml-auto size-4",
                              iconValue === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>

        {/* JIRA-style combobox */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            JIRA-style
          </h2>
          <Popover open={jiraOpen} onOpenChange={setJiraOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={jiraOpen}
                className="w-[280px] justify-between"
              >
                {jiraValue
                  ? jiraItems.find((j) => j.value === jiraValue)?.label
                  : "Select an issue..."}
                <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0">
              <Command>
                <CommandInput placeholder="Search issues..." />
                <CommandList>
                  <CommandEmpty>No issues found.</CommandEmpty>
                  <CommandGroup>
                    {jiraItems.map((item) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={(v) => {
                          setJiraValue(v === jiraValue ? "" : v);
                          setJiraOpen(false);
                        }}
                      >
                        <span
                          className={cn(
                            "mr-2 inline-block size-2.5 rounded-full",
                            item.color
                          )}
                        />
                        {item.label}
                        <IconCheck
                          className={cn(
                            "ml-auto size-4",
                            jiraValue === item.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>

        {/* Categorized combobox */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Categorized
          </h2>
          <Popover open={catOpen} onOpenChange={setCatOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={catOpen}
                className="w-[280px] justify-between"
              >
                {catValue
                  ? categorizedItems
                      .flatMap((c) => c.items)
                      .find((i) => i.value === catValue)?.label
                  : "Select a technology..."}
                <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0">
              <Command>
                <CommandInput placeholder="Search technologies..." />
                <CommandList>
                  <CommandEmpty>No technology found.</CommandEmpty>
                  {categorizedItems.map((category, idx) => (
                    <div key={category.category}>
                      {idx > 0 && <CommandSeparator />}
                      <CommandGroup heading={category.category}>
                        {category.items.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            onSelect={(v) => {
                              setCatValue(v === catValue ? "" : v);
                              setCatOpen(false);
                            }}
                          >
                            <IconCheck
                              className={cn(
                                "mr-2 size-4",
                                catValue === item.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {item.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </div>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>

        {/* Error state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error State
          </h2>
          <div className="space-y-1.5">
            <Label>Framework</Label>
            <Popover open={errorOpen} onOpenChange={setErrorOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={errorOpen}
                  aria-invalid="true"
                  className="w-[280px] justify-between border-destructive"
                >
                  {errorValue
                    ? frameworks.find((f) => f.value === errorValue)?.label
                    : "Select a framework..."}
                  <IconSelector className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(v) => {
                            setErrorValue(v === errorValue ? "" : v);
                            setErrorOpen(false);
                          }}
                        >
                          <IconCheck
                            className={cn(
                              "mr-2 size-4",
                              errorValue === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <p className="text-sm text-destructive">
              Please select a framework.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
