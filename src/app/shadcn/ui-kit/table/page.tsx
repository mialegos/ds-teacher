import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { Button } from "@/components/shadcn/button";
import { IconDots } from "@tabler/icons-react";

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

const products = [
  { name: "Ergonomic Keyboard", price: "$249.99" },
  { name: "Bluetooth Speaker", price: "$99.99" },
  { name: "Web Camera", price: "$199.99" },
  { name: "USB-C Adapter", price: "$79.99" },
  { name: "Monitor Stand", price: "$399.99" },
];

export default function TableShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="mt-2 text-muted-foreground">
          A responsive table component.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Invoice table */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Invoices
          </h2>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">
                      {invoice.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$1,750.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <p className="px-4 py-2 text-xs text-muted-foreground">
              A list of your recent invoices.
            </p>
          </div>
        </section>

        {/* Product table */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Products
          </h2>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="w-[80px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="size-8">
                        <IconDots className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

      </div>
    </div>
  );
}
