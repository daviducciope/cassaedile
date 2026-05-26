import { Download, FileText } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import type { DemoDocument } from "@/data/demo";

export function DocumentCard({ document }: { document: DemoDocument }) {
  const tone = document.status === "Nuovo" ? "green" : document.status === "In revisione" ? "amber" : "blue";

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={tone}>{document.status}</Badge>
            <Badge>{document.category}</Badge>
            {document.audience.map((audience) => (
              <Badge key={audience} tone="blue">
                {audience}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-bold">{document.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{document.description}</p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">Aggiornato il {document.updatedAt}</p>
            </div>
          </div>
        </div>
        <Button type="button" variant="outline" className="shrink-0">
          <Download className="h-4 w-4" aria-hidden="true" />
          Scarica PDF
        </Button>
      </div>
    </Card>
  );
}
