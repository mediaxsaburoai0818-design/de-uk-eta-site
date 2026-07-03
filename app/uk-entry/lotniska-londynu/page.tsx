import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Die 5 wichtigsten Flughäfen Londons - Heathrow, Gatwick, Stansted, Luton, City",
  description:
    "Leitfaden zu den fünf Flughäfen Londons: Heathrow, Gatwick, Stansted, Luton und London City. Lage, Merkmale und Anfahrt ins Stadtzentrum.",
  alternates: { canonical: "https://eta-de.com/uk-entry/lotniska-londynu/" },
};

const airports = [
  { code: "LHR", name: "Heathrow", loc: "West-London", desc: "Der größte Flughafen UK und das wichtigste internationale Drehkreuz (Terminals 2-5).", access: "Heathrow Express ~15 Min., Elizabeth Line ~30 Min., U-Bahn ~50 Min." },
  { code: "LGW", name: "Gatwick", loc: "Süd-London", desc: "Der zweitgrößte Flughafen Londons; klassische und Billigfluglinien (Nord- und Südterminal).", access: "Gatwick Express ~30 Min., Thameslink ~30-45 Min." },
  { code: "STN", name: "Stansted", loc: "Nordost-London", desc: "Basis von Ryanair, viele europäische Verbindungen; ein Terminal, leichte Orientierung.", access: "Stansted Express ~50 Min., Bus ~60-90 Min." },
  { code: "LTN", name: "Luton", loc: "nördlich von London", desc: "Basis von easyJet und Wizz Air; ein Terminal, Anfahrt zum Bahnhof per Shuttle.", access: "Luton Airport Express ~30 Min., Thameslink ~30 Min." },
  { code: "LCY", name: "London City", loc: "Zentrum von London (am nächsten)", desc: "Am nächsten zum Zentrum; beliebt bei Geschäftsreisenden.", access: "DLR ~15-25 Min. ins Zentrum." },
];

export default function LondonAirports() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <p className="kicker mb-3" style={{ color: "var(--color-gold)" }}>EINREISE NACH UK</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif), serif" }}>
            <span className="deco-line" />
            Die 5 wichtigsten Flughäfen Londons
          </h1>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            London wird von fünf wichtigen Flughäfen bedient. Die Wahl beeinflusst die Anfahrt, die Zeit und die Kosten der Reise ins Zentrum. Nachfolgend finden Sie eine kurze Beschreibung jedes einzelnen.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {airports.map((a) => (
              <div key={a.code} className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "var(--color-navy)", color: "#fff" }}>{a.code}</span>
                  <h2 className="text-lg font-bold" style={{ color: "var(--color-blue)" }}>{a.name}</h2>
                  <span className="text-sm text-gray-500">{a.loc}</span>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-text-light)" }}>{a.desc}</p>
                <p className="text-sm" style={{ color: "var(--color-text-light)" }}><strong>Anfahrt:</strong> {a.access}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Die Anfahrtszeiten sind Richtwerte und hängen vom Ziel in London sowie von der Tageszeit ab.</p>

          <p className="text-sm text-gray-500 mt-6">
            Details zum größten Flughafen:{" "}
            <Link href="/uk-entry/lotnisko-heathrow/" className="content-link">Flughafen Heathrow (LHR)</Link>
          </p>

          <Breadcrumb items={[{ label: "Die 5 wichtigsten Flughäfen Londons" }]} />
        </div>
      </section>
    </div>
  );
}
