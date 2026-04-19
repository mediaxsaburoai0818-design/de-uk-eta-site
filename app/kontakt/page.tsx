import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | UK ETA Online",
  description: "Kontaktieren Sie das Team von UK ETA Online. Wir beantworten Ihre Fragen zur elektronischen Reisegenehmigung fur Grossbritannien.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kontakt
          </h1>
          <p className="text-gray-300">Haben Sie Fragen? Wir helfen Ihnen gerne.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            So erreichen Sie uns
          </h2>
          <p className="text-gray-700 mb-8">
            Wenn Sie Fragen zur UK ETA haben oder Informationen auf unserer Website vermissen, kontaktieren Sie uns gerne. Bitte beachten Sie, dass wir keine offizielle Antragsstelle sind und keine individuellen Visa-Beratungen durchfuhren konnen.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">E-Mail</h3>
              <p className="text-gray-700 text-sm mb-2">
                Fur allgemeine Anfragen und Feedback:
              </p>
              <p className="text-[#8d1812] font-semibold">info@uk-eta-online.de</p>
            </div>

            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Antwortzeit</h3>
              <p className="text-gray-700 text-sm">
                Wir bemuhen uns, alle Anfragen innerhalb von 1-2 Werktagen zu beantworten. In Storzeiten kann die Bearbeitung etwas langer dauern.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Offizielle Anlaufstellen
          </h2>
          <p className="text-gray-700 mb-4">
            Fur offizielle Anfragen zum ETA-Antrag oder zu Visa-Angelegenheiten wenden Sie sich bitte an:
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="font-semibold text-[#022444] mb-1">UK Visas and Immigration (UKVI)</h3>
              <p className="text-gray-700 text-sm">
                Offizielle Behorde fur Visa- und Einreiseangelegenheiten<br />
                <a href="https://www.gov.uk/government/organisations/uk-visas-and-immigration" target="_blank" rel="noopener noreferrer" className="text-[#8d1812] hover:text-[#a82018] underline">
                  www.gov.uk/government/organisations/uk-visas-and-immigration
                </a>
              </p>
            </div>
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="font-semibold text-[#022444] mb-1">Deutsche Botschaft London</h3>
              <p className="text-gray-700 text-sm">
                23 Belgrave Square, London SW1X 8PZ<br />
                Telefon: +44 20 7824 1300<br />
                <a href="https://uk.diplo.de" target="_blank" rel="noopener noreferrer" className="text-[#8d1812] hover:text-[#a82018] underline">
                  uk.diplo.de
                </a>
              </p>
            </div>
          </div>

          <div className="bg-[#f8f6f3] p-6 border-l-4 border-[#8d1812]">
            <h3 className="text-lg font-semibold text-[#022444] mb-2">Bitte beachten Sie</h3>
            <p className="text-gray-700 text-sm">
              UK ETA Online ist ein unabhangiges Informationsportal. Wir konnen keine verbindlichen Auskunfte zu individuellen ETA-Antragen geben und haben keinen Zugriff auf Ihre Antragsdaten. Fur Fragen zum Status Ihres Antrags wenden Sie sich bitte direkt an UK Visas and Immigration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
