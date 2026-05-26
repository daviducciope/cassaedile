import { AudiencePage } from "@/components/audience-page";

export default function LavoratoriPage() {
  return (
    <AudiencePage
      audience="Lavoratori"
      title="Trova rimborsi, ferie, documenti e richieste in pochi click"
      description="Un percorso semplice per capire cosa chiedere, quale modulo usare e come parlare con lo sportello."
      highlights={[
        "Chiedi un rimborso o un contributo",
        "Vedi informazioni su ferie e gratifica",
        "Scarica documenti personali e moduli",
        "Prenota un contatto con lo sportello lavoratori"
      ]}
    />
  );
}
