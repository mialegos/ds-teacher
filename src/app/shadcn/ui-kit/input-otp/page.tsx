"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/input-otp";

export default function InputOTPShowcase() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="mt-2 text-muted-foreground">
          Accessible one-time password component with copy paste functionality.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* 3+3 with dash separator */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            With separator (3+3)
          </h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </section>

        {/* 6 boxes without separator */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Without separator (6 digits)
          </h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </section>

        {/* Partially filled with dash separators */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Partially filled (2+2+2)
          </h2>
          <InputOTP maxLength={6} defaultValue="12">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </section>

        {/* Rounded circle boxes */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Rounded slots
          </h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup className="gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="rounded-full border size-10"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </section>

        {/* Error state */}
        <section>
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Error state (3+3)
          </h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="border-destructive" />
              <InputOTPSlot index={1} className="border-destructive" />
              <InputOTPSlot index={2} className="border-destructive" />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="border-destructive" />
              <InputOTPSlot index={4} className="border-destructive" />
              <InputOTPSlot index={5} className="border-destructive" />
            </InputOTPGroup>
          </InputOTP>
          <p className="mt-2 text-xs text-destructive">
            Invalid verification code.
          </p>
        </section>
      </div>
    </div>
  );
}
