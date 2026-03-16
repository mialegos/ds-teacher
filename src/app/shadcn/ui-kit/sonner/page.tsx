"use client";

import { toast } from "sonner";
import { Toaster } from "@/components/shadcn/sonner";
import { Button } from "@/components/shadcn/button";

export default function SonnerShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <Toaster />
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Sonner</h1>
        <p className="mt-2 text-muted-foreground">
          An opinionated toast component for React.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Default */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Variants
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast("Event has been created")}
            >
              Default
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Monday, January 3rd at 6:00pm",
                })
              }
            >
              With description
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Monday, January 3rd at 6:00pm",
                  action: {
                    label: "Undo",
                    onClick: () => {},
                  },
                })
              }
            >
              With action
            </Button>
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Types
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast.info("Event has been created")}
            >
              Info
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.warning(
                  "Be at the area 10 minutes before the event time."
                )
              }
            >
              Warning
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.error(
                  "Event start time cannot be earlier than 8am."
                )
              }
            >
              Error
            </Button>

            <Button
              variant="outline"
              onClick={() => toast.success("Event has been created")}
            >
              Success
            </Button>
          </div>
        </section>

        {/* Loading / Promise */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Loading &amp; Promise
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() =>
                toast.loading("Loading")
              }
            >
              Loading
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.promise(
                  new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: "Event has not been created",
                    success: "Event has been created",
                    error: "Error creating event",
                  }
                )
              }
            >
              Promise
            </Button>
          </div>
        </section>

        {/* Action variants */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With cancel
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  cancel: {
                    label: "Cancel",
                    onClick: () => {},
                  },
                })
              }
            >
              With Cancel
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
