"use client";

import { Switch } from "@/components/shadcn/switch";
import { Label } from "@/components/shadcn/label";

export default function SwitchShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="mt-2 text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Checked / Unchecked */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Basic
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Switch id="airplane-on" defaultChecked />
              <Label htmlFor="airplane-on">Airplane Mode</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="airplane-off" />
              <Label htmlFor="airplane-off">Airplane Mode</Label>
            </div>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Disabled
          </h2>
          <div className="flex items-center gap-3">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
        </section>

        {/* Small switch */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Small
          </h2>
          <div className="flex items-center gap-3">
            <Switch id="small-switch" size="sm" defaultChecked />
            <Label htmlFor="small-switch">
              Small switch
            </Label>
          </div>
        </section>

        {/* Card style */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Card variant
          </h2>
          <div className="max-w-sm rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Share across devices</p>
                <p className="text-xs text-muted-foreground">
                  Sync your data with all connected devices.
                </p>
              </div>
              <Switch id="share-devices" defaultChecked />
            </div>
          </div>
        </section>

        {/* Error state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error state
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Switch id="terms-switch" aria-invalid="true" />
              <Label htmlFor="terms-switch" className="text-destructive">
                Accept terms and conditions
              </Label>
            </div>
            <p className="text-xs text-destructive">
              You must accept the terms to continue.
            </p>
          </div>
        </section>

        {/* Dark card */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Dark card
          </h2>
          <div className="max-w-sm rounded-lg border bg-zinc-950 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Share across devices</p>
                <p className="text-xs text-zinc-400">
                  Sync your data with all connected devices.
                </p>
              </div>
              <Switch id="share-dark" defaultChecked />
            </div>
          </div>
        </section>

        {/* Highlighted card */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Highlighted card
          </h2>
          <div className="max-w-sm rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Enable notifications</p>
                <p className="text-xs text-muted-foreground">
                  Get notified about important updates.
                </p>
              </div>
              <Switch id="enable-notif" defaultChecked />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
