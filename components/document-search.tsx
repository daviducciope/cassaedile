"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { documents } from "@/data/demo";
import { DocumentCard } from "@/components/document-card";
import { Badge, Card, Input } from "@/components/ui";

const suggestions = ["DURC", "congruita", "ferie", "rimborso", "versamenti", "malattia"];

export function DocumentSearch() {
  const [query, setQuery] = useState("DURC");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return documents.slice(0, 8);

    return documents
      .map((document) => {
        const haystack = [document.title, document.description, document.category, ...document.tags, ...document.audience]
          .join(" ")
          .toLowerCase();
        const score =
          (document.title.toLowerCase().includes(normalizedQuery) ? 4 : 0) +
          (document.tags.join(" ").toLowerCase().includes(normalizedQuery) ? 3 : 0) +
          (haystack.includes(normalizedQuery) ? 1 : 0);
        return { document, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.document);
  }, [query]);

  return (
    <div className="grid gap-6">
      <Card className="p-5">
        <div className="flex items-start gap-4">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground sm:flex">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="w-full">
            <label className="text-sm font-semibold">Ricerca documentale simulata</label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 pl-10 text-base"
                placeholder="Scrivi DURC, congruita, ferie, rimborso..."
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button key={item} type="button" onClick={() => setQuery(item)} aria-label={`Cerca ${item}`}>
                  <Badge tone={query === item ? "amber" : "neutral"}>{item}</Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <p className="text-sm font-semibold text-muted-foreground">{results.length} risultati ordinati per rilevanza</p>
      <div className="grid gap-4">
        {results.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
}
