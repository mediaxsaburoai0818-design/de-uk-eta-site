import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uber uns | UK ETA Online",
  description: "Erfahren Sie mehr uber UK ETA Online - Ihr deutschsprachiges Informationsportal zur elektronischen Reisegenehmigung fur Grossbritannien.",
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Uber uns
          </h1>
          <p className="text-gray-300">Ihr deutschsprachiges Informationsportal zur UK ETA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unsere Mission
          </h2>
          <p className="text-gray-700 mb-6">
            UK ETA Online wurde mit dem Ziel gegrundet, deutschsprachigen Reisenden klare, verstandliche und aktuelle Informationen zur britischen elektronischen Reisegenehmigung (ETA) bereitzustellen. Wir mochten den Informationszugang erleichtern und sicherstellen, dass alle deutschen Reisenden gut vorbereitet ihre Reise nach Grossbritannien antreten konnen.
          </p>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Was wir bieten
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
            <li>Umfassende Informationen zur UK ETA in deutscher Sprache</li>
            <li>Schritt-fur-Schritt-Anleitungen fur den Antragsprozess</li>
            <li>Aktuelle Informationen zu Gebuhren und Gultigkeitsbedingungen</li>
            <li>Haufig gestellte Fragen und Antworten</li>
            <li>Links zu offiziellen Quellen der britischen Regierung</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wichtiger Hinweis
          </h2>
          <div className="bg-[#f8f6f3] p-6 border-l-4 border-[#8d1812]">
            <p className="text-gray-700">
              UK ETA Online ist ein unabhangiges Informationsportal und in keiner Weise mit der britischen Regierung, dem Home Office oder UK Visas and Immigration verbunden. Wir bieten keine Antragstellung oder Beratungsdienstleistungen an. Fur den offiziellen ETA-Antrag besuchen Sie bitte die{" "}
              <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" target="_blank" rel="noopener noreferrer" className="text-[#8d1812] hover:text-[#a82018] underline">
                GOV.UK-Website
              </a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kontaktieren Sie uns
          </h2>
          <p className="text-gray-700">
            Wenn Sie Fragen, Anregungen oder Feedback haben, kontaktieren Sie uns bitte uber unsere{" "}
            <a href="/kontakt/" className="text-[#8d1812] hover:text-[#a82018] underline">Kontaktseite</a>. Wir bemuhen uns, alle Anfragen so schnell wie moglich zu beantworten.
          </p>
        </div>
      </section>
    </>
  );
}
