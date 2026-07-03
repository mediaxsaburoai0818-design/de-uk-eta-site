import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Antragsstatus des UK ETA prüfen 2026 - Bedeutung der Status",
  description:
    "UK-ETA-Status prüfen: offizielles Tool gov.uk/check-eta, Entscheidung per E-Mail meist innerhalb eines Tages (max. 3 Werktage), 16-stellige Referenznummer und was bei Ablehnung gilt.",
};

export default function StatusCheck() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/status-check.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATIONEN ZUM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Antragsstatus des UK ETA prüfen
          </h1>
          <p className="text-white/85 leading-relaxed">
            Die Entscheidung über Ihren UK-ETA-Antrag erhalten Sie per E-Mail
            von UK Visas and Immigration (UKVI) &mdash; meist innerhalb eines
            Tages. Ob Sie bereits eine gültige ETA besitzen, prüfen Sie mit dem
            offiziellen Tool auf GOV.UK. Hier erfahren Sie, welcher Weg wann
            der richtige ist.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zwei Wege &mdash; und was sie jeweils zeigen</h2>
          <p className="text-gray-600 mb-6">
            Viele Reisende suchen nach einem &quot;Status-Tracker&quot; für den
            laufenden Antrag. Wichtig zu wissen: Das offizielle Prüf-Tool und
            die Entscheidungs-E-Mail erfüllen unterschiedliche Aufgaben.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-1">
                1. Offizielles Prüf-Tool: gov.uk/check-eta
              </h3>
              <p className="text-sm text-gray-600">
                Über{" "}
                <a href="https://www.gov.uk/check-eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">
                  gov.uk/check-eta
                </a>{" "}
                können Sie prüfen, <strong>ob Sie eine ETA besitzen und wie
                lange sie gültig ist</strong>. Sie benötigen dafür den
                Reisepass, mit dem Sie den Antrag gestellt haben. Das Tool
                zeigt jedoch <strong>nicht den Bearbeitungsstand</strong> eines
                gerade laufenden Antrags an &mdash; ein Antrag in Prüfung ist
                dort noch nicht sichtbar.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-1">
                2. Entscheidung per E-Mail von UKVI
              </h3>
              <p className="text-sm text-gray-600">
                Das Ergebnis Ihres Antrags (Genehmigung oder Ablehnung) teilt
                Ihnen UK Visas and Immigration <strong>per E-Mail</strong> mit.
                Diese E-Mail ist der maßgebliche Bescheid &mdash; behalten Sie
                daher das Postfach im Blick, mit dem Sie den Antrag gestellt
                haben.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wie lange dauert die Entscheidung?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              Die meisten Antragsteller erhalten die Entscheidung{" "}
              <strong>innerhalb eines Tages</strong>, spätestens jedoch nach{" "}
              <strong>3 Werktagen</strong> (Montag bis Freitag)
            </li>
            <li>
              Bei Anträgen über die offizielle <strong>UK ETA App</strong>{" "}
              fällt die Entscheidung laut Home Office in den meisten Fällen{" "}
              <strong>bereits innerhalb weniger Minuten</strong> automatisch
            </li>
            <li>
              Sind mehr als 3 Werktage vergangen: zuerst den{" "}
              <strong>Spam-Ordner prüfen</strong>, danach UKVI kontaktieren
              (siehe unten)
            </li>
            <li>
              Ein neuer Antrag beschleunigt die Bearbeitung nicht &mdash;
              stellen Sie keinen Doppelantrag
            </li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Wichtig:</strong> Reisen Sie <strong>nicht</strong> ins
            Vereinigte Königreich, bevor Sie die E-Mail mit der Genehmigung
            erhalten haben. GOV.UK stellt ausdrücklich klar, dass die Reise
            erst nach Erhalt der Entscheidung angetreten werden darf.
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">
            Die 16-stellige Referenznummer &mdash; und was tun, wenn keine E-Mail kommt?
          </h2>
          <p className="text-gray-600 mb-4">
            In der Entscheidungs-E-Mail steht Ihre{" "}
            <strong>16-stellige ETA-Referenznummer</strong>. Bewahren Sie diese
            E-Mail auf &mdash; die Nummer identifiziert Ihre ETA bei Rückfragen
            an UKVI.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn nach 3 Werktagen keine E-Mail angekommen ist, gehen Sie in
            dieser Reihenfolge vor:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              <strong>Spam- bzw. Junk-Ordner prüfen</strong> &mdash; die
              UKVI-Mail landet dort erfahrungsgemäß am häufigsten
            </li>
            <li>
              <strong>UKVI über den offiziellen Webchat kontaktieren:</strong>{" "}
              Für ETA-Anfragen bietet UKVI{" "}
              <strong>ausschließlich einen Webchat</strong> an &mdash; eine
              telefonische Hotline für ETA-Fragen gibt es nicht. Der Webchat
              ist erreichbar unter{" "}
              <a
                href="https://ukvi-eta-support-webchat.homeoffice.gov.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#022444] underline break-all"
              >
                ukvi-eta-support-webchat.homeoffice.gov.uk
              </a>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Was bedeutet das Ergebnis?</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-green-700 mb-1">Genehmigt</h3>
              <p className="text-sm text-gray-600">
                Ihre ETA ist <strong>elektronisch mit dem Reisepass
                verknüpft</strong>, mit dem Sie den Antrag gestellt haben. Ein
                physisches Dokument gibt es nicht &mdash; bei der Einreise
                genügt die Vorlage des Reisepasses. Die ETA gilt{" "}
                <strong>2 Jahre</strong> oder bis zum Ablauf des Reisepasses,
                je nachdem, was früher eintritt. Beachten Sie: Die ETA ist eine
                Reisegenehmigung, <strong>garantiert aber nicht die
                Einreise</strong> &mdash; die endgültige Entscheidung trifft
                die Grenzkontrolle.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-yellow-600 mb-1">Noch in Bearbeitung</h3>
              <p className="text-sm text-gray-600">
                Solange keine E-Mail vorliegt, läuft die Prüfung. Warten Sie
                bis zu 3 Werktage ab und prüfen Sie den Spam-Ordner. Treten Sie
                die Reise <strong>nicht ohne die Genehmigungs-E-Mail</strong>{" "}
                an und stellen Sie keinen zweiten Antrag.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-red-600 mb-1">Abgelehnt</h3>
              <p className="text-sm text-gray-600">
                Gegen die Ablehnung einer ETA ist{" "}
                <strong>kein Widerspruch (appeal) möglich</strong>. Wer
                dennoch ins Vereinigte Königreich reisen möchte, muss ein{" "}
                <strong>Visum beantragen</strong> &mdash; das ist der einzige
                offizielle Weg. Die Antragsgebühr von £20 wird{" "}
                <strong>nicht erstattet</strong>.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Ausführliche Informationen zu den Optionen nach einer Ablehnung
            finden Sie auf unserer Seite{" "}
            <Link href="/eta-info/eta-abgelehnt/" className="text-[#022444] underline">
              UK ETA abgelehnt: was nun?
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kostenhinweis: die offizielle Gebühr beträgt £20</h2>
          <p className="text-gray-600 mb-4">
            Der UK-ETA-Antrag kostet auf den offiziellen Kanälen (GOV.UK und
            UK ETA App) <strong>£20 pro Person</strong>. Wenn Ihnen beim
            &quot;Status-Check&quot; oder bei der Antragstellung deutlich
            höhere Beträge in Rechnung gestellt wurden, haben Sie
            höchstwahrscheinlich über einen{" "}
            <strong>Vermittler oder eine inoffizielle Website</strong>{" "}
            gebucht &mdash; nicht über die britische Regierung. Prüfen und
            beantragen Sie die ETA daher immer direkt über GOV.UK oder die
            offizielle App.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tipp:</strong> Bewahren Sie die UKVI-E-Mail mit der
            16-stelligen Referenznummer auf. Sie benötigen sie für jede
            Kontaktaufnahme mit UK Visas and Immigration.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/expiration/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Gültigkeitsdauer des UK ETA &rarr;
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

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500">
          <p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK / Home Office)</p>
          <ul className="space-y-1">
            <li>
              <a href="https://www.gov.uk/check-eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">
                https://www.gov.uk/check-eta
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">
                https://www.gov.uk/eta/apply
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/contact-ukvi-inside-outside-uk" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">
                https://www.gov.uk/contact-ukvi-inside-outside-uk
              </a>
            </li>
            <li>
              <a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline break-all">
                https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/
              </a>
            </li>
          </ul>
          <p className="mt-4">Stand: 3. Juli 2026</p>
        </div>
      </section>

      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Informationen zum UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Statusprüfung" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
