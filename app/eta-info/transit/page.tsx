import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Transit durch Großbritannien - brauchen Sie 2026 eine UK ETA?",
  description:
    "Ist eine UK ETA beim Transit durch Großbritannien erforderlich? Regeln für Umsteigeverbindungen und Ausnahmen für den Transitbereich von Flughäfen.",
};

export default function Transit() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/transit.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Transit durch Großbritannien &mdash; brauche ich eine UK ETA?
          </h1>
          <p className="text-white/85 leading-relaxed">
            Ja, eine UK ETA ist auch beim Transit durch Großbritannien
            erforderlich, selbst wenn Sie den Transitbereich des Flughafens
            nicht verlassen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Transitregeln</h2>
          <p className="text-gray-600 leading-relaxed">
            Seit dem 2. April 2025 benötigen EU-Bürger (einschließlich deutscher
            Staatsbürger) eine UK ETA für den Transit durch Großbritannien. Das
            gilt sowohl für den Transit im Sicherheitsbereich (Airside Transit)
            als auch für den Transit außerhalb des Sicherheitsbereichs (Landside Transit).
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Arten des Transits</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#022444] mb-2">Transit im Sicherheitsbereich (Airside Transit)</h3>
              <p className="text-sm text-gray-600">
                Umsteigen am Flughafen, ohne den internationalen Bereich zu
                verlassen. Eine UK ETA ist erforderlich. Das betrifft z. B. das
                Umsteigen in Heathrow auf dem Weg in die USA oder nach Kanada.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#022444] mb-2">Transit außerhalb des Sicherheitsbereichs (Landside Transit)</h3>
              <p className="text-sm text-gray-600">
                Das Verlassen des Transitbereichs, z. B. um zwischen Terminals
                zu wechseln, Gepäck abzuholen oder in einem Hotel zu übernachten.
                Eine UK ETA ist erforderlich. Sie reisen formell nach
                Großbritannien ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Beliebte Transitrouten über Großbritannien</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Berlin &rarr; London (Heathrow) &rarr; New York</li>
            <li>München &rarr; London (Gatwick) &rarr; Toronto</li>
            <li>Hamburg &rarr; London (Stansted) &rarr; Dublin</li>
            <li>Frankfurt &rarr; London (Luton) &rarr; Los Angeles</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Auf all diesen Routen ist eine UK ETA erforderlich, selbst wenn der
            Aufenthalt am Flughafen nur wenige Stunden dauert.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Ausnahmen von der ETA-Pflicht beim Transit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Es gibt wenige Ausnahmen von der ETA-Pflicht beim Transit:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Irische Staatsbürger (Common Travel Area, CTA)</li>
            <li>Inhaber eines gültigen britischen Visums</li>
            <li>Inhaber eines britischen Daueraufenthaltsstatus (Settled/Pre-Settled Status)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie vermeidet man die ETA-Pflicht beim Transit?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wenn Sie keinen UK-ETA-Antrag stellen möchten, können Sie Routen
            wählen, die nicht durch Großbritannien führen. Zum Beispiel:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Direktflüge aus Deutschland zum Reiseziel</li>
            <li>Umsteigeverbindungen in EU-Ländern (Amsterdam, Frankfurt, Paris)</li>
            <li>Umsteigen in Dublin (Irland &mdash; keine ETA erforderlich)</li>
          </ul>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Tipp:</strong> Wenn Sie einen Flug mit Umstieg in London
            planen, stellen Sie den UK-ETA-Antrag mindestens 72 Stunden vor dem
            Abflug. Ohne ETA kann Ihnen das Boarding verweigert werden.
          </div>
        </div>
      </section>

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
              { label: "Informationen zur UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Transit durch Großbritannien" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
