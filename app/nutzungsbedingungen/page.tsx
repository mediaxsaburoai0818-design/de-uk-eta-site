import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | UK ETA Online",
  description: "Nutzungsbedingungen fur die Verwendung von UK ETA Online. Bitte lesen Sie diese Bedingungen sorgfaltig durch.",
};

export default function NutzungsbedingungenPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nutzungsbedingungen
          </h1>
          <p className="text-gray-300">Bedingungen fur die Nutzung dieser Website</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-8">Zuletzt aktualisiert: April 2025</p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            1. Geltungsbereich
          </h2>
          <p className="text-gray-700 mb-6">
            Diese Nutzungsbedingungen gelten fur alle Besucher und Nutzer der Website UK ETA Online. Durch die Nutzung dieser Website erklaren Sie sich mit diesen Bedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte diese Website nicht.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            2. Art des Dienstes
          </h2>
          <p className="text-gray-700 mb-6">
            UK ETA Online ist ein unabhangiges Informationsportal, das Informationen zur britischen elektronischen Reisegenehmigung (ETA) in deutscher Sprache bereitstellt. Wir sind kein offizieller Antragsdienst und nicht mit der britischen Regierung, dem Home Office oder UK Visas and Immigration verbunden.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            3. Keine Gewahrleistung
          </h2>
          <p className="text-gray-700 mb-6">
            Obwohl wir uns bemuhen, genaue und aktuelle Informationen bereitzustellen, ubernehmen wir keine Gewahrleistung fur die Richtigkeit, Vollstandigkeit oder Aktualitat der auf dieser Website bereitgestellten Informationen. Die Informationen auf dieser Website dienen nur zu allgemeinen Informationszwecken und stellen keine Rechtsberatung dar.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            4. Haftungsbeschrankung
          </h2>
          <p className="text-gray-700 mb-6">
            Wir haften nicht fur Schaden, die aus der Nutzung oder der Unmoglichkeit der Nutzung dieser Website entstehen. Dies schliesst direkte, indirekte, zufallige, besondere oder Folgeschaden ein. Die Nutzung der auf dieser Website bereitgestellten Informationen erfolgt auf eigenes Risiko.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            5. Externe Links
          </h2>
          <p className="text-gray-700 mb-6">
            Diese Website enthalt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Fur die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mogliche Rechtsverstose uberpruft.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            6. Urheberrecht
          </h2>
          <p className="text-gray-700 mb-6">
            Die auf dieser Website veroffentlichten Inhalte unterliegen dem Urheberrecht. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Das unbefugte Kopieren, Verbreiten oder Verandern von Inhalten ist untersagt.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            7. Offizielle Quellen
          </h2>
          <p className="text-gray-700 mb-6">
            Fur verbindliche und offizielle Informationen zur UK ETA verweisen wir auf die Website der britischen Regierung unter{" "}
            <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-[#8d1812] hover:text-[#a82018] underline">
              www.gov.uk
            </a>. Unsere Informationen ersetzen keine offizielle Beratung.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            8. Anderungen der Nutzungsbedingungen
          </h2>
          <p className="text-gray-700 mb-6">
            Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu andern. Anderungen werden auf dieser Seite veroffentlicht. Durch die fortgesetzte Nutzung der Website nach der Veroffentlichung von Anderungen akzeptieren Sie die geanderten Nutzungsbedingungen.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            9. Anwendbares Recht
          </h2>
          <p className="text-gray-700">
            Es gilt das Recht der Bundesrepublik Deutschland. Bei Streitigkeiten wird der Gerichtsstand des Betreibers vereinbart, soweit gesetzlich zulassig.
          </p>
        </div>
      </section>
    </>
  );
}
