import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={`text-4xl font-semibold tracking-tight text-foreground sm:text-5xl ${className ?? ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`text-2xl font-semibold tracking-tight text-foreground sm:text-3xl ${className ?? ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`text-xl font-semibold tracking-tight text-foreground ${className ?? ""}`}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={`leading-7 text-muted-foreground ${className ?? ""}`} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a
      className={`font-medium text-foreground underline underline-offset-4 ${className ?? ""}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={`space-y-2 pl-6 ${className ?? ""}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`space-y-2 pl-6 ${className ?? ""}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`leading-7 text-muted-foreground ${className ?? ""}`} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`border-l-2 border-border pl-4 italic text-muted-foreground ${className ?? ""}`}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={`rounded-md bg-surface-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground ${className ?? ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`overflow-x-auto rounded-3xl border border-border bg-surface-muted p-5 font-mono text-sm text-foreground ${className ?? ""}`}
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}