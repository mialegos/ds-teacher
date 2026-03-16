"use client";

import { IconLoader2 } from "@tabler/icons-react";
import { Button } from "@/components/shadcn/button";
import { Progress } from "@/components/shadcn/progress";
import { Badge } from "@/components/shadcn/badge";

export default function SpinnerShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Spinner</h1>
        <p className="mt-2 text-muted-foreground">
          Loading indicators for various states and contexts.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Processing with cancel */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Processing state
          </h2>
          <div className="flex items-center gap-3">
            <IconLoader2 className="size-5 animate-spin text-primary" />
            <span className="text-sm">Processing payment...</span>
            <button className="text-sm text-muted-foreground underline hover:text-foreground">
              Cancel
            </button>
          </div>
        </section>

        {/* Simple spinner */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Simple spinner
          </h2>
          <IconLoader2 className="size-6 animate-spin text-primary" />
        </section>

        {/* Multiple sizes */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Sizes
          </h2>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <IconLoader2 className="size-3.5 animate-spin text-muted-foreground" />
              <p className="mt-1 text-[10px] text-muted-foreground">xs</p>
            </div>
            <div className="text-center">
              <IconLoader2 className="size-4 animate-spin text-muted-foreground" />
              <p className="mt-1 text-[10px] text-muted-foreground">sm</p>
            </div>
            <div className="text-center">
              <IconLoader2 className="size-6 animate-spin text-primary" />
              <p className="mt-1 text-[10px] text-muted-foreground">md</p>
            </div>
            <div className="text-center">
              <IconLoader2 className="size-8 animate-spin text-primary" />
              <p className="mt-1 text-[10px] text-muted-foreground">lg</p>
            </div>
          </div>
        </section>

        {/* Button variants */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Button loading states
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button disabled>
              <IconLoader2 className="mr-2 size-4 animate-spin" />
              Loading
            </Button>
            <Button variant="outline" disabled>
              <IconLoader2 className="mr-2 size-4 animate-spin" />
              Processing
            </Button>
            <Button variant="outline" disabled>
              <IconLoader2 className="mr-2 size-4 animate-spin" />
              Uploading
            </Button>
          </div>
        </section>

        {/* Processing with progress */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With progress
          </h2>
          <div className="max-w-sm space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <IconLoader2 className="size-5 animate-spin text-primary" />
              <div>
                <p className="text-sm font-medium">Processing your request</p>
                <p className="text-xs text-muted-foreground">
                  Please wait while we process your data...
                </p>
              </div>
            </div>
            <Progress value={66} />
            <Button variant="outline" size="sm">
              Cancel
            </Button>
          </div>
        </section>

        {/* Downloading with progress */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Download progress
          </h2>
          <div className="max-w-sm space-y-3 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconLoader2 className="size-4 animate-spin text-primary" />
                <span className="text-sm font-medium">Downloading...</span>
              </div>
              <span className="text-xs text-muted-foreground">2.4 MB / 5.0 MB</span>
            </div>
            <Progress value={48} />
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Close
              </Button>
            </div>
          </div>
        </section>

        {/* Status badges */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Status badges
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5">
              <IconLoader2 className="size-3 animate-spin" />
              Loading
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <IconLoader2 className="size-3 animate-spin" />
              Compiling
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <IconLoader2 className="size-3 animate-spin" />
              Queued
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <IconLoader2 className="size-3 animate-spin" />
              Syncing
            </Badge>
            <Badge variant="outline">Pending</Badge>
            <Badge variant="outline">In Review</Badge>
            <Badge variant="outline">Design</Badge>
            <Badge variant="outline">Focus</Badge>
          </div>
        </section>

        {/* File upload card */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            File upload
          </h2>
          <div className="max-w-sm space-y-3 rounded-lg border p-4">
            <p className="text-sm font-medium">File upload</p>
            <Progress value={72} />
            <p className="text-xs text-muted-foreground">72% complete</p>
          </div>
        </section>

        {/* Sending messages */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Inline states
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <IconLoader2 className="size-4 animate-spin" />
              Sending messages...
            </div>
            <div className="flex items-center gap-2">
              <IconLoader2 className="size-4 animate-spin text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Gathering...</span>
              <Button size="sm" className="ml-auto">
                Send
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
