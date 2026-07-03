import Link from "next/link";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "./news/news-data";
const latestNews = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);


const facts = [
  { value: "£20", label: "Antragsgebühr" },
  { value: "72h", label: "Max. Bearbeitungszeit" },
  { value: "2 Jahre", label: "Gültigkeitsdauer" },
  { value: "6 Mon.", label: "Max. Aufenthalt im UK" },
];

const features = [
  {
    icon: "doc",
    tone: "icon-navy",
    title: "Vollständig online beantragen",
    desc: "Die ETA beantragen Sie über die mobile App oder die Website GOV.UK. Ohne Botschaftsbesuch und ohne Papierformulare.",
  },
  {
    icon: "coin",
    tone: "icon-red",
    title: "Gebühr nur £20",
    desc: "Einmalige Gebühr von £20 (etwa 23 €) für eine 2 Jahre gültige Genehmigung mit mehrfacher Einreise nach Großbritannien.",
  },
  {
    icon: "shield",
    tone: "icon-blue",
    title: "2 Jahre gültig",
    desc: "Nach der Genehmigung erlaubt die ETA mehrfache Einreisen, jeder Aufenthalt bis zu 6 Monate, während der gesamten Gültigkeitsdauer.",
  },
];

const steps = [
  {
    icon: "phone",
    title: "Laden Sie die UK-ETA-App herunter",
    desc: 'Laden Sie die App "UK ETA" aus dem App Store oder bei Google Play herunter oder besuchen Sie die Website GOV.UK.',
  },
  {
    icon: "scan",
    title: "Scannen Sie Ihren Reisepass und machen Sie ein Foto",
    desc: "Scannen Sie Ihren biometrischen Reisepass mit dem Telefon und machen Sie ein Gesichtsfoto (Selfie).",
  },
  {
    icon: "card",
    title: "Formular ausfüllen und bezahlen (£20)",
    desc: "Geben Sie Ihre persönlichen Daten und Reiseinformationen an und zahlen Sie per Karte oder Apple/Google Pay.",
  },
  {
    icon: "check",
    title: "Auf die Genehmigung warten",
    desc: "Die meisten Anträge werden innerhalb weniger Stunden bearbeitet, es kann jedoch bis zu 72 Stunden dauern.",
  },
];

const faqs = [
  {
    q: "Brauchen deutsche Staatsbürger eine UK ETA?",
    a: "Ja. Seit dem 2. April 2025 müssen deutsche Staatsbürger (und übrige EU-Bürger) vor der Reise nach Großbritannien eine UK ETA besitzen. Das gilt für touristische, geschäftliche und Transit-Besuche.",
  },
  {
    q: "Wie viel kostet die UK ETA und wie lange ist sie gültig?",
    a: "Die Gebühr für die UK ETA beträgt £20 (etwa 23 €). Die Genehmigung ist 2 Jahre ab dem Ausstellungsdatum gültig und erlaubt mehrfache Einreisen ins UK, jeweils bis zu 6 Monate.",
  },
  {
    q: "Was ist der Unterschied zwischen einer UK ETA und einem Visum?",
    a: "Die UK ETA ist eine vereinfachte elektronische Genehmigung für Kurzaufenthalte (bis zu 6 Monate). Sie kostet £20 und der Antrag wird online gestellt. Ein britisches Visum erfordert einen Besuch im Visa-Zentrum, kostet ab £100 und erlaubt längere Aufenthalte oder Arbeit.",
  },
  {
    q: "Brauchen Kinder aus Deutschland eine UK ETA?",
    a: "Ja. Jeder Reisende, unabhängig vom Alter, muss eine eigene UK ETA besitzen — auch Säuglinge und Kinder. Den Antrag für ein Kind kann ein Elternteil oder Erziehungsberechtigter mit dem Reisepass des Kindes stellen.",
  },
  {
    q: "Kann ein deutscher Staatsbürger mit dem Personalausweis ins UK einreisen?",
    a: "Nein. Seit Oktober 2021 benötigen deutsche Staatsbürger zur Einreise nach Großbritannien einen gültigen Reisepass — der Personalausweis wird nicht mehr akzeptiert. Die UK ETA ist genau mit diesem Reisepass verknüpft.",
  },
  {
    q: "Brauche ich eine ETA für einen Transitflug durch das UK?",
    a: "Wenn Sie beim Umsteigen die Grenzkontrolle passieren (z. B. Terminalwechsel oder Gepäckabholung), ist eine UK ETA erforderlich. Bei einem Transit ohne Grenzübertritt (airside) wird sie in der Regel nicht benötigt — bestätigen Sie die Regeln am besten bei der Fluggesellschaft und am Flughafen.",
  },
];

