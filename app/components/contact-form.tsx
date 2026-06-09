"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

type ContactFormProps = {
  services: string[];
  selectedService: string;
};

export function ContactForm({ services, selectedService }: ContactFormProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <form
      className={`contact-form${isAccepted ? " is-accepted" : ""}`}
      action="mailto:info@mhs-elektro.at"
      method="post"
      encType="text/plain"
    >
      {!isAccepted && (
        <div className="form-consent" aria-live="polite">
          <div className="consent-icon">
            <ShieldCheck size={28} aria-hidden="true" />
          </div>
          <strong>Formular freigeben</strong>
          <p>
            Bitte akzeptieren Sie, dass Ihre Angaben zur Bearbeitung der Anfrage
            verwendet werden.
          </p>
          <button
            className="button primary consent-button"
            type="button"
            onClick={() => setIsAccepted(true)}
          >
            Akzeptieren
          </button>
        </div>
      )}

      <fieldset disabled={!isAccepted}>
        <div className="form-row">
          <label>
            Name*
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Ihr Name"
              required
            />
          </label>
          <label>
            Telefonnummer*
            <input
              name="telefon"
              type="tel"
              autoComplete="tel"
              placeholder="+43 ..."
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            E-Mail-Adresse*
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.at"
              required
            />
          </label>
          <label>
            Gewünschte Leistung
            <select name="leistung" defaultValue={selectedService}>
              <option value="" disabled>
                Bitte auswählen
              </option>
              {services.map((service) => (
                <option key={service}>{service}</option>
              ))}
              <option>Rückruf-Service</option>
              <option>Sonstige Anfrage</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Projektadresse
            <input
              name="adresse"
              type="text"
              autoComplete="street-address"
              placeholder="Adresse der Anlage"
            />
          </label>
          <label>
            Wunschtermin
            <input name="wunschtermin" type="date" />
          </label>
        </div>

        <label>
          Nachricht*
          <textarea
            name="nachricht"
            rows={6}
            placeholder="Beschreiben Sie kurz, wobei wir helfen können."
            required
          />
        </label>

        <label className="checkbox-label">
          <input name="rueckruf" type="checkbox" />
          Ich möchte gerne zur Terminvereinbarung zurückgerufen werden.
        </label>

        <button
          className="button primary form-button contact-submit"
          type="submit"
        >
          <span className="submit-icon">
            <ArrowRight size={18} aria-hidden="true" />
          </span>
          <span>Anfrage senden</span>
        </button>
      </fieldset>
    </form>
  );
}
