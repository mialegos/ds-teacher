"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/shadcn/sheet";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

function ProfileForm() {
  return (
    <>
      <div className="grid gap-4 px-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sheet-username">Username</Label>
          <Input id="sheet-username" defaultValue="@peduarte" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
        <Button>Save changes</Button>
      </SheetFooter>
    </>
  );
}

export default function SheetShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
        <p className="mt-2 text-muted-foreground">
          Extends the Dialog component to display content that complements the
          main content of the screen.
        </p>
      </div>

      <section>
        <div className="flex flex-wrap gap-3">
          {(["right", "left", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {side}
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <ProfileForm />
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>
    </div>
  );
}
