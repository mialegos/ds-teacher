"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { IconCalendar } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function DatePickerShowcase() {
  const [singleDate, setSingleDate] = useState<Date>();
  const [rangeDate, setRangeDate] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(2025, 1, 19),
  });
  const [payDate, setPayDate] = useState<Date>();
  const [dtDate, setDtDate] = useState<Date>(new Date(2025, 0, 15));
  const [dtTime, setDtTime] = useState("12:00:00");
  const [extDate, setExtDate] = useState<Date>();
  const [extMonth, setExtMonth] = useState<number>(new Date().getMonth());
  const [extYear, setExtYear] = useState<number>(new Date().getFullYear());

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Date Picker</h1>
        <p className="mt-2 text-muted-foreground">
          Date selection via Calendar + Popover with various configurations.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Single date picker */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Pick a date
          </h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !singleDate && "text-muted-foreground",
                )}
              >
                <IconCalendar className="mr-2 size-4" />
                {singleDate ? format(singleDate, "dd.MM.yyyy") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </section>

        {/* Single date picker open state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Single date picker with calendar
          </h2>
          <div className="w-fit rounded-md border border-border p-0">
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
            />
          </div>
        </section>

        {/* Date range picker */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Date Picker Range
          </h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[340px] justify-start text-left font-normal",
                  !rangeDate && "text-muted-foreground",
                )}
              >
                <IconCalendar className="mr-2 size-4" />
                {rangeDate?.from ? (
                  rangeDate.to ? (
                    <>
                      {format(rangeDate.from, "dd.MM.yyyy")} –{" "}
                      {format(rangeDate.to, "dd.MM.yyyy")}
                    </>
                  ) : (
                    format(rangeDate.from, "dd.MM.yyyy")
                  )
                ) : (
                  "Pick a date range"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={rangeDate}
                onSelect={(r) => setRangeDate(r as { from: Date; to?: Date })}
                numberOfMonths={2}
                defaultMonth={new Date(2025, 0)}
              />
            </PopoverContent>
          </Popover>
        </section>

        {/* Date of pay */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Date of pay
          </h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !payDate && "text-muted-foreground",
                )}
              >
                <IconCalendar className="mr-2 size-4" />
                {payDate ? format(payDate, "dd.MM.yyyy") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={payDate}
                onSelect={setPayDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </section>

        {/* Date and time picker */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Date and time picker
          </h2>
          <div className="flex items-end gap-3">
            <div className="grid gap-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[200px] justify-start text-left font-normal"
                  >
                    <IconCalendar className="mr-2 size-4" />
                    {format(dtDate, "dd.MM.yyyy")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dtDate}
                    onSelect={(d) => d && setDtDate(d)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label>Time (HH:MM:SS)</Label>
              <Input
                type="text"
                value={dtTime}
                onChange={(e) => setDtTime(e.target.value)}
                placeholder="HH:MM:SS"
                className="w-[140px]"
              />
            </div>
          </div>
        </section>

        {/* Extended date with month/year dropdowns */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Extended Date
          </h2>
          <div className="w-fit space-y-3">
            <div className="flex gap-2">
              <Select
                value={String(extMonth)}
                onValueChange={(v) => setExtMonth(Number(v))}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December",
                  ].map((m, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={String(extYear)}
                onValueChange={(v) => setExtYear(Number(v))}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 11 }, (_, i) => 2020 + i).map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="rounded-md border border-border p-0">
              <Calendar
                mode="single"
                selected={extDate}
                onSelect={setExtDate}
                month={new Date(extYear, extMonth)}
                onMonthChange={(d) => {
                  setExtMonth(d.getMonth());
                  setExtYear(d.getFullYear());
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
