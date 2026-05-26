import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "border bg-card text-foreground hover:bg-secondary",
        variant === "ghost" && "text-foreground hover:bg-secondary",
        className
      )}
      {...props}
    />
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function LinkButton({ className, variant = "primary", href, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "border bg-card text-foreground hover:bg-secondary",
        variant === "ghost" && "text-foreground hover:bg-secondary",
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-lg border bg-card text-card-foreground shadow-soft", className)}>{children}</div>;
}

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: ReactNode;
  tone?: "neutral" | "blue" | "amber" | "green" | "red";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        tone === "neutral" && "bg-secondary text-muted-foreground",
        tone === "blue" && "border-blue-200 bg-blue-50 text-blue-800",
        tone === "amber" && "border-amber-200 bg-amber-50 text-amber-900",
        tone === "green" && "border-emerald-200 bg-emerald-50 text-emerald-800",
        tone === "red" && "border-red-200 bg-red-50 text-red-800",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p> : null}
      <h1 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl">{title}</h1>
      {description ? <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="text-sm font-semibold text-foreground">{children}</label>;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-10 w-full rounded-md border bg-white px-3 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        props.className
      )}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "h-10 w-full rounded-md border bg-white px-3 text-sm text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        props.className
      )}
    />
  );
}
