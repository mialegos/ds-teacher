"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { IconMinus, IconPlus } from "@tabler/icons-react";

function GoalDrawer() {
  const [goal, setGoal] = useState(350);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Move Goal</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily move goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center gap-6">
              <Button
                variant="outline"
                size="icon"
                className="size-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.max(100, goal - 10))}
                disabled={goal <= 100}
              >
                <IconMinus className="size-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="text-center">
                <p className="text-7xl font-bold tracking-tighter">{goal}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  Calories/day
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="size-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.min(1000, goal + 10))}
                disabled={goal >= 1000}
              >
                <IconPlus className="size-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-6 flex items-end gap-1 h-20">
              {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75, 48, 85, 55].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20"
                    style={{ height: `${h}%` }}
                  />
                ),
              )}
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function LeftDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Left Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer opens from the left side.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">
          <p>
            Content displayed inside the left drawer. You can place navigation,
            filters, or any side-panel content here.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function RightDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer opens from the right side.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">
          <p>
            Content displayed inside the right drawer. Useful for detail panels,
            settings, or contextual info.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function DialogDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Dialog Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Dialog Drawer</DrawerTitle>
            <DrawerDescription>
              A drawer that contains a dialog trigger.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 text-sm text-muted-foreground">
            <p>
              This is content inside the drawer. You can open a nested dialog
              from here for confirmations or additional input.
            </p>
          </div>
          <DrawerFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nested Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog was opened from inside a drawer.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function DrawerForm() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer Form</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Update your profile information.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="drawer-name">Name</Label>
              <Input id="drawer-name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-email">Email</Label>
              <Input
                id="drawer-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-bio">Bio</Label>
              <Input id="drawer-bio" placeholder="Tell us about yourself" />
            </div>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function SheetFormDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Sheet Form</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Account</DrawerTitle>
          <DrawerDescription>
            Fill in the details to create a new account.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-first">First name</Label>
            <Input id="sheet-first" placeholder="John" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-last">Last name</Label>
            <Input id="sheet-last" placeholder="Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input
              id="sheet-email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Create</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function DrawerShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
        <p className="mt-2 text-muted-foreground">
          Slide-out panels built on Vaul with multiple directions and content patterns.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Goal drawer
          </h2>
          <GoalDrawer />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Direction variants
          </h2>
          <div className="flex flex-wrap gap-3">
            <LeftDrawer />
            <RightDrawer />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Dialog Drawer
          </h2>
          <DialogDrawer />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Drawer Form
          </h2>
          <DrawerForm />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Sheet Form
          </h2>
          <SheetFormDrawer />
        </section>
      </div>
    </div>
  );
}
