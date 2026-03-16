import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Button } from "@/components/shadcn/button";
import {
  IconSearch,
  IconMail,
  IconCheck,
  IconInfoCircle,
  IconPhone,
} from "@tabler/icons-react";

export default function InputShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a form input field or a component that looks like an input
          field.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        {/* Default */}
        <section>
          <Input placeholder="Enter text..." />
        </section>

        {/* With label + helper */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="input-username">Username</Label>
            <Input id="input-username" placeholder="Enter username" />
            <p className="text-xs text-muted-foreground">
              This is your public display name.
            </p>
          </div>
        </section>

        {/* Validation error */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="input-error">Email</Label>
            <Input
              id="input-error"
              type="email"
              placeholder="Enter email"
              defaultValue="invalid-email"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-xs text-destructive">
              Please enter a valid email address.
            </p>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <Input placeholder="Disabled input" disabled />
        </section>

        {/* File input */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="input-file">Choose file for the course</Label>
            <Input id="input-file" type="file" />
          </div>
        </section>

        {/* Side by side */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
          </div>
        </section>

        {/* Required field */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="required-field">
              Required Field <span className="text-destructive">*</span>
            </Label>
            <Input id="required-field" placeholder="Enter value" />
            <p className="text-xs text-muted-foreground">
              This field is required.
            </p>
          </div>
        </section>

        {/* Validated URL with check */}
        <section>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="validated-url">Validated URL</Label>
              <button className="text-xs text-muted-foreground hover:text-foreground">
                Hint
              </button>
            </div>
            <div className="relative">
              <Input
                id="validated-url"
                placeholder="https://example.com"
                defaultValue="https://example.com"
                className="pr-9"
              />
              <IconCheck className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-success" />
            </div>
          </div>
        </section>

        {/* Validated URL error */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="validated-url-error">Validated URL</Label>
            <Input
              id="validated-url-error"
              placeholder="https://example.com"
              defaultValue="not-a-url"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-xs text-destructive">
              Please enter a valid URL.
            </p>
          </div>
        </section>

        {/* Search input */}
        <section>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
            <Button>Search</Button>
          </div>
        </section>

        {/* Name text input */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="name-input">Name</Label>
            <Input id="name-input" placeholder="Enter your name" />
          </div>
        </section>

        {/* Email with icon */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="email-icon">Email</Label>
            <div className="relative">
              <IconMail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email-icon"
                type="email"
                placeholder="email@example.com"
                className="pl-9"
              />
            </div>
          </div>
        </section>

        {/* Phone input with country code */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="phone-input">Phone</Label>
            <div className="flex">
              <div className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                <IconPhone className="mr-1.5 size-3.5" />
                +1
              </div>
              <Input
                id="phone-input"
                placeholder="Timothy"
                className="rounded-l-none"
              />
            </div>
          </div>
        </section>

        {/* Subject dropdown-like */}
        <section>
          <div className="grid gap-2">
            <Label htmlFor="subject-input">Subject</Label>
            <Input id="subject-input" placeholder="Select a subject" />
          </div>
        </section>

        {/* Submit row */}
        <section>
          <div className="flex gap-3">
            <Button>Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
