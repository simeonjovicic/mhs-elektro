import {
  ArrowRight,
  Bolt,
  Building2,
  CalendarClock,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Mail,
  MapPin,
  PanelTop,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import teamImage from "../team.jpg";
import { ContactForm } from "./components/contact-form";
import { MobileCallCta } from "./components/mobile-call-cta";
import { ProcessSteps, type ProcessItem } from "./components/process-steps";
import { ProjectGallery } from "./components/project-gallery";
import { ScrollRestoration } from "./components/scroll-restoration";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TestimonialsCarousel } from "./components/testimonials-carousel";

const services = [
  {
    title: "Diverse Elektroinstallationen",
    text: "Saubere Planung und Umsetzung für Wohnungen, Betriebe, Sanierungen und Erweiterungen.",
    icon: Zap,
    points: ["Neubau & Sanierung", "Wohnung & Gewerbe"],
  },
  {
    title: "Blitzschutz",
    text: "Schutzkonzepte und Montage für Gebäude, Anlagen und sicherheitsrelevante Bereiche.",
    icon: ShieldCheck,
    points: ["Schutzkonzept", "Montage & Prüfung"],
  },
  {
    title: "Schaltschränke",
    text: "Aufbau, Erweiterung und strukturierte Verdrahtung von Schalt- und Verteileranlagen.",
    icon: PanelTop,
    points: ["Aufbau & Erweiterung", "Saubere Verdrahtung"],
  },
  {
    title: "Montage von Zählerkästen",
    text: "Fachgerechte Montage, Tausch und Vorbereitung für Netzbetreiber und Abnahme.",
    icon: Gauge,
    points: ["Montage & Tausch", "Abnahme-Vorbereitung"],
  },
  {
    title: "E-Befunde",
    text: "Prüfung und Dokumentation elektrischer Anlagen für Betrieb, Vermietung und Sicherheit.",
    icon: ClipboardCheck,
    points: ["Prüfung & Doku", "Für Vermietung & Betrieb"],
  },
];

const process: ProcessItem[] = [
  {
    title: "Kontakt aufnehmen",
    text: "Senden Sie eine Anfrage oder rufen Sie direkt an.",
    icon: "phone",
  },
  {
    title: "Termin abstimmen",
    text: "Wir klären Umfang, Adresse und passenden Zeitpunkt.",
    icon: "calendar",
  },
  {
    title: "Vor Ort prüfen",
    text: "Die Anlage wird besichtigt und die nächsten Schritte werden festgelegt.",
    icon: "search",
  },
  {
    title: "Umsetzung planen",
    text: "Material, Ablauf und Arbeitsschritte werden sauber vorbereitet.",
    icon: "clipboard",
  },
  {
    title: "Sauber abschließen",
    text: "Arbeiten werden umgesetzt, geprüft und nachvollziehbar übergeben.",
    icon: "check",
  },
];

type HomeProps = {
  searchParams?: Promise<{
    leistung?: string | string[];
  }>;
};

