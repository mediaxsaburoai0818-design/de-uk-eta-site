import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";

// Font option 2 — Playfair Display (display/headings) × Work Sans (body).
// Variable names kept identical so existing globals.css/components need no change.
const notoSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});

const fraunces = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UK ETA Portal 2026 | Deutschsprachige Schritt-für-Schritt-Anleitung",
    template: "%s ‐ UK ETA Portal",
  },
  description:
    "Deutschsprachiger kompletter UK-ETA-Leitfaden 2026. Bei Reisen nach Großbritannien seit dem 2. April 2025 Pflicht — der Antrag sollte 3 Tage vor der Abreise gestellt werden. Denken Sie daran, den Antrag rechtzeitig einzureichen.",
  keywords:
    "UK ETA, UK ETA 2026, Großbritannien, Reisegenehmigung, Electronic Travel Authorisation, ETA-Antrag, Deutschland, Gebühr £20",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://eta-de.com"),
  openGraph: {
    title: "UK ETA Portal 2026 | Deutschsprachige Schritt-für-Schritt-Anleitung",
    description:
      "Deutschsprachiger kompletter UK-ETA-Leitfaden 2026. Bei Reisen nach Großbritannien seit dem 2. April 2025 Pflicht — der Antrag sollte 3 Tage vor der Abreise gestellt werden. Denken Sie daran, den Antrag rechtzeitig einzureichen.",
    locale: "de_DE",
    type: "website",
    siteName: "UK ETA Portal",
    url: "https://eta-de.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UK ETA Portal — Big Ben und Westminster Bridge in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK ETA Portal 2026 | Deutschsprachige Schritt-für-Schritt-Anleitung",
    description:
      "Deutschsprachiger kompletter UK-ETA-Leitfaden 2026 — Gebühr £20, Entscheidung meist innerhalb von 72 h, Gültigkeit 2 Jahre.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Reveal />
        <StickyCta />
      </body>
    </html>
  );
}
