import { WizardNuovaImpresa } from "@/components/wizard-nuova-impresa";
import { SectionHeader } from "@/components/ui";

export default function WizardPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Percorso guidato"
        title="Cosa deve fare una nuova impresa?"
        description="Un wizard demo che raccoglie poche informazioni e restituisce una lista di azioni operative consigliate."
      />
      <div className="mt-8">
        <WizardNuovaImpresa />
      </div>
    </div>
  );
}
