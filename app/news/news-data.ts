// Aktuelle Informationen zur UK ETA und zu Reisen nach Großbritannien.
// Nur Fakten aus 2025-2026 (Quellen: GOV.UK / Home Office).

// Stable category keys (do NOT translate the keys). Only translate CATEGORY_LABEL values per language.
export type NewsCategory = "fee" | "eta" | "travel" | "safety";

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  fee: "Gebühren",
  eta: "ETA",
  travel: "Einreise & Reise",
  safety: "Sicherheit",
};

export const CATEGORY_STYLE: Record<NewsCategory, { bg: string; fg: string }> = {
  fee: { bg: "#C5A24A", fg: "#1c1505" },
  eta: { bg: "#022444", fg: "#ffffff" },
  travel: { bg: "#8d1812", fg: "#ffffff" },
  safety: { bg: "#44403c", fg: "#ffffff" },
};

export interface NewsItem {
  slug: string;
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  summary: string;
  body: string[];
  source?: { label: string; href: string };
}

export const newsItems: NewsItem[] = [
  {
    slug: "oplata-uk-eta-20-funtow",
    date: "2026-04-08",
    category: "fee",
    title: "Gebühr für die UK ETA auf £20 gestiegen (seit 8. April 2026)",
    summary:
      "Seit dem 8. April 2026 beträgt die Gebühr für die UK ETA £20 (etwa 23 €) statt der bisherigen £16 (ein Anstieg um 25 %). Maßgeblich ist das Datum der Antragstellung.",
    body: [
      "Das Home Office hat die Erhöhung der Gebühr für die UK ETA (Electronic Travel Authorisation) von £16 auf £20 (etwa 23 €) bestätigt. Der neue Tarif gilt seit dem 8. April 2026.",
      "Maßgeblich für die Höhe der Gebühr ist das Datum der Antragstellung: Wer den Antrag vor dem 8. April 2026 gestellt hat, zahlte £16, während Anträge ab dem 8. April £20 kosten.",
      "Es ist eine weitere Erhöhung in der Geschichte des Systems: Die ETA startete mit einer Gebühr von £10, stieg anschließend auf £16 und beträgt nun £20. Die Genehmigung bleibt 2 Jahre gültig und berechtigt zu mehrfacher Einreise (jeder Aufenthalt bis zu 6 Monate).",
      "Die Erhöhung betrifft Bürger von mehr als 50 Staaten, die für die Einreise nach Großbritannien eine UK ETA benötigen.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "uk-eta-w-pelni-obowiazkowa-luty-2026",
    date: "2026-02-25",
    category: "eta",
    title: "UK ETA seit 25. Februar 2026 vollständig verpflichtend",
    summary:
      "Seit dem 25. Februar 2026 wird die UK ETA vollständig durchgesetzt: Fluggesellschaften lassen Passagiere ohne gültige Genehmigung nicht an Bord.",
    body: [
      "Am 25. Februar 2026 endete die Übergangsphase bei der Einführung der UK ETA. Seit diesem Datum wird die Pflicht vollständig durchgesetzt.",
      "In der Praxis bedeutet das, dass Beförderer (Fluggesellschaften, Fähren, Eurostar) Reisende, die eine ETA benötigen und keine besitzen, nicht an Bord lassen. Für die Beförderung eines Passagiers ohne gültige Genehmigung drohen den Beförderern Strafen.",
      "Deshalb sollte die ETA vor der Reise eingeholt werden - am besten einige Tage vorher, da die Bearbeitung des Antrags bis zu 72 Stunden dauern kann.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "obywatele-ue-uk-eta-od-kwietnia-2025",
    date: "2025-04-02",
    category: "eta",
    title: "EU-Bürger müssen seit 2. April 2025 eine UK ETA besitzen",
    summary:
      "Seit dem 2. April 2025 müssen Bürger der EU, des EWR und der Schweiz vor der Reise nach Großbritannien eine UK ETA einholen.",
    body: [
      "Seit dem 2. April 2025 umfasst das UK-ETA-System die Bürger der Europäischen Union, des Europäischen Wirtschaftsraums sowie der Schweiz.",
      "Die ETA ist bei touristischen und geschäftlichen Reisen, bei Familienbesuchen sowie beim Transit erforderlich, der das Passieren der Grenzkontrolle erfordert. Das gilt auch für Kinder und Säuglinge - jede Person stellt ihren eigenen Antrag.",
      "Die Genehmigung ist elektronisch mit dem im Antrag verwendeten Reisepass verknüpft und erlaubt mehrfache Einreisen über 2 Jahre.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "podwyzka-oplat-imigracyjnych-uk-2026",
    date: "2026-04-08",
    category: "travel",
    title: "Höhere Einwanderungsgebühren in Großbritannien seit April 2026",
    summary:
      "Zusammen mit der ETA sind seit dem 8. April 2026 auch weitere Gebühren des Home Office gestiegen - unter anderem für Einreisevisa, Niederlassung und Staatsbürgerschaft.",
    body: [
      "Am 8. April 2026 hat das Home Office die offizielle Gebührentabelle aktualisiert. Neben der Erhöhung der ETA auf £20 ist auch der Großteil der übrigen Einwanderungs- und Staatsbürgerschaftsgebühren gestiegen.",
      "Das betrifft unter anderem Besuchervisa (visit visa), Gebühren für die Niederlassung (settlement) sowie Anträge auf die britische Staatsbürgerschaft.",
      "Wenn Sie einen längeren Aufenthalt oder eine andere Visumart als die ETA planen, prüfen Sie die aktuelle Gebühr auf der offiziellen Website GOV.UK, bevor Sie den Antrag stellen.",
    ],
    source: { label: "GOV.UK - Visa fees", href: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
  },
  {
    slug: "bezpieczenstwo-podrozy-wielka-brytania",
    date: "2026-03-01",
    category: "safety",
    title: "Sicherheit auf Reisen nach Großbritannien - was zu beachten ist",
    summary:
      "Vor der Abreise lohnt es sich, die aktuellen Sicherheitshinweise zu prüfen und sicherzustellen, dass Reisepass und ETA gültig sind.",
    body: [
      "Großbritannien ist ein beliebtes und allgemein sicheres Reiseziel, dennoch lohnt es sich, vor jeder Reise die aktuellen Hinweise der Behörden zu prüfen.",
      "Stellen Sie vor der Abreise sicher, dass: Ihr Reisepass für den gesamten Aufenthalt gültig ist, Sie eine gültige UK ETA besitzen, die mit diesem Reisepass verknüpft ist, und Sie eine Reiseversicherung haben.",
      "Aktuelle Informationen zur Lage und zur Gefährdungsstufe veröffentlichen offizielle Quellen - die Regierung Großbritanniens (GOV.UK) sowie die zuständigen diplomatischen Vertretungen. In Notfällen gilt im UK die Notrufnummer 999.",
    ],
    source: { label: "GOV.UK - Foreign travel advice", href: "https://www.gov.uk/foreign-travel-advice" },
  },
];
