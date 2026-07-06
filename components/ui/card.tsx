import { cn } from "@/lib/utils";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  padding?: "sm" | "default" | "lg";
};

export function Card({ className, padding = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-surface shadow-[0_1px_0_rgba(17,24,39,0.04)]",
        padding === "sm" && "p-4",
        padding === "default" && "p-6",
        padding === "lg" && "p-8",
        className,
      )}
      {...props}
    />
  );
}