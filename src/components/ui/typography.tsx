import { type ComponentPropsWithoutRef, type ElementType, forwardRef } from "react";
import { cn } from "@/lib/utils";

const variantMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  blockquote: "blockquote",
  code: "code",
} as const;

const variantStyles: Record<keyof typeof variantMap, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base leading-7",
  span: "text-base",
  blockquote: "border-l-4 border-border pl-4 italic text-text-muted",
  code: "rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm",
};

type VariantKey = keyof typeof variantMap;

type TypographyProps<V extends VariantKey = "p"> = {
  variant?: V;
  muted?: boolean;
} & ComponentPropsWithoutRef<(typeof variantMap)[V]>;

function TypographyInner<V extends VariantKey = "p">(
  { variant, muted, className, ...props }: TypographyProps<V>,
  ref: React.ForwardedRef<HTMLElement>
) {
  const v = variant ?? ("p" as V);
  const Tag = variantMap[v] as ElementType;

  return (
    <Tag
      ref={ref}
      className={cn(variantStyles[v], muted && "text-text-muted", className)}
      {...props}
    />
  );
}

const Typography = forwardRef(TypographyInner) as <V extends VariantKey = "p">(
  props: TypographyProps<V> & { ref?: React.Ref<HTMLElement> }
) => React.ReactNode;

export { Typography, type TypographyProps, variantStyles as typographyVariants };
