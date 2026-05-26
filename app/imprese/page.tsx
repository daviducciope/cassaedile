import { AudiencePage } from "@/components/audience-page";

export default function ImpresePage() {
  return (
    <AudiencePage
      audience="Imprese"
      title="Servizi digitali per imprese edili"
      description="Un percorso unico per iscrizione, regolarità, cantieri, versamenti, certificati e assistenza."
      highlights={[
        "Avvia iscrizione o aggiorna dati aziendali",
        "Consulta documenti su DURC e regolarità contributiva",
        "Monitora pratiche e scadenze in area riservata",
        "Apri richieste assistenza e prenota appuntamenti"
      ]}
    />
  );
}
