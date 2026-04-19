import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA beantragen | Schritt-fur-Schritt-Anleitung",
  description: "Erfahren Sie, wie Sie die UK ETA Schritt fur Schritt beantragen. Vollstandige Anleitung fur deutsche Staatsburger.",
};

export default function AntragPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wie beantrage ich die UK ETA?
          </h1>
          <p className="text-gray-300">Schritt-fur-Schritt-Anleitung fur den Antragsprozess</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Der Antragsprozess im Uberblick
          </h2>
          <p className="text-gray-700 mb-8">
            Der Antrag fur eine UK ETA ist ein einfacher Online-Prozess, der in wenigen Minuten abgeschlossen werden kann. Sie konnen den Antrag uber die offizielle UK ETA-App oder die GOV.UK-Website stellen.
          </p>

          <div className="space-y-8 mb-12">
            <StepCard
              step={1}
              title="UK ETA-App herunterladen oder GOV.UK besuchen"
              description="Laden Sie die offizielle 'UK ETA'-App aus dem App Store (iOS) oder Google Play Store (Android) herunter. Alternativ konnen Sie den Antrag uber die GOV.UK-Website stellen."
            />
            <StepCard
              step={2}
              title="Personliche Daten eingeben"
              description="Geben Sie Ihre personlichen Daten ein, darunter Ihren vollstandigen Namen, Geburtsdatum, Nationalitat und Kontaktinformationen. Alle Angaben mussen mit Ihrem Reisepass ubereinstimmen."
            />
            <StepCard
              step={3}
              title="Reisepass scannen"
              description="Scannen Sie die Datenseite Ihres biometrischen Reisepasses mit der Kamera Ihres Smartphones. Die App liest die Daten automatisch aus dem NFC-Chip Ihres Passes."
            />
            <StepCard
              step={4}
              title="Passfoto aufnehmen"
              description="Nehmen Sie ein aktuelles Foto von sich auf. Achten Sie auf gute Beleuchtung, einen neutralen Hintergrund und einen neutralen Gesichtsausdruck. Brillen und Kopfbedeckungen sollten nach Moglichkeit abgenommen werden."
            />
            <StepCard
              step={5}
              title="Sicherheitsfragen beantworten"
              description="Beantworten Sie einige Sicherheitsfragen zu Ihrer Reise und Ihrem Hintergrund. Dies umfasst Fragen zu fruheren Visumablehnungen, strafrechtlichen Verurteilungen und Ihrem Reisezweck."
            />
            <StepCard
              step={6}
              title="Gebuhr bezahlen"
              description="Bezahlen Sie die Antragsgebuhr von 10-20 GBP per Kreditkarte oder Debitkarte. Die Zahlung wird sofort verarbeitet."
            />
            <StepCard
              step={7}
              title="Bestatigung erhalten"
              description="Nach der Zahlung erhalten Sie eine Bestatigungs-E-Mail. Die Bearbeitung dauert in der Regel bis zu 72 Stunden. In den meisten Fallen erhalten Sie die Genehmigung jedoch innerhalb weniger Stunden."
            />
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tipps fur einen erfolgreichen Antrag
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
            <li>Beantragen Sie die ETA mindestens 72 Stunden vor Ihrer geplanten Abreise</li>
            <li>Stellen Sie sicher, dass Ihr Reisepass noch mindestens 6 Monate gultig ist</li>
            <li>Verwenden Sie die gleiche E-Mail-Adresse, die Sie auch fur Ihre Reisebuchung verwenden</li>
            <li>Machen Sie Ihr Foto bei Tageslicht vor einer hellen Wand</li>
            <li>Halten Sie Ihre Kreditkarte fur die Zahlung bereit</li>
            <li>Uberprufen Sie alle Angaben sorgfaltig vor dem Absenden</li>
          </ul>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wichtig zu wissen
            </h3>
            <p className="text-gray-700">
              Die ETA wird elektronisch mit Ihrem Reisepass verknupft. Sie erhalten kein physisches Dokument. Bei der Einreise wird Ihr Pass gescannt und die ETA automatisch uberpruft. Drucken Sie zur Sicherheit die Bestatigungs-E-Mail aus oder speichern Sie sie auf Ihrem Smartphone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function StepCard({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-[#022444] text-white flex items-center justify-center font-bold text-lg">
        {step}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#022444] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
