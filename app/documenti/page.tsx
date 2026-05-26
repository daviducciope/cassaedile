import { DocumentSearch } from "@/components/document-search";
import { SectionHeader } from "@/components/ui";

export default function DocumentiPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Ricerca"
        title="Ricerca documentale simulata"
        description="La demo mostra una ricerca rapida su moduli, guide, normative e schede operative, con risultati ordinati per rilevanza."
      />
      <div className="mt-8">
        <DocumentSearch />
      </div>
    </div>
  );
}
