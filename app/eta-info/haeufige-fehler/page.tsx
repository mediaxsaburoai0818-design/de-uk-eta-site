import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = { title: "Häufige Fehler beim UK-ETA-Antrag und offizielle App 2026", description: "Häufige Fehler beim UK-ETA-Antrag: nicht übereinstimmende Passdaten, Fotoanforderungen, Zahlung und gefälschte Seiten. Nutzen Sie die offizielle UK ETA App." };
export default function Page() {
  return (<div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/mobile-app.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">UK ETA INFORMATIONEN</p>
          <h1 className="deco-head text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif), serif" }}><span className="deco-line" />Häufige Fehler und UK ETA App</h1>
          <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{__html:`Viele Probleme entstehen durch <strong>nicht übereinstimmende Daten</strong> mit dem Pass. Nutzen Sie immer die <strong>offizielle App 'UK ETA'</strong> und prüfen Sie die Angaben vor dem Absenden.`}} />
        </div></section>
      <section className="bg-gray-50"><div className="max-w-4xl mx-auto px-6 py-10"><h2 className="heading-band mb-6">Zu vermeidende Fehler</h2><ul className="space-y-3 text-gray-700 leading-relaxed"><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Die Daten müssen exakt mit dem Pass übereinstimmen: Abweichungen führen zu Verzögerungen oder Ablehnung`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Erforderliche Fotos: Gesicht und alle Passseiten, scharf und konform`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Zahlung (£20): Apple Pay/Google Pay/Karte (Amex, JCB, Mastercard, Visa); 3D-Secure-Authentifizierung kann verlangt werden`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Biometrischer Pass (ePassport-Symbol) für das Auslesen des Chips erforderlich`}} /></li><li className="flex gap-2"><span className="text-[#022444] font-bold">•</span><span dangerouslySetInnerHTML={{__html:`Vorsicht vor gefälschten Seiten, die die Regierung imitieren und höhere Gebühren verlangen: nur GOV.UK nutzen`}} /></li></ul></div></section>
      <section className="bg-white"><div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-500"><p className="mb-2 font-bold text-gray-700">Offizielle Quellen (GOV.UK)</p><ul className="space-y-1"><li><a href="https://www.gov.uk/guidance/using-the-uk-eta-app" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/guidance/using-the-uk-eta-app</a></li><li><a href="https://www.gov.uk/eta/apply" target="_blank" rel="noopener noreferrer" className="text-[#022444] underline">https://www.gov.uk/eta/apply</a></li></ul></div></section>
      <div className="max-w-4xl mx-auto px-6 py-8"><Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "UK ETA Informationen", href: "/eta-info/what-is-eta" }, { label: "Häufige Fehler und UK ETA App" }]} /></div>
    </div>);
}
