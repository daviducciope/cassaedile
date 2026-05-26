import { ReservedArea } from "@/components/reserved-area";
import { SectionHeader } from "@/components/ui";

export default function AreaRiservataPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Area riservata"
        title="Dashboard dimostrativa per imprese e consulenti"
        description="Qui l'impresa vede pratiche aperte, documenti disponibili, scadenze e richieste: una vista pensata per ridurre telefonate e richieste ripetitive agli uffici."
      />
      <div className="mt-8">
        <ReservedArea />
      </div>
    </div>
  );
}
