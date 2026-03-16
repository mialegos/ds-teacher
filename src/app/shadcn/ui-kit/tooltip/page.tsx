import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";
import { Button } from "@/components/shadcn/button";
import { IconPrinter } from "@tabler/icons-react";

export default function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="mx-auto max-w-4xl px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
          <p className="mt-2 text-muted-foreground">
            A popup that displays information related to an element when the
            element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Full width tooltip */}
          <section>
            <h2 className="mb-4 text-sm font-medium text-muted-foreground">
              Default
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  You can add tooltips using absolute positioning or
                  Figma&apos;s hover interactions.
                </p>
              </TooltipContent>
            </Tooltip>
          </section>

          {/* All 4 sides */}
          <section>
            <h2 className="mb-4 text-sm font-medium text-muted-foreground">
              Positions
            </h2>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>You can add tooltips using absolute positioning.</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>You can add tooltips using absolute positioning.</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>You can add tooltips using absolute positioning.</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>You can add tooltips using absolute positioning.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </section>

          {/* Kbd tooltip */}
          <section>
            <h2 className="mb-4 text-sm font-medium text-muted-foreground">
              With keyboard shortcut
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <IconPrinter className="mr-1.5 size-4" />
                  Print
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex items-center gap-2">
                <span>Print Document</span>
                <span className="flex items-center gap-0.5">
                  <kbd className="rounded border border-border/50 bg-background/50 px-1 py-0.5 text-[10px] font-mono">
                    Ctrl
                  </kbd>
                  <kbd className="rounded border border-border/50 bg-background/50 px-1 py-0.5 text-[10px] font-mono">
                    P
                  </kbd>
                </span>
              </TooltipContent>
            </Tooltip>
          </section>
        </div>
      </div>
    </TooltipProvider>
  );
}
