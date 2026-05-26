import { AudiencePage } from "@/components/audience-page";

export default function ConsulentiPage() {
  return (
    <AudiencePage
      audience="Consulenti"
      title="Strumenti operativi per consulenti"
      description="Modulistica, deleghe, circolari, pratiche aziendali e ricerca documentale organizzata."
      highlights={[
        "Gestisci deleghe e pratiche per imprese assistite",
        "Filtra moduli per adempimento e categoria",
        "Consulta circolari e scadenze contributive",
        "Apri ticket tecnici su pratiche e documenti"
      ]}
    />
  );
}
