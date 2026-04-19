import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Online | Elektronische Reisegenehmigung fur Grossbritannien",
  description: "Alle Informationen zur UK ETA fur deutsche Staatsburger. Erfahren Sie alles uber Gebuhren, Gultigkeit, Antragsprozess und Anforderungen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(2,36,68,0.72), rgba(2,36,68,0.82)), url('/images/hero-uk.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            UK ETA Online
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-3">
            Elektronische Reisegenehmigung fur Grossbritannien
          </p>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
            Ab April 2025 benotigen deutsche Staatsburger eine elektronische Reisegenehmigung (ETA) fur die Einreise nach Grossbritannien. Hier finden Sie alle wichtigen Informationen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8d1812] hover:bg-[#a82018] text-white font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ width: "360px", maxWidth: "100%" }}
          >
            UK ETA beantragen
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f6f3] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#022444] mb-1">10-20 GBP</div>
              <div className="text-sm text-gray-600">Antragsgebuhr</div>
            </div>
            <div className="bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#022444] mb-1">72 Std.</div>
              <div className="text-sm text-gray-600">Bearbeitungszeit</div>
            </div>
            <div className="bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#022444] mb-1">2 Jahre</div>
              <div className="text-sm text-gray-600">Gultigkeit</div>
            </div>
            <div className="bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#022444] mb-1">6 Monate</div>
              <div className="text-sm text-gray-600">Max. Aufenthalt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Alles Wichtige zur UK ETA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Deutsche Community Section */}
      <section className="bg-[#f8f6f3] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Deutsche in Grossbritannien
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Rund 300.000 Deutsche leben in Grossbritannien. Jahrlich reisen etwa 3,5 Millionen deutsche Staatsburger ins Vereinigte Konigreich - fur Geschaftsreisen, Tourismus und Studium.
          </p>
          <div className="text-center">
            <a href="/eta-info/deutsche-gemeinschaft/" className="text-[#8d1812] hover:text-[#a82018] font-semibold text-base underline">
              Mehr uber Deutsche in Grossbritannien erfahren
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Jetzt Ihre UK ETA beantragen
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Der Antragsprozess dauert nur wenige Minuten. Stellen Sie sicher, dass Sie Ihre ETA rechtzeitig vor Ihrer Reise beantragen.
          </p>
          <a
            href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8d1812] hover:bg-[#a82018] text-white font-semibold py-3.5 px-8 text-base transition-colors"
            style={{ width: "360px", maxWidth: "100%" }}
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
    <a href={href} className="block bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow group">
      <h3 className="text-lg font-bold text-[#022444] mb-3 group-hover:text-[#8d1812] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </a>
  );
}
