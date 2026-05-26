import { ArrowRight, CheckCircle2 } from "lucide-react";
import { documents, services } from "@/data/demo";
import { Badge, Card, LinkButton, SectionHeader } from "@/components/ui";

export function AudiencePage({
  audience,
  title,
  description,
  highlights
}: {
  audience: "Imprese" | "Lavoratori" | "Consulenti";
  title: string;
  description: string;
  highlights: string[];
}) {
  const audienceServices = services.filter((service) => service.audience === audience || service.audience === "Tutti").slice(0, 4);
  const audienceDocuments = documents.filter((document) => document.audience.includes(audience)).slice(0, 6);

  return (
    <div className="container-shell py-10">
      <SectionHeader eyebrow={audience} title={title} description={description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-5">
          <h2 className="text-xl font-bold">Percorsi principali</h2>
          <div className="mt-4 grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border bg-white p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          {audienceServices.map((service) => (
            <Card key={service.title} className="p-5">
              <Badge tone="blue">{service.audience}</Badge>
              <h2 className="mt-4 text-lg font-bold">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
              <LinkButton href={service.href} variant="ghost" className="mt-4 px-0">
                Apri servizio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            </Card>
          ))}
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Documenti consigliati</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {audienceDocuments.map((document) => (
            <Card key={document.id} className="p-4">
              <div className="flex flex-wrap gap-2">
                <Badge>{document.category}</Badge>
                <Badge tone={document.status === "Nuovo" ? "green" : "blue"}>{document.status}</Badge>
              </div>
              <h3 className="mt-3 font-bold">{document.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{document.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
