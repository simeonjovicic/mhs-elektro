import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../mhs_elektro_logo.png";
import { SiteFooter } from "./site-footer";

type LegalPageShellProps = {
  children: ReactNode;
  eyebrow: string;
  lead: string;
  title: string;
};

export function LegalPageShell({
  children,
  eyebrow,
  lead,
  title,
}: LegalPageShellProps) {
  return (
    <>
      <main className="legal-page">
        <nav className="legal-nav" aria-label="Seitennavigation">
          <Link
            className="legal-brand"
            href="/"
            aria-label="Zur Startseite von MHS Elektroinstallation"
          >
            <Image
              src={logo}
              alt="MHS Elektroinstallation GmbH"
              className="legal-brand-logo"
              priority
            />
          </Link>
          <Link className="legal-back" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Zur Startseite
          </Link>
        </nav>

        <section className="legal-hero">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{lead}</p>
        </section>

        <div className="legal-content">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
