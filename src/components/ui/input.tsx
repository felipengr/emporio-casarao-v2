import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-highlight disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Field({
  label,
  erro,
  children,
  className,
}: {
  label: string;
  erro?: string | null;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: o <input> vem em children, dentro do <label> (associação implícita válida em HTML)
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-sm font-medium">{label}</span>
      {children}
      {erro ? <span className="text-sm text-destructive">{erro}</span> : null}
    </label>
  );
}

export { Input, Field };
