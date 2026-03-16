"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/shadcn/carousel";
import { Card, CardContent } from "@/components/shadcn/card";

export default function CarouselShowcase() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
        <p className="mt-2 text-muted-foreground">
          A carousel component with navigation, built on Embla Carousel.
        </p>
      </div>

      <div className="space-y-12">
        {/* Single item with counter */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Single Item with Counter
          </h2>
          <div className="mx-auto max-w-sm">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {[
                  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
                ].map((src, i) => (
                  <CarouselItem key={i}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={src}
                          alt={`Landscape ${i + 1}`}
                          className="aspect-video w-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </p>
          </div>
        </section>

        {/* Two items visible */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Two Items Visible
          </h2>
          <div className="mx-auto max-w-md">
            <Carousel className="w-full">
              <CarouselContent className="-ml-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/2 pl-3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Three items visible */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Three Items Visible
          </h2>
          <div className="mx-auto max-w-lg">
            <Carousel className="w-full">
              <CarouselContent className="-ml-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/3 pl-3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="text-2xl font-semibold">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Four small items */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Four Items Visible
          </h2>
          <div className="mx-auto max-w-xl">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/4 pl-2">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <span className="text-xl font-semibold">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Vertical carousel */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Vertical
          </h2>
          <div className="mx-auto max-w-xs">
            <Carousel orientation="vertical" className="w-full">
              <CarouselContent className="-mt-3 h-[300px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/3 pt-3">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Vertical with wider items */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Vertical Wide
          </h2>
          <div className="mx-auto max-w-sm">
            <Carousel orientation="vertical" className="w-full">
              <CarouselContent className="-mt-3 h-[350px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/2 pt-3">
                    <Card>
                      <CardContent className="flex items-center justify-center p-8">
                        <span className="text-3xl font-semibold">{i + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}
