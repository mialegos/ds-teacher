import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/shadcn/hover-card";
import { IconCalendar } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";

export default function HoverCardShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p className="mt-2 text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      <section>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              @nextjs
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" />
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm text-muted-foreground">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center gap-1 pt-2 text-xs text-muted-foreground">
                  <IconCalendar className="size-3" />
                  Joined December 2024
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </section>
    </div>
  );
}
