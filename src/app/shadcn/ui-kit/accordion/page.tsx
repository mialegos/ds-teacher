"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";

export default function AccordionShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="mt-2 text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content. Built on Radix Accordion.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Default (single open at a time)
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I reset my password?</AccordionTrigger>
            <AccordionContent>
              You can reset your password by clicking the &quot;Forgot
              password&quot; link on the login page. We&apos;ll send you an
              email with instructions to create a new password.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I change my subscription plan?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade or downgrade your subscription at any time
              from your account settings. Changes will be reflected in your next
              billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, MasterCard, American
              Express), PayPal, and bank transfers for annual plans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          Multiple expand
        </h2>
        <div className="w-full max-w-lg">
          <div className="mb-3">
            <h3 className="text-base font-semibold">
              Subscription &amp; Billing
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your subscription plan, payment methods, and billing
              history.
            </p>
          </div>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>How do I update my billing info?</AccordionTrigger>
              <AccordionContent>
                Navigate to Settings &gt; Billing and update your payment method
                or billing address. Changes take effect immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>
                Can I get a refund after cancellation?
              </AccordionTrigger>
              <AccordionContent>
                Refunds are available within 14 days of your last payment. After
                that period, your subscription will remain active until the end
                of the current billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-3">
              <AccordionTrigger>
                Where can I download my invoices?
              </AccordionTrigger>
              <AccordionContent>
                All invoices are available in your account under Settings &gt;
                Billing &gt; Invoice History. You can download them as PDF files.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          First item open by default
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="default-1"
          className="w-full max-w-lg"
        >
          <AccordionItem value="default-1">
            <AccordionTrigger>How do I reset my password?</AccordionTrigger>
            <AccordionContent>
              You can reset your password by clicking the &quot;Forgot
              password&quot; link on the login page. We&apos;ll send you an
              email with instructions to create a new password.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="default-2">
            <AccordionTrigger>
              Can I change my subscription plan?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade or downgrade your subscription at any time
              from your account settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="default-3">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, PayPal, and bank transfers for
              annual plans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
