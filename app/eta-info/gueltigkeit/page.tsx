import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "UK ETA Gültigkeit: Dauer und Passerneuerung 2026", description: "Die UK ETA ist 2 Jahre oder bis zum Ablauf des Passes gültig. Mehrfache Einreisen, max. 6 Monate pro Aufenthalt. Neuer Pass = neue ETA." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/expiration.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />Gültigkeit der UK ETA und Erneuerung</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Die UK ETA ist <strong>2 Jahre oder bis zum Ablauf des Passes</strong> gültig (je nachdem, was früher eintritt). Sie erlaubt <strong>mehrfache Einreisen</strong> mit max. 6 Monaten pro Aufenthalt.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Dauer und Regeln</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Gültigkeit: 2 Jahre oder bis zum Ablauf des Passes`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Mehrfache Einreisen während der Gültigkeit`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Maximaler Aufenthalt: 6 Monate pro Besuch`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Da die ETA mit dem Pass verknüpft ist, ist <strong>bei Passerneuerung eine neue ETA erforderlich</strong>`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "Gültigkeit der UK ETA und Erneuerung" }]} /></div>
    </div>);
}
