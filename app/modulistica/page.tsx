import { ModuliBrowser } from "@/components/moduli-browser";
import { SectionHeader } from "@/components/ui";

export default function ModulisticaPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Modulistica"
        title="Moduli filtrabili per pubblico e categoria"
        description="Una raccolta statica ma credibile di moduli, guide e circolari, pensata per simulare un CMS documentale."
      />
      <div className="mt-8">
        <ModuliBrowser />
      </div>
    </div>
  );
}
