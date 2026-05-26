export type Audience = "Imprese" | "Lavoratori" | "Consulenti";

export type DemoDocument = {
  id: string;
  title: string;
  category: string;
  audience: Audience[];
  description: string;
  tags: string[];
  updatedAt: string;
  status: "Aggiornato" | "In revisione" | "Nuovo";
};

export const services = [
  {
    title: "Iscrizione nuova impresa",
    audience: "Imprese",
    description: "Percorso guidato per avviare l'iscrizione e conoscere gli adempimenti iniziali.",
    href: "/wizard-nuova-impresa"
  },
  {
    title: "DURC e regolarità",
    audience: "Imprese",
    description: "Informazioni operative su verifica, documenti richiesti e stato pratica.",
    href: "/documenti"
  },
  {
    title: "Congruità manodopera",
    audience: "Consulenti",
    description: "Schede e moduli per controllare le pratiche di congruità nei cantieri.",
    href: "/documenti"
  },
  {
    title: "Rimborsi e prestazioni",
    audience: "Lavoratori",
    description: "Trova il rimborso, il contributo o il documento da richiedere senza passaggi inutili.",
    href: "/lavoratori"
  },
  {
    title: "Prenota appuntamento",
    audience: "Tutti",
    description: "Scegli ufficio, giorno e fascia oraria per un contatto con la Cassa.",
    href: "/appuntamenti"
  },
  {
    title: "Apri richiesta assistenza",
    audience: "Tutti",
    description: "Invia una domanda e segui lo stato della richiesta nell'area riservata.",
    href: "/assistenza"
  }
];

