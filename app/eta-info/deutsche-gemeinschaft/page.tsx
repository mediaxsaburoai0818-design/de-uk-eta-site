import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutsche in Grossbritannien | Gemeinschaft und Informationen",
  description: "Informationen fur Deutsche in Grossbritannien. Statistiken, Gemeinschaften und praktische Tipps fur deutsche Staatsburger im Vereinigten Konigreich.",
};

export default function DeutscheGemeinschaftPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Deutsche in Grossbritannien
          </h1>
          <p className="text-gray-300">Die deutsch-britische Gemeinschaft und nutzliche Informationen</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Die deutsche Gemeinschaft in Grossbritannien
          </h2>
          <p className="text-gray-700 mb-8">
            Grossbritannien ist seit Jahrzehnten ein beliebtes Ziel fur Deutsche - ob zum Arbeiten, Studieren oder Leben. Rund 300.000 Deutsche haben ihren Wohnsitz im Vereinigten Konigreich, und jahrlich reisen etwa 3,5 Millionen deutsche Staatsburger nach Grossbritannien.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#f8f6f3] p-6 text-center">
              <div className="text-3xl font-bold text-[#022444] mb-2">300.000</div>
              <div className="text-sm text-gray-600">Deutsche leben in UK</div>
            </div>
            <div className="bg-[#f8f6f3] p-6 text-center">
              <div className="text-3xl font-bold text-[#022444] mb-2">3,5 Mio.</div>
              <div className="text-sm text-gray-600">Jahrliche Besucher</div>
            </div>
            <div className="bg-[#f8f6f3] p-6 text-center">
              <div className="text-3xl font-bold text-[#022444] mb-2">April 2025</div>
              <div className="text-sm text-gray-600">ETA-Pflicht beginnt</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wo leben Deutsche in Grossbritannien?
          </h2>
          <p className="text-gray-700 mb-4">
            Die meisten Deutschen in Grossbritannien leben in den folgenden Regionen:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li><strong>London und Umgebung:</strong> Die grosste deutsche Gemeinschaft. Besonders in den Stadtteilen Richmond, Wimbledon und South Kensington sind viele Deutsche zu Hause.</li>
            <li><strong>Sudostengland:</strong> Kent, Surrey und Sussex sind beliebte Wohngebiete fur deutsche Familien.</li>
            <li><strong>Manchester und Nordwestengland:</strong> Wachsende deutsche Gemeinschaft, besonders im Finanz- und Technologiesektor.</li>
            <li><strong>Edinburgh und Schottland:</strong> Beliebt bei deutschen Studenten und Akademikern.</li>
            <li><strong>Bristol und Sudwestengland:</strong> Zunehmend beliebt fur deutsche Kreative und Unternehmer.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Deutsch-britische Beziehungen
          </h2>
          <p className="text-gray-700 mb-6">
            Deutschland und Grossbritannien verbinden enge wirtschaftliche und kulturelle Beziehungen. Deutschland ist einer der wichtigsten Handelspartner Grossbritanniens. Trotz des Brexits bleiben die Beziehungen zwischen beiden Landern stark. Der deutsch-britische Handel umfasst Automobilindustrie, Finanzdienstleistungen, Technologie und Tourismus.
          </p>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Grunde fur Reisen nach Grossbritannien
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-[#f8f6f3] p-5">
              <h3 className="font-semibold text-[#022444] mb-1">Tourismus</h3>
              <p className="text-gray-700 text-sm">London, Edinburgh, die Cotswolds, Stonehenge und die schottischen Highlands gehoren zu den beliebtesten Reisezielen fur deutsche Touristen.</p>
            </div>
            <div className="bg-[#f8f6f3] p-5">
              <h3 className="font-semibold text-[#022444] mb-1">Geschaftsreisen</h3>
              <p className="text-gray-700 text-sm">London ist eines der wichtigsten Finanzzentren der Welt. Viele deutsche Unternehmen haben Niederlassungen in Grossbritannien.</p>
            </div>
            <div className="bg-[#f8f6f3] p-5">
              <h3 className="font-semibold text-[#022444] mb-1">Studium</h3>
              <p className="text-gray-700 text-sm">Universitaten wie Oxford, Cambridge, Imperial College und die London School of Economics ziehen jahrlich Tausende deutsche Studenten an.</p>
            </div>
            <div className="bg-[#f8f6f3] p-5">
              <h3 className="font-semibold text-[#022444] mb-1">Familie und Freunde</h3>
              <p className="text-gray-700 text-sm">Viele Deutsche besuchen regelmasig Familienangehorige und Freunde, die in Grossbritannien leben.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Auswirkungen der ETA auf Deutsche
          </h2>
          <p className="text-gray-700 mb-6">
            Ab April 2025 mussen alle deutschen Staatsburger, die nach Grossbritannien reisen, eine ETA beantragen. Dies betrifft sowohl Touristen als auch Geschaftsreisende und Besucher. Die ETA ist eine einfache und kostengungstige Formalitat, die online in wenigen Minuten erledigt werden kann.
          </p>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nutzliche Ressourcen fur Deutsche in UK
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li><strong>Deutsche Botschaft London:</strong> uk.diplo.de</li>
              <li><strong>Deutsch-Britische Handelskammer:</strong> ahk.de/grossbritannien</li>
              <li><strong>German School London:</strong> dslondon.org.uk</li>
              <li><strong>The German-British Forum:</strong> germanbrit.com</li>
              <li><strong>Deutsche Gemeinden:</strong> Kirchengemeinden in London, Manchester und Edinburgh</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
