"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, documents, audiences } from "@/data/demo";
import { DocumentCard } from "@/components/document-card";
import { Card, FieldLabel, Input, Select } from "@/components/ui";

export function ModuliBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tutte");
  const [audience, setAudience] = useState("Tutti");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return documents.filter((document) => {
      const matchesQuery =
        !normalizedQuery ||
        [document.title, document.description, document.category, ...document.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "Tutte" || document.category === category;
      const matchesAudience = audience === "Tutti" || document.audience.includes(audience as never);
      return matchesQuery && matchesCategory && matchesAudience;
    });
  }, [audience, category, query]);

  return (
    <div className="grid gap-6">
      <Card className="p-5">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <FieldLabel>Ricerca modulo</FieldLabel>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cerca per DURC, ferie, rimborso..."
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <FieldLabel>Categoria</FieldLabel>
            <Select className="mt-2" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option>Tutte</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
          <div>
            <FieldLabel>Pubblico</FieldLabel>
            <Select className="mt-2" value={audience} onChange={(event) => setAudience(event.target.value)}>
              <option>Tutti</option>
              {audiences.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
        </div>
      </Card>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-muted-foreground">{filtered.length} moduli trovati</p>
      </div>
      <div className="grid gap-4">
        {filtered.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
}
