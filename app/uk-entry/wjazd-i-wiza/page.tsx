import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Einreise nach Großbritannien und Visa - Leitfaden 2026",
  description:
    "Einreisebestimmungen für Großbritannien: UK ETA für Aufenthalte bis zu 6 Monaten, wann ein Visum nötig ist, Grenzkontrolle (eGate), erforderliche Dokumente und Reisen mit Kindern.",
  alternates: { canonical: "https://eta-de.com/uk-entry/wjazd-i-wiza/" },
};

export default function VisaEntry() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>EINREISE NACH UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Einreise nach Großbritannien und Visa
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Ein vollständiger Leitfaden zu den Einreisebestimmungen für Großbritannien: wann eine UK ETA ausreicht, wann ein Visum erforderlich ist, wie die Grenzkontrolle abläuft und welche Dokumente Sie vorbereiten sollten.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <article className="max-w-4xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="heading-band mb-4">ETA oder Visum? Aufenthalte bis zu 6 Monaten</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Für touristische und geschäftliche Zwecke, für Familienbesuche oder zum Transit benötigen EU-Bürger bei einem Aufenthalt von bis zu 6 Monaten kein Visum - es genügt eine <strong>UK ETA</strong> (Electronic Travel Authorisation). Der Antrag wird online gestellt und die Bearbeitung dauert in der Regel bis zu 72 Stunden, weshalb es sich lohnt, ihn einige Tage vor der Reise einzureichen.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Die ETA kostet £20, ist 2 Jahre gültig und erlaubt mehrfache Einreisen. Mehr dazu im Abschnitt{" "}
              <Link href="/eta-info/what-is-eta/" className="content-link">Was ist die UK ETA?</Link>
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Wann ein Visum erforderlich ist</h2>
            <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-light)" }}>
              Ein britisches Visum ist bei Aufenthalten von mehr als 6 Monaten sowie bei Reisen zum Zweck eines langfristigen Studiums, zur Arbeit oder zur Niederlassung erforderlich. Die häufigsten Arten sind:
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Studentenvisum</strong> - langfristiges Studium (in der Regel 2 bis 5 Jahre, je nach Studiengang).</li>
              <li>&bull; <strong>Arbeitsvisum</strong> - Arbeit in UK; die Art hängt vom Angebot und den Qualifikationen ab.</li>
              <li>&bull; <strong>Familienvisum</strong> - Nachzug zu einem in UK lebenden Familienmitglied.</li>
              <li>&bull; <strong>Youth Mobility Scheme</strong> - für junge Menschen aus ausgewählten Ländern (Aufenthalt bis zu 2 Jahren).</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Grenzkontrolle: eGate und Schalter mit Beamten</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              An den Flughäfen in UK erfolgt die Kontrolle über automatische <strong>eGate</strong>-Schranken (auf Basis des biometrischen Reisepasses) oder am Schalter eines Einwanderungsbeamten. Das eGate beschleunigt die Abfertigung; bei Fragen zum Reisezweck ist ein Gespräch mit einem Beamten möglich.
            </p>
          </div>

          <div>
            <h2 className="heading-band mb-4">Erforderliche Dokumente</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-text-light)" }}>
              <li>&bull; <strong>Reisepass</strong>, der für die gesamte Dauer des Aufenthalts gültig ist (ein Personalausweis wird seit Oktober 2021 nicht mehr akzeptiert).</li>
              <li>&bull; <strong>UK ETA</strong>, die mit diesem Reisepass verknüpft ist (oder ein entsprechendes Visum bei längerem Aufenthalt).</li>
              <li>&bull; Zusätzliche Unterlagen: Nachweis der Unterkunft, des Rückflugtickets und der finanziellen Mittel für den Aufenthalt können überprüft werden.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-band mb-4">Reisen mit Kindern (Personen unter 18 Jahren)</h2>
            <p className="leading-relaxed" style={{ color: "var(--color-text-light)" }}>
              Jede Person, unabhängig vom Alter, muss eine eigene UK ETA besitzen - auch Säuglinge und Kinder. Kinder, die ohne ein Elternteil oder beide Elternteile reisen, können um ein Dokument gebeten werden, das die Zustimmung des Erziehungsberechtigten zur Reise bestätigt. Es empfiehlt sich, eine Geburtsurkunde oder eine schriftliche Einverständniserklärung (in englischer Sprache) mitzuführen.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Quelle der amtlichen Informationen:{" "}
            <a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="content-link">GOV.UK - Check if you need a UK visa</a>
          </p>

          <Breadcrumb items={[{ label: "Einreise nach Großbritannien und Visa" }]} />
        </article>
      </section>
    </div>
  );
}
