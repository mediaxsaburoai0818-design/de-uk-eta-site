import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UK-ETA-Gebühr 2026 £20 - Erhöhung von £16 und Zahlungsmethoden",
  description:
    "Die aktuelle UK-ETA-Gebühr 2026 beträgt £20 (Erhöhung von £16 ab dem 9. April 2025). Einmalige Zahlung, 2 Jahre gültig, keine versteckten Kosten.",
};

export default function Fee() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/fee.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Gebühren für den UK-ETA-Antrag
          </h1>
          <p className="text-white/85 leading-relaxed">
            Die offizielle Gebühr für den UK-ETA-Antrag beträgt <strong>&pound;20</strong> (etwa 23 €).
            Nachfolgend finden Sie ausführliche Informationen zu den Kosten und Zahlungsmethoden.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Aufbau der Gebühr</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Bestandteil</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Betrag</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Beschreibung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Gebühr für den ETA-Antrag</td>
                  <td className="p-3 border-b border-gray-100">&pound;20</td>
                  <td className="p-3 border-b border-gray-100">Gebühr für die Bearbeitung und Erteilung der Genehmigung</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-3">Gesamt</td>
                  <td className="p-3">&pound;20</td>
                  <td className="p-3">Gesamtgebühr für den Antrag</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm mt-4 text-gray-700">
            <strong>Hinweis:</strong> Die Gebühr von &pound;20 wird bei der
            Antragstellung erhoben und ist nicht erstattungsfähig, selbst wenn
            der Antrag abgelehnt wird.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Umrechnung in Euro</h2>
          <p className="text-gray-600 leading-relaxed">
            &pound;20 entsprechen etwa 23 € (abhängig vom aktuellen Wechselkurs).
            Der genaue Betrag in Euro hängt vom Kurs der kartenausgebenden Bank
            ab. Zusätzlich kann eine Gebühr für die Fremdwährungstransaktion
            anfallen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Akzeptierte Zahlungsmethoden</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Visa-Kreditkarte</li>
            <li>Mastercard-Kreditkarte</li>
            <li>Debitkarte (mit Visa-/Mastercard-Logo)</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Ist die ETA für bestimmte Personen kostenlos?</h2>
          <p className="text-gray-600 leading-relaxed">
            Nein. Die Gebühr von &pound;20 gilt für alle Antragsteller,
            unabhängig von der Staatsangehörigkeit. Es gibt keine Befreiung von
            der Gebühr. Auch Kinder müssen eine eigene ETA besitzen und eine
            gesonderte Gebühr entrichten.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kostenvergleich: offizielle Website vs. Vermittler</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Quelle</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">Kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Offizielle Website GOV.UK / App</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-green-700">&pound;20</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Websites von Vermittlern</td>
                  <td className="p-3 border-b border-gray-100 text-red-600">&pound;50 &mdash; &pound;150+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm mt-4 text-gray-600">
            <strong>Warnung:</strong> Viele Vermittler betreiben Websites, die
            wie die offiziellen UK-ETA-Seiten aussehen. Sie verlangen überhöhte
            Gebühren für dieselbe Leistung. Stellen Sie Ihren Antrag stets direkt
            auf{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              className="text-[#022444] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK
            </a>{" "}
            oder über die offizielle App.
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
              { label: "Gebühren" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
