"use client";

import { useState } from "react";
import { CalendarCheck2 } from "lucide-react";
import { Badge, Button, Card, FieldLabel, Select } from "@/components/ui";

const days = ["2026-05-28", "2026-05-29", "2026-06-03", "2026-06-05"];
const slots = ["09:00", "10:30", "12:00", "15:00"];

export function AppointmentBooking() {
  const [office, setOffice] = useState("Sportello imprese");
  const [day, setDay] = useState(days[1]);
  const [slot, setSlot] = useState(slots[1]);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-bold">Prenota appuntamento</h2>
        <div className="mt-6 grid gap-4">
          <div>
            <FieldLabel>Ufficio</FieldLabel>
            <Select className="mt-2" value={office} onChange={(event) => setOffice(event.target.value)}>
              <option>Sportello imprese</option>
              <option>Sportello lavoratori</option>
              <option>Supporto consulenti</option>
              <option>Area prestazioni</option>
            </Select>
          </div>
          <div>
            <FieldLabel>Giorno</FieldLabel>
            <Select className="mt-2" value={day} onChange={(event) => setDay(event.target.value)}>
              {days.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
          <div>
            <FieldLabel>Fascia oraria</FieldLabel>
            <Select className="mt-2" value={slot} onChange={(event) => setSlot(event.target.value)}>
              {slots.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
          <Button type="button" onClick={() => setConfirmed(true)}>
            Conferma prenotazione demo
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Riepilogo</h2>
          <Badge tone={confirmed ? "green" : "amber"}>{confirmed ? "Confermato" : "Da confermare"}</Badge>
        </div>
        <div className="mt-5 grid gap-3">
          {[
            ["Ufficio", office],
            ["Giorno", day],
            ["Orario", slot],
            ["Modalita", "Appuntamento presso sportello o videochiamata demo"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border bg-white p-4">
              <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
        {confirmed ? (
          <p className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            Appuntamento demo confermato. In produzione partirebbe una notifica email o calendario.
          </p>
        ) : null}
      </Card>
    </div>
  );
}
