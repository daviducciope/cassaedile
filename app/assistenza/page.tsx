import { AssistanceFlow } from "@/components/assistance-flow";
import { SectionHeader } from "@/components/ui";

export default function AssistenzaPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Assistenza"
        title="Apertura ticket e stato richiesta"
        description="Un flusso finto ma completo per mostrare come l'utente apre una richiesta e ne segue lo stato."
      />
      <div className="mt-8">
        <AssistanceFlow />
      </div>
    </div>
  );
}
