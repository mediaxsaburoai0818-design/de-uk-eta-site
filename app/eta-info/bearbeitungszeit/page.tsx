import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "Wie lange dauert die UK ETA? Bearbeitungszeit & Antrag 2026", description: "Die UK ETA wird meist innerhalb von 1 Tag entschieden, planen Sie aber bis zu 3 Werktage ein. Beantragen Sie mindestens 3 Werktage vor der Abreise." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/status-check.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />Wie lange dauert die UK ETA?</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Das Ergebnis kommt per E-Mail von UKVI. <strong>Meist innerhalb von 1 Tag</strong>, planen Sie jedoch <strong>bis zu 3 Werktage</strong> (Mo–Fr) ein. Über die App erhalten viele Anträge in Minuten eine automatische Entscheidung.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Zeiten und Tipps</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Ergebnis in der Regel innerhalb von 1 Tag; bis zu 3 Werktage bei zusätzlichen Prüfungen`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Beantragen Sie <strong>mindestens 3 Werktage vor</strong> der Abreise`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Wenn nach 3 Werktagen keine Antwort kommt, prüfen Sie den Spam-Ordner, bevor Sie UKVI kontaktieren`}} /></li></ul></div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Kosten und Gültigkeit</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Kosten: <strong>£20</strong> (einmalig, nicht erstattungsfähig)`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Gültigkeit: 2 Jahre oder bis zum Ablauf des Passes; mehrfache Einreisen; max. 6 Monate pro Aufenthalt`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/apply</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "Wie lange dauert die UK ETA?" }]} /></div>
    </div>);
}
