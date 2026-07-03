import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UK ETA beantragen 2026 - Schritt-für-Schritt-Anleitung",
  description:
    "So beantragen Sie die UK ETA Schritt für Schritt — vom Zusammenstellen der Unterlagen bis zur Genehmigung. Entscheidung meist innerhalb von 3 Tagen, oft in wenigen Minuten.",
};

export default function Application() {
  return (
    <div>
      {/* Header */}
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/application.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            So beantragen Sie die UK ETA
          </h1>
          <p className="text-white/85 mb-6 leading-relaxed">
            Die UK ETA können Sie über die offizielle Mobil-App
            &quot;UK ETA&quot; oder über die Website GOV.UK beantragen.
            Nachfolgend finden Sie eine ausführliche Anleitung zum gesamten
            Verfahren.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vor dem Start &mdash; was Sie bereithalten sollten</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Biometrischer Reisepass (E-Pass) &mdash; gültig</li>
            <li>Smartphone mit Kamera (zum Scannen des Reisepasses und für das Selfie)</li>
            <li>E-Mail-Adresse</li>
            <li>Zahlungskarte (Visa, Mastercard, Apple Pay, Google Pay)</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 1: App herunterladen oder Website öffnen</h2>
          <p className="text-gray-600 leading-relaxed">
            Laden Sie die App &quot;UK ETA&quot; aus dem App Store (iOS) oder bei
            Google Play (Android) herunter. Alternativ können Sie die Website{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              GOV.UK
            </a>{" "}
            nutzen.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 2: Reisepass scannen</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Verwenden Sie die Kamera Ihres Telefons, um die Bildseite des
            Reisepasses zu scannen. Die App liest die Daten automatisch aus dem
            biometrischen Chip (NFC) aus. Falls Ihr Telefon NFC nicht
            unterstützt, können Sie die Daten manuell eingeben.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-600">
            <strong>Tipp:</strong> Halten Sie den Reisepass an die Rückseite des
            Telefons und für einige Sekunden ruhig, bis die Daten ausgelesen
            wurden.
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 3: Gesichtsfoto (Selfie) aufnehmen</h2>
          <p className="text-gray-600 leading-relaxed">
            Die App fordert Sie auf, ein Gesichtsfoto zur Überprüfung Ihrer
            Identität aufzunehmen. Das Foto sollte bei guter Beleuchtung, vor
            einem neutralen Hintergrund, ohne Brille und ohne Kopfbedeckung
            aufgenommen werden.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 4: Formular ausfüllen</h2>
          <p className="text-gray-600 leading-relaxed">
            Beantworten Sie die Fragen zum Reisezweck, zur Unterkunftsadresse im
            UK, zur Reisehistorie sowie die Sicherheitsfragen. Das Formular ist
            kurz und dauert etwa 10 Minuten.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 5: Zahlung vornehmen (&pound;20)</h2>
          <p className="text-gray-600 leading-relaxed">
            Bezahlen Sie &pound;20 per Kredit- oder Debitkarte oder über Apple Pay /
            Google Pay. Die Zahlung wird sofort verarbeitet.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Schritt 6: Auf die Genehmigung warten</h2>
          <p className="text-gray-600 leading-relaxed">
            Nach dem Absenden des Antrags erhalten Sie eine Bestätigung per
            E-Mail. Die meisten Anträge werden innerhalb weniger Stunden
            bearbeitet, es kann jedoch bis zu 72 Stunden dauern. Sie erhalten
            eine E-Mail-Benachrichtigung über die Entscheidung.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Nach der Genehmigung</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die ETA ist elektronisch mit Ihrem Reisepass verknüpft &mdash; Sie
            müssen keine Dokumente ausdrucken. Fluggesellschaften und
            Grenzbehörden überprüfen Ihre ETA bei der Abfertigung automatisch.
          </p>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <strong>Achtung:</strong> Stellen Sie Ihren Antrag ausschließlich auf
            der offiziellen Website{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              className="text-[#022444] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK
            </a>{" "}
            oder über die offizielle App &quot;UK ETA&quot;. Hüten Sie sich vor
            betrügerischen Websites, die überhöhte Gebühren verlangen.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/fee/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Gebühren ansehen &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>UK ETA beantragen</span>
            </a>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Informationen zur UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "So beantragen Sie die UK ETA" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
