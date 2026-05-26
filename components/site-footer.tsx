import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <p className="text-base font-bold">Cassa Edile Digitale</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Demo riservata di piattaforma digitale modulare per servizi, documenti, assistenza e area riservata.
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
          <p className="text-sm font-semibold">Piattaforma</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/area-riservata">Area riservata</Link>
            <Link href="/assistenza">Assistenza</Link>
            <Link href="/news">News e normative</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Dati istituzionali configurabili</p>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Sede configurabile per ogni Cassa Edile</span>
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Telefono e sportelli configurabili</span>
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>PEC istituzionale configurabile</span>
            </p>
            <p className="flex gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Orari e sedi operative configurabili</span>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-muted-foreground">
            <Link href="/documenti">Privacy</Link>
            <Link href="/documenti">Accessibilita</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