const getServiceHref = (title: string) =>
  `/?leistung=${encodeURIComponent(title)}#kontakt`;

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const requestedService = Array.isArray(params?.leistung)
    ? (params?.leistung[0] ?? "")
    : params?.leistung;
  const selectedService: string = services.some(
    (service) => service.title === requestedService,
  )
    ? (requestedService ?? "")
    : "";

  return (
    <main>
      <ScrollRestoration />
      <ScrollReveal />
      <SiteHeader />
      <MobileCallCta />

      <section id="top" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <Bolt size={16} aria-hidden="true" />
            Elektroinstallation aus Bad Fischau
          </span>
          <h1>MHS Elektroinstallationen</h1>
          <p>
            Elektroinstallationen, Blitzschutz, Schaltschränke und E-Befunde
            sauber geplant und verlässlich umgesetzt.
          </p>
          <div className="hero-actions hero-actions-desktop">
            <a className="button primary" href="#kontakt">
              Anfrage senden
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="tel:+43262234773">
              <Phone size={18} aria-hidden="true" />
              Direkt anrufen
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Teamfoto Platzhalter">
          <div className="team-photo-placeholder">
            <Image
              src={teamImage}
              alt="Team von MHS Elektroinstallation"
              sizes="(max-width: 980px) 100vw, 420px"
              priority
            />
            <div className="experience-badge" aria-label="20 Jahre Erfahrung">
              <strong>20</strong>
              <span>Jahre Erfahrung</span>
            </div>
          </div>
        </div>
        <div className="hero-actions hero-actions-mobile">
          <a className="button primary" href="#kontakt">
            Anfrage senden
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            id="hero-call-button"
            className="button secondary"
            href="tel:+43262234773"
          >
            <Phone size={18} aria-hidden="true" />
            Direkt anrufen
          </a>
        </div>
      </section>

      <section id="leistungen" className="section services-section">
        <div className="section-heading">
          <span className="eyebrow">
            <Wrench size={16} aria-hidden="true" />
            Unsere Leistungen
          </span>
          <h2>Elektroarbeiten sauber umgesetzt.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="card-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="service-points">
                  {service.points.map((point) => (
                    <li key={point}>
                      <Check size={13} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  className="service-link"
                  href={getServiceHref(service.title)}
                  aria-label={`${service.title} im Kontaktformular auswählen`}
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
              </article>
            );
          })}

          <article className="service-card service-card-cta">
            <div className="card-icon">
              <Sparkles size={24} aria-hidden="true" />
            </div>
            <h3>Etwas anderes geplant?</h3>
            <p>
              Auch für alle weiteren Elektroarbeiten sind wir der richtige
              Ansprechpartner. Erzählen Sie uns kurz von Ihrem Projekt.
            </p>
            <a className="button primary" href="#kontakt">
              Kontakt aufnehmen
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <span className="eyebrow">
            <CheckCircle2 size={16} aria-hidden="true" />
            Ablauf
          </span>
          <h2>So läuft es ab.</h2>
        </div>
        <ProcessSteps items={process} />
      </section>

      <section id="galerie" className="gallery-section">
        <div className="section-heading">
          <span className="eyebrow">
            <Building2 size={16} aria-hidden="true" />
            Bildergalerie
          </span>
          <h2>Ausgeführte Projekte.</h2>
        </div>
        <ProjectGallery />
      </section>

      <TestimonialsCarousel />

      <section id="kontakt" className="contact-section">
        <div className="contact-copy">
          <span className="eyebrow">
            <CalendarClock size={16} aria-hidden="true" />
            Kontakt
          </span>
          <h2>
            Lass uns <span>sprechen.</span>
          </h2>
          <p>
            Nutzen Sie unseren kostenlosen Rückruf-Service. Gerne rufen wir Sie
            bei Fragen oder zur Terminvereinbarung zurück. Bitte geben Sie Ihre
            Telefonnummer an.
          </p>

          <div className="contact-cards">
            <a className="contact-card" href="mailto:info@mhs-elektro.at">
              <span className="contact-card-icon">
                <Mail size={21} aria-hidden="true" />
              </span>
              <span>
                <small>E-Mail</small>
                <strong>info@mhs-elektro.at</strong>
              </span>
            </a>
            <a className="contact-card" href="tel:+43262234773">
              <span className="contact-card-icon">
                <Phone size={21} aria-hidden="true" />
              </span>
              <span>
                <small>Telefon</small>
                <strong>+43 2622 34773</strong>
              </span>
            </a>
            <a
              className="contact-card address-card"
              href="https://maps.google.com/?q=Hornbachplatz+9+2721+Bad+Fischau-Brunn"
            >
              <span className="contact-card-icon">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <span>
                <small>Adresse</small>
                <strong>Hornbachplatz 9, 2721 Bad Fischau-Brunn</strong>
              </span>
            </a>
          </div>
        </div>

        <ContactForm
          selectedService={selectedService}
          services={services.map((service) => service.title)}
        />
      </section>

      <SiteFooter />
    </main>
  );
}
