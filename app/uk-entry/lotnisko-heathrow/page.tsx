import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Flughafen Heathrow (LHR) - Terminals, Kontrolle und Anfahrt nach London",
  description:
    "Leitfaden zum Flughafen Heathrow: Terminals 2-5, Grenzkontrolle (eGate) sowie die Anfahrt ins Zentrum von London - Heathrow Express, Elizabeth Line, U-Bahn und Busse.",
  alternates: { canonical: "https://eta-de.com/uk-entry/lotnisko-heathrow/" },
};

export default function Heathrow() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>EINREISE NACH UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Flughafen Heathrow (LHR)
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Heathrow ist der größte Flughafen Großbritanniens und das wichtigste Einreisetor nach London. Nachfolgend finden Sie die Terminals, den Ablauf der Grenzkontrolle sowie die Möglichkeiten zur Anfahrt ins Zentrum.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">Lage und Terminals</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Heathrow (IATA-Code: LHR) liegt im westlichen Teil von London. Es ist der größte und verkehrsreichste Flughafen in UK und bedient Verbindungen aus der ganzen Welt. In Betrieb sind die Terminals 2, 3, 4 und 5 - prüfen Sie die Terminalnummer auf Ihrem Ticket, da sie die Anfahrt und die Abfertigung beeinflusst.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Grenzkontrolle nach der Ankunft</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Nach der Ankunft durchläuft man die Grenzkontrolle über automatische <strong>eGate</strong>-Schranken (auf Basis des biometrischen Reisepasses) oder am Schalter eines Beamten. Denken Sie daran, dass Sie für die Einreise einen gültigen Reisepass sowie eine gültige{" "}
              <Link href="/eta-info/what-is-eta/" className="content-link">UK ETA</Link>, die mit diesem Reisepass verknüpft ist, benötigen (bei Aufenthalten bis zu 6 Monaten).
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Anfahrt ins Zentrum von London</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200 font-bold" style={{ color: "var(--color-blue)" }}>Verkehrsmittel</th>
                    <th className="text-left p-3 border-b border-gray-200 font-bold" style={{ color: "var(--color-blue)" }}>Ungefähre Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-gray-100">Heathrow Express (Expresszug)</td><td className="p-3 border-b border-gray-100">ca. 15 Minuten</td></tr>
                  <tr><td className="p-3 border-b border-gray-100">Elizabeth Line</td><td className="p-3 border-b border-gray-100">ca. 30 Minuten</td></tr>
                  <tr><td className="p-3 border-b border-gray-100">U-Bahn (Piccadilly Line)</td><td className="p-3 border-b border-gray-100">ca. 50 Minuten</td></tr>
                  <tr><td className="p-3">Bus / Coach</td><td className="p-3">ca. 60-90 Minuten</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">Die Zeiten sind Richtwerte und hängen vom Terminal, der Tageszeit und dem Ziel in London ab.</p>
          </div>

          <p className="text-sm text-gray-500">
            Mehr zu den Flughäfen Londons:{" "}
            <Link href="/uk-entry/lotniska-londynu/" className="content-link">Die 5 wichtigsten Flughäfen Londons</Link>
          </p>

          <Breadcrumb items={[{ label: "Flughafen Heathrow (LHR)" }]} />
        </article>
      </section>
    </div>
  );
}