const links = [
  { href: "/eta-info/what-is-eta/", title: "Was ist die UK ETA?", desc: "Grundlegende Informationen zum ETA-System" },
  { href: "/eta-info/application/", title: "So stellen Sie den Antrag", desc: "Schritt für Schritt durch das Formular" },
  { href: "/eta-info/fee/", title: "Gebühren für die UK ETA", desc: "Details zu den Kosten" },
  { href: "/eta-info/expiration/", title: "Gültigkeitsdauer", desc: "Wann die ETA zu erneuern ist" },
  { href: "/eta-info/required-documents/", title: "Erforderliche Dokumente", desc: "Was Sie vor der Antragstellung vorbereiten sollten" },
  { href: "/eta-info/official-gov-uk/", title: "Offizielle Website GOV.UK", desc: "Link zur Regierungsseite" },
];

const GOV = "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta";

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "doc": return (<svg viewBox="0 0 24 24" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></svg>);
    case "coin": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9.5 10.2a2.2 2 0 0 1 4 0M9.5 13.8a2.2 2 0 0 0 4 0" /></svg>);
    case "shield": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "phone": return (<svg viewBox="0 0 24 24" {...p}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>);
    case "scan": return (<svg viewBox="0 0 24 24" {...p}><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="2.4" /></svg>);
    case "card": return (<svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>);
    case "check": return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.2 2.2 4.8-4.8" /></svg>);
    case "pin": return (<svg viewBox="0 0 24 24" {...p}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case "arrow": return (<svg viewBox="0 0 24 24" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
    default: return null;
  }
}