export const documents: DemoDocument[] = [
  {
    id: "doc-001",
    title: "Modulo iscrizione nuova impresa",
    category: "Iscrizione",
    audience: ["Imprese", "Consulenti"],
    description: "Domanda di iscrizione alla Cassa Edile con elenco allegati richiesti.",
    tags: ["iscrizione", "impresa", "adempimenti"],
    updatedAt: "2026-05-10",
    status: "Aggiornato"
  },
  {
    id: "doc-002",
    title: "Guida DURC e regolarità contributiva",
    category: "DURC",
    audience: ["Imprese", "Consulenti"],
    description: "Scheda operativa su regolarità, scadenze e documentazione collegata.",
    tags: ["durc", "regolarità", "versamenti"],
    updatedAt: "2026-05-12",
    status: "Nuovo"
  },
  {
    id: "doc-003",
    title: "Dichiarazione congruità cantiere",
    category: "Congruità",
    audience: ["Imprese", "Consulenti"],
    description: "Modulo dimostrativo per la verifica di congruità della manodopera.",
    tags: ["congruità", "cantiere", "manodopera"],
    updatedAt: "2026-04-22",
    status: "Aggiornato"
  },
  {
    id: "doc-004",
    title: "Richiesta rimborso spese sanitarie",
    category: "Prestazioni",
    audience: ["Lavoratori"],
    description: "Domanda di rimborso con documentazione sanitaria da allegare.",
    tags: ["rimborso", "sanitarie", "lavoratori"],
    updatedAt: "2026-03-19",
    status: "Aggiornato"
  },
  {
    id: "doc-005",
    title: "Domanda ferie e gratifica natalizia",
    category: "Prestazioni",
    audience: ["Lavoratori"],
    description: "Informazioni su maturazione, richiesta e pagamento delle spettanze.",
    tags: ["ferie", "gratifica", "pagamento"],
    updatedAt: "2026-02-26",
    status: "Aggiornato"
  },
  {
    id: "doc-006",
    title: "Denuncia mensile manodopera occupata",
    category: "Denunce",
    audience: ["Imprese", "Consulenti"],
    description: "Schema dati e istruzioni per la denuncia mensile dimostrativa.",
    tags: ["denuncia", "mensile", "manodopera"],
    updatedAt: "2026-04-30",
    status: "In revisione"
  },
  {
    id: "doc-007",
    title: "Versamenti contributivi e scadenze",
    category: "Contributi",
    audience: ["Imprese", "Consulenti"],
    description: "Calendario e modalità di versamento per contributi e accantonamenti.",
    tags: ["versamenti", "contributi", "scadenze"],
    updatedAt: "2026-05-02",
    status: "Aggiornato"
  },
  {
    id: "doc-008",
    title: "Comunicazione variazione dati aziendali",
    category: "Anagrafica",
    audience: ["Imprese", "Consulenti"],
    description: "Modulo per sede, referenti, PEC, codici fiscali e dati di contatto.",
    tags: ["anagrafica", "pec", "azienda"],
    updatedAt: "2026-01-28",
    status: "Aggiornato"
  },
  {
    id: "doc-009",
    title: "Richiesta attestazione versamenti",
    category: "Contributi",
    audience: ["Imprese", "Consulenti"],
    description: "Richiesta certificazione dei versamenti presenti negli archivi dimostrativi.",
    tags: ["attestazione", "versamenti", "certificato"],
    updatedAt: "2026-03-05",
    status: "Aggiornato"
  },
  {
    id: "doc-010",
    title: "Domanda contributo studio figli",
    category: "Prestazioni",
    audience: ["Lavoratori"],
    description: "Modulo per contributi scolastici e universitari a favore dei nuclei familiari.",
    tags: ["studio", "contributo", "famiglia"],
    updatedAt: "2026-02-11",
    status: "Aggiornato"
  },
  {
    id: "doc-011",
    title: "Richiesta consultazione posizione lavoratore",
    category: "Posizione personale",
    audience: ["Lavoratori"],
    description: "Accesso ai dati dimostrativi su periodi lavorati, versamenti e prestazioni.",
    tags: ["posizione", "lavoratore", "storico"],
    updatedAt: "2026-04-16",
    status: "Nuovo"
  },
  {
    id: "doc-012",
    title: "Istruzioni malattia e infortunio",
    category: "Prestazioni",
    audience: ["Lavoratori", "Consulenti"],
    description: "Guida sintetica su documenti, termini e canali di trasmissione.",
    tags: ["malattia", "infortunio", "prestazioni"],
    updatedAt: "2026-03-23",
    status: "Aggiornato"
  },
  {
    id: "doc-013",
    title: "Delega consulente aziendale",
    category: "Deleghe",
    audience: ["Imprese", "Consulenti"],
    description: "Modulo per abilitare un consulente alla gestione delle pratiche.",
    tags: ["delega", "consulente", "azienda"],
    updatedAt: "2026-02-01",
    status: "Aggiornato"
  },
  {
    id: "doc-014",
    title: "Circolare aliquote contributive",
    category: "Normativa",
    audience: ["Imprese", "Consulenti"],
    description: "Riepilogo dimostrativo di aliquote, decorrenze e principali novità operative.",
    tags: ["aliquote", "contributi", "circolare"],
    updatedAt: "2026-05-18",
    status: "Nuovo"
  },
  {
    id: "doc-015",
    title: "Richiesta certificato iscrizione",
    category: "Certificati",
    audience: ["Imprese"],
    description: "Domanda per ottenere attestazione di iscrizione all'ente.",
    tags: ["certificato", "iscrizione", "impresa"],
    updatedAt: "2026-01-14",
    status: "Aggiornato"
  },
  {
    id: "doc-016",
    title: "Manuale area riservata imprese",
    category: "Guide",
    audience: ["Imprese", "Consulenti"],
    description: "Guida all'uso di pratiche, notifiche, documenti e richieste.",
    tags: ["area riservata", "manuale", "dashboard"],
    updatedAt: "2026-05-01",
    status: "Aggiornato"
  },
  {
    id: "doc-017",
    title: "Domanda anticipo prestazione",
    category: "Prestazioni",
    audience: ["Lavoratori"],
    description: "Richiesta dimostrativa per anticipo di una prestazione in fase di liquidazione.",
    tags: ["anticipo", "prestazione", "liquidazione"],
    updatedAt: "2026-03-12",
    status: "In revisione"
  },
  {
    id: "doc-018",
    title: "Comunicazione sospensione cantiere",
    category: "Cantiere",
    audience: ["Imprese", "Consulenti"],
    description: "Modulo per comunicare sospensione o variazione di un cantiere.",
    tags: ["cantiere", "sospensione", "comunicazione"],
    updatedAt: "2026-04-05",
    status: "Aggiornato"
  },
  {
    id: "doc-019",
    title: "Privacy e trattamento dati utenti",
    category: "Privacy",
    audience: ["Imprese", "Lavoratori", "Consulenti"],
    description: "Informativa per servizi digitali, modulistica e area riservata.",
    tags: ["privacy", "dati", "servizi digitali"],
    updatedAt: "2026-05-06",
    status: "Aggiornato"
  },
  {
    id: "doc-020",
    title: "Richiesta supporto caricamento documenti",
    category: "Assistenza",
    audience: ["Imprese", "Lavoratori", "Consulenti"],
    description: "Scheda di supporto per allegati, formati accettati e invio pratiche.",
    tags: ["assistenza", "documenti", "upload"],
    updatedAt: "2026-04-12",
    status: "Aggiornato"
  }
];

