import type { Metadata } from "next";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Datenschutz | MHS Elektroinstallation GmbH",
  description:
    "Datenschutzerklärung der MHS Elektroinstallation GmbH für die Nutzung der Website und Kontaktaufnahme.",
};

export default function DatenschutzPage() {
  return (
    <LegalPageShell
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      lead="Hier informieren wir darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden."
    >
      <section className="legal-section">
        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
          Website ist:
        </p>
        <dl className="legal-details">
          <div>
            <dt>Firma</dt>
            <dd>MHS Elektroinstallation GmbH</dd>
          </div>
          <div>
            <dt>Adresse</dt>
            <dd>Hornbachplatz 9, 2721 Bad Fischau-Brunn, Österreich</dd>
          </div>
          <div>
            <dt>E-Mail</dt>
            <dd>
              <a href="mailto:info@mhs-elektro.at">info@mhs-elektro.at</a>
            </dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>
              <a href="tel:+43262234773">+43 2622 34773</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="legal-section">
        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular
          kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur
          Bearbeitung Ihrer Anfrage, zur Terminabstimmung und zur Vorbereitung
          oder Durchführung beauftragter Leistungen.
        </p>
        <p>
          Das Kontaktformular nutzt eine E-Mail-Übermittlung an
          info@mhs-elektro.at. Die eingegebenen Inhalte werden auf dieser Website
          nicht in einer eigenen Datenbank gespeichert.
        </p>
        <p>
          Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen oder Vertragserfüllung), Art. 6 Abs. 1 lit.
          f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen) sowie
          Art. 6 Abs. 1 lit. c DSGVO, soweit gesetzliche Aufbewahrungspflichten
          bestehen.
        </p>
      </section>

      <section className="legal-section">
        <h2>Server-Logfiles</h2>
        <p>
          Beim Aufruf der Website können technisch notwendige Zugriffsdaten
          verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit des Zugriffs,
          aufgerufene Seite, Browser- und Geräteinformationen sowie übertragene
          Datenmenge. Diese Daten dienen dem sicheren und stabilen Betrieb der
          Website und der Fehleranalyse.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung
          dieser Daten mit anderen Datenquellen erfolgt nicht.
        </p>
      </section>

      <section className="legal-section">
        <h2>Cookies, Analyse und externe Links</h2>
        <p>
          Diese Website verwendet keine Webanalyse-Tools und keine
          Tracking-Cookies. Externe Dienste werden nur über Links aufgerufen, zum
          Beispiel Google Maps beim Klick auf die Adresse. Für die Verarbeitung
          auf externen Websites gelten die Datenschutzinformationen des
          jeweiligen Anbieters.
        </p>
      </section>

      <section className="legal-section">
        <h2>Empfänger und Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur weitergegeben, wenn dies zur
          Bearbeitung Ihrer Anfrage erforderlich ist, eine gesetzliche Pflicht
          besteht oder wir Dienstleister für Betrieb, Wartung oder
          Kommunikation einsetzen. Eine Weitergabe zu Werbezwecken erfolgt nicht.
        </p>
        <p>
          Daten aus Anfragen speichern wir nur so lange, wie es für die
          Bearbeitung, eine mögliche Zusammenarbeit und gesetzliche
          Aufbewahrungspflichten erforderlich ist.
        </p>
      </section>

      <section className="legal-section">
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Information,
          Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Soweit eine Verarbeitung auf
          Einwilligung beruht, können Sie diese Einwilligung jederzeit mit
          Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
          Datenschutzrecht verstößt, können Sie sich an die Österreichische
          Datenschutzbehörde wenden:{" "}
          <a href="https://dsb.gv.at/" target="_blank" rel="noreferrer">
            dsb.gv.at
          </a>
          .
        </p>
      </section>

      <p className="legal-updated">Stand: 10. Juni 2026</p>
    </LegalPageShell>
  );
}
