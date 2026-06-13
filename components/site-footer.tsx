import Link from "next/link";
import Image from "next/image";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <div className="flex max-w-64 items-center rounded-md border bg-white p-2">
            <Image
              src="/cassa-edile-molise-logo.jpeg"
              width={1134}
              height={306}
              alt="Cassa Edile del Molise"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-4 text-base font-bold">Sportello digitale Cassa Edile Molise</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Demo riservata di piattaforma digitale per servizi, documenti, assistenza e area riservata.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Servizi</p>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link href="/modulistica">Modulistica</Link>
            <Link href="/documenti">Ricerca documenti</Link>
            <Link href="/appuntamenti">Appuntamenti</Link>
            <Link href="/contatti">Contatti e sportelli</Link>
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
          <p className="text-sm font-semibold">Contatti e sportelli</p>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Campobasso, sede e sportelli territoriali configurabili</span>
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Telefono sportello: 0874 000000</span>
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>PEC: cassaedilemolise@pec.demo</span>
            </p>
            <p className="flex gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Lun-Ven 9:00-13:00, mar e gio 15:00-17:00</span>
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
