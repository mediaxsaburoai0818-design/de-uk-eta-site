import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Erforderliche Dokumente für das UK ETA 2026 - Reisepass, Foto, Anforderungen",
  description:
    "Für den UK-ETA-Antrag erforderliche Dokumente: biometrischer Reisepass, digitales Foto, Zahlungskartendaten. Vollständige Liste und technische Anforderungen.",
};

export default function RequiredDocuments() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/required-documents.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Erforderliche Dokumente für den UK-ETA-Antrag
          </h1>
          <p className="text-white/85 leading-relaxed">
            Um einen UK-ETA-Antrag zu stellen, müssen Sie einige Dokumente und
            Informationen vorbereiten. Nachstehend finden Sie die vollständige
            Liste.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Pflichtdokumente</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">1. Biometrischer Reisepass (E-Pass)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Muss während des gesamten geplanten Aufenthalts in Großbritannien gültig sein</li>
                <li>Muss einen biometrischen Chip enthalten (Symbol auf dem Umschlag)</li>
                <li>Ein vorläufiger Reisepass wird nicht akzeptiert</li>
                <li>Das ETA ist an einen bestimmten Reisepass gebunden</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">2. Gesichtsfoto (Selfie)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Wird während der Antragstellung in der App aufgenommen</li>
                <li>Gute Beleuchtung, neutraler Hintergrund</li>
                <li>Ohne Brille und Kopfbedeckung</li>
                <li>Gesicht vollständig sichtbar</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">3. E-Mail-Adresse</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Aktive E-Mail-Adresse für die Kontaktaufnahme</li>
                <li>An diese Adresse erhalten Sie die Bestätigung und die Entscheidung</li>
                <li>Stellen Sie sicher, dass Sie Zugriff auf das Postfach haben</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-2">4. Zahlungsmethode</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Kredit- oder Debitkarte (Visa/Mastercard)</li>
                <li>Apple Pay oder Google Pay</li>
                <li>Gebühr: &pound;20</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Im Formular erforderliche Angaben</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Persönliche Daten (Vorname, Nachname, Geburtsdatum, Geburtsort)</li>
            <li>Staatsangehörigkeit und doppelte Staatsangehörigkeit (falls zutreffend)</li>
            <li>Wohnanschrift</li>
            <li>Angaben zur Beschäftigung</li>
            <li>Zweck der Reise nach Großbritannien</li>
            <li>Angaben zu Vorstrafen und Einwanderungsgeschichte</li>
            <li>Antworten auf die Sicherheitsfragen</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Was Sie NICHT benötigen</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Eine Einladung von einer Person in Großbritannien</li>
            <li>Eine Hotelreservierung (nicht erforderlich, kann aber hilfreich sein)</li>
            <li>Ein Flugticket (Sie können den Antrag vor dem Kauf des Tickets stellen)</li>
            <li>Eine Reiseversicherung (empfohlen, aber für das ETA nicht erforderlich)</li>
            <li>Einen Besuch in einer Botschaft oder einem Visumzentrum</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokumente für Kinder</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jedes Kind, das nach Großbritannien reist, muss unabhängig vom Alter
            ein eigenes UK ETA besitzen. Ein eigener biometrischer Reisepass des
            Kindes ist erforderlich. Den Antrag im Namen des Kindes kann ein
            Elternteil oder ein gesetzlicher Vormund stellen.
          </p>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tipp:</strong> Stellen Sie vor Beginn des Vorgangs sicher,
            dass Ihr Reisepass gültig ist und Sie Zugriff auf ein Smartphone mit
            Kamera und NFC-Funktion (zum Scannen des Reisepasses) haben.
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
              Wie man den Antrag stellt &rarr;
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
              { label: "Erforderliche Dokumente" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
