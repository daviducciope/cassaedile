"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Badge, Button, Card, FieldLabel, Input, Select } from "@/components/ui";

export function AssistanceFlow() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <Card className="p-6">
        {submitted ? (
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-success text-success-foreground">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-bold">Richiesta inviata</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Ticket dimostrativo CE-5821 creato. Lo stato iniziale è "Presa in carico".
            </p>
            <Button type="button" variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
              Apri una nuova richiesta
            </Button>
          </div>
        ) : (
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <FieldLabel>Tipologia richiesta</FieldLabel>
              <Select className="mt-2" defaultValue="Pratiche e documenti">
                <option>Pratiche e documenti</option>
                <option>DURC e regolarità</option>
                <option>Prestazioni lavoratori</option>
                <option>Problema area riservata</option>
              </Select>
            </div>
            <div>
              <FieldLabel>Oggetto</FieldLabel>
              <Input className="mt-2" placeholder="Esempio: integrazione pratica congruità" required />
            </div>
            <div>
              <FieldLabel>Email di contatto</FieldLabel>
              <Input className="mt-2" type="email" placeholder="nome@azienda.it" required />
            </div>
            <div>
              <FieldLabel>Messaggio</FieldLabel>
              <textarea
                className="mt-2 min-h-32 w-full rounded-md border bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                placeholder="Descrivi la richiesta..."
                required
              />
            </div>
            <Button type="submit">
              <Send className="h-4 w-4" aria-hidden="true" />
              Invia richiesta
            </Button>
          </form>
        )}
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-bold">Stato richieste</h2>
        <div className="mt-4 grid gap-3">
          {[
            ["CE-5818", "Verifica allegato DURC", "Completata", "green"],
            ["CE-5819", "Domanda rimborso lavoratore", "In lavorazione", "blue"],
            ["CE-5820", "Delega consulente", "Presa in carico", "amber"],
            submitted ? ["CE-5821", "Nuova richiesta", "Presa in carico", "amber"] : null
          ]
            .filter(Boolean)
            .map((ticket) => (
              <div key={(ticket as string[])[0]} className="rounded-md border bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{(ticket as string[])[0]}</p>
                  <Badge tone={(ticket as string[])[3] as "green" | "blue" | "amber"}>{(ticket as string[])[2]}</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{(ticket as string[])[1]}</p>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}
