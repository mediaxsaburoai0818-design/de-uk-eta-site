import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ UK ETA 2026 - häufig gestellte Fragen zu Antrag und Gebühren",
  description:
    "Antworten auf die häufigsten Fragen zur UK ETA 2026: Verfahren, Gebühr £20, Gültigkeit 2 Jahre, Ablehnung des Antrags und Ausnahmen.",
};

const faqs = [
  {
    q: "Was ist die UK ETA und wozu dient sie?",
    a: "Die UK ETA (Electronic Travel Authorisation) ist eine elektronische Reisegenehmigung für das Vereinigte Königreich. Seit dem 2. April 2025 müssen EU-Bürger, einschließlich deutscher Staatsbürger, vor einer Reise ins Vereinigte Königreich zu touristischen, geschäftlichen oder Transitzwecken eine ETA einholen.",
  },
  {
    q: "Wie viel kostet der UK-ETA-Antrag?",
    a: "Die Geb\u00fchr f\u00fcr die UK ETA betr\u00e4gt \u00a320 (etwa 23 \u20ac). Die Geb\u00fchr wird bei der Antragstellung erhoben und ist nicht erstattungsf\u00e4hig. Achten Sie auf gef\u00e4lschte Websites, die \u00a350-150 f\u00fcr dieselbe Leistung verlangen.",
  },
  {
    q: "Wie lange dauert die Bearbeitung des UK-ETA-Antrags?",
    a: "Die meisten Anträge werden innerhalb weniger Stunden bearbeitet. In einigen Fällen kann die Bearbeitung bis zu 72 Stunden dauern. Es wird empfohlen, den Antrag mindestens 72 Stunden vor der geplanten Reise zu stellen.",
  },
  {
    q: "Wie lange ist die UK-ETA-Genehmigung gültig?",
    a: "Die UK ETA ist 2 Jahre ab dem Ausstellungsdatum gültig oder bis zum Ablauf des Reisepasses (je nachdem, was zuerst eintritt). In diesem Zeitraum kann man mehrfach ins Vereinigte Königreich einreisen, jeder Aufenthalt bis zu 6 Monaten.",
  },
  {
    q: "Was ist der Unterschied zwischen einer UK ETA und einem Visum?",
    a: "Die UK ETA ist eine vereinfachte elektronische Genehmigung f\u00fcr Kurzaufenthalte (bis zu 6 Monate). Kosten: \u00a320, Antrag online. Ein britisches Visum erfordert einen Besuch in einem Visumzentrum, kostet ab \u00a3100 und erm\u00f6glicht l\u00e4ngere Aufenthalte oder die Aufnahme einer Arbeit.",
  },
  {
    q: "Gilt die UK-ETA-Pflicht für Deutschland?",
    a: "Ja. Seit dem 2. April 2025 müssen deutsche Staatsbürger (und alle EU-Bürger) vor einer Reise ins Vereinigte Königreich eine UK ETA besitzen. Dies gilt für touristische, geschäftliche und Transitaufenthalte.",
  },
  {
    q: "Was passiert, wenn mein UK-ETA-Antrag abgelehnt wird?",
    a: "Bei einer Ablehnung des UK-ETA-Antrags erhalten Sie eine E-Mail mit den Gr\u00fcnden f\u00fcr die Ablehnung. Sie k\u00f6nnen Widerspruch einlegen (administrative review) oder ein Touristenvisum (Standard Visitor visa) beantragen. Die Geb\u00fchr von \u00a320 ist nicht erstattungsf\u00e4hig.",
  },
  {
    q: "Benötige ich eine UK ETA für den Transit durch das Vereinigte Königreich?",
    a: "Ja, die UK ETA ist auch beim Transit durch das Vereinigte Königreich erforderlich, selbst wenn Sie den Transitbereich am Flughafen nicht verlassen. Dies gilt z. B. für Umstiege in Heathrow.",
  },
  {
    q: "Welche Dokumente werden für den UK-ETA-Antrag benötigt?",
    a: "Sie benötigen einen gültigen biometrischen Reisepass, ein Smartphone mit Kamera (zum Scannen des Reisepasses und für ein Selfie), eine E-Mail-Adresse sowie eine Zahlungskarte (Visa/Mastercard) oder Apple Pay/Google Pay.",
  },
  {
    q: "Kann ich den UK-ETA-Antrag über das Smartphone stellen?",
    a: "Ja, der UK-ETA-Antrag kann über die offizielle mobile App 'UK ETA' gestellt werden, die für iOS und Android verfügbar ist. Dies ist die empfohlene Methode zur Antragstellung, da die App das Scannen des Reisepasses per NFC ermöglicht.",
  },
  {
    q: "Garantiert die UK ETA die Einreise ins Vereinigte Königreich?",
    a: "Nein. Die UK ETA ist lediglich eine Reisegenehmigung. Die endgültige Entscheidung über die Einreise trifft ein Beamter der UK Border Force bei der Ankunft. Er kann die Einreise auch mit einer genehmigten ETA verweigern.",
  },
  {
    q: "Darf ich mit einer UK ETA im Vereinigten Königreich arbeiten?",
    a: "Nein. Die UK ETA berechtigt nicht zur Aufnahme einer Arbeit im Vereinigten Königreich. Für eine Beschäftigung ist ein entsprechendes Arbeitsvisum erforderlich (z. B. Skilled Worker visa). Die ETA ist ausschließlich für touristische, geschäftliche und Transitaufenthalte bestimmt.",
  },
  {
    q: "Benötigen Kinder eine UK ETA?",
    a: "Ja, jedes Kind, das ins Vereinigte Königreich reist, muss unabhängig vom Alter eine eigene UK ETA besitzen. Ein separater biometrischer Reisepass ist erforderlich. Den Antrag im Namen des Kindes kann ein Elternteil oder Erziehungsberechtigter stellen.",
  },
  {
    q: "Benötigen deutsche Staatsbürger mit settled status eine UK ETA?",
    a: "Nein. Deutsche Staatsbürger mit settled oder pre-settled status im Rahmen des EU Settlement Scheme benötigen keine UK ETA. Ihr Status ist mit dem Reisepass verknüpft und wird an der Grenze automatisch überprüft.",
  },
  {
    q: "Wo kann ich die UK ETA beantragen?",
    a: "Der UK-ETA-Antrag kann ausschließlich auf der offiziellen Website GOV.UK (gov.uk/eta) oder über die offizielle mobile App 'UK ETA' gestellt werden. Nutzen Sie keine Vermittler, die überhöhte Gebühren verlangen.",
  },
];

export default function FAQ() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/faq.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">FAQ</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="text-white/85 leading-relaxed">
            Antworten auf die häufigsten Fragen rund um das UK-ETA-System und Reisen
            ins Vereinigte Königreich.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(0, 5).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(5, 10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#022444] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-gray-50 border border-gray-200 rounded p-6">
            <h2 className="font-bold text-[#022444] mb-2">
              Keine Antwort gefunden?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Kontaktieren Sie uns, und wir beantworten Ihre Frage.
            </p>
            <Link
              href="/site-info/contact/"
              className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
            >
              Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ label: "FAQ" }]} />
        </div>
      </section>
    </div>
  );
}
