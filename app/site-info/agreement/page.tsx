import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen",
  description:
    "Nutzungsbedingungen des Portals UK ETA Online - Bedingungen für die Nutzung und Haftung des Portals.",
};

export default function Agreement() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/agreement.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR WEBSITE</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Nutzungsbedingungen
          </h1>
          <p className="text-sm text-gray-500">Letzte Aktualisierung: April 2026</p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Allgemeine Bestimmungen</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Nutzungsbedingungen legen die Regeln für die Nutzung des Portals
            UK ETA Online fest. Mit der Nutzung des Portals akzeptiert der Nutzer die
            nachstehenden Bedingungen.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Charakter des Portals</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            UK ETA Online ist ein Informationsportal. Es ist keine offizielle
            Website der Regierung des Vereinigten Königreichs oder einer
            Regierungsbehörde. Die im Portal enthaltenen Informationen dienen
            ausschließlich der Information und stellen keine rechtliche oder
            einwanderungsrechtliche Beratung dar.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Leistungen</h2>
          <p className="text-gray-600 text-sm mb-3">Das Portal bietet folgende Leistungen:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Informationen zum UK-ETA-System</li>
            <li>Leitfäden zum Antragsverfahren</li>
            <li>Antworten auf häufig gestellte Fragen</li>
            <li>Informationen für deutsche Staatsbürger im Vereinigten Königreich</li>
            <li>Kontaktformular für Anfragen</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Haftung</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Der Betreiber des Portals bemüht sich, die Aktualität und Richtigkeit
            der Informationen sicherzustellen, übernimmt jedoch keine Haftung für
            etwaige Fehler, veraltete Daten oder Schäden, die aus der Nutzung des
            Portals entstehen. Der Nutzer sollte die Informationen stets auf der
            offiziellen Website GOV.UK überprüfen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Urheberrecht</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Die Inhalte des Portals, einschließlich Texte, Grafiken und Layout der
            Website, sind urheberrechtlich geschützt. Das Kopieren, Verbreiten oder
            Verwenden der Inhalte ohne Zustimmung des Betreibers ist untersagt.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Externe Links</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Das Portal kann Links zu externen Websites enthalten. Der Betreiber
            übernimmt keine Haftung für die Inhalte und Datenschutzrichtlinien
            externer Websites.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Änderungen der Nutzungsbedingungen</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Der Betreiber behält sich das Recht vor, die Nutzungsbedingungen
            jederzeit zu ändern. Änderungen treten mit ihrer Veröffentlichung auf der
            Website in Kraft.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Bei Fragen zu den Nutzungsbedingungen kontaktieren Sie uns bitte über das{" "}
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
              { label: "Nutzungsbedingungen" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
