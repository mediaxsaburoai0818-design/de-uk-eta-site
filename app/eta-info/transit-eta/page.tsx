import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "UK ETA für Transit: Airside oder Landside? Leitfaden 2026", description: "Brauchen Sie eine UK ETA für den Transit? Wenn Sie die Grenzkontrolle passieren (landside) ja; wenn nicht (airside) nein. Offizieller Leitfaden 2026." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/transit.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />UK ETA für den Transit (Airside/Landside)</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Wenn Sie beim Transit <strong>die Grenzkontrolle passieren (landside), ist eine ETA erforderlich</strong>. Wenn Sie <strong>die Passkontrolle nicht passieren (airside), ist keine ETA nötig</strong>.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Transit: wann eine ETA nötig ist</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Landside-Transit (Sie passieren die Grenzkontrolle): ETA erforderlich`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Airside-Transit (keine Passkontrolle): keine ETA erforderlich`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Laut offiziellem Factsheet benötigen Transitreisende in Heathrow/Manchester, die die UK-Passkontrolle nicht passieren, derzeit keine ETA`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Klären Sie die Transitart immer mit Ihrer Fluggesellschaft`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "UK ETA für den Transit (Airside/Landside)" }]} /></div>
    </div>);
}
