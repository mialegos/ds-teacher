"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs";
import { IconEye, IconCode } from "@tabler/icons-react";

export default function TabsShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="mt-2 text-muted-foreground">
          A set of layered sections of content—known as tab panels—that are
          displayed one at a time.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Pill/Filled tabs */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Default (pill)
          </h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Overview content goes here.
              </p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Analytics content goes here.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Reports content goes here.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Settings content goes here.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Underline tabs */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Underline variant
          </h2>
          <Tabs defaultValue="overview">
            <TabsList variant="line">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Overview content for underline tabs.
              </p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Analytics content for underline tabs.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Reports content for underline tabs.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Settings content for underline tabs.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Vertical tabs */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Vertical
          </h2>
          <Tabs defaultValue="overview" orientation="vertical" className="flex gap-4">
            <TabsList className="flex h-auto w-48 flex-col items-stretch">
              <TabsTrigger value="overview" className="justify-start">
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="justify-start">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" className="justify-start">
                Reports
              </TabsTrigger>
              <TabsTrigger value="settings" className="justify-start">
                Settings
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="overview" className="mt-0 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Overview content (vertical layout).
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-0 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Analytics content (vertical layout).
                </p>
              </TabsContent>
              <TabsContent value="reports" className="mt-0 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Reports content (vertical layout).
                </p>
              </TabsContent>
              <TabsContent value="settings" className="mt-0 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Settings content (vertical layout).
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* Icon tabs */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With icons
          </h2>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview" className="gap-1.5">
                <IconEye className="size-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="gap-1.5">
                <IconCode className="size-4" />
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Preview content here.
              </p>
            </TabsContent>
            <TabsContent value="code" className="mt-4 rounded-lg border p-4">
              <pre className="text-sm text-muted-foreground">
                {`<Button variant="outline">Click me</Button>`}
              </pre>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
