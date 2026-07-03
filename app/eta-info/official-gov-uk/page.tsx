import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Offizielle GOV.UK-Seite für UK ETA - gefälschte Seiten erkennen",
  description:
    "Nur die GOV.UK-Seite ist die offizielle Quelle für den UK-ETA-Antrag. So erkennen Sie gefälschte Seiten und vermeiden Betrug mit zusätzlichen Gebühren.",
};

export default function OfficialGovUK() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/official-gov-uk.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUR UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Offizielle GOV.UK-Seite für den UK-ETA-Antrag
          </h1>
          <p className="text-white/85 leading-relaxed">
            Den UK-ETA-Antrag können Sie auf der offiziellen Seite der
            britischen Regierung oder über die offizielle mobile App stellen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Offizielle Adresse der Seite</h2>
          <div className="bg-white border border-gray-200 rounded p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">Offizielle UK-ETA-Seite:</p>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-[#022444] underline break-all"
            >
              www.gov.uk/eta
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Die Domain .gov.uk kennzeichnet die offizielle Seite der
              britischen Regierung
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie erkennt man die offizielle Seite?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Die URL enthält <strong>gov.uk</strong> (offizielle UK-Regierungsdomain)</li>
            <li>Die Seite wird vom Home Office betrieben</li>
            <li>Die Gebühr beträgt genau &pound;20</li>
            <li>Die Seite hat das charakteristische schwarz-weiße GOV.UK-Design</li>
            <li>Es wird keine Gebühr für eine &quot;beschleunigte&quot; Bearbeitung verlangt</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie erkennt man eine gefälschte Seite?</h2>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <p className="font-bold mb-2">Warnzeichen:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Die URL enthält nicht gov.uk</li>
              <li>Eine Gebühr, die deutlich höher als &pound;20 ist</li>
              <li>Das Versprechen einer &quot;garantierten Genehmigung&quot;</li>
              <li>Das Angebot einer &quot;beschleunigten Bearbeitung&quot;</li>
              <li>Aggressive Werbung oder aufdringliche Pop-ups</li>
              <li>Kein GOV.UK-Logo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Offizielle mobile App</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Den UK-ETA-Antrag können Sie auch über die offizielle mobile App
            &quot;UK ETA&quot; stellen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>iOS:</strong> Suchen Sie &quot;UK ETA&quot; im App Store (Anbieter: Home Office)</li>
            <li><strong>Android:</strong> Suchen Sie &quot;UK ETA&quot; bei Google Play (Anbieter: Home Office)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Weitere nützliche Regierungsseiten</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/check-uk-visa</a> &mdash; Visumanforderungen für das Vereinigte Königreich prüfen
            </li>
            <li>
              <a href="https://www.gov.uk/standard-visitor" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">gov.uk/standard-visitor</a> &mdash; Informationen zum Besuchervisum
            </li>
            <li>
              <a href="https://www.gov.uk/government/world/organisations/british-embassy-berlin.de" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Britische Botschaft in Berlin</a>
            </li>
            <li>
              <a href="https://uk.diplo.de/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">Deutsche Botschaft in London</a>
            </li>
          </ul>
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
              { label: "Offizielle GOV.UK-Seite" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
