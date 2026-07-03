import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Was ist die UK ETA? Vollständiger Leitfaden 2026",
  description:
    "Die UK ETA (Electronic Travel Authorisation) ist eine elektronische Reisegenehmigung, die seit dem 2. April 2025 gilt. Verfahren, Gebühr £20, 2 Jahre gültig, Entscheidung meist innerhalb von 3 Tagen.",
};

export default function WhatIsEta() {
  return (
    <div>
      {/* Header */}
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/what-is-eta.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Was ist die UK ETA?
          </h1>
          <p className="text-white/85 leading-relaxed">
            Die UK ETA (Electronic Travel Authorisation) ist eine elektronische
            Reisegenehmigung, die von der britischen Regierung im Rahmen eines
            neuen Grenzkontrollsystems eingeführt wurde. Dieses System verlangt
            von Reisenden aus bestimmten Ländern, vor der Einreise in das
            Vereinigte Königreich eine digitale Genehmigung einzuholen.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zweck des UK-ETA-Systems</h2>
          <p className="text-gray-600 leading-relaxed">
            Das UK-ETA-System wurde eingeführt, um die Sicherheit der
            britischen Grenzen nach dem Brexit zu stärken. Es ermöglicht den
            britischen Behörden, Reisende bereits vor ihrer Ankunft zu
            überprüfen, was die Grenzkontrolle effizienter macht und die
            Sicherheit des Landes erhöht. Für Bürgerinnen und Bürger der EU
            gilt die ETA seit dem 2. April 2025.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wer benötigt eine UK ETA?</h2>
          <p className="text-gray-600 leading-relaxed">
            Eine UK ETA ist für Staatsangehörige von Ländern erforderlich, die
            für Kurzaufenthalte im Vereinigten Königreich kein Visum benötigen,
            aber weder britische noch irische Staatsbürger sind. Seit dem
            2. April 2025 betrifft dies alle EU-Bürger, einschließlich der
            deutschen Staatsbürger.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">EU-Länder mit UK-ETA-Pflicht</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              "Deutschland", "Frankreich", "Spanien", "Italien", "Niederlande", "Polen",
              "Belgien", "Österreich", "Tschechien", "Portugal", "Schweden", "Dänemark",
              "Finnland", "Griechenland", "Kroatien", "Rumänien", "Bulgarien", "Ungarn",
              "Slowakei", "Litauen", "Lettland", "Estland",
            ].map((country) => (
              <span
                key={country}
                className="bg-white border border-gray-200 rounded px-3 py-1.5 text-gray-700"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wichtige Merkmale der UK ETA</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Reisezweck: Tourismus, Geschäftsreise, Kurzstudium oder Transit</li>
            <li>Maximaler Aufenthalt: 6 Monate pro Einreise</li>
            <li>Gültigkeit: 2 Jahre ab Ausstellungsdatum</li>
            <li>Gebühr: &pound;20</li>
            <li>Mehrfache Einreisen während der Gültigkeitsdauer</li>
            <li>Biometrischer Reisepass erforderlich</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA und Visum &mdash; die Unterschiede</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-white">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kriterium</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">UK ETA</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Britisches Visum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Kosten</td>
                  <td className="p-3 border-b border-gray-100">&pound;20</td>
                  <td className="p-3 border-b border-gray-100">ab &pound;100</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Bearbeitungszeit</td>
                  <td className="p-3 border-b border-gray-100">Einige Stunden &mdash; 72h</td>
                  <td className="p-3 border-b border-gray-100">Wochen / Monate</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Maximaler Aufenthalt</td>
                  <td className="p-3 border-b border-gray-100">6 Monate</td>
                  <td className="p-3 border-b border-gray-100">Je nach Typ</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Gültigkeit</td>
                  <td className="p-3 border-b border-gray-100">2 Jahre</td>
                  <td className="p-3 border-b border-gray-100">Je nach Typ</td>
                </tr>
                <tr>
                  <td className="p-3">Besuch im Visumzentrum</td>
                  <td className="p-3">Nein</td>
                  <td className="p-3">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r mt-6">
            <p className="text-sm text-gray-700">
              <strong>Wichtig:</strong> Die UK ETA garantiert keine Einreise in
              das Vereinigte Königreich. Die endgültige Entscheidung über die
              Einreise trifft bei der Ankunft ein Beamter der Grenzkontrolle
              (UK Border Force).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              So stellen Sie den Antrag &rarr;
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
              { label: "Was ist die UK ETA?" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
