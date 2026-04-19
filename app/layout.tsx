import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK ETA Online | Elektronische Reisegenehmigung fur Grossbritannien",
  description: "Alle Informationen zur UK ETA (Electronic Travel Authorisation) fur deutsche Staatsburger. Gebuhren, Gultigkeit, Antragsprozess und mehr.",
  metadataBase: new URL("https://de-uk-eta-site.pages.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-[#022444] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-white no-underline hover:text-white">
          <div className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            UK ETA Online
          </div>
          <div className="text-xs text-gray-300 tracking-wide">
            Elektronische Reisegenehmigung
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/eta-info/was-ist-eta/" className="text-gray-200 hover:text-white transition-colors">Was ist ETA?</a>
          <a href="/eta-info/antrag/" className="text-gray-200 hover:text-white transition-colors">Antrag</a>
          <a href="/eta-info/gebuehren/" className="text-gray-200 hover:text-white transition-colors">Kosten</a>
          <a href="/eta-info/gueltigkeit/" className="text-gray-200 hover:text-white transition-colors">Gultigkeit</a>
          <a href="/faq/" className="text-gray-200 hover:text-white transition-colors">FAQ</a>
          <a href="/kontakt/" className="text-gray-200 hover:text-white transition-colors">Kontakt</a>
        </nav>
        <MobileMenuButton />
      </div>
      <MobileMenu />
    </header>
  );
}

function MobileMenuButton() {
  return (
    <label htmlFor="mobile-menu-toggle" className="md:hidden cursor-pointer p-2">
      <div className="w-6 h-0.5 bg-white mb-1.5"></div>
      <div className="w-6 h-0.5 bg-white mb-1.5"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </label>
  );
}

function MobileMenu() {
  return (
    <>
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      <nav className="md:hidden hidden peer-checked:block bg-[#011a33] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
          <a href="/" className="text-gray-200 hover:text-white py-1">Startseite</a>
          <a href="/eta-info/was-ist-eta/" className="text-gray-200 hover:text-white py-1">Was ist ETA?</a>
          <a href="/eta-info/antrag/" className="text-gray-200 hover:text-white py-1">Antrag stellen</a>
          <a href="/eta-info/gebuehren/" className="text-gray-200 hover:text-white py-1">Gebuhren</a>
          <a href="/eta-info/gueltigkeit/" className="text-gray-200 hover:text-white py-1">Gultigkeit</a>
          <a href="/eta-info/status-pruefen/" className="text-gray-200 hover:text-white py-1">Status prufen</a>
          <a href="/eta-info/erforderliche-dokumente/" className="text-gray-200 hover:text-white py-1">Dokumente</a>
          <a href="/eta-info/transit/" className="text-gray-200 hover:text-white py-1">Transit</a>
          <a href="/eta-info/deutsche-gemeinschaft/" className="text-gray-200 hover:text-white py-1">Deutsche in UK</a>
          <a href="/faq/" className="text-gray-200 hover:text-white py-1">FAQ</a>
          <a href="/kontakt/" className="text-gray-200 hover:text-white py-1">Kontakt</a>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#022444] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              UK ETA Online
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Umfassende Informationen zur elektronischen Reisegenehmigung (ETA) fur Reisen nach Grossbritannien. Diese Website ist kein offizieller Regierungsdienst.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">ETA-Informationen</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/eta-info/was-ist-eta/" className="text-gray-400 hover:text-white transition-colors">Was ist UK ETA?</a></li>
              <li><a href="/eta-info/antrag/" className="text-gray-400 hover:text-white transition-colors">Antrag stellen</a></li>
              <li><a href="/eta-info/gebuehren/" className="text-gray-400 hover:text-white transition-colors">Gebuhren und Kosten</a></li>
              <li><a href="/eta-info/gueltigkeit/" className="text-gray-400 hover:text-white transition-colors">Gultigkeit</a></li>
              <li><a href="/eta-info/erforderliche-dokumente/" className="text-gray-400 hover:text-white transition-colors">Erforderliche Dokumente</a></li>
              <li><a href="/eta-info/transit/" className="text-gray-400 hover:text-white transition-colors">Transit durch UK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ueber-uns/" className="text-gray-400 hover:text-white transition-colors">Uber uns</a></li>
              <li><a href="/kontakt/" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="/datenschutz/" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="/nutzungsbedingungen/" className="text-gray-400 hover:text-white transition-colors">Nutzungsbedingungen</a></li>
              <li><a href="/faq/" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/sitemap/" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; 2025 UK ETA Online. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            Diese Website ist nicht mit der britischen Regierung verbunden. Offizielle Informationen finden Sie auf{" "}
            <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline">GOV.UK</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
