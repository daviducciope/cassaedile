import { ReservedArea } from "@/components/reserved-area";
import { SectionHeader } from "@/components/ui";

export default function AreaRiservataPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Area riservata"
        title="Dashboard demo per imprese e consulenti"
        description="Login finto, pratiche, documenti disponibili, notifiche e stato richieste in una vista operativa."
      />
      <div className="mt-8">
        <ReservedArea />
      </div>
    </div>
  );
}
