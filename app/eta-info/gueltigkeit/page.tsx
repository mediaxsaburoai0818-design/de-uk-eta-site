import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK ETA Gultigkeit | Wie lange ist die ETA gultig?",
  description: "Erfahren Sie, wie lange die UK ETA gultig ist, wie oft Sie einreisen durfen und wann eine Erneuerung erforderlich ist.",
};

export default function GueltigkeitPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gultigkeit der UK ETA
          </h1>
          <p className="text-gray-300">Gultigkeitsdauer, Einreisebedingungen und Erneuerung</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wie lange ist die UK ETA gultig?
          </h2>
          <p className="text-gray-700 mb-8">
            Eine genehmigte UK ETA ist ab dem Ausstellungsdatum 2 Jahre gultig oder bis zum Ablauf Ihres Reisepasses, je nachdem, was zuerst eintritt. Wahrend dieses Zeitraums konnen Sie mehrfach nach Grossbritannien einreisen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f8f6f3] p-6 text-center">
              <div className="text-3xl font-bold text-[#022444] mb-2">2 Jahre</div>
              <div className="text-gray-600">Maximale Gultigkeitsdauer</div>
            </div>
            <div className="bg-[#f8f6f3] p-6 text-center">
              <div className="text-3xl font-bold text-[#022444] mb-2">6 Monate</div>
              <div className="text-gray-600">Maximaler Aufenthalt pro Besuch</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Einreisebedingungen
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
            <li>Die ETA berechtigt zu mehrfacher Einreise innerhalb des Gultigkeitszeitraums</li>
            <li>Jeder einzelne Aufenthalt darf maximal 6 Monate dauern</li>
            <li>Die ETA erlaubt Tourismus, Geschaftsreisen und kurze Studienprogramme</li>
            <li>Arbeit ist mit einer ETA nicht gestattet - dafur benotigen Sie ein Arbeitsvisum</li>
            <li>Die Grenzbeamten konnen dennoch die Einreise verweigern, auch mit gultiger ETA</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wann muss die ETA erneuert werden?
          </h2>
          <p className="text-gray-700 mb-4">
            Eine neue ETA muss in folgenden Fallen beantragt werden:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Die bisherige ETA ist abgelaufen (nach 2 Jahren)</li>
            <li>Sie haben einen neuen Reisepass erhalten</li>
            <li>Ihre personlichen Daten haben sich geandert (Name, Staatsangehorigkeit)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unterschied zwischen Gultigkeitsdauer und Aufenthaltsdauer
          </h2>
          <p className="text-gray-700 mb-6">
            Die Gultigkeitsdauer der ETA (2 Jahre) gibt den Zeitraum an, in dem Sie die ETA fur die Einreise nutzen konnen. Die Aufenthaltsdauer (maximal 6 Monate) bezieht sich auf die maximale Dauer jedes einzelnen Besuchs. Sie konnen wahrend der 2-jahrigen Gultigkeit beliebig oft nach Grossbritannien reisen, solange jeder Aufenthalt 6 Monate nicht uberschreitet.
          </p>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Praxisbeispiel
            </h3>
            <p className="text-gray-700">
              Wenn Sie am 1. Mai 2025 eine ETA erhalten, ist diese bis zum 30. April 2027 gultig (vorausgesetzt, Ihr Reisepass lauft nicht vorher ab). In diesen 2 Jahren konnen Sie beliebig oft nach Grossbritannien reisen. Wenn Sie z.B. am 1. Juni 2025 einreisen, durfen Sie bis spatestens 30. November 2025 bleiben (6 Monate). Danach konnen Sie erneut einreisen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
