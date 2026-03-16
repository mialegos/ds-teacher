import { Badge } from "@/components/shadcn/badge";
import {
  IconCheck,
  IconArrowRight,
  IconArrowUpRight,
  IconSparkles,
  IconAlertTriangle,
} from "@tabler/icons-react";

export default function BadgeShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a badge or a component that looks like a badge. Supports
          multiple variants and custom colors.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Variants
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Verified
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="verified">
            <IconCheck className="size-3" />
            Verified
          </Badge>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          With icons
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">
            <IconCheck className="size-3" />
            Badge
            <IconArrowRight className="size-3" />
          </Badge>
          <Badge variant="destructive">
            <IconAlertTriangle className="size-3" />
            Alert
            <IconArrowRight className="size-3" />
          </Badge>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Number badge
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="min-w-6 justify-center px-1.5">8</Badge>
          <Badge variant="destructive" className="min-w-6 justify-center px-1.5">
            99
          </Badge>
          <Badge variant="outline" className="min-w-6 justify-center px-1.5">
            20+
          </Badge>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Link badges
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#">
            <Badge>
              <IconCheck className="size-3" />
              Link
              <IconArrowRight className="size-3" />
            </Badge>
          </a>
          <a href="#">
            <Badge variant="secondary">
              <IconCheck className="size-3" />
              Link
              <IconArrowRight className="size-3" />
            </Badge>
          </a>
          <a href="#">
            <Badge variant="destructive">
              <IconCheck className="size-3" />
              Link
              <IconArrowRight className="size-3" />
            </Badge>
          </a>
          <a href="#">
            <Badge variant="outline">
              <IconCheck className="size-3" />
              Link
              <IconArrowRight className="size-3" />
            </Badge>
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Custom styled
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="gap-1.5 bg-edtech-blue-100 text-edtech-blue-700 hover:bg-edtech-blue-200">
            <IconSparkles className="size-3" />
            AI Generated
          </Badge>
        </div>
      </section>
    </div>
  );
}
