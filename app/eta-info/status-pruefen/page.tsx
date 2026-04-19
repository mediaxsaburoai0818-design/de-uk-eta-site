import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Status prufen | Antragsstatus uberprufen",
  description: "Erfahren Sie, wie Sie den Status Ihres UK ETA-Antrags uberprufen konnen und was die verschiedenen Statusmeldungen bedeuten.",
};

export default function StatusPruefenPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            UK ETA Status prufen
          </h1>
          <p className="text-gray-300">So uberprufen Sie den Status Ihres Antrags</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            So prufen Sie Ihren ETA-Status
          </h2>
          <p className="text-gray-700 mb-8">
            Nach der Antragstellung konnen Sie den Status Ihrer UK ETA auf verschiedene Weisen uberprufen. In der Regel erhalten Sie innerhalb von 72 Stunden eine Entscheidung per E-Mail.
          </p>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Moglichkeiten zur Statusprufung
          </h2>
          <div className="space-y-6 mb-12">
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Per E-Mail</h3>
              <p className="text-gray-700 text-sm">
                Nach der Antragstellung erhalten Sie eine Bestatigungs-E-Mail mit Ihrer Referenznummer. Sobald eine Entscheidung getroffen wurde, erhalten Sie eine weitere E-Mail mit dem Ergebnis. Uberprufen Sie auch Ihren Spam-Ordner.
              </p>
            </div>
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Uber die UK ETA-App</h3>
              <p className="text-gray-700 text-sm">
                Wenn Sie den Antrag uber die offizielle UK ETA-App gestellt haben, konnen Sie den Status direkt in der App uberprufen. Offnen Sie die App und navigieren Sie zu Ihrem Antrag.
              </p>
            </div>
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Uber GOV.UK</h3>
              <p className="text-gray-700 text-sm">
                Auf der offiziellen GOV.UK-Website konnen Sie den Status Ihres Antrags mit Ihrer Referenznummer und Ihren Reisepassdaten uberprufen.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mogliche Statusmeldungen
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#022444] text-white text-left">
                  <th className="p-3 font-semibold">Status</th>
                  <th className="p-3 font-semibold">Bedeutung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">In Bearbeitung</td>
                  <td className="p-3 text-gray-700">Ihr Antrag wird derzeit gepruft. Dies dauert in der Regel bis zu 72 Stunden.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-semibold">Genehmigt</td>
                  <td className="p-3 text-gray-700">Ihre ETA wurde genehmigt. Sie konnen nach Grossbritannien reisen.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Abgelehnt</td>
                  <td className="p-3 text-gray-700">Ihr Antrag wurde abgelehnt. Sie konnen einen neuen Antrag stellen oder ein Visum beantragen.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 font-semibold">Zusatzliche Informationen erforderlich</td>
                  <td className="p-3 text-gray-700">Es werden zusatzliche Unterlagen oder Informationen benotigt.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Was tun bei Ablehnung?
          </h2>
          <p className="text-gray-700 mb-4">
            Wenn Ihr ETA-Antrag abgelehnt wird, haben Sie folgende Moglichkeiten:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Uberprufen Sie die Grunde fur die Ablehnung in der Benachrichtigungs-E-Mail</li>
            <li>Korrigieren Sie eventuelle Fehler und stellen Sie einen neuen Antrag</li>
            <li>Beantragen Sie ein regulares Visum uber die GOV.UK-Website</li>
            <li>Kontaktieren Sie das UK Visas and Immigration (UKVI) fur weitere Hilfe</li>
          </ul>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bearbeitungszeiten
            </h3>
            <p className="text-gray-700">
              Die meisten ETA-Antrage werden innerhalb weniger Stunden bearbeitet. In einigen Fallen kann die Bearbeitung jedoch bis zu 72 Stunden dauern. Planen Sie daher genugend Vorlaufzeit ein und beantragen Sie Ihre ETA mindestens 3 Tage vor Ihrer geplanten Reise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
