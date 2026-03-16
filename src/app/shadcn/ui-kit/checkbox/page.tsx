"use client";

import { useState } from "react";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Label } from "@/components/shadcn/label";

export default function CheckboxShowcase() {
  const [termsChecked, setTermsChecked] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [techNews, setTechNews] = useState(true);
  const [productUpdates, setProductUpdates] = useState(true);
  const [tipsTricks, setTipsTricks] = useState(true);
  const [eventsWebinars, setEventsWebinars] = useState(false);

  const [cardTechNews, setCardTechNews] = useState(true);
  const [cardProductUpdates, setCardProductUpdates] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="mt-2 text-muted-foreground">
          A checkbox component for toggling options, built on Radix Checkbox.
        </p>
      </div>

      <div className="space-y-10">
        {/* Single checkbox - checked */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Default
          </h2>
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={termsChecked}
              onCheckedChange={(v) => setTermsChecked(v === true)}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
        </section>

        {/* Error checkbox */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error
          </h2>
          <div className="flex items-center gap-2">
            <Checkbox id="terms-error" aria-invalid="true" />
            <Label
              htmlFor="terms-error"
              className="cursor-pointer text-destructive"
            >
              Accept terms and conditions
            </Label>
          </div>
        </section>

        {/* Checkbox with description */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With Description
          </h2>
          <div className="flex gap-2">
            <Checkbox id="terms-desc" className="mt-0.5" defaultChecked />
            <div>
              <Label htmlFor="terms-desc" className="cursor-pointer">
                Accept terms and conditions
              </Label>
              <p className="text-sm text-muted-foreground">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Disabled checkbox */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Disabled
          </h2>
          <div className="flex items-center gap-2">
            <Checkbox
              id="notifications-disabled"
              disabled
              checked={notificationsEnabled}
              onCheckedChange={(v) => setNotificationsEnabled(v === true)}
            />
            <Label
              htmlFor="notifications-disabled"
              className="text-muted-foreground"
            >
              Enable notifications
            </Label>
          </div>
        </section>

        {/* Checkbox group */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkbox Group
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="tech-news"
                checked={techNews}
                onCheckedChange={(v) => setTechNews(v === true)}
              />
              <Label htmlFor="tech-news" className="cursor-pointer">
                Technology News
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="product-updates"
                checked={productUpdates}
                onCheckedChange={(v) => setProductUpdates(v === true)}
              />
              <Label htmlFor="product-updates" className="cursor-pointer">
                Product Updates
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="tips-tricks"
                checked={tipsTricks}
                onCheckedChange={(v) => setTipsTricks(v === true)}
              />
              <Label htmlFor="tips-tricks" className="cursor-pointer">
                Tips & Tricks
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="events-webinars"
                checked={eventsWebinars}
                onCheckedChange={(v) => setEventsWebinars(v === true)}
              />
              <Label htmlFor="events-webinars" className="cursor-pointer">
                Events & Webinars
              </Label>
            </div>
          </div>
        </section>

        {/* Checkbox cards */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Checkbox Cards
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <label
              htmlFor="card-tech"
              className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition-colors ${
                cardTechNews
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <Checkbox
                id="card-tech"
                checked={cardTechNews}
                onCheckedChange={(v) => setCardTechNews(v === true)}
                className="mt-0.5"
              />
              <div>
                <span className="text-sm font-medium">Technology News</span>
                <p className="text-sm text-muted-foreground">
                  Stay updated with the latest technology news and trends.
                </p>
              </div>
            </label>
            <label
              htmlFor="card-product"
              className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition-colors ${
                cardProductUpdates
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <Checkbox
                id="card-product"
                checked={cardProductUpdates}
                onCheckedChange={(v) => setCardProductUpdates(v === true)}
                className="mt-0.5"
              />
              <div>
                <span className="text-sm font-medium">Product Updates</span>
                <p className="text-sm text-muted-foreground">
                  Get notified about new product features and improvements.
                </p>
              </div>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
