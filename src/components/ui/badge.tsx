import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error: "bg-error text-white",
  info: "bg-info text-white",
  outline: "border border-border text-text bg-transparent",
} as const;

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: keyof typeof variantStyles;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps, variantStyles as badgeVariants };
