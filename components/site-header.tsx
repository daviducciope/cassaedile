"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/imprese", label: "Imprese" },
  { href: "/lavoratori", label: "Lavoratori" },
  { href: "/consulenti", label: "Consulenti" },
  { href: "/modulistica", label: "Modulistica" },
  { href: "/documenti", label: "Documenti" },
  { href: "/contatti", label: "Contatti" },
  { href: "/area-riservata", label: "Area riservata" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-24 shrink-0 items-center justify-center rounded-md border bg-white px-2">
            <Image
              src="/cassa-edile-molise-logo.jpeg"
              width={1134}
              height={306}
              alt="Cassa Edile del Molise"
              className="h-auto w-full"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight">Cassa Edile Molise</span>
            <span className="block truncate text-xs text-muted-foreground">Sportello digitale demo</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground",
                pathname === link.href && "bg-secondary text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-card lg:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t bg-white lg:hidden">
          <div className="container-shell grid gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground",
                  pathname === link.href && "bg-secondary text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
