import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | UK ETA Online",
  description: "Ubersicht aller Seiten auf UK ETA Online. Finden Sie schnell die Informationen, die Sie suchen.",
};

const sitemapSections = [
  {
    title: "Startseite",
    links: [
      { name: "Startseite", href: "/" },
    ],
  },
  {
    title: "ETA-Informationen",
    links: [
      { name: "Was ist UK ETA?", href: "/eta-info/was-ist-eta/" },
      { name: "Wie beantrage ich?", href: "/eta-info/antrag/" },
      { name: "Gebuhren und Kosten", href: "/eta-info/gebuehren/" },
      { name: "Gultigkeit", href: "/eta-info/gueltigkeit/" },
      { name: "Status prufen", href: "/eta-info/status-pruefen/" },
      { name: "Erforderliche Dokumente", href: "/eta-info/erforderliche-dokumente/" },
      { name: "Offizielle GOV.UK-Website", href: "/eta-info/offizielle-gov-uk/" },
      { name: "Transit durch UK", href: "/eta-info/transit/" },
      { name: "Deutsche in Grossbritannien", href: "/eta-info/deutsche-gemeinschaft/" },
    ],
  },
  {
    title: "Website-Informationen",
    links: [
      { name: "Uber uns", href: "/ueber-uns/" },
      { name: "Kontakt", href: "/kontakt/" },
      { name: "Datenschutzerklarung", href: "/datenschutz/" },
      { name: "Nutzungsbedingungen", href: "/nutzungsbedingungen/" },
      { name: "Haufig gestellte Fragen (FAQ)", href: "/faq/" },
      { name: "Sitemap", href: "/sitemap-page/" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="bg-[#022444] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sitemap
          </h1>
          <p className="text-gray-300">Ubersicht aller Seiten</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-10">
            {sitemapSections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-[#022444] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-[#8d1812] hover:text-[#a82018] underline text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
