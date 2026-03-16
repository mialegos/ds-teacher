import { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  label?: string;
  description?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary",
            "focus:ring-2 focus:ring-border-focus focus:ring-offset-1",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "accent-primary",
            className
          )}
          {...props}
        />
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

Checkbox.displayName = "Checkbox";

export { Checkbox, type CheckboxProps };
