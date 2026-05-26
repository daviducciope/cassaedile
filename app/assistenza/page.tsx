import { AssistanceFlow } from "@/components/assistance-flow";
import { SectionHeader } from "@/components/ui";

export default function AssistenzaPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Assistenza"
        title="Apertura ticket e stato richiesta"
        description="Un flusso dimostrativo completo per mostrare apertura, presa in carico e gestione delle richieste."
      />
      <div className="mt-8">
        <AssistanceFlow />
      </div>
    </div>
  );
}
