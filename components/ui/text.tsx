import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("leading-7", {
  variants: {
    size: {
      default: "text-sm sm:text-base text-muted-foreground",
      lg: "text-base sm:text-lg text-muted-foreground",
      sm: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type TextProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textVariants>;

export function Text({ className, size, ...props }: TextProps) {
  return <p className={cn(textVariants({ size, className }))} {...props} />;
}