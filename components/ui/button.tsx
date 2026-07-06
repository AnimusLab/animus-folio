import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-foreground bg-foreground text-accent-foreground hover:bg-foreground/90",
        outline: "border-border bg-surface text-foreground hover:bg-surface-muted",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-surface-muted",
        link: "border-transparent bg-transparent text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: never;
    external?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        {...(props as Omit<LinkButtonProps, "href" | "external">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as Omit<NativeButtonProps, "href" | "external">)}>
      {children}
    </button>
  );
}

export { buttonVariants };