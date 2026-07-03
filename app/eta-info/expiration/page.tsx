import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Gültigkeit UK ETA 2026 - 2 Jahre und mehrfache Einreisen",
  description:
    "Das UK ETA ist 2 Jahre ab Genehmigung gültig. Mehrfache Einreisen nach Großbritannien möglich. Erfahren Sie, wann die Autorisierung erneuert werden muss.",
};

export default function Expiration() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/expiration.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Gültigkeitsdauer des UK ETA
          </h1>
          <p className="text-white/85 leading-relaxed">
            Die UK-ETA-Autorisierung ist <strong>2 Jahre</strong> ab dem
            Ausstellungsdatum gültig oder bis zum Ablauf des Reisepasses
            &mdash; je nachdem, was zuerst eintritt.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Gültigkeitsregeln</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Gültig für 2 Jahre ab dem Ausstellungsdatum</li>
            <li>Verfällt mit dem Reisepass (wenn der Reisepass früher abläuft)</li>
            <li>Erlaubt mehrfache Einreisen nach Großbritannien während der Gültigkeitsdauer</li>
            <li>Jeder Aufenthalt darf 6 Monate nicht überschreiten</li>
            <li>Das ETA ist an einen bestimmten Reisepass gebunden</li>
          </ul>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wann muss ein neuer Antrag gestellt werden?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ein neuer UK-ETA-Antrag muss in folgenden Fällen gestellt werden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Nach Ablauf von 2 Jahren seit der Ausstellung des ETA</li>
            <li>Nach Erhalt eines neuen Reisepasses</li>
            <li>Nach einer Namensänderung</li>
            <li>Nach einem Wechsel der Staatsangehörigkeit</li>
            <li>Nach einer Änderung des Geschlechts</li>
            <li>Nach einer Änderung von Umständen, die die Berechtigung beeinflussen</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kann ich mit einem bald ablaufenden ETA reisen?</h2>
          <p className="text-gray-600 leading-relaxed">
            Das UK ETA muss zum Zeitpunkt der Einreise nach Großbritannien
            gültig sein. Es muss nicht während des gesamten Aufenthalts gültig
            sein &mdash; entscheidend ist, dass es am Tag der Einreise gültig
            ist. Es wird jedoch empfohlen, einen neuen Antrag rechtzeitig im
            Voraus zu stellen.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie überprüfe ich das Gültigkeitsdatum?</h2>
          <p className="text-gray-600 leading-relaxed">
            Das Gültigkeitsdatum des UK ETA können Sie in der mobilen App
            &quot;UK ETA&quot; oder auf der Website GOV.UK überprüfen, indem Sie
            sich in das bei der Antragstellung erstellte Konto einloggen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Was passiert, wenn ich den Reisepass während der Gültigkeit des ETA wechsle?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Das ETA ist an einen bestimmten Reisepass gebunden. Wenn Sie einen
            neuen Reisepass erhalten (z. B. nach Ablauf des alten oder einer
            Namensänderung), müssen Sie einen neuen ETA-Antrag stellen und die
            Gebühr von &pound;20 erneut entrichten. Das alte ETA wird ungültig.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tipp:</strong> Es wird empfohlen, den UK-ETA-Antrag
            mindestens 72 Stunden vor der geplanten Reise zu stellen, um Zeit
            für die Bearbeitung des Antrags zu haben.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/status-check/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Antragsstatus prüfen &rarr;
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
              { label: "Informationen zum UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Gültigkeitsdauer" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
