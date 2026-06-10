import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Impressum | MHS Elektroinstallation GmbH",
  description:
    "Impressum und Offenlegung der MHS Elektroinstallation GmbH in Bad Fischau-Brunn.",
};

export default function ImpressumPage() {
  return (
    <LegalPageShell
      eyebrow="Rechtliche Angaben"
      title="Impressum"
      lead="Angaben gemäß österreichischem E-Commerce-Gesetz und Mediengesetz."
    >
      <section className="legal-section">
        <h2>Medieninhaber und Diensteanbieter</h2>
        <dl className="legal-details">
          <div>
            <dt>Firma</dt>
            <dd>MHS Elektroinstallation GmbH</dd>
          </div>
          <div>
            <dt>Sitz</dt>
            <dd>Hornbachplatz 9, 2721 Bad Fischau-Brunn, Österreich</dd>
          </div>
          <div>
            <dt>Kontakt</dt>
            <dd>
              <a href="mailto:info@mhs-elektro.at">info@mhs-elektro.at</a>
              <br />
              <a href="tel:+43262234773">+43 2622 34773</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="legal-section">
        <h2>Unternehmensangaben</h2>
        <dl className="legal-details">
          <div>
            <dt>Rechtsform</dt>
            <dd>Gesellschaft mit beschränkter Haftung</dd>
          </div>
          <div>
            <dt>Firmenbuchnummer</dt>
            <dd>FN373607y</dd>
          </div>
          <div>
            <dt>Umsatzsteuer ID</dt>
            <dd>ATU66924000</dd>
          </div>
          <div>
            <dt>Zuständige Behörde gemäß ECG</dt>
            <dd>Bezirkshauptmannschaft Wiener Neustadt</dd>
          </div>
          <div>
            <dt>Kammerzugehörigkeit</dt>
            <dd>Wirtschaftskammer Österreich und Wirtschaftskammer Niederösterreich</dd>
          </div>
          <div>
            <dt>Tätigkeitsbereich</dt>
            <dd>
              Elektroinstallationen, Blitzschutz, Schaltschränke, Zählerkästen
              und E-Befunde.
            </dd>
          </div>
        </dl>
      </section>

      <section className="legal-section">
        <h2>Offenlegung gemäß § 24 Mediengesetz</h2>
        <p>
          Diese Website informiert über Leistungen, Kontaktmöglichkeiten und
          Projekte der MHS Elektroinstallation GmbH. Inhaltliche Ausrichtung ist
          die Darstellung des Unternehmens und seiner elektrotechnischen
          Dienstleistungen.
        </p>
      </section>

      <section className="legal-section">
        <h2>Haftung für Inhalte und Links</h2>
        <p>
          Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für
          Vollständigkeit, Aktualität und Richtigkeit kann dennoch keine Gewähr
          übernommen werden. Externe Links führen zu Angeboten Dritter, auf deren
          Inhalte kein Einfluss besteht.
        </p>
      </section>
    </LegalPageShell>
  );
}
