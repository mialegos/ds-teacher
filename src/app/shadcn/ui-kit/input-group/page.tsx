"use client";

import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Button } from "@/components/shadcn/button";
import { Textarea } from "@/components/shadcn/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import {
  IconSearch,
  IconEye,
  IconEyeOff,
  IconSend,
  IconPaperclip,
  IconMoodSmile,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";

export default function InputGroupShowcase() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Input Group</h1>
        <p className="mt-2 text-muted-foreground">
          Input with prefixes, suffixes, icons, and action elements.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        {/* Left icon + right text */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Icon left + text right
          </h2>
          <div className="flex">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="rounded-r-none pl-9" />
            </div>
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
              $
            </span>
          </div>
        </section>

        {/* Password with toggle */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Password toggle
          </h2>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <IconEyeOff className="size-4" />
              ) : (
                <IconEye className="size-4" />
              )}
            </button>
          </div>
        </section>

        {/* Comment textarea */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Comment
          </h2>
          <Textarea placeholder="Write a comment..." rows={3} />
        </section>

        {/* Input with green action button */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With action button
          </h2>
          <div className="flex">
            <Input placeholder="Enter value..." className="rounded-r-none" />
            <Button className="rounded-l-none">
              <IconSend className="size-4" />
            </Button>
          </div>
        </section>

        {/* Input with avatar */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With avatar
          </h2>
          <div className="flex items-center gap-2 rounded-md border border-input px-3 py-2">
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Type something..."
            />
          </div>
        </section>

        {/* Search icon left */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Search icon
          </h2>
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
        </section>

        {/* With select prefix */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With select prefix
          </h2>
          <div className="flex">
            <select className="rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground outline-none">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
            <Input placeholder="0.00" className="rounded-l-none" />
          </div>
        </section>

        {/* With select suffix */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With select suffix
          </h2>
          <div className="flex">
            <Input placeholder="Enter amount" className="rounded-r-none" />
            <select className="rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground outline-none">
              <option>kg</option>
              <option>lb</option>
              <option>oz</option>
            </select>
          </div>
        </section>

        {/* Tag-like input */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With tags
          </h2>
          <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-input px-3 py-2">
            {["React", "TypeScript", "Tailwind"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
              >
                {tag}
                <IconX className="size-3 cursor-pointer text-muted-foreground hover:text-foreground" />
              </span>
            ))}
            <input
              className="flex-1 min-w-[80px] bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Add tag..."
            />
          </div>
        </section>

        {/* Message input with actions */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Message input
          </h2>
          <div className="flex items-end gap-2 rounded-md border border-input p-2">
            <div className="flex gap-1">
              <button className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                <IconPaperclip className="size-4" />
              </button>
              <button className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                <IconMoodSmile className="size-4" />
              </button>
            </div>
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Type a message..."
            />
            <Button size="sm">
              <IconSend className="size-4" />
            </Button>
          </div>
        </section>

        {/* Large textarea with file upload */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Textarea with upload
          </h2>
          <div className="space-y-2">
            <Textarea placeholder="Write your content here..." rows={4} />
            <div className="flex justify-between">
              <Button variant="outline" size="sm">
                <IconUpload className="mr-1.5 size-4" />
                Upload File
              </Button>
              <Button size="sm">
                Submit
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
