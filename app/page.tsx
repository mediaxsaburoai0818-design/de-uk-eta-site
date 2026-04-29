import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Online | Elektronische Reisegenehmigung fur Grossbritannien",
  description: "Alle Informationen zur UK ETA fur deutsche Staatsburger. Erfahren Sie alles uber Gebuhren, Gultigkeit, Antragsprozess und Anforderungen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - bright with light wine overlay */}
      <section className="relative min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-uk.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(107,39,55,0.50), rgba(107,39,55,0.40))" }} />
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
            className="inline-block text-white font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ backgroundColor: "#e8635a", borderRadius: "8px", width: "100%", maxWidth: "360px" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>

      {/* Accent line */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #6b2737, #e8635a, #6b2737)" }} />

      {/* Stats Section - warm pink bg with floating cards */}
      <section style={{ backgroundColor: "#fdf6f4" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e8635a", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#6b2737" }}>10-20 GBP</div>
              <div className="text-sm" style={{ color: "#7f8c8d" }}>Antragsgebuhr</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e8635a", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#6b2737" }}>72 Std.</div>
              <div className="text-sm" style={{ color: "#7f8c8d" }}>Bearbeitungszeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e8635a", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#6b2737" }}>2 Jahre</div>
              <div className="text-sm" style={{ color: "#7f8c8d" }}>Gultigkeit</div>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", padding: "24px 16px", borderTop: "3px solid #e8635a", textAlign: "center" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#6b2737" }}>6 Monate</div>
              <div className="text-sm" style={{ color: "#7f8c8d" }}>Max. Aufenthalt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section - white bg */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", color: "#6b2737" }}>
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

      {/* Deutsche Community Section - warm bg */}
      <section style={{ backgroundColor: "#fdf6f4" }} className="py-16">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#6b2737" }}>
            Deutsche in Grossbritannien
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto" style={{ color: "#7f8c8d" }}>
            Rund 300.000 Deutsche leben in Grossbritannien. Jahrlich reisen etwa 3,5 Millionen deutsche Staatsburger ins Vereinigte Konigreich - fur Geschaftsreisen, Tourismus und Studium.
          </p>
          <div className="text-center">
            <a href="/eta-info/deutsche-gemeinschaft/" className="font-semibold text-base underline" style={{ color: "#e8635a" }}>
              Mehr uber Deutsche in Grossbritannien erfahren
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - wine */}
      <section style={{ backgroundColor: "#6b2737" }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-10 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Jetzt Ihre UK ETA beantragen
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Der Antragsprozess dauert nur wenige Minuten. Stellen Sie sicher, dass Sie Ihre ETA rechtzeitig vor Ihrer Reise beantragen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ backgroundColor: "#e8635a", borderRadius: "8px", width: "100%", maxWidth: "360px" }}
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
    <a href={href} className="block p-6 transition-shadow group" style={{ backgroundColor: "#fdf6f4", borderRadius: "10px", border: "1px solid #f0e0dc" }}>
      <h3 className="text-lg font-bold mb-3 transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#6b2737" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#7f8c8d" }}>{text}</p>
    </a>
  );
}
