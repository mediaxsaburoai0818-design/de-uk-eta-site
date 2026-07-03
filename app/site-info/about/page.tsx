import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Über UK ETA Online - Ziel des Portals, wer wir sind und welche Informationen wir zum UK ETA 2026 bereitstellen.",
};

export default function About() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/about.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR WEBSITE</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Über uns
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Ziel des Portals</h2>
          <p className="text-gray-600 leading-relaxed">
            UK ETA Online ist ein Informationsportal rund um die Elektronische
            Reisegenehmigung (ETA) für das Vereinigte Königreich. Unser Ziel ist
            es, zuverlässige, aktuelle und nützliche Informationen auf Deutsch zum
            neuen Reisegenehmigungssystem bereitzustellen.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Womit beschäftigen wir uns?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Wir liefern vollständige Informationen zum UK-ETA-System auf Deutsch</li>
            <li>Wir erklären das Antragsverfahren Schritt für Schritt</li>
            <li>Wir beantworten die häufigsten Fragen rund um Reisen ins Vereinigte Königreich</li>
            <li>Wir warnen vor gefälschten Websites und Betrugsmaschen im Zusammenhang mit der ETA</li>
            <li>Wir informieren über Änderungen der Vorschriften für Reisen ins Vereinigte Königreich</li>
            <li>Wir stellen Informationen für deutsche Staatsbürger im Vereinigten Königreich bereit</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wichtiger Hinweis</h2>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <p>
              UK ETA Online ist keine offizielle Website der Regierung des
              Vereinigten Königreichs. Wir stehen in keiner Verbindung zum Home
              Office, zu UK Visas and Immigration oder zu einer anderen
              Regierungsbehörde des Vereinigten Königreichs. Die offizielle
              Website zur Beantragung der UK ETA ist{" "}
              <a
                href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                className="text-[#022444] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GOV.UK
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Angaben zum Betreiber</h2>
          <div className="border border-gray-200 rounded p-4 text-sm text-gray-600">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Name des Portals:</td>
                  <td className="py-2">UK ETA Online</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Art:</td>
                  <td className="py-2">Informationsportal</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Sprache:</td>
                  <td className="py-2">Deutsch</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                  <td className="py-2">
                    <Link href="/site-info/contact/" className="text-[#022444] underline">
                      Kontaktformular
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Informationen zur Website", href: "/site-info/about/" },
              { label: "Über uns" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
