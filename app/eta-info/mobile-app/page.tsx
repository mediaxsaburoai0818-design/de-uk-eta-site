import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Offizielle mobile UK-ETA-App 2026 - iOS und Android",
  description:
    "Offizielle mobile UK-ETA-App für iOS und Android - wie man sie herunterlädt und den Antrag Schritt für Schritt direkt vom Telefon aus stellt.",
};

export default function MobileApp() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/mobile-app.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Mobile UK-ETA-App
          </h1>
          <p className="text-white/85 leading-relaxed">
            Die britische Regierung hat die offizielle mobile App
            &quot;UK ETA&quot; bereitgestellt, mit der Anträge direkt vom
            Smartphone aus gestellt werden können.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Über die UK-ETA-App</h2>
          <p className="text-gray-600 leading-relaxed">
            Die UK-ETA-App ist das offizielle Tool des Home Office zur Stellung
            von Anträgen auf eine elektronische Reisegenehmigung. Sie ist die
            empfohlene Art der Antragstellung, da sie das Scannen des
            Reisepasses per NFC und das automatische Ausfüllen der Daten
            ermöglicht.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Verfügbarkeit</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>iOS (App Store)</strong> &mdash; für Apple-Geräte
              (iPhone). Erfordert iOS 15.6 oder neuer.
            </li>
            <li>
              <strong>Android (Google Play)</strong> &mdash; für Geräte mit
              Android-System. Erfordert Android 9.0 oder neuer.
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Suchen Sie nach der App unter dem Namen &quot;UK ETA&quot;, Herausgeber: Home Office.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Funktionen der App</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Stellen eines neuen UK-ETA-Antrags</li>
            <li>Scannen des biometrischen Reisepasses (NFC + OCR)</li>
            <li>Aufnehmen eines Gesichtsfotos (Selfie) zur Verifizierung</li>
            <li>Prüfen des Status eines bestehenden Antrags</li>
            <li>Zahlung per Karte, Apple Pay oder Google Pay</li>
            <li>Push-Benachrichtigungen bei Statusänderung</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie stellt man den Antrag über die App?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Laden Sie die App &quot;UK ETA&quot; aus dem App Store oder Google Play herunter</li>
            <li>Erstellen Sie ein Konto (E-Mail-Adresse und Passwort)</li>
            <li>Scannen Sie den biometrischen Reisepass (halten Sie das Telefon an den Reisepass)</li>
            <li>Machen Sie ein Gesichtsfoto (Selfie)</li>
            <li>Beantworten Sie die Fragen im Formular</li>
            <li>Leisten Sie die Zahlung von &pound;20</li>
            <li>Senden Sie den Antrag ab und warten Sie auf die Entscheidung</li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Scannen des Reisepasses (NFC)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die App nutzt die NFC-Technologie (Near Field Communication), um die
            Daten aus dem biometrischen Chip im Reisepass auszulesen. Um den
            Reisepass zu scannen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Öffnen Sie den Reisepass auf der Seite mit dem Foto</li>
            <li>Halten Sie die Rückseite des Telefons an den geöffneten Reisepass</li>
            <li>Halten Sie es 5-10 Sekunden lang ruhig</li>
            <li>Warten Sie, bis die App das Auslesen der Daten bestätigt</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Vorteile der mobilen App</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>NFC-Scannen des Reisepasses &mdash; automatisches Ausfüllen der Daten</li>
            <li>Schnellere Antragstellung als über die Website</li>
            <li>Push-Benachrichtigungen zum Antragsstatus</li>
            <li>Biometrische Sicherheit (Face ID / Touch ID)</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Hinweis:</strong> Stellen Sie sicher, dass Sie die offizielle
            App herunterladen. Suchen Sie im App-Store nach dem Herausgeber
            &quot;Home Office&quot;. Gefälschte Apps können persönliche Daten
            stehlen.
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Art der Antragstellung &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>UK-ETA-Antrag stellen</span>
            </a>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Informationen zum UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Mobile App" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
