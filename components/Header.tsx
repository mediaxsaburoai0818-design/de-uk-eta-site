"use client";

import Link from "next/link";
import { useState } from "react";

const subnav = [
  { label: "Was ist die UK ETA?", href: "/eta-info/what-is-eta/" },
  { label: "So stellen Sie den Antrag", href: "/eta-info/application/" },
  { label: "Gebühren", href: "/eta-info/fee/" },
  { label: "Gültigkeitsdauer", href: "/eta-info/expiration/" },
  { label: "Statusabfrage", href: "/eta-info/status-check/" },
  { label: "Erforderliche Dokumente", href: "/eta-info/required-documents/" },
  { label: "Offizielle Website GOV.UK", href: "/eta-info/official-gov-uk/" },
  { label: "Mobile App", href: "/eta-info/mobile-app/" },
  { label: "Transit durch das UK", href: "/eta-info/transit/" },
  { label: "Deutsche in Großbritannien", href: "/eta-info/polish-community/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: "var(--color-navy)", borderBottom: "3px solid var(--color-gold)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* Logo C — heraldic shield (crown + ETA) */}
            <svg width="42" height="42" viewBox="0 0 100 100" role="img" aria-label="UK ETA Portal" className="h-10 w-auto lg:h-11 shrink-0"><circle cx="50" cy="50" r="46" fill="#011A33" stroke="#C5A24A" strokeWidth="3"/><circle cx="50" cy="50" r="38" fill="none" stroke="#C5A24A" strokeWidth="1" opacity="0.5"/><path d="M30 56 L26 36 L37 46 L50 32 L63 46 L74 36 L70 56 Z" fill="#C5A24A"/><rect x="30" y="56" width="40" height="6" rx="1" fill="#C5A24A"/><circle cx="26" cy="34" r="2.4" fill="#C5A24A"/><circle cx="74" cy="34" r="2.4" fill="#C5A24A"/><circle cx="50" cy="30" r="2.6" fill="#C8102E"/><text x="50" y="82" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="#ffffff">ETA</text></svg>
            <div className="leading-tight">
              <span
                className="block text-[16px] lg:text-[19px] font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                  color: "#ffffff",
                }}
              >
                UK ETA Portal
              </span>
              <span className="block text-[10px] lg:text-[11px] tracking-wide text-white/70">
                Reisegenehmigung für Großbritannien
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center nav-buttons">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium hover:text-white/75 transition bg-transparent border-0 cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                Informationen zur UK ETA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-[var(--color-border)] shadow-lg rounded-md py-2 min-w-[260px]">
                  {subnav.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm hover:bg-[var(--color-blue-light)] no-underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/faq/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="px-3 py-2 text-sm font-medium hover:text-white/75 transition no-underline"
              style={{ color: "#ffffff" }}
            >
              Kontakt
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-red text-sm"
            >
              ETA-Antrag stellen
            </a>
          </nav>

          <button
            className="lg:hidden p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 18h16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 bg-white rounded-md p-3 space-y-1">
            <p className="px-3 py-1 text-xs uppercase tracking-wider font-bold" style={{ color: "var(--color-navy)" }}>
              Informationen zur UK ETA
            </p>
            {subnav.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {c.label}
              </Link>
            ))}
            <div className="border-t border-[var(--color-border)] mt-2 pt-2">
              <Link
                href="/faq/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block hover:bg-[var(--color-blue-light)] px-4 py-2 text-sm no-underline"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-sm block text-center mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              ETA-Antrag stellen
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
