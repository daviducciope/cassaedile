"use client";

import { useState } from "react";
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  LifeBuoy,
  LockKeyhole,
  MessageSquare,
  PlusCircle,
  TriangleAlert,
  UploadCloud
} from "lucide-react";
import { notifications, practices } from "@/data/demo";
import { Badge, Button, Card, FieldLabel, Input, LinkButton } from "@/components/ui";

export function ReservedArea() {
  const [logged, setLogged] = useState(true);

  if (!logged) {
    return (
      <Card className="mx-auto max-w-xl p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <LockKeyhole className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-bold">Accesso dimostrativo all'area riservata</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Inserisci le credenziali di anteprima per mostrare dashboard, pratiche, notifiche e documenti disponibili.
        </p>
        <div className="mt-6 grid gap-4">
          <div>
            <FieldLabel>Email</FieldLabel>
            <Input className="mt-2" defaultValue="anteprima@cassaedile.it" />
          </div>
          <div>
            <FieldLabel>Password</FieldLabel>
            <Input className="mt-2" type="password" defaultValue="anteprima" />
          </div>
          <Button type="button" onClick={() => setLogged(true)}>
            Entra nella dashboard
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Pratiche aperte", value: "4", icon: BriefcaseBusiness, tone: "blue" },
          { label: "Documenti disponibili", value: "12", icon: FileText, tone: "green" },
          { label: "Scadenze imminenti", value: "3", icon: TriangleAlert, tone: "amber" },
          { label: "Richieste assistenza", value: "2", icon: MessageSquare, tone: "blue" }
        ].map((item) => (
          <Card key={item.label} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-3xl font-bold">{item.value}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-xl font-bold">Azioni rapide</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Le operazioni piu richieste restano sempre raggiungibili dalla dashboard.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[560px]">
            <LinkButton href="/documenti" variant="outline" className="w-full">
              <UploadCloud className="h-4 w-4" aria-hidden="true" />
              Carica documento
            </LinkButton>
            <LinkButton href="/wizard-nuova-impresa" className="w-full">
              <PlusCircle className="h-4 w-4" aria-hidden="true" />
              Apri nuova pratica
            </LinkButton>
            <LinkButton href="/assistenza" variant="secondary" className="w-full">
              <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              Richiedi assistenza
            </LinkButton>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Stato pratiche</h2>
            <Badge tone="amber">Profilo impresa</Badge>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-left text-sm">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-3 py-2">Codice</th>
                  <th className="px-3 py-2">Pratica</th>
                  <th className="px-3 py-2">Stato</th>
                  <th className="px-3 py-2">Scadenza</th>
                </tr>
              </thead>
              <tbody>
                {practices.map((practice) => (
                  <tr key={practice.id} className="bg-white">
                    <td className="rounded-l-md border-y border-l px-3 py-3 font-semibold">{practice.id}</td>
                    <td className="border-y px-3 py-3">{practice.title}</td>
                    <td className="border-y px-3 py-3">
                      <Badge tone={practice.status === "Completata" ? "green" : practice.status === "Da integrare" ? "red" : "blue"}>
                        {practice.status}
                      </Badge>
                    </td>
                    <td className="rounded-r-md border-y border-r px-3 py-3">{practice.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-bold">Notifiche</h2>
          </div>
          <div className="mt-4 grid gap-3">
            {notifications.map((notification) => (
              <div key={notification} className="flex gap-3 rounded-md border bg-white p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                <p className="text-sm leading-5">{notification}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
