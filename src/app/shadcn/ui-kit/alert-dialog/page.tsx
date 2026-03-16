import {
  IconShare,
  IconTrash,
  IconUsb,
} from "@tabler/icons-react";
import { Button } from "@/components/shadcn/button";

export default function AlertDialogShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="mt-2 text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response. Shown as static card previews.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Standard delete confirmation */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Delete confirmation
          </h2>
          <div className="w-full max-w-md rounded-[14px] border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Are you absolutely sure?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Continue</Button>
            </div>
          </div>
        </section>

        {/* USB accessory prompt */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Accessory permission
          </h2>
          <div className="w-full max-w-md rounded-[14px] border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <IconUsb className="size-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Allow accessory to connect?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A USB accessory wants to connect to your device. Allow this
                  connection?
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline">Don&apos;t allow</Button>
              <Button>Allow</Button>
            </div>
          </div>
        </section>

        {/* Share project */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Share dialog
          </h2>
          <div className="w-full max-w-md rounded-[14px] border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-success-background">
                <IconShare className="size-5 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Share this project?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Anyone with the link will be able to view this project and its
                  contents.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button>Share</Button>
            </div>
          </div>
        </section>

        {/* Centered accessory prompt */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Centered layout
          </h2>
          <div className="w-full max-w-md rounded-[14px] border bg-card p-4 text-center shadow-sm">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-muted">
              <IconUsb className="size-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">
              Allow accessory to connect?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A USB accessory wants to connect to your device. Allow this
              connection?
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline">Don&apos;t allow</Button>
              <Button>Allow</Button>
            </div>
          </div>
        </section>

        {/* Delete chat — destructive centered */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Destructive centered
          </h2>
          <div className="w-full max-w-md rounded-[14px] border bg-card p-4 text-center shadow-sm">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-destructive/10">
              <IconTrash className="size-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold">Delete chat?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This will permanently delete the chat and all its messages. This
              action cannot be undone.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
