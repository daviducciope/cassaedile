import { CalendarDays, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Card, LinkButton, SectionHeader } from "@/components/ui";

const contactRows = [
  {
    icon: MapPin,
    label: "Sede demo",
    value: "Campobasso, sportello territoriale configurabile"
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "0874 000000"
  },
  {
    icon: Mail,
    label: "PEC",
    value: "cassaedilemolise@pec.demo"
  },
  {
    icon: Clock3,
    label: "Orari",
    value: "Lun-Ven 9:00-13:00, martedi e giovedi 15:00-17:00"
  }
];

export default function ContattiPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Contatti"
        title="Sedi, sportelli e canali di assistenza"
        description="Una sezione istituzionale pronta per essere alimentata con sede, PEC, telefoni, orari e referenti della Cassa Edile del Molise."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-6">
          <h2 className="text-xl font-bold">Riferimenti principali</h2>
          <div className="mt-5 grid gap-3">
            {contactRows.map((item) => (
              <div key={item.label} className="flex gap-3 rounded-md border bg-white p-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-6">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=80"
            alt="Sportello e ufficio amministrativo"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold">Sportelli per appuntamento</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              La piattaforma separa le richieste per imprese, lavoratori, consulenti, prestazioni e pratiche da
              integrare, così ogni richiesta arriva all'ufficio corretto con i dati essenziali.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/appuntamenti">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Prenota appuntamento
              </LinkButton>
              <LinkButton href="/assistenza" variant="outline">Apri assistenza</LinkButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
