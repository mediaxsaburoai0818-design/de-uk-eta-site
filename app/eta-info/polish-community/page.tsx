import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Deutsche in Großbritannien - Community und Settled Status",
  description:
    "Eine bedeutende deutsche Community lebt in Großbritannien. Informationen zur Gemeinschaft, zum Settled Status und zu Fragen rund um die UK ETA.",
};

export default function PolishCommunity() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/polish-community.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Deutsche in Großbritannien
          </h1>
          <p className="text-white/85 leading-relaxed">
            Großbritannien ist die Heimat einer großen deutschen Community.
            Viele <strong>deutsche Staatsbürger</strong>{" "}
            leben im Vereinigten Königreich, sei es zum Arbeiten, Studieren oder
            mit ihren Familien, und Deutsch gehört zu den häufig gesprochenen
            Fremdsprachen im Land.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">UK ETA und in Großbritannien lebende Deutsche</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Deutsche, die einen Daueraufenthaltsstatus (Settled Status oder
            Pre-Settled Status) im Rahmen des EU Settlement Scheme besitzen,
            <strong> benötigen keine UK ETA</strong>. Eine ETA ist ausschließlich
            für Personen erforderlich, die als Besucher nach Großbritannien
            reisen (Touristen, Geschäftsreisende, Personen im Transit).
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Wichtig:</strong> Wenn Sie einen Settled oder Pre-Settled
            Status haben, müssen Sie keinen UK-ETA-Antrag stellen. Ihr Status ist
            mit Ihrem Reisepass verknüpft und wird an der Grenze automatisch
            überprüft.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wichtige Zentren der Deutschen in Großbritannien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { city: "London", desc: "Größte deutsche Community, deutsche Schule und Kulturvereine" },
              { city: "Birmingham", desc: "Aktive deutsche Community mit zahlreichen Verbindungen" },
              { city: "Manchester", desc: "Wachsende Community, Universitäten und Unternehmen" },
              { city: "Edinburgh", desc: "Bedeutende deutsche Gemeinschaft in Schottland" },
              { city: "Leeds", desc: "Deutsche Studierende und Berufstätige" },
              { city: "Cambridge", desc: "Akademische deutsche Community" },
            ].map((item) => (
              <div key={item.city} className="border border-gray-200 rounded p-3 bg-gray-50">
                <h3 className="font-bold text-[#022444] text-sm">{item.city}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Nützliche Organisationen und Ressourcen</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://uk.diplo.de/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Deutsche Botschaft in London</a> &mdash; Konsularische Hilfe, Dokumente, Informationen
            </li>
            <li>
              <a href="https://www.dbis.org/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Deutsche Schule London</a> &mdash; Bildungsangebot für deutsche Familien
            </li>
            <li>
              <a href="https://london.diplo.de/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Deutsches Generalkonsulat &amp; Kulturangebote</a> &mdash; Kultur und Gemeinschaft in London
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Deutsche Vertretungen in Großbritannien</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Deutsche Botschaft in London</li>
            <li>Deutsches Generalkonsulat in Edinburgh</li>
            <li>Honorarkonsulate in mehreren britischen Städten</li>
            <li>Konsularischer Bürgerservice der Botschaft London</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Familie und Freunde in Großbritannien besuchen</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wenn Sie Familie oder Freunde besuchen möchten, die in Großbritannien
            leben, denken Sie daran, vor der Reise eine UK ETA einzuholen. Hier
            die wichtigsten Informationen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Stellen Sie den UK-ETA-Antrag mindestens 72 Stunden vor der Abreise</li>
            <li>Die Gebühr beträgt &pound;20 (etwa 23 &euro;)</li>
            <li>Sie dürfen sich pro Einreise bis zu 6 Monate im Vereinigten Königreich aufhalten</li>
            <li>Die ETA ist 2 Jahre gültig &mdash; mehrfache Einreisen</li>
            <li>Mit einer ETA dürfen Sie nicht arbeiten</li>
            <li>Sie benötigen keine Einladung von Ihrer Familie in Großbritannien</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">EU Settlement Scheme &mdash; Daueraufenthaltsstatus</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Deutsche, die vor dem 31. Dezember 2020 in Großbritannien gelebt
            haben, konnten im Rahmen des EU Settlement Scheme einen Settled oder
            Pre-Settled Status beantragen. Inhaber dieses Status:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Benötigen keine UK ETA</li>
            <li>Haben das Recht, im Vereinigten Königreich zu arbeiten und zu wohnen</li>
            <li>Haben Zugang zum NHS und zu Sozialleistungen</li>
            <li>Der Status ist mit dem Reisepass verknüpft</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/what-is-eta/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Was ist die UK ETA? &rarr;
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
              { label: "Deutsche in Großbritannien" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
