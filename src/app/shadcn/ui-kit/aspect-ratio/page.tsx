import { AspectRatio } from "@/components/shadcn/aspect-ratio";

export default function AspectRatioShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="mt-2 text-muted-foreground">
          Displays content within a desired ratio. Built on Radix AspectRatio.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            1:1 (Square)
          </h2>
          <div className="w-80 overflow-hidden rounded-lg border border-border">
            <AspectRatio ratio={1}>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop"
                alt="Square landscape"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            16:9 (Landscape)
          </h2>
          <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop"
                alt="Widescreen landscape"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>
      </div>
    </div>
  );
}
