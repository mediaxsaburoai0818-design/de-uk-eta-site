import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Was ist UK ETA? | Elektronische Reisegenehmigung erklart",
  description: "Erfahren Sie, was die UK ETA (Electronic Travel Authorisation) ist, warum sie eingefuhrt wurde und wer sie benotigt.",
};

export default function WasIstEtaPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Was ist UK ETA?
          </h1>
          <p className="text-gray-300">Alles uber die elektronische Reisegenehmigung fur Grossbritannien</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Die Electronic Travel Authorisation (ETA)
            </h2>
            <p className="text-gray-700 mb-6">
              Die UK ETA (Electronic Travel Authorisation) ist eine neue digitale Reisegenehmigung, die von der britischen Regierung eingefuhrt wurde. Sie ist Teil des neuen universellen Genehmigungssystems (Universal Permission to Travel), das sicherstellen soll, dass alle Reisenden vor ihrer Ankunft im Vereinigten Konigreich eine Genehmigung erhalten haben.
            </p>

            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Warum wurde die ETA eingefuhrt?
            </h2>
            <p className="text-gray-700 mb-6">
              Die britische Regierung hat die ETA eingefuhrt, um die Grenzsicherheit zu verbessern und den Einreiseprozess zu digitalisieren. Ahnliche Systeme gibt es bereits in anderen Landern, wie das ESTA-System der USA oder das zukunftige ETIAS der EU. Die ETA ermoglicht es den Behorden, Reisende vor ihrer Ankunft zu uberprufen und potenzielle Sicherheitsrisiken fruhzeitig zu erkennen.
            </p>

            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wer benotigt eine UK ETA?
            </h2>
            <p className="text-gray-700 mb-4">
              Ab April 2025 benotigen alle Staatsburger von Landern, die kein Visum fur die Einreise nach Grossbritannien benotigen, eine ETA. Dies betrifft auch deutsche Staatsburger. Die ETA ist erforderlich fur:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Touristische Reisen nach Grossbritannien</li>
              <li>Geschaftsreisen und Konferenzen</li>
              <li>Besuch von Familie und Freunden</li>
              <li>Kurzfristige Studienprogramme (bis zu 6 Monate)</li>
              <li>Transit durch Grossbritannien</li>
              <li>Medizinische Behandlungen</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Was ist der Unterschied zwischen ETA und Visum?
            </h2>
            <p className="text-gray-700 mb-6">
              Die ETA ist keine Visumersatz, sondern eine zusatzliche Reisegenehmigung fur visumfreie Reisende. Wahrend ein Visum in der Regel fur langere Aufenthalte oder bestimmte Zwecke (Arbeit, Studium) erforderlich ist, dient die ETA der Vorab-Uberprufung von Kurzzeit-Besuchern. Die ETA ist einfacher und schneller zu beantragen als ein Visum und gilt fur mehrere Einreisen uber einen Zeitraum von 2 Jahren.
            </p>

            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fur welche Gebiete gilt die UK ETA?
            </h2>
            <p className="text-gray-700 mb-6">
              Die UK ETA gilt fur die Einreise nach England, Schottland, Wales und Nordirland. Sie wird auch fur die Einreise in britische Uberseegebiete wie Gibraltar, Bermuda und die Kaimaninseln benotigt.
            </p>

            <div className="bg-[#f8f6f3] p-6 mt-8">
              <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wichtige Hinweise fur deutsche Reisende
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Die ETA ersetzt nicht die bestehenden Visumbestimmungen</li>
                <li>Jeder Reisende benotigt eine eigene ETA, einschliesslich Kinder</li>
                <li>Die ETA muss vor der Abreise beantragt werden</li>
                <li>Ohne gultige ETA kann die Einreise verweigert werden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
