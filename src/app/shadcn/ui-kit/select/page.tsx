"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";

export default function SelectShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a
          button.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-xs">
        {/* Default */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Default
          </h2>
          <Select defaultValue="grapes">
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select a Fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="apples">Apples</SelectItem>
              <SelectItem value="bananas">Bananas</SelectItem>
              <SelectItem value="pineapples">Pineapples</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Disabled
          </h2>
          <Select disabled>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select a Fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">—</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* Error state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error state
          </h2>
          <Select>
            <SelectTrigger className="w-[240px] border-destructive focus:ring-destructive">
              <SelectValue placeholder="Select a Fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="apples">Apples</SelectItem>
              <SelectItem value="bananas">Bananas</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-1 text-xs text-destructive">
            Please select a fruit.
          </p>
        </section>

        {/* Grouped */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Grouped
          </h2>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select an item" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="bananas">Bananas</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrots">Carrots</SelectItem>
                <SelectItem value="cucumbers">Cucumbers</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>

        {/* Grouped scrollable */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Grouped (scrollable)
          </h2>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select an item" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px]">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="aubergine">Aubergine</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="courgette">Courgette</SelectItem>
                <SelectItem value="leek">Leek</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>
      </div>
    </div>
  );
}
