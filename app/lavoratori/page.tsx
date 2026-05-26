import { AudiencePage } from "@/components/audience-page";

export default function LavoratoriPage() {
  return (
    <AudiencePage
      audience="Lavoratori"
      title="Prestazioni e documenti per lavoratori"
      description="Accesso rapido a rimborsi, ferie, gratifica, posizione personale e richieste di supporto."
      highlights={[
        "Trova moduli per rimborsi e prestazioni",
        "Consulta guide su ferie, malattia e infortunio",
        "Segui lo stato delle richieste in dashboard demo",
        "Prenota un contatto con lo sportello lavoratori"
      ]}
    />
  );
}
