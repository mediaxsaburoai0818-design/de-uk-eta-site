import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#011a33]" style={{ color: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div>
              <p
                className="text-lg font-bold mb-3 text-white"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                }}
              >
                UK ETA Online
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "white" }}>
                Kompletter Leitfaden zur Elektronischen Reisegenehmigung
                (ETA) für Großbritannien.
              </p>
            </div>

            {/* ETA Info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Informationen zur UK ETA
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <Link
                    href="/eta-info/what-is-eta/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Was ist die UK ETA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/application/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    So stellen Sie den Antrag
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/fee/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Gebühren
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/expiration/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Gültigkeitsdauer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/status-check/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Statusabfrage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Aktuelle Informationen
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/wjazd-i-wiza/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Einreise nach UK und Visa
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/lotnisko-heathrow/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Flughafen Heathrow
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/lotniska-londynu/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Flughäfen Londons
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Informationen zur Website
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <Link
                    href="/site-info/about/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contact/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/privacy-policy/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/agreement/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Nutzungsbedingungen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Offizielle Seiten
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Offizielle UK-ETA-Website (GOV.UK)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/check-uk-visa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    UK-Visumanforderungen prüfen
                  </a>
                </li>
                <li>
                  <a
                    href="https://uk.diplo.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Deutsche Botschaft London
                  </a>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#022444] border border-white/10 rounded text-xs" style={{ color: "white" }}>
                Diese Website ist nicht mit der britischen Regierung verbunden. Offizielle
                UK-ETA-Website:{" "}
                <a
                  href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                  className="underline hover:text-white"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gov.uk/eta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-center" style={{ color: "white" }}>
              &copy; {new Date().getFullYear()} UK ETA Online. Alle Rechte
              vorbehalten. | Informationswebsite &mdash; keine offizielle
              Website der britischen Regierung.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
