import { Textarea } from "@/components/shadcn/textarea";
import { Label } from "@/components/shadcn/label";

export default function TextareaShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        {/* Default */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Default
          </h2>
          <Textarea placeholder="Type your message here." />
        </section>

        {/* Error */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Error
          </h2>
          <Textarea
            placeholder="Type your message here."
            className="border-destructive focus-visible:ring-destructive"
          />
        </section>

        {/* Filled */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Filled
          </h2>
          <Textarea
            placeholder="Type your message here."
            defaultValue="This is a filled textarea with some content that has been entered by the user."
          />
        </section>

        {/* Focused */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            With label
          </h2>
          <div className="grid gap-2">
            <Label htmlFor="textarea-focused">Your message</Label>
            <Textarea
              id="textarea-focused"
              placeholder="Type your message here."
            />
            <p className="text-xs text-muted-foreground">
              Your message will be copied to the support team.
            </p>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Disabled
          </h2>
          <Textarea placeholder="Type your message here." disabled />
        </section>
      </div>
    </div>
  );
}
