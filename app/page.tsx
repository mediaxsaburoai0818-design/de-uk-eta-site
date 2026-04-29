import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "UK ETA Online | Elektronische Reisegenehmigung fur Grossbritannien",
  description: "Alle Informationen zur UK ETA fur deutsche Staatsburger. Erfahren Sie alles uber Gebuhren, Gultigkeit, Antragsprozess und Anforderungen.",
};

const faqItems = [
  {
    question: "Benotigen deutsche Staatsburger eine UK ETA?",
    answer: "Ja. Ab dem 2. April 2025 benotigen alle deutschen Staatsburger eine ETA fur Reisen nach Grossbritannien.",
  },
  {
    question: "Was kostet die UK ETA und wie lange ist sie gultig?",
    answer: "Die Gebuhr betragt 10-20 GBP. Die ETA ist 2 Jahre gultig und erlaubt mehrfache Einreisen, jeweils bis zu 6 Monate.",
  },
  {
    question: "Was ist der Unterschied zwischen UK ETA und Visum?",
    answer: "Die UK ETA ist eine vereinfachte elektronische Genehmigung fur kurze Aufenthalte (bis 6 Monate). Ein Visum erfordert einen Termin im Visumzentrum und kostet ab 100 GBP.",
  },
];

const photoCards = [
  { title: "Was ist UK ETA?", image: "/images/card-what-is-eta.png", href: "/eta-info/was-ist-eta/" },
  { title: "Wie beantrage ich?", image: "/images/card-application.png", href: "/eta-info/antrag/" },
  { title: "Gebuhren und Kosten", image: "/images/card-fee.png", href: "/eta-info/gebuehren/" },
  { title: "Gultigkeit der ETA", image: "/images/card-validity.png", href: "/eta-info/gueltigkeit/" },
  { title: "Erforderliche Dokumente", image: "/images/card-documents.png", href: "/eta-info/erforderliche-dokumente/" },
  { title: "Transit durch UK", image: "/images/card-transit.png", href: "/eta-info/transit/" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-uk.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-3xl mx-auto px-10 md:px-16 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            UK ETA Online
          </h1>
          <p className="text-lg md:text-xl mb-3" style={{ color: "white", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
            Elektronische Reisegenehmigung fur Grossbritannien
          </p>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "white", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Ab April 2025 benotigen deutsche Staatsburger eine elektronische Reisegenehmigung (ETA) fur die Einreise nach Grossbritannien. Hier finden Sie alle wichtigen Informationen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold py-3.5 px-8 text-base transition-colors rounded-xl border-2 border-white"
            style={{ backgroundColor: "#c0392b", width: "100%", maxWidth: "360px", color: "white" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>

      {/* Accent line */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #1a5276, #2980b9, #1a5276)" }} />

      {/* Stats Section - light blue bg with floating cards + icons */}
      <section style={{ backgroundColor: "#eaf2f8" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-payment.png" alt="" width={40} height={40} className="mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>10-20 GBP</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Antragsgebuhr</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-clock.png" alt="" width={40} height={40} className="mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>72 Std.</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Bearbeitungszeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-calendar.png" alt="" width={40} height={40} className="mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>2 Jahre</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Gultigkeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-suitcase.png" alt="" width={40} height={40} className="mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>6 Monate</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Max. Aufenthalt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Card Grid Section - white bg */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 pb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276", borderBottom: "3px solid #c0392b", display: "inline-block", width: "100%" }}>
            Alles Wichtige zur UK ETA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {photoCards.map((card) => (
              <a key={card.href} href={card.href} className="block group" style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#eaf2f8", border: "1px solid #d4e6f1" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.title} className="w-full aspect-[4/3] object-cover" />
                <div style={{ padding: "14px 16px" }}>
                  <h3 className="text-sm sm:text-base font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276" }}>
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deutsche Community Section - light blue bg */}
      <section style={{ backgroundColor: "#eaf2f8" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 pb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276", borderBottom: "3px solid #c0392b", display: "inline-block", width: "100%" }}>
            Deutsche in Grossbritannien
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto" style={{ color: "#5d6d7e" }}>
            Rund 300.000 Deutsche leben in Grossbritannien. Jahrlich reisen etwa 3,5 Millionen deutsche Staatsburger ins Vereinigte Konigreich - fur Geschaftsreisen, Tourismus und Studium.
          </p>
          <div className="text-center">
            <a href="/eta-info/deutsche-gemeinschaft/" className="font-semibold text-base underline" style={{ color: "#1a5276" }}>
              Mehr uber Deutsche in Grossbritannien erfahren
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 pb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276", borderBottom: "3px solid #c0392b", display: "inline-block", width: "100%" }}>
            Haufig gestellte Fragen
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section - blue */}
      <section style={{ backgroundColor: "#1a5276" }} className="pt-16 pb-40 text-center">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Jetzt Ihre UK ETA beantragen
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Der Antragsprozess dauert nur wenige Minuten. Stellen Sie sicher, dass Sie Ihre ETA rechtzeitig vor Ihrer Reise beantragen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold py-3.5 px-8 text-base transition-colors rounded-xl border-2 border-white"
            style={{ backgroundColor: "#c0392b", width: "100%", maxWidth: "360px", color: "white" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>
    </>
  );
}
