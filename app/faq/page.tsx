import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Haufig gestellte Fragen zur UK ETA",
  description: "Antworten auf die 15 haufigsten Fragen zur UK ETA fur deutsche Staatsburger. Alles uber Antrag, Kosten, Gultigkeit und mehr.",
};

const faqs = [
  {
    q: "Was ist die UK ETA?",
    a: "Die UK ETA (Electronic Travel Authorisation) ist eine digitale Reisegenehmigung, die ab April 2025 fur visumfreie Reisende aus bestimmten Landern, einschliesslich Deutschland, fur die Einreise nach Grossbritannien erforderlich ist. Sie ist vergleichbar mit dem ESTA-System der USA."
  },
  {
    q: "Benotigen deutsche Staatsburger eine UK ETA?",
    a: "Ja, ab April 2025 benotigen alle deutschen Staatsburger eine UK ETA fur die Einreise nach Grossbritannien. Dies gilt fur Tourismus, Geschaftsreisen, Kurzstudium und Transit."
  },
  {
    q: "Wie viel kostet die UK ETA?",
    a: "Die UK ETA kostet zwischen 10 und 20 GBP (ca. 12-23 EUR) pro Person. Die Gebuhr wird bei der Antragstellung erhoben und ist nicht erstattungsfahig."
  },
  {
    q: "Wie lange ist die UK ETA gultig?",
    a: "Die UK ETA ist 2 Jahre ab dem Ausstellungsdatum gultig oder bis zum Ablauf Ihres Reisepasses, je nachdem, was zuerst eintritt. Wahrend dieses Zeitraums konnen Sie mehrfach einreisen."
  },
  {
    q: "Wie lange dauert die Bearbeitung?",
    a: "Die meisten Antrage werden innerhalb weniger Stunden bearbeitet. In einigen Fallen kann die Bearbeitung jedoch bis zu 72 Stunden (3 Werktage) dauern. Wir empfehlen, den Antrag mindestens 3 Tage vor der geplanten Reise zu stellen."
  },
  {
    q: "Welche Dokumente benotige ich fur den Antrag?",
    a: "Sie benotigen einen gultigen biometrischen Reisepass, ein aktuelles digitales Passfoto, eine gultige E-Mail-Adresse und eine Kredit- oder Debitkarte fur die Zahlung."
  },
  {
    q: "Kann ich die ETA uber die App beantragen?",
    a: "Ja, die britische Regierung bietet eine offizielle UK ETA-App fur iOS und Android an. Alternativ konnen Sie den Antrag uber die GOV.UK-Website stellen."
  },
  {
    q: "Brauche ich eine ETA fur den Transit durch UK?",
    a: "Ja, auch fur den Transit durch Grossbritannien ist eine ETA erforderlich, selbst wenn Sie den Transitbereich des Flughafens nicht verlassen."
  },
  {
    q: "Benotigen Kinder eine eigene ETA?",
    a: "Ja, jeder Reisende benotigt eine eigene ETA, unabhangig vom Alter. Dies schliesst Babys und Kleinkinder ein."
  },
  {
    q: "Was passiert, wenn mein Antrag abgelehnt wird?",
    a: "Bei einer Ablehnung erhalten Sie eine E-Mail mit den Grunden. Sie konnen einen neuen Antrag stellen oder ein regulares Visum beantragen. Die Gebuhr wird nicht erstattet."
  },
  {
    q: "Kann ich mit einer ETA in Grossbritannien arbeiten?",
    a: "Nein, die ETA berechtigt nicht zur Arbeitsaufnahme in Grossbritannien. Fur eine Beschaftigung benotigen Sie ein entsprechendes Arbeitsvisum."
  },
  {
    q: "Wie lange darf ich mit einer ETA in UK bleiben?",
    a: "Jeder einzelne Aufenthalt darf maximal 6 Monate dauern. Sie konnen wahrend der 2-jahrigen Gultigkeit beliebig oft einreisen."
  },
  {
    q: "Was mache ich, wenn ich einen neuen Reisepass erhalte?",
    a: "Da die ETA mit Ihrem Reisepass verknupft ist, mussen Sie bei Erhalt eines neuen Reisepasses eine neue ETA beantragen."
  },
  {
    q: "Gilt die ETA auch fur Nordirland?",
    a: "Ja, die UK ETA gilt fur alle Teile des Vereinigten Konigreichs: England, Schottland, Wales und Nordirland."
  },
  {
    q: "Wo finde ich offizielle Informationen zur UK ETA?",
    a: "Offizielle Informationen finden Sie auf der GOV.UK-Website unter gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta. Diese Website (UK ETA Online) ist ein unabhangiges Informationsportal."
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Haufig gestellte Fragen
          </h1>
          <p className="text-gray-300">Antworten auf die wichtigsten Fragen zur UK ETA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 open:shadow-sm">
                <summary className="cursor-pointer p-5 font-semibold text-[#022444] hover:text-[#8d1812] transition-colors list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-[#f8f6f3] p-6 text-center">
            <h2 className="text-xl font-bold text-[#022444] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Weitere Fragen?
            </h2>
            <p className="text-gray-700 mb-4">
              Wenn Ihre Frage hier nicht beantwortet wurde, kontaktieren Sie uns gerne.
            </p>
            <a href="/kontakt/" className="text-[#8d1812] hover:text-[#a82018] font-semibold underline">
              Zur Kontaktseite
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