export const news = [
  {
    title: "Nuova guida digitale per l'iscrizione delle imprese",
    date: "2026-05-20",
    category: "Servizi",
    excerpt: "Disponibile il percorso guidato che riepiloga requisiti, moduli e prossime azioni."
  },
  {
    title: "Aggiornamento circolare aliquote contributive",
    date: "2026-05-18",
    category: "Circolari",
    excerpt: "Pubblicata la scheda sintetica con le principali decorrenze operative."
  },
  {
    title: "Sportello digitale: nuove fasce per appuntamenti",
    date: "2026-05-09",
    category: "Appuntamenti",
    excerpt: "La prenotazione consente di selezionare ufficio, data e fascia oraria."
  },
  {
    title: "Ricerca documentale: contenuti su DURC e congruità",
    date: "2026-04-29",
    category: "Documenti",
    excerpt: "Le schede informative sono state organizzate per parole chiave e pubblico."
  },
  {
    title: "Nuove FAQ per lavoratori e consulenti",
    date: "2026-04-21",
    category: "FAQ",
    excerpt: "Aggiornate le risposte frequenti su ferie, rimborsi e deleghe operative."
  },
  {
    title: "Area riservata con pratiche e notifiche",
    date: "2026-04-12",
    category: "Piattaforma",
    excerpt: "La dashboard mostra stato pratiche, documenti disponibili e richieste assistenza."
  },
  {
    title: "Modulistica ordinata per imprese, lavoratori e consulenti",
    date: "2026-03-28",
    category: "Moduli",
    excerpt: "Filtri e ricerca rapida semplificano il reperimento dei documenti."
  },
  {
    title: "Canale assistenza digitale in anteprima",
    date: "2026-03-14",
    category: "Assistenza",
    excerpt: "L'ambiente dimostrativo simula apertura richiesta, presa in carico e consultazione stato."
  }
];

export const faqs = [
  {
    question: "Come si iscrive una nuova impresa alla Cassa Edile?",
    answer: "L'impresa deve compilare la domanda di iscrizione, indicare i dati anagrafici e contributivi, allegare la documentazione richiesta e attendere la verifica della posizione."
  },
  {
    question: "Dove posso verificare la regolarità contributiva per il DURC?",
    answer: "La sezione documenti raccoglie guide, moduli e schede operative su versamenti, scadenze e regolarità contributiva. La richiesta formale segue i canali indicati dalla normativa vigente."
  },
  {
    question: "Cosa significa congruità della manodopera?",
    answer: "La congruità verifica che il costo della manodopera dichiarato sia coerente con il valore e la tipologia dei lavori edili svolti nel cantiere."
  },
  {
    question: "Quando va inviata la denuncia mensile?",
    answer: "La denuncia mensile deve essere trasmessa entro le scadenze stabilite dalla Cassa Edile competente, indicando lavoratori occupati, ore, imponibili e dati richiesti per il periodo."
  },
  {
    question: "Un consulente può gestire le pratiche per conto dell'impresa?",
    answer: "Sì, se l'impresa conferisce una delega valida. La delega consente al consulente di seguire pratiche, modulistica, comunicazioni e richieste operative."
  },
  {
    question: "Come posso richiedere un rimborso o una prestazione?",
    answer: "Il lavoratore deve scegliere il modulo relativo alla prestazione, compilare i dati richiesti e allegare la documentazione indicata nella scheda del servizio."
  },
  {
    question: "Dove trovo informazioni su ferie e gratifica natalizia?",
    answer: "Le informazioni sono raccolte nell'area lavoratori e nella modulistica dedicata alle prestazioni, con indicazioni su maturazione, richiesta e pagamento."
  },
  {
    question: "Cosa devo fare se una pratica risulta da integrare?",
    answer: "Occorre consultare il dettaglio della pratica, verificare gli allegati richiesti e inviare la documentazione mancante tramite il canale indicato."
  },
  {
    question: "Posso prenotare un appuntamento con lo sportello?",
    answer: "Sì, la sezione appuntamenti permette di scegliere ufficio, giorno e fascia oraria per ricevere supporto su imprese, lavoratori, consulenti o prestazioni."
  },
  {
    question: "Come ricevo comunicazioni su circolari e scadenze?",
    answer: "Le circolari sono pubblicate nella sezione news e normative. Nell'area riservata sono previste notifiche per scadenze, pratiche e documenti disponibili."
  }
];

export const practices = [
  { id: "PR-2048", title: "Iscrizione nuova impresa", status: "In istruttoria", owner: "Impresa demo", due: "2026-05-30" },
  { id: "PR-1984", title: "DURC e verifica regolarità", status: "Completata", owner: "Studio Demo", due: "2026-05-22" },
  { id: "PR-1932", title: "Congruità cantiere Via Roma", status: "Da integrare", owner: "Impresa demo", due: "2026-06-04" },
  { id: "PR-1881", title: "Richiesta attestazione versamenti", status: "In lavorazione", owner: "Studio Demo", due: "2026-05-28" }
];

export const notifications = [
  "Nuova circolare contributiva disponibile dal 18 maggio.",
  "La pratica PR-1932 richiede un allegato integrativo.",
  "Appuntamento confermato: Sportello imprese, 29 maggio, ore 10:30.",
  "Documento DURC disponibile in area documenti."
];

export const categories = Array.from(new Set(documents.map((document) => document.category))).sort();
export const audiences: Audience[] = ["Imprese", "Lavoratori", "Consulenti"];
