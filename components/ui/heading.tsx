import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = React.PropsWithChildren<{
  level: HeadingLevel;
  eyebrow?: string;
  description?: string;
  className?: string;
}>;

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl",
  2: "text-2xl sm:text-3xl",
  3: "text-xl sm:text-2xl",
};

export function Heading({
  level,
  eyebrow,
  description,
  className,
  children,
}: HeadingProps) {
  const Component = `h${level}` as const;

  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <Component className={cn("font-semibold tracking-tight text-foreground", levelClasses[level])}>
        {children}
      </Component>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}