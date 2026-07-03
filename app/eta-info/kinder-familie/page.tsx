import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "UK ETA für Kinder und Familien: Brauchen Babys eine? 2026", description: "Auch Babys und Kinder brauchen eine eigene UK ETA. Sie können den Antrag für eine andere Person mit deren Pass- und Gesichtsfoto stellen." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/required-documents.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />UK ETA für Kinder und Familien</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`<strong>Jeder Reisende, auch Babys und Kinder, benötigt eine eigene UK ETA.</strong> Sie können den Antrag im Namen einer anderen Person stellen.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Antrag für die Familie</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Für jeden Reisenden ist eine eigene ETA nötig, auch für Kinder und Babys`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Sie können für eine andere Person beantragen: per App, wenn sie anwesend ist, sonst online (Pass- und Gesichtsfoto nötig)`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Kinder im France-UK school trip travel information form benötigen keine ETA`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/apply</a></li><li><a href="https://www.gov.uk/eta/when-not-need-eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/when-not-need-eta</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "UK ETA für Kinder und Familien" }]} /></div>
    </div>);
}
