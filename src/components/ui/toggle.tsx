"use client";

import { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  label?: string;
  description?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, description, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
      <div className="flex items-start gap-3">
        <label htmlFor={id} className="relative inline-flex cursor-pointer items-center">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors",
              "bg-border peer-checked:bg-primary",
              "after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform",
              "peer-checked:after:translate-x-5",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-border-focus peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              className
            )}
          />
        </label>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label htmlFor={id} className="text-sm font-medium text-text cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <span className="text-xs text-text-muted">{description}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle, type ToggleProps };
