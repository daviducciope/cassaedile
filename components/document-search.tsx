"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { documents } from "@/data/demo";
import { DocumentCard } from "@/components/document-card";
import { Badge, Card, Input } from "@/components/ui";

const suggestions = ["DURC", "congruità", "ferie", "rimborso", "versamenti", "malattia"];
const featuredDocumentIds = ["doc-002", "doc-004", "doc-005", "doc-007", "doc-012", "doc-014"];

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function DocumentSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim());
    if (!normalizedQuery) {
      return featuredDocumentIds
        .map((id) => documents.find((document) => document.id === id))
        .filter((document): document is (typeof documents)[number] => Boolean(document));
    }

    return documents
      .map((document) => {
        const haystack = [document.title, document.description, document.category, ...document.tags, ...document.audience]
          .join(" ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        const title = normalizeText(document.title);
        const tags = normalizeText(document.tags.join(" "));
        const score =
          (title.includes(normalizedQuery) ? 4 : 0) +
          (tags.includes(normalizedQuery) ? 3 : 0) +
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
            <label className="text-sm font-semibold">Cerca moduli, guide e schede operative</label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 pl-10 text-base"
                placeholder="Scrivi DURC, congruità, ferie, rimborso..."
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
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-muted-foreground">
          {query.trim() ? `${results.length} risultati ordinati per rilevanza` : "Documenti più cercati"}
        </p>
        {!query.trim() ? (
          <p className="text-sm text-muted-foreground">Una selezione iniziale per rendere subito utile la ricerca.</p>
        ) : null}
      </div>
      <div className="grid gap-4">
        {results.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
}
