import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Online | Elektronische Reisegenehmigung fur Grossbritannien",
  description: "Alle Informationen zur UK ETA fur deutsche Staatsburger. Erfahren Sie alles uber Gebuhren, Gultigkeit, Antragsprozess und Anforderungen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - bright with light blue overlay */}
      <section className="relative min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-uk.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,82,118,0.55), rgba(26,82,118,0.45))" }} />
        <div className="relative max-w-3xl mx-auto px-10 md:px-16 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            UK ETA Online
          </h1>
          <p className="text-lg md:text-xl mb-3" style={{ color: "white" }}>
            Elektronische Reisegenehmigung fur Grossbritannien
          </p>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Ab April 2025 benotigen deutsche Staatsburger eine elektronische Reisegenehmigung (ETA) fur die Einreise nach Grossbritannien. Hier finden Sie alle wichtigen Informationen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ backgroundColor: "#c0392b", borderRadius: "8px", width: "100%", maxWidth: "360px", color: "white" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>

      {/* Accent line */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #1a5276, #2980b9, #1a5276)" }} />

      {/* Stats Section - light blue bg with floating cards */}
      <section style={{ backgroundColor: "#eaf2f8" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>10-20 GBP</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Antragsgebuhr</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>72 Std.</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Bearbeitungszeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>2 Jahre</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Gultigkeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #1a5276", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#1a5276" }}>6 Monate</div>
              <div className="text-sm" style={{ color: "#5d6d7e" }}>Max. Aufenthalt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section - white bg */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 pb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276", borderBottom: "3px solid #c0392b", display: "inline-block", width: "100%" }}>
            Alles Wichtige zur UK ETA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              title="Was ist UK ETA?"
              text="Die Electronic Travel Authorisation ist eine digitale Reisegenehmigung, die ab 2025 fur visumfreie Reisende nach Grossbritannien erforderlich ist."
              href="/eta-info/was-ist-eta/"
            />
            <InfoCard
              title="Wie beantrage ich?"
              text="Der Antrag erfolgt online uber die offizielle UK ETA-App oder die GOV.UK-Website. Sie benotigen einen gultigen Reisepass und ein aktuelles Foto."
              href="/eta-info/antrag/"
            />
            <InfoCard
              title="Gebuhren und Kosten"
              text="Die ETA kostet zwischen 10 und 20 GBP pro Person. Die Zahlung erfolgt online per Kreditkarte oder Debitkarte."
              href="/eta-info/gebuehren/"
            />
            <InfoCard
              title="Gultigkeit der ETA"
              text="Eine genehmigte ETA ist 2 Jahre gultig oder bis zum Ablauf Ihres Reisepasses. Jeder Aufenthalt darf maximal 6 Monate dauern."
              href="/eta-info/gueltigkeit/"
            />
            <InfoCard
              title="Erforderliche Dokumente"
              text="Fur den Antrag benotigen Sie einen biometrischen Reisepass, ein digitales Passfoto und eine gultige Zahlungsmethode."
              href="/eta-info/erforderliche-dokumente/"
            />
            <InfoCard
              title="Transit durch UK"
              text="Auch fur den Transit durch Grossbritannien ist eine ETA erforderlich, selbst wenn Sie das Land nicht verlassen."
              href="/eta-info/transit/"
            />
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

      {/* CTA Section - blue */}
      <section style={{ backgroundColor: "#1a5276" }} className="py-16 text-center">
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
            className="inline-block font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ backgroundColor: "#c0392b", borderRadius: "8px", width: "100%", maxWidth: "360px", color: "white" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <a href={href} className="block p-6 transition-shadow group" style={{ backgroundColor: "#eaf2f8", borderRadius: "10px", border: "1px solid #d4e6f1" }}>
      <h3 className="text-lg font-bold mb-3 transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#1a5276", paddingLeft: "12px", borderLeft: "3px solid #c0392b" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#5d6d7e" }}>{text}</p>
    </a>
  );
}
