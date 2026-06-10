import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <strong>MHS Elektroinstallation GmbH</strong>
        <p>Hornbachplatz 9, 2721 Bad Fischau-Brunn</p>
      </div>
      <div className="footer-links">
        <a href="mailto:info@mhs-elektro.at">info@mhs-elektro.at</a>
        <a href="tel:+43262234773">+43 2622 34773</a>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <span>© 2026 MHS Elektroinstallation GmbH</span>
      </div>
    </footer>
  );
}
