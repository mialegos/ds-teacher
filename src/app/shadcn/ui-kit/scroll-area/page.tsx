import { ScrollArea, ScrollBar } from "@/components/shadcn/scroll-area";
import { Separator } from "@/components/shadcn/separator";

const tags = [
  "v1.2.0-beta.50",
  "v1.2.0-beta.49",
  "v1.2.0-beta.48",
  "v1.2.0-beta.47",
  "v1.2.0-beta.46",
  "v1.2.0-beta.45",
  "v1.2.0-beta.44",
];

const photos = [
  { title: "Photo by John Doe", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" },
  { title: "Photo by Jane Smith", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop" },
  { title: "Photo by Alex Johnson", src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&h=200&fit=crop" },
  { title: "Photo by Emily Davis", src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=200&fit=crop" },
  { title: "Photo by Michael Brown", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=200&fit=crop" },
];

export default function ScrollAreaShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="mt-2 text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser
          styling.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Vertical scroll - Tags */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Vertical scroll
          </h2>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag, i) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  {i < tags.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Horizontal scroll - Photos */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Horizontal scroll
          </h2>
          <ScrollArea className="w-full max-w-lg whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {photos.map((photo) => (
                <figure key={photo.title} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="h-[150px] w-[250px] object-cover"
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </div>
    </div>
  );
}
