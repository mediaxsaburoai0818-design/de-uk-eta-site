import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offizielle GOV.UK-Website | UK ETA Informationen",
  description: "Links und Informationen zur offiziellen GOV.UK-Website fur die UK ETA. Offizielle Quellen und Kontaktmoglichkeiten.",
};

export default function OffizielleGovUkPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Offizielle GOV.UK-Website
          </h1>
          <p className="text-gray-300">Offizielle Informationsquellen der britischen Regierung</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Offizielle Quellen
          </h2>
          <p className="text-gray-700 mb-8">
            Die britische Regierung stellt alle offiziellen Informationen zur UK ETA auf der GOV.UK-Website bereit. Wir empfehlen, vor der Antragstellung die offiziellen Seiten zu besuchen, um sicherzustellen, dass Sie uber die aktuellsten Informationen verfugen.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">ETA-Antrag</h3>
              <p className="text-gray-700 text-sm mb-3">
                Die offizielle Seite fur den UK ETA-Antrag. Hier konnen Sie Ihren Antrag direkt online stellen.
              </p>
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d1812] hover:text-[#a82018] text-sm font-semibold underline"
              >
                www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta
              </a>
            </div>

            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Visuminformationen</h3>
              <p className="text-gray-700 text-sm mb-3">
                Allgemeine Informationen zu Visa und Einreisebestimmungen fur Grossbritannien.
              </p>
              <a
                href="https://www.gov.uk/check-uk-visa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d1812] hover:text-[#a82018] text-sm font-semibold underline"
              >
                www.gov.uk/check-uk-visa
              </a>
            </div>

            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">UK Visas and Immigration</h3>
              <p className="text-gray-700 text-sm mb-3">
                Kontaktinformationen fur UK Visas and Immigration (UKVI) bei Fragen oder Problemen.
              </p>
              <a
                href="https://www.gov.uk/government/organisations/uk-visas-and-immigration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d1812] hover:text-[#a82018] text-sm font-semibold underline"
              >
                www.gov.uk/government/organisations/uk-visas-and-immigration
              </a>
            </div>

            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Einreise nach Grossbritannien</h3>
              <p className="text-gray-700 text-sm mb-3">
                Informationen zu den Einreisebestimmungen, Zollvorschriften und was Sie bei der Ankunft erwartet.
              </p>
              <a
                href="https://www.gov.uk/uk-border-control"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d1812] hover:text-[#a82018] text-sm font-semibold underline"
              >
                www.gov.uk/uk-border-control
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hinweis zu dieser Website
          </h2>
          <div className="bg-[#f8f6f3] p-6 border-l-4 border-[#8d1812]">
            <p className="text-gray-700">
              Diese Website (UK ETA Online) ist ein unabhangiges Informationsportal und nicht mit der britischen Regierung verbunden. Wir bieten informative Inhalte zur UK ETA in deutscher Sprache, um deutschen Reisenden den Zugang zu Informationen zu erleichtern. Fur den offiziellen Antrag und verbindliche Informationen besuchen Sie bitte die oben genannten GOV.UK-Seiten.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Deutsche Botschaft in London
          </h2>
          <p className="text-gray-700 mb-4">
            Bei Fragen zu Ihrem deutschen Reisepass oder konsularischen Angelegenheiten wenden Sie sich an die Deutsche Botschaft in London:
          </p>
          <div className="bg-[#f8f6f3] p-6">
            <p className="text-gray-700 text-sm">
              <strong>Deutsche Botschaft London</strong><br />
              23 Belgrave Square<br />
              London SW1X 8PZ<br />
              Telefon: +44 20 7824 1300<br />
              Website:{" "}
              <a
                href="https://uk.diplo.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8d1812] hover:text-[#a82018] underline"
              >
                uk.diplo.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
