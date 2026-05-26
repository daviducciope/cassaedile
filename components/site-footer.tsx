import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-base font-bold">Cassa Edile Digitale</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Prototipo statico di piattaforma digitale modulare per servizi, documenti, assistenza e area riservata.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Servizi</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/modulistica">Modulistica</Link>
            <Link href="/documenti">Ricerca documenti</Link>
            <Link href="/appuntamenti">Appuntamenti</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Demo</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/area-riservata">Area riservata</Link>
            <Link href="/assistenza">Assistenza</Link>
            <Link href="/news">News e normative</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
