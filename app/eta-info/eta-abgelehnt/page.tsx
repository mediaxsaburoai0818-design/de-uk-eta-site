import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "UK ETA abgelehnt? Was tun und welche Optionen 2026", description: "Wird die UK ETA abgelehnt, ist kein Widerspruch möglich. Für eine Reise ins UK müssen Sie ein Visum beantragen. Leitfaden zu den Optionen 2026." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/official-gov-uk.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />UK ETA abgelehnt: was nun?</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Wird Ihr UK-ETA-Antrag <strong>abgelehnt, ist kein Widerspruch (appeal) möglich</strong>. Wenn Sie dennoch ins UK reisen möchten, müssen Sie ein <strong>Visum beantragen</strong>.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Vorgehen bei Ablehnung</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Gegen die Ablehnung der ETA gibt es kein Widerspruchsverfahren`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Für eine Reise ins UK ist ein passendes Visum zu beantragen`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Prüfen Sie auf GOV.UK, welches Visum zu Ihrem Reisezweck passt`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/eta" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta</a></li><li><a href="https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "UK ETA abgelehnt: was nun?" }]} /></div>
    </div>);
}
