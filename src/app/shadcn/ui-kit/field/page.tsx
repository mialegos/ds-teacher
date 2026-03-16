"use client";

import { useState } from "react";
import { Label } from "@/components/shadcn/label";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import { Checkbox } from "@/components/shadcn/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Separator } from "@/components/shadcn/separator";
import { Slider } from "@/components/shadcn/slider";
import { Button } from "@/components/shadcn/button";
import { IconCreditCard } from "@tabler/icons-react";

export default function FieldShowcase() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [priceRange, setPriceRange] = useState([50, 350]);
  const [foodItems, setFoodItems] = useState<string[]>(["pizza", "sushi"]);
  const [subscriptionPlan, setSubscriptionPlan] = useState("pro");
  const [compostEnv, setCompostEnv] = useState("indoor");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [saveDefault, setSaveDefault] = useState(false);

  function toggleFood(item: string) {
    setFoodItems((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item],
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Field</h1>
        <p className="mt-2 text-muted-foreground">
          Comprehensive form field patterns including inputs, selects, checkboxes, radios, sliders, and complex layouts.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Payment Method section */}
        <section>
          <h2 className="mb-6 text-lg font-semibold">Payment Method</h2>
          <div className="max-w-lg space-y-6">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex gap-4">
                <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-4 py-3 has-[:checked]:border-primary">
                  <RadioGroupItem value="credit-card" />
                  <span className="text-sm font-medium">Credit Card</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-4 py-3 has-[:checked]:border-primary">
                  <RadioGroupItem value="paypal" />
                  <span className="text-sm font-medium">PayPal</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-4 py-3 has-[:checked]:border-primary">
                  <RadioGroupItem value="apple-pay" />
                  <span className="text-sm font-medium">Apple Pay</span>
                </label>
              </div>
            </RadioGroup>

            <div className="grid gap-2">
              <Label htmlFor="card-name">Name on Card</Label>
              <Input id="card-name" placeholder="John Doe" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="card-number">Card Number</Label>
              <div className="relative">
                <Input
                  id="card-number"
                  placeholder="4242 4242 4242 4242"
                  className="pr-10"
                />
                <IconCreditCard className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label>Month</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i} value={String(i + 1).padStart(2, "0")}>
                        {String(i + 1).padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={String(2025 + i)}>
                        {2025 + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" maxLength={4} />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-sm font-semibold">Billing Address</h3>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="same-shipping"
                    checked={sameAsShipping}
                    onCheckedChange={(v) => setSameAsShipping(!!v)}
                  />
                  <Label htmlFor="same-shipping" className="text-sm font-normal">
                    Same as shipping address
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="save-default"
                    checked={saveDefault}
                    onCheckedChange={(v) => setSaveDefault(!!v)}
                  />
                  <Label htmlFor="save-default" className="text-sm font-normal">
                    Save as default
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button>Continue</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Username */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Username
          </h2>
          <div className="grid gap-2">
            <Label htmlFor="field-username">Username</Label>
            <Input id="field-username" placeholder="@shadcn" />
            <p className="text-xs text-muted-foreground">
              This is your public display name.
            </p>
          </div>
        </section>

        {/* Password */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Password
          </h2>
          <div className="grid gap-2">
            <Label htmlFor="field-password">Password</Label>
            <Input id="field-password" type="password" placeholder="••••••••" />
          </div>
        </section>

        {/* Textarea */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Textarea
          </h2>
          <div className="grid gap-2">
            <Label htmlFor="field-textarea">Bio</Label>
            <Textarea
              id="field-textarea"
              placeholder="Tell us a little about yourself"
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              You can @mention other users and organizations.
            </p>
          </div>
        </section>

        {/* File Upload */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            File Upload
          </h2>
          <div className="grid gap-2">
            <Label htmlFor="field-file">Upload</Label>
            <Input id="field-file" type="file" />
          </div>
        </section>

        {/* Price Range Slider */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Price Range
          </h2>
          <div className="grid gap-4">
            <Label>Price Range</Label>
            <Slider
              min={0}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </section>

        <Separator />

        {/* Checkbox group - Food items */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkbox group
          </h2>
          <div className="grid gap-3">
            <Label className="text-base">What food items do you like?</Label>
            {[
              { id: "pizza", label: "Pizza" },
              { id: "sushi", label: "Sushi" },
              { id: "tacos", label: "Tacos" },
              { id: "pasta", label: "Pasta" },
              { id: "salad", label: "Salad" },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  id={`food-${item.id}`}
                  checked={foodItems.includes(item.id)}
                  onCheckedChange={() => toggleFood(item.id)}
                />
                <Label
                  htmlFor={`food-${item.id}`}
                  className="text-sm font-normal"
                >
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription Plan Radio */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Radio group
          </h2>
          <div className="grid gap-3">
            <Label className="text-base">Subscription Plan</Label>
            <RadioGroup
              value={subscriptionPlan}
              onValueChange={setSubscriptionPlan}
            >
              {[
                { value: "free", label: "Free", desc: "Basic features" },
                { value: "pro", label: "Pro", desc: "Advanced features" },
                { value: "enterprise", label: "Enterprise", desc: "Custom solutions" },
              ].map((plan) => (
                <div key={plan.value} className="flex items-start gap-2">
                  <RadioGroupItem
                    value={plan.value}
                    id={`plan-${plan.value}`}
                    className="mt-0.5"
                  />
                  <div>
                    <Label htmlFor={`plan-${plan.value}`} className="text-sm">
                      {plan.label}
                    </Label>
                    <p className="text-xs text-muted-foreground">{plan.desc}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </section>

        {/* Compost Environment */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Compost Environment
          </h2>
          <div className="grid gap-3">
            <Label className="text-base">Select environment</Label>
            <RadioGroup value={compostEnv} onValueChange={setCompostEnv}>
              {[
                { value: "indoor", label: "Indoor", desc: "Temperature-controlled environment" },
                { value: "outdoor", label: "Outdoor", desc: "Natural conditions" },
                { value: "greenhouse", label: "Greenhouse", desc: "Protected growing space" },
              ].map((env) => (
                <label
                  key={env.value}
                  className="flex cursor-pointer items-start gap-3 rounded-md border border-border p-4 has-[:checked]:border-primary"
                >
                  <RadioGroupItem
                    value={env.value}
                    id={`env-${env.value}`}
                    className="mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-medium">{env.label}</span>
                    <p className="text-xs text-muted-foreground">{env.desc}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
        </section>

        <Separator />

        {/* Company Information */}
        <section>
          <h2 className="mb-6 text-lg font-semibold">Company Information</h2>
          <div className="grid max-w-lg gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Acme Inc." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-website">Website</Label>
                <Input id="company-website" placeholder="https://example.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company-email">Email</Label>
                <Input
                  id="company-email"
                  type="email"
                  placeholder="info@company.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-phone">Phone</Label>
                <Input
                  id="company-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-address">Address</Label>
              <Textarea
                id="company-address"
                placeholder="123 Business Ave"
                rows={2}
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* Data Source dropdown */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Data Source
          </h2>
          <div className="grid gap-2">
            <Label>Data Source</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a data source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgres">PostgreSQL</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="mongodb">MongoDB</SelectItem>
                <SelectItem value="redis">Redis</SelectItem>
                <SelectItem value="sqlite">SQLite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Virtual Machine dropdown with description */}
        <section className="max-w-md">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Virtual Machine
          </h2>
          <div className="grid gap-2">
            <Label>Virtual Machine</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a VM type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (1 vCPU, 2 GB RAM)</SelectItem>
                <SelectItem value="medium">Medium (2 vCPU, 4 GB RAM)</SelectItem>
                <SelectItem value="large">Large (4 vCPU, 8 GB RAM)</SelectItem>
                <SelectItem value="xlarge">XLarge (8 vCPU, 16 GB RAM)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Choose the virtual machine size for your deployment.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
