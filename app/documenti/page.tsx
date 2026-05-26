import { DocumentSearch } from "@/components/document-search";
import { SectionHeader } from "@/components/ui";

export default function DocumentiPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Ricerca"
        title="Ricerca documentale intelligente"
        description="Documenti consigliati all'apertura e risultati mirati per DURC, ferie, congruità, rimborsi e altri bisogni operativi."
      />
      <div className="mt-8">
        <DocumentSearch />
      </div>
    </div>
  );
}
