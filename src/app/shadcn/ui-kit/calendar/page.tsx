"use client";

import { useState } from "react";
import { Calendar } from "@/components/shadcn/calendar";
import type { DateRange } from "react-day-picker";

export default function CalendarShowcase() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(
    new Date(2025, 0, 20)
  );
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 10),
    to: new Date(2025, 0, 18),
  });
  const [dualRange, setDualRange] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 22),
    to: new Date(2025, 1, 5),
  });
  const [footerDate, setFooterDate] = useState<Date | undefined>(
    new Date(2025, 0, 15)
  );
  const [labelDate, setLabelDate] = useState<Date | undefined>(new Date());
  const [smallDate, setSmallDate] = useState<Date | undefined>(new Date());

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="mt-2 text-muted-foreground">
          A date picker calendar component built on react-day-picker.
        </p>
      </div>

      <div className="space-y-10">
        {/* Default single date */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Default
          </h2>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            defaultMonth={new Date(2025, 0)}
            className="rounded-md border border-border"
          />
        </section>

        {/* Date range selection */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Date Range
          </h2>
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            defaultMonth={new Date(2025, 0)}
            className="rounded-md border border-border"
          />
        </section>

        {/* Multiple months side by side */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Multiple Months
          </h2>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            numberOfMonths={2}
            defaultMonth={new Date(2025, 0)}
            className="rounded-md border border-border"
          />
        </section>

        {/* Date range with two calendars */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Date Range with Two Calendars
          </h2>
          <Calendar
            mode="range"
            selected={dualRange}
            onSelect={setDualRange}
            numberOfMonths={2}
            defaultMonth={new Date(2025, 0)}
            className="rounded-md border border-border"
          />
        </section>

        {/* Calendar with footer */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Footer
          </h2>
          <div className="w-fit rounded-md border border-border">
            <Calendar
              mode="single"
              selected={footerDate}
              onSelect={setFooterDate}
              defaultMonth={new Date(2025, 0)}
            />
            <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              Selected:{" "}
              {footerDate
                ? footerDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "None"}
            </div>
          </div>
        </section>

        {/* Calendar with Today and Events labels */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Labels
          </h2>
          <div className="w-fit rounded-md border border-border">
            <Calendar
              mode="single"
              selected={labelDate}
              onSelect={setLabelDate}
            />
            <div className="flex items-center gap-4 border-t border-border px-4 py-3 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Today</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-accent-foreground/50" />
                <span className="text-muted-foreground">Events</span>
              </div>
            </div>
          </div>
        </section>

        {/* Small single month calendar */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Small Calendar
          </h2>
          <Calendar
            mode="single"
            selected={smallDate}
            onSelect={setSmallDate}
            className="rounded-md border border-border text-xs [--cell-size:--spacing(7)]"
          />
        </section>
      </div>
    </div>
  );
}
