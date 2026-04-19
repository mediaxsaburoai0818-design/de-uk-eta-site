import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erforderliche Dokumente fur UK ETA | Checkliste",
  description: "Vollstandige Liste der erforderlichen Dokumente fur den UK ETA-Antrag. Reisepass, Foto und weitere Anforderungen.",
};

export default function DokumentePage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Erforderliche Dokumente
          </h1>
          <p className="text-gray-300">Checkliste fur den UK ETA-Antrag</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dokumente-Checkliste
          </h2>
          <p className="text-gray-700 mb-8">
            Fur den UK ETA-Antrag benotigen Sie folgende Dokumente und Informationen. Stellen Sie sicher, dass alles vorbereitet ist, bevor Sie den Antrag starten.
          </p>

          <div className="space-y-8 mb-12">
            <div className="border-l-4 border-[#022444] pl-6">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Gultiger Reisepass
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Biometrischer Reisepass (e-Reisepass) erforderlich</li>
                <li>Der Pass muss zum Zeitpunkt der Einreise noch mindestens 6 Monate gultig sein</li>
                <li>Der NFC-Chip im Pass muss funktionsfahig sein</li>
                <li>Der Pass darf nicht beschadigt sein</li>
                <li>Der Name im Pass muss mit den Antragsdaten ubereinstimmen</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#022444] pl-6">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Digitales Passfoto
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Aktuelles Foto (nicht alter als 6 Monate)</li>
                <li>Neutraler Gesichtsausdruck mit geschlossenem Mund</li>
                <li>Beide Augen deutlich sichtbar</li>
                <li>Keine Brille, Sonnenbrille oder Kopfbedeckung (religios bedingte Kopfbedeckungen ausgenommen)</li>
                <li>Heller, einfarbiger Hintergrund</li>
                <li>Gute Beleuchtung ohne Schatten</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#022444] pl-6">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                3. E-Mail-Adresse
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Gultige E-Mail-Adresse fur die Bestatigungs-E-Mail</li>
                <li>Zugriff auf das E-Mail-Konto wahrend des Antragsprozesses</li>
                <li>Empfohlen: Dieselbe E-Mail-Adresse wie fur Ihre Reisebuchung</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#022444] pl-6">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Zahlungsmittel
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Kredit- oder Debitkarte (Visa, Mastercard, American Express)</li>
                <li>Alternativ: Apple Pay oder Google Pay</li>
                <li>Ausreichendes Guthaben fur die Gebuhr von 10-20 GBP</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#022444] pl-6">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Smartphone (bei App-Nutzung)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>iPhone oder Android-Smartphone mit NFC-Funktion</li>
                <li>Aktuelle Version der UK ETA-App installiert</li>
                <li>Funktionierende Kamera fur Passcan und Foto</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Weitere benoigte Informationen
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Vollstandiger Name (wie im Reisepass)</li>
            <li>Geburtsdatum und Geburtsort</li>
            <li>Aktuelle Wohnadresse</li>
            <li>Staatsangehorigkeit</li>
            <li>Kontaktinformationen (Telefonnummer)</li>
            <li>Reiseinformationen (Zweck der Reise, geplanter Aufenthalt)</li>
          </ul>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tipp fur deutsche Antragsteller
            </h3>
            <p className="text-gray-700">
              Deutsche Reisepasse sind biometrisch und verfugen uber einen NFC-Chip. Sie sind daher fur den ETA-Antrag bestens geeignet. Wenn Sie keinen biometrischen Reisepass besitzen, konnen Sie diesen bei Ihrem ortlichen Burgeramt beantragen. Die Bearbeitungszeit betragt in der Regel 3-6 Wochen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
