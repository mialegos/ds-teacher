"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Badge } from "@/components/shadcn/badge";
import {
  IconChevronDown,
  IconArrowsSort,
  IconDots,
} from "@tabler/icons-react";

type Payment = {
  id: string;
  email: string;
  amount: number;
  status: "Success" | "Processing" | "Failed";
};

const data: Payment[] = [
  { id: "1", email: "michael.mitc@example.com", amount: 630.44, status: "Success" },
  { id: "2", email: "felicia.reid@example.com", amount: 767.50, status: "Success" },
  { id: "3", email: "georgia.young@example.com", amount: 396.84, status: "Processing" },
  { id: "4", email: "alma.lawson@example.com", amount: 475.22, status: "Success" },
  { id: "5", email: "dolores.chambers@example.com", amount: 275.43, status: "Failed" },
];

type ColumnKey = "status" | "email" | "amount";

export default function DataTableShowcase() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [columns, setColumns] = useState<Record<ColumnKey, boolean>>({
    status: true,
    email: true,
    amount: true,
  });

  const filtered = data.filter((row) =>
    row.email.toLowerCase().includes(filter.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) =>
    sortDir === "asc"
      ? a.email.localeCompare(b.email)
      : b.email.localeCompare(a.email),
  );

  const allSelected = sorted.length > 0 && sorted.every((r) => selected.has(r.id));

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(sorted.map((r) => r.id)));
    }
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Data Table</h1>
        <p className="mt-2 text-muted-foreground">
          A functional data table with filtering, sorting, selection, and column visibility.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 pb-4">
        <Input
          placeholder="Filter emails..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Columns
              <IconChevronDown className="ml-2 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(Object.keys(columns) as ColumnKey[]).map((col) => (
              <DropdownMenuCheckboxItem
                key={col}
                checked={columns[col]}
                onCheckedChange={(checked) =>
                  setColumns((prev) => ({ ...prev, [col]: !!checked }))
                }
                className="capitalize"
              >
                {col}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={toggleAll}
                  aria-label="Select all"
                />
              </TableHead>
              {columns.status && <TableHead>Status</TableHead>}
              {columns.email && (
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-8"
                    onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                  >
                    Email
                    <IconArrowsSort className="ml-2 size-4" />
                  </Button>
                </TableHead>
              )}
              {columns.amount && (
                <TableHead className="text-right">Amount</TableHead>
              )}
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            ) : (
              sorted.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={selected.has(row.id) ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={selected.has(row.id)}
                      onCheckedChange={() => toggleRow(row.id)}
                      aria-label={`Select ${row.email}`}
                    />
                  </TableCell>
                  {columns.status && (
                    <TableCell>
                      <Badge
                        variant={
                          row.status === "Success"
                            ? "success"
                            : row.status === "Processing"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  )}
                  {columns.email && (
                    <TableCell className="font-medium">{row.email}</TableCell>
                  )}
                  {columns.amount && (
                    <TableCell className="text-right">
                      ${row.amount.toFixed(2)}
                    </TableCell>
                  )}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <IconDots className="size-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() =>
                            navigator.clipboard.writeText(row.id)
                          }
                        >
                          Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between pt-4">
        <p className="text-sm text-muted-foreground">
          {selected.size} of {sorted.length} row(s) selected.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