export default function Home() {
  return (
    <div>
      {/* === Hero (案1 info-rich, AI crest emblem, tight spacing) === */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--color-navy-light) 0%, var(--color-navy) 52%, var(--color-navy-dark) 100%)" }}>
        <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20 w-full">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="font-semibold leading-none tracking-wide" style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(3rem, 12vw, 5.5rem)" }}>
              UK ETA
            </h1>
            <p className="mt-4 uppercase mx-auto" style={{ fontFamily: "var(--font-display)", color: "#D8C089", letterSpacing: "0.08em", fontSize: "clamp(.62rem, 2vw, .95rem)", lineHeight: 1.7, maxWidth: "26rem" }}>
              Elektronische Reisegenehmigung für Großbritannien
            </p>
            <div className="flex justify-center my-5 md:my-7"><img src="/uk-crest.webp" alt="" className="mx-auto h-auto" style={{ width: "min(210px, 56vw)" }} /></div>
            <div className="flex justify-center items-center">
              <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
                UK-ETA-Antrag stellen
              </a>
            </div>
            <div className="grid grid-cols-3 max-w-sm md:max-w-md mx-auto mt-6">
              {facts.slice(0, 3).map((f, i) => (
                <div key={f.label} className="flex flex-col items-center justify-center text-center px-2" style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(224,200,120,0.3)" }}>
                  <span className="font-bold leading-none" style={{ color: "#D8C089", fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 5.5vw, 1.5rem)" }}>{f.value}</span>
                  <span className="mt-1.5 leading-tight text-[10.5px]" style={{ color: "rgba(255,255,255,0.85)" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* === What is UK ETA — feature cards === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Über das ETA-System</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Was ist die UK ETA?</h2>
            <p className="sec-lead">
              Die UK ETA (Electronic Travel Authorisation) ist eine elektronische Reisegenehmigung, die von der britischen Regierung eingeführt wurde.
              Seit dem 2. April 2025 müssen Bürger der EU-Staaten, einschließlich Deutschlands, vor der Reise in das Vereinigte Königreich eine ETA erwerben.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card reveal reveal-delay-${i + 1}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`icon-circle ${f.tone} shrink-0 !mb-0`}><Icon name={f.icon} /></span>
                  <h3 className="feature-title !mb-0">{f.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Okres waznosci i termin === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Gültigkeit und Frist</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Gültigkeitsdauer der ETA und Frist für die Antragstellung</h2>
            <p className="sec-lead">Wann Sie den Antrag stellen sollten und wie lange die ETA gültig bleibt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="card reveal">
              <h3 className="feature-title mb-2">Gültigkeitsdauer</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Die ETA ist <strong style={{ color: "var(--color-blue)" }}>2 Jahre</strong> ab dem Ausstellungsdatum gültig und erlaubt mehrfache Einreisen nach Großbritannien. Verliert Ihr Reisepass jedoch früher als in 2 Jahren seine Gültigkeit, läuft die ETA zusammen mit dem Reisepass ab — erneuern Sie in diesem Fall zuerst den Reisepass und stellen Sie erst danach den Antrag auf eine ETA.
              </p>
            </div>
            <div className="card reveal reveal-delay-1">
              <h3 className="feature-title mb-2">Frist für die Antragstellung</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Die Entscheidung erhalten Sie in der Regel innerhalb von <strong style={{ color: "var(--color-blue)" }}>3 Werktagen</strong>, in manchen Fällen (z. B. bei Anforderung zusätzlicher Dokumente) kann es jedoch bis zu 30 Tage dauern. Stellen Sie den Antrag am besten direkt nach der Reiseplanung. Nach der Genehmigung erhalten Sie eine Bestätigungs-E-Mail; bei der Einreise muss die ETA-Nummer in der Regel nicht vorgezeigt werden, es lohnt sich aber, die Bestätigung aufzubewahren (Screenshot oder Ausdruck).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Co jest potrzebne === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Voraussetzungen</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Was Sie für die Antragstellung benötigen</h2>
            <p className="sec-lead">Halten Sie diese vier Dinge bereit, bevor Sie mit dem ETA-Antrag beginnen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { label: "Gültiger Reisepass", desc: "Foto oder Scan der Seite mit dem Lichtbild." },
              { label: "Gesichtsfoto", desc: "Für Kinder im Alter von 9 Jahren und jünger nicht erforderlich." },
              { label: "E-Mail-Adresse", desc: "An diese Adresse erhalten Sie die Bestätigung der ETA-Genehmigung." },
              { label: "Zahlungskarte", desc: "Visa, Mastercard, JCB, American Express, Diners Club." },
            ].map((item, i) => (
              <div key={i} className="card flex gap-4 items-start reveal text-left">
                <span className="flex-shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center font-semibold text-white" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>{i + 1}</span>
                <div>
                  <h3 className="feature-title !text-base !mb-1">{item.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Application steps === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="kicker">Ablauf</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Wie stellt man den UK-ETA-Antrag?</h2>
            <p className="sec-lead">Der gesamte Vorgang dauert wenige Minuten und erfolgt online in vier Schritten.</p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="card flex items-start gap-5 text-left reveal">
                <div className="flex-1">
                  <p className="kicker !mb-1">{`Schritt ${i + 1}`}</p>
                  <h3 className="sec-title text-lg md:text-xl mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{s.desc}</p>
                </div>
                <span className="icon-circle icon-navy shrink-0 !mb-0"><Icon name={s.icon} /></span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/eta-info/application/" className="content-link font-bold">
              Ausführliche Anleitung zum Ablauf
            </Link>
          </div>
        </div>
      </section>

      {/* === Countries + who needs ETA / transit === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <p className="kicker">Wer braucht eine ETA</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Erforderlich bei der Einreise nach Großbritannien</h2>
            <p className="sec-lead">
              Die UK ETA betrifft Bürger Deutschlands und anderer EU-Staaten sowie Dutzender weiterer Länder, die zu touristischen,
              geschäftlichen oder Transit-Zwecken nach Großbritannien einreisen. Die Genehmigung erlaubt einen Aufenthalt von bis zu 6 Monaten.
            </p>
          </div>

          {/* Karte des von der ETA abgedeckten Gebiets */}
          <div className="max-w-sm mx-auto mb-16 reveal reveal-delay-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uk-eta-map.webp"
              alt="Karte Großbritanniens mit dem von der ETA abgedeckten Gebiet: England, Schottland, Wales und Nordirland"
              width={560}
              height={951}
              className="w-full max-w-[320px] h-auto mx-auto block"
            />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm">
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="inline-block w-4 h-4 rounded-sm" style={{ background: "#022444" }} />
                Von der ETA abgedeckt (Großbritannien)
              </span>
              <span className="inline-flex items-center gap-2" style={{ color: "var(--color-text-light)" }}>
                <span className="inline-block w-4 h-4 rounded-sm border" style={{ background: "#d3d8de", borderColor: "var(--color-border)" }} />
                Außerhalb der ETA (Irland)
              </span>
            </div>
            <p className="text-center mt-4 text-sm" style={{ color: "var(--color-text-light)" }}>
              Die ETA umfasst <strong style={{ color: "var(--color-blue)" }}>ganz Großbritannien</strong>: England, Schottland, Wales und Nordirland. Die Republik Irland ist nicht vom ETA-System erfasst.
            </p>
          </div>

          {/* Transit */}
          <div className="max-w-3xl mx-auto reveal reveal-delay-2">
            <div className="text-center mb-8">
              <h3 className="sec-title text-2xl md:text-3xl mb-3">Transit durch Großbritannien</h3>
              <p className="sec-lead">Die ETA-Pflicht beim Umsteigen hängt von der Art des Transits ab.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-blue)" }}>Lufttransit (airside)</span>
                <p className="feature-title !text-lg mb-2">Grundsätzlich ohne ETA</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Wenn Sie die britische Grenzkontrolle nicht passieren und im Transitbereich des Flughafens bleiben, ist eine ETA in der Regel nicht erforderlich. Verlassen Sie jedoch den Transitbereich (z. B. Übernachtung oder Umstieg an einem anderen Flughafen), wird eine ETA benötigt.
                </p>
              </div>
              <div className="card">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-blue)" }}>Landtransit (landside)</span>
                <p className="feature-title !text-lg mb-2">Grundsätzlich mit ETA-Pflicht</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                  Bei der Durchreise durch die britische Grenzkontrolle — z. B. mit dem Eurostar (Zug durch den Ärmelkanal) oder mit der Fähre — und dem Passieren der Grenzabfertigung ist eine ETA grundsätzlich erforderlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === UK ETA für deutsche Staatsbürger (länderspezifischer Abschnitt) === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Für Deutsche</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">UK ETA für deutsche Staatsbürger</h2>
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Deutschland ist Mitglied der Europäischen Union, und deutsche Staatsbürger können für Aufenthalte von bis zu 6 Monaten visumfrei nach Großbritannien reisen.
              Seit dem 2. April 2025 muss jedoch vor jeder Reise eine UK ETA erworben werden — das gilt für Urlaub, Dienstreisen, Familienbesuche sowie für den Transit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="card reveal reveal-delay-1">
              <h3 className="feature-title mb-2">Wer eine ETA haben muss</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Alle deutschen Staatsbürger, die für einen Kurzaufenthalt ins UK reisen, einschließlich Kinder und Säuglinge. Jede Person stellt ihren eigenen, separaten Antrag.
              </p>
            </div>
            <div className="card reveal reveal-delay-2">
              <h3 className="feature-title mb-2">Reisepass, nicht Personalausweis</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Für die Einreise nach Großbritannien ist ein gültiger Reisepass erforderlich — der Personalausweis wird nicht mehr akzeptiert (seit Oktober 2021). Die ETA ist mit diesem Reisepass verknüpft.
              </p>
            </div>
            <div className="card reveal reveal-delay-3">
              <h3 className="feature-title mb-2">Beliebte Ziele ab Deutschland</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                London, Manchester, Edinburgh, Birmingham und andere Städte. Eine ETA umfasst England, Schottland, Wales sowie Nordirland.
              </p>
            </div>
            <div className="card reveal reveal-delay-4">
              <h3 className="feature-title mb-2">Wann den Antrag stellen</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                Am besten einige Tage vor der Abreise. Die meisten Entscheidungen fallen innerhalb weniger Stunden, die Bearbeitung kann jedoch bis zu 72 Stunden dauern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">FAQ</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Häufig gestellte Fragen</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold" style={{ color: "var(--color-blue)" }}>
                  <span>{f.q}</span>
                  <span aria-hidden className="text-xl group-open:rotate-45 transition-transform" style={{ color: "var(--color-red-vivid)" }}>+</span>
                </summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text-light)" }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq/" className="content-link font-bold">Alle FAQ-Fragen ansehen</Link>
          </div>
        </div>
      </section>

      {/* === Aktuelle Informationen (TOP) === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Aktuelles</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl mb-4">Aktuelle Informationen</h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Die wichtigsten Nachrichten zur UK ETA, zu den Gebühren und zu den Einreiseregeln für Großbritannien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestNews.map((n, i) => {
              const c = CATEGORY_STYLE[n.category];
              return (
                <Link key={n.slug} href={`/news/${n.slug}/`} className={`card block hover:shadow-lg transition-shadow no-underline reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: c.bg, color: c.fg }}>{CATEGORY_LABEL[n.category]}</span>
                    <time className="text-xs text-gray-500">{n.date}</time>
                  </div>
                  <h3 className="feature-title mb-2">{n.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>{n.summary}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/news/" className="content-link font-bold">Alle aktuellen Informationen ansehen &rarr;</Link>
          </div>
        </div>
      </section>

      {/* === Related pages === */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 reveal text-center">
            <p className="kicker">Leitfaden</p>
            <div className="deco-head center"><span className="deco-line" /></div>
            <h2 className="sec-title text-3xl md:text-4xl">Nützliche Seiten</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((item, i) => (
              <Link key={item.href} href={item.href} className={`card no-underline group reveal reveal-delay-${(i % 4) + 1}`} style={{ textDecoration: "none" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="feature-title text-base mb-1">{item.title}</h3>
                    <p className="text-xs" style={{ color: "var(--color-text-light)" }}>{item.desc}</p>
                  </div>
                  <span className="shrink-0 mt-1" style={{ color: "var(--color-red-vivid)" }}><Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 text-white text-center" style={{ background: "var(--color-blue)" }}>
        <div className="max-w-3xl mx-auto px-6 reveal">
          <p className="kicker" style={{ color: "rgba(255,255,255,0.8)" }}>Bereit zu starten?</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)", color: "white" }}>
            Starten Sie den UK-ETA-Antragsprozess
          </h2>
          <p className="mb-8 text-white/90 max-w-xl mx-auto">
            Halten Sie Ihren biometrischen Reisepass bereit und stellen Sie den Antrag über die App oder die Website GOV.UK. Der gesamte Vorgang dauert wenige Minuten.
          </p>
          <a href={GOV} target="_blank" rel="noopener noreferrer" className="btn-red text-base">
            UK-ETA-Antrag stellen
          </a>
        </div>
      </section>
    </div>
  );
}
