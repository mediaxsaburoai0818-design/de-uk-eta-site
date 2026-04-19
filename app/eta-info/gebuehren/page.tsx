import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Gebuhren | Kosten fur die Reisegenehmigung",
  description: "Aktuelle Gebuhren und Kosten fur die UK ETA. Erfahren Sie, wie viel die elektronische Reisegenehmigung kostet und wie Sie bezahlen.",
};

export default function GebuehrenPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            UK ETA Gebuhren
          </h1>
          <p className="text-gray-300">Kosten und Zahlungsmoglichkeiten fur die ETA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Aktuelle Kosten
          </h2>
          <p className="text-gray-700 mb-8">
            Die UK ETA kostet derzeit zwischen 10 und 20 GBP (ca. 12-23 EUR) pro Person. Die Gebuhr wird bei der Antragstellung erhoben und ist nicht erstattungsfahig, auch wenn der Antrag abgelehnt wird.
          </p>

          <div className="bg-[#f8f6f3] p-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#022444] mb-2">10 - 20 GBP</div>
              <div className="text-gray-600">pro Person und Antrag</div>
              <div className="text-sm text-gray-500 mt-2">Entspricht ca. 12 - 23 EUR</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Was ist in der Gebuhr enthalten?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
            <li>Bearbeitung des ETA-Antrags</li>
            <li>Sicherheitsuberprufung</li>
            <li>Digitale Verknupfung mit Ihrem Reisepass</li>
            <li>2 Jahre Gultigkeit mit mehrfacher Einreise</li>
            <li>Bis zu 6 Monate Aufenthalt pro Besuch</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Akzeptierte Zahlungsmethoden
          </h2>
          <p className="text-gray-700 mb-4">
            Die Zahlung kann uber folgende Methoden erfolgen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Visa (Kredit- und Debitkarte)</li>
            <li>Mastercard (Kredit- und Debitkarte)</li>
            <li>American Express</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kostenvergleich mit ahnlichen Systemen
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#022444] text-white text-left">
                  <th className="p-3 font-semibold">System</th>
                  <th className="p-3 font-semibold">Land</th>
                  <th className="p-3 font-semibold">Kosten</th>
                  <th className="p-3 font-semibold">Gultigkeit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">UK ETA</td>
                  <td className="p-3">Grossbritannien</td>
                  <td className="p-3">10-20 GBP</td>
                  <td className="p-3">2 Jahre</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3">ESTA</td>
                  <td className="p-3">USA</td>
                  <td className="p-3">21 USD</td>
                  <td className="p-3">2 Jahre</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">eTA</td>
                  <td className="p-3">Kanada</td>
                  <td className="p-3">7 CAD</td>
                  <td className="p-3">5 Jahre</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3">ETA</td>
                  <td className="p-3">Australien</td>
                  <td className="p-3">20 AUD</td>
                  <td className="p-3">1 Jahr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wichtige Hinweise zu den Gebuhren
          </h2>
          <div className="bg-[#f8f6f3] p-6">
            <ul className="text-gray-700 space-y-3">
              <li>Die Gebuhr gilt pro Person - jeder Reisende zahlt einzeln</li>
              <li>Kinder und Babys benotigen ebenfalls eine ETA und zahlen die volle Gebuhr</li>
              <li>Die Gebuhr ist nicht erstattungsfahig</li>
              <li>Bei einem neuen Reisepass muss eine neue ETA beantragt und bezahlt werden</li>
              <li>Es gibt keine zusatzlichen Gebuhren fur die Express-Bearbeitung</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
