import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  Files,
  HelpCircle,
  LogIn,
  Newspaper,
  Search,
  UserRoundCog,
  UsersRound
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { Badge, Card, LinkButton } from "@/components/ui";
import { news, services } from "@/data/demo";

export default function HomePage() {
  return (
    <div>
      <section className="border-b bg-white">
        <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <Badge tone="amber">Cassa Edile Digitale - Demo riservata</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal text-foreground md:text-5xl">
              Servizi, documenti e pratiche della Cassa Edile in un unico punto.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Un ambiente dimostrativo per ridurre confusione, telefonate e tempi di gestione, con percorsi separati
              per imprese, lavoratori e consulenti.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href="/area-riservata">
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Apri area riservata
              </LinkButton>
              <LinkButton href="/wizard-nuova-impresa" variant="outline">Avvia percorso impresa</LinkButton>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/platform-preview.svg"
              width={1200}
              height={780}
              alt="Anteprima dashboard della piattaforma digitale"
              priority
              className="w-full rounded-lg border bg-white shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary/60 py-6">
        <div className="container-shell grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Accedi all'area riservata", href: "/area-riservata", icon: LogIn },
            { label: "Scarica modulistica", href: "/modulistica", icon: Files },
            { label: "Prenota appuntamento", href: "/appuntamenti", icon: CalendarDays },
            { label: "Cerca documenti", href: "/documenti", icon: Search }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-20 items-center gap-3 rounded-lg border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-primary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-bold leading-5">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">Perché questa piattaforma</p>
            <h2 className="mt-2 text-3xl font-bold">Dal sito informativo a uno sportello digitale operativo</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              La demo mostra come una Cassa Edile può organizzare servizi, documenti e pratiche intorno ai bisogni
              reali degli utenti e al lavoro quotidiano degli uffici.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-5">
              <h3 className="text-lg font-bold">Problemi attuali</h3>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                {[
                  "Informazioni difficili da trovare",
                  "Utenti diversi nello stesso menu",
                  "Troppe telefonate agli uffici",
                  "Modulistica dispersa",
                  "Procedure poco guidate"
                ].map((item) => (
                  <p key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-lg font-bold">Soluzione proposta</h3>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                {[
                  "Percorsi separati per imprese, lavoratori e consulenti",
                  "Ricerca documentale e modulistica filtrabile",
                  "Area riservata con stato pratiche",
                  "Ticket, appuntamenti e notifiche",
                  "Contenuti gestibili dal personale interno"
                ].map((item) => (
                  <p key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Imprese", href: "/imprese", icon: Building2, text: "Iscrizione, DURC, cantieri, versamenti e scadenze." },
            { title: "Lavoratori", href: "/lavoratori", icon: UsersRound, text: "Prestazioni, rimborsi, ferie, posizione personale." },
            { title: "Consulenti", href: "/consulenti", icon: UserRoundCog, text: "Deleghe, pratiche aziendali, modulistica e circolari." }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <Card className="h-full p-5 transition group-hover:-translate-y-0.5 group-hover:border-primary">
                <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Vai al percorso <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y bg-white py-8">
        <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <HelpCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">Hai bisogno di aiuto?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Non sai quale modulo cercare? Rispondi a 3 domande e ti guidiamo verso servizio, documento o
                appuntamento corretto.
              </p>
            </div>
          </div>
          <LinkButton href="/assistenza" className="shrink-0">
            Avvia guida rapida
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>
      </section>

      <section className="border-y bg-white py-10">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Servizi rapidi</p>
              <h2 className="mt-2 text-3xl font-bold">Le funzioni che fanno percepire la piattaforma</h2>
            </div>
            <LinkButton href="/area-riservata" variant="outline">Apri area riservata</LinkButton>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-5">
                <Badge tone={service.audience === "Tutti" ? "amber" : "blue"}>{service.audience}</Badge>
                <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <LinkButton href={service.href} variant="ghost" className="mt-4 px-0">
                  Apri <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </LinkButton>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-8 py-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-bold">News e normative</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {news.slice(0, 4).map((item) => (
              <Card key={item.title} className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{item.category}</Badge>
                  <span className="text-xs font-semibold text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FileSearch className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Domande frequenti</h2>
          </div>
          <div className="mt-5">
            <FaqList />
          </div>
        </div>
      </section>
    </div>
  );
}
