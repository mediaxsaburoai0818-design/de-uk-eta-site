import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Vollständige Liste aller Seiten auf UK ETA Online - durchsuchen Sie die Inhalte des Portals.",
};

const sections = [
  {
    title: "Hauptseiten",
    links: [
      { href: "/", label: "Startseite" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Informationen zur UK ETA",
    links: [
      { href: "/eta-info/what-is-eta/", label: "Was ist die UK ETA?" },
      { href: "/eta-info/application/", label: "Antragsverfahren" },
      { href: "/eta-info/fee/", label: "Gebühren" },
      { href: "/eta-info/expiration/", label: "Gültigkeitsdauer" },
      { href: "/eta-info/status-check/", label: "Antragsstatus prüfen" },
      { href: "/eta-info/required-documents/", label: "Erforderliche Dokumente" },
      { href: "/eta-info/official-gov-uk/", label: "Offizielle Website GOV.UK" },
      { href: "/eta-info/mobile-app/", label: "Mobile App" },
      { href: "/eta-info/transit/", label: "Transit durch das Vereinigte Königreich" },
      { href: "/eta-info/polish-community/", label: "Deutsche Staatsbürger im Vereinigten Königreich" },
    ],
  },
  {
    title: "Informationen zur Website",
    links: [
      { href: "/site-info/about/", label: "Über uns" },
      { href: "/site-info/contact/", label: "Kontakt" },
      { href: "/site-info/privacy-policy/", label: "Datenschutzerklärung" },
      { href: "/site-info/agreement/", label: "Nutzungsbedingungen" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/sitemap.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">SITEMAP</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Sitemap
          </h1>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.title} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="font-bold text-[#022444] text-lg mb-3 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#022444] transition underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
        </div>
      </section>
    </div>
  );
}
