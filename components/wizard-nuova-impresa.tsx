"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";

const steps = [
  {
    title: "L'impresa ha già una posizione attiva?",
    options: ["No, deve iscriversi", "Sì, ma deve aggiornare i dati", "Non lo so"]
  },
  {
    title: "Deve aprire o gestire un cantiere?",
    options: ["Sì, nuovo cantiere", "Sì, cantiere già avviato", "No, solo posizione aziendale"]
  },
  {
    title: "Chi seguira le pratiche?",
    options: ["Impresa direttamente", "Consulente delegato", "Entrambi"]
  },
  {
    title: "Quale urgenza ha la richiesta?",
    options: ["Entro 48 ore", "Entro una settimana", "Non urgente"]
  }
];

export function WizardNuovaImpresa() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const current = steps[index];
  const completed = Object.keys(answers).length === steps.length;

  const actions = useMemo(() => {
    const needsRegistration = answers[0]?.includes("No") || answers[0]?.includes("Non");
    const hasConsultant = answers[2]?.includes("Consulente") || answers[2]?.includes("Entrambi");
    return [
      needsRegistration ? "Compilare modulo iscrizione nuova impresa" : "Verificare dati anagrafici e posizione attiva",
      hasConsultant ? "Allegare delega consulente aziendale" : "Preparare credenziali referente impresa",
      "Consultare scheda DURC e regolarità contributiva",
      "Prenotare appuntamento con sportello imprese se la pratica è urgente"
    ];
  }, [answers]);

  return (
    <Card className="overflow-hidden">
      <div className="border-b bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">Step {Math.min(index + 1, steps.length)} di {steps.length}</p>
            <h2 className="mt-1 text-xl font-bold">{completed ? "Riepilogo operativo" : current.title}</h2>
          </div>
          <Badge tone={completed ? "green" : "amber"}>{completed ? "Percorso completato" : "In compilazione"}</Badge>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full bg-primary transition-all" style={{ width: `${(Object.keys(answers).length / steps.length) * 100}%` }} />
        </div>
      </div>
      {!completed ? (
        <div className="p-5">
          <div className="grid gap-3">
            {current.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAnswers((value) => ({ ...value, [index]: option }))}
                className={`rounded-lg border p-4 text-left text-sm font-semibold transition ${
                  answers[index] === option ? "border-primary bg-blue-50 text-primary" : "bg-white hover:bg-secondary"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-between gap-3">
            <Button type="button" variant="outline" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Indietro
            </Button>
            <Button
              type="button"
              disabled={!answers[index]}
              onClick={() => setIndex((value) => Math.min(value + 1, steps.length - 1))}
            >
              Avanti
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 p-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-bold">Risposte raccolte</h3>
            <div className="mt-3 grid gap-3">
              {steps.map((step, stepIndex) => (
                <div key={step.title} className="rounded-md border bg-white p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{step.title}</p>
                  <p className="mt-1 text-sm font-semibold">{answers[stepIndex]}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Azioni consigliate</h3>
            <div className="mt-3 grid gap-3">
              {actions.map((action) => (
                <div key={action} className="flex gap-3 rounded-md border bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  <p className="text-sm font-semibold">{action}</p>
                </div>
              ))}
            </div>
            <Button type="button" variant="outline" className="mt-5" onClick={() => { setAnswers({}); setIndex(0); }}>
              Ricomincia percorso
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
