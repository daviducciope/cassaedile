import { Newspaper } from "lucide-react";
import { Badge, Card, SectionHeader } from "@/components/ui";
import { news } from "@/data/demo";

export default function NewsPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="News e normative"
        title="Aggiornamenti, circolari e comunicazioni"
        description="Contenuti demo organizzati come se arrivassero da un CMS redazionale."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {news.map((item) => (
          <Card key={item.title} className="p-5">
            <Newspaper className="h-5 w-5 text-primary" aria-hidden="true" />
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{item.category}</Badge>
              <Badge tone="blue">{item.date}</Badge>
            </div>
            <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
