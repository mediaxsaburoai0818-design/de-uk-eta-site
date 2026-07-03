import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Portals UK ETA Online - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/privacy-policy.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR WEBSITE</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-gray-500">Letzte Aktualisierung: April 2026</p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Allgemeine Informationen</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Datenschutzerklärung legt die Grundsätze für die Verarbeitung und
            den Schutz der personenbezogenen Daten der Nutzer des Portals UK ETA
            Online fest. Wir respektieren die Privatsphäre der Nutzer und legen Wert
            auf die Sicherheit der Daten.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Erhobene Daten</h2>
          <p className="text-gray-600 text-sm mb-3">Das Portal kann folgende Daten erheben:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>In Formularen angegebene Daten (Name, E-Mail-Adresse, Inhalt der Nachricht)</li>
            <li>Technische Daten (IP-Adresse, Browsertyp, Betriebssystem)</li>
            <li>Cookies (gemäß der Cookie-Richtlinie)</li>
            <li>Analysedaten (Besuchsdauer, aufgerufene Seiten)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Zweck der Datenverarbeitung</h2>
          <p className="text-gray-600 text-sm mb-3">Die Daten werden zu folgenden Zwecken verarbeitet:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Beantwortung von Anfragen, die über das Kontaktformular gesendet werden</li>
            <li>Analyse des Datenverkehrs auf der Website und Optimierung des Portals</li>
            <li>Gewährleistung der Sicherheit des Portals</li>
            <li>Anzeige von auf den Nutzer abgestimmten Inhalten</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Cookies</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Das Portal verwendet Cookies, um die ordnungsgemäße Funktion der
            Website sicherzustellen, den Datenverkehr zu analysieren und Inhalte zu
            personalisieren. Der Nutzer kann Cookies über die Einstellungen seines
            Browsers steuern.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Weitergabe von Daten</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Personenbezogene Daten werden nicht an Dritte weitergegeben, mit
            Ausnahme von Fällen, die gesetzlich vorgeschrieben oder zur Erbringung
            der Dienstleistung erforderlich sind (z. B. Hosting, Analysewerkzeuge).
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Rechte des Nutzers (DSGVO)</h2>
          <p className="text-gray-600 text-sm mb-3">Gemäß der DSGVO hat der Nutzer das Recht auf:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Auskunft über seine personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung der Daten (&quot;Recht auf Vergessenwerden&quot;)</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Datensicherheit</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Wir setzen geeignete technische und organisatorische Maßnahmen ein, um
            personenbezogene Daten vor unbefugtem Zugriff, Verlust oder Zerstörung
            zu schützen. Die Website verwendet eine SSL/TLS-Verschlüsselung.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Bei Fragen zum Schutz personenbezogener Daten kontaktieren Sie uns bitte
            über das{" "}
            <Link href="/site-info/contact/" className="text-[#022444] underline">
              Kontaktformular
            </Link>
            .
          </p>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Informationen zur Website", href: "/site-info/about/" },
              { label: "Datenschutzerklärung" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
