import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transit durch das Vereinigte Königreich — brauchen Sie 2026 ein UK ETA?",
  description:
    "Ist beim Transit durch das Vereinigte Königreich ein UK ETA erforderlich? Regeln für Anschlussflüge und Ausnahmen für die Transitzone von Flughäfen.",
};

export default function TransitPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Transit durch Grossbritannien
          </h1>
          <p className="text-gray-300">ETA-Anforderungen fur die Durchreise</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Benotigt man eine ETA fur den Transit?
          </h2>
          <p className="text-gray-700 mb-8">
            Ja, auch fur den Transit durch Grossbritannien ist eine UK ETA erforderlich. Dies gilt sowohl fur den Flughafen-Transit als auch fur die Durchreise durch das Land. Selbst wenn Sie Grossbritannien nur als Zwischenstopp auf dem Weg zu einem anderen Ziel nutzen, benotigen Sie eine gultige ETA.
          </p>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Arten des Transits
          </h2>
          <div className="space-y-6 mb-12">
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Airside Transit (Transitbereich)</h3>
              <p className="text-gray-700 text-sm">
                Wenn Sie den Transitbereich des Flughafens nicht verlassen und innerhalb von 24 Stunden weiterfliegen, benotigen Sie ebenfalls eine ETA. Dies unterscheidet sich von vielen anderen Landern, in denen ein Airside Transit ohne Genehmigung moglich ist.
              </p>
            </div>
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Landside Transit (mit Grenzkontrolle)</h3>
              <p className="text-gray-700 text-sm">
                Wenn Sie den Transitbereich verlassen, um z.B. das Gepack abzuholen oder den Terminal zu wechseln, mussen Sie die britische Grenzkontrolle passieren. Hierfur ist eine ETA zwingend erforderlich.
              </p>
            </div>
            <div className="bg-[#f8f6f3] p-6">
              <h3 className="text-lg font-semibold text-[#022444] mb-2">Durchreise per Zug oder Fahre</h3>
              <p className="text-gray-700 text-sm">
                Wenn Sie mit dem Eurostar durch den Eurotunnel fahren oder eine Fahre uber Grossbritannien nehmen, benotigen Sie ebenfalls eine ETA, sofern Sie britisches Territorium betreten.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Haufige Transit-Szenarien fur deutsche Reisende
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#022444] text-white text-left">
                  <th className="p-3 font-semibold">Route</th>
                  <th className="p-3 font-semibold">ETA erforderlich?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Frankfurt - London Heathrow - New York</td>
                  <td className="p-3 text-gray-700">Ja</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3">Berlin - London Gatwick - Karibik</td>
                  <td className="p-3 text-gray-700">Ja</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Munchen - Dublin (uber London)</td>
                  <td className="p-3 text-gray-700">Ja</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3">Dusseldorf - Paris (Eurostar)</td>
                  <td className="p-3 text-gray-700">Nein (kein UK-Territorium)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tipps fur Transit-Reisende
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
            <li>Beantragen Sie die ETA mindestens 72 Stunden vor Ihrem Transit</li>
            <li>Informieren Sie sich bei Ihrer Fluggesellschaft, ob ein Transit uber UK geplant ist</li>
            <li>Prufen Sie alternative Routen, die keinen UK-Transit erfordern</li>
            <li>Beachten Sie, dass fur den Transit dieselbe ETA wie fur einen regularen Besuch gilt</li>
            <li>Die Transit-ETA berechtigt auch zu einem Aufenthalt in Grossbritannien</li>
          </ul>

          <div className="bg-[#f8f6f3] p-6">
            <h3 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wichtiger Hinweis
            </h3>
            <p className="text-gray-700">
              Wenn Sie keinen gultigen ETA besitzen, kann Ihnen das Boarding fur Fluge mit Transit in Grossbritannien verweigert werden. Fluggesellschaften sind verpflichtet, die ETA vor dem Boarding zu uberprufen. Stellen Sie sicher, dass Ihre ETA genehmigt ist, bevor Sie Ihre Reise antreten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
