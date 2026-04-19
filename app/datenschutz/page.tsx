import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklarung | UK ETA Online",
  description: "Datenschutzerklarung von UK ETA Online. Erfahren Sie, wie wir Ihre personlichen Daten schutzen und verwenden.",
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Datenschutzerklarung
          </h1>
          <p className="text-gray-300">Informationen zum Schutz Ihrer personlichen Daten</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-8">Zuletzt aktualisiert: April 2025</p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            1. Verantwortlicher
          </h2>
          <p className="text-gray-700 mb-6">
            Verantwortlich fur die Datenverarbeitung auf dieser Website ist der Betreiber von UK ETA Online. Bei Fragen zum Datenschutz kontaktieren Sie uns bitte uber unsere Kontaktseite.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            2. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p className="text-gray-700 mb-4">
            Beim Besuch unserer Website werden automatisch bestimmte Daten durch den Webserver erfasst:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>IP-Adresse des zugreifenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Aufgerufene Seiten und Dateien</li>
            <li>Ubertragene Datenmenge</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            3. Cookies
          </h2>
          <p className="text-gray-700 mb-6">
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerat gespeichert werden. Einige Cookies sind technisch notwendig, wahrend andere zur Analyse des Nutzerverhaltens dienen. Sie konnen Ihren Browser so einstellen, dass er Sie uber das Setzen von Cookies informiert und Sie einzeln uber deren Annahme entscheiden konnen.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            4. Nutzung und Weitergabe personenbezogener Daten
          </h2>
          <p className="text-gray-700 mb-6">
            Die von uns erhobenen personenbezogenen Daten werden ausschliesslich zur Bereitstellung und Verbesserung unserer Website verwendet. Eine Weitergabe an Dritte erfolgt nicht, es sei denn, wir sind gesetzlich dazu verpflichtet oder Sie haben ausdrucklich eingewilligt.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            5. Datensicherheit
          </h2>
          <p className="text-gray-700 mb-6">
            Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten gegen zufallige oder vorsatzliche Manipulation, Verlust, Zerstorung oder den Zugriff unbefugter Personen zu schutzen. Unsere Website wird uber HTTPS (SSL/TLS) verschlusselt ubertragen.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            6. Ihre Rechte
          </h2>
          <p className="text-gray-700 mb-4">
            Sie haben gemaess der DSGVO folgende Rechte:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Recht auf Auskunft uber Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Recht auf Loschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Recht auf Einschrankung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenubertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            7. Externe Links
          </h2>
          <p className="text-gray-700 mb-6">
            Unsere Website enthalt Links zu externen Websites. Wir haben keinen Einfluss auf deren Inhalte und Datenschutzpraktiken. Fur die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            8. Anderungen dieser Datenschutzerklarung
          </h2>
          <p className="text-gray-700 mb-6">
            Wir behalten uns vor, diese Datenschutzerklarung zu andern, um sie an geanderte Rechtslagen oder bei Anderungen des Dienstes oder der Datenverarbeitung anzupassen. Die aktuelle Version ist stets auf dieser Seite verfugbar.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            9. Kontakt
          </h2>
          <p className="text-gray-700">
            Bei Fragen zum Datenschutz kontaktieren Sie uns bitte uber unsere{" "}
            <a href="/kontakt/" className="text-[#8d1812] hover:text-[#a82018] underline">Kontaktseite</a>.
          </p>
        </div>
      </section>
    </>
  );
}
