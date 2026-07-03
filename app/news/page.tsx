import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { newsItems, CATEGORY_STYLE, CATEGORY_LABEL } from "./news-data";

export const metadata: Metadata = {
  title: "Aktuelle Informationen zur UK ETA und zu Reisen nach Großbritannien",
  description:
    "Aktuelle Nachrichten zur UK ETA: Gebühr £20 seit 8. April 2026, vollständige Durchsetzung seit Februar 2026, Einreiseregeln und Sicherheit auf Reisen nach Großbritannien.",
  alternates: { canonical: "https://eta-de.com/news/" },
};

const sorted = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function NewsIndex() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>AKTUELLES</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Aktuelle Informationen
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Die wichtigsten Nachrichten zur UK ETA, zu den Einreiseregeln und zu Reisen nach Großbritannien (2025-2026). Informationen auf Basis von GOV.UK-Quellen.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {sorted.map((n) => {
              const c = CATEGORY_STYLE[n.category];
              return (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}/`}
                  className="card block hover:shadow-lg transition-shadow no-underline"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: c.bg, color: c.fg }}
                    >
                      {CATEGORY_LABEL[n.category]}
                    </span>
                    <time className="text-sm text-gray-500">{n.date}</time>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--color-blue)" }}>
                    {n.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-light)" }}>
                    {n.summary}
                  </p>
                  <span className="content-link font-bold text-sm inline-block mt-3">Mehr lesen &rarr;</span>
                </Link>
              );
            })}
          </div>

          <Breadcrumb items={[{ label: "Aktuelle Informationen" }]} />
        </div>
      </section>
    </div>
  );
}
