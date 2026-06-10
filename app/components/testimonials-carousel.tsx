import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  initials: string;
  context: string;
  text?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ivan Desic",
    initials: "I",
    context: "vor 4 Jahren",
    text: "Sehr kompetente, pünktliche Firma und alles zu einem sehr fairen Preis ohne nachträgliche Überraschung, sehr zu empfehlen.",
  },
  {
    name: "Gürhan Ocaktan",
    initials: "G",
    context: "vor 3 Jahren",
    text: "Professional service with amazing crew. I definitely suggest it.",
  },
  {
    name: "George-Florin Silaghi",
    initials: "G",
    context: "vor 8 Monaten",
  },
  {
    name: "Gerhard Kresnik",
    initials: "G",
    context: "vor 3 Jahren",
  },
  {
    name: "Akin İleri",
    initials: "A",
    context: "vor 3 Jahren",
  },
  {
    name: "Manuel Röhrs",
    initials: "M",
    context: "vor 5 Jahren",
  },
];

const avatarHues = [174, 207, 32, 268, 152, 12];

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Stars({ size = 15 }: { size?: number }) {
  return (
    <div className="review-stars" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({
  testimonial,
  index,
  ariaHidden,
}: {
  testimonial: Testimonial;
  index: number;
  ariaHidden?: boolean;
}) {
  const hue = avatarHues[index % avatarHues.length];

  return (
    <article
      className={`review-card${testimonial.text ? "" : " review-card-compact"}`}
      aria-hidden={ariaHidden}
    >
      <header className="review-head">
        <span
          className="review-avatar"
          style={{
            background: `hsl(${hue} 48% 42%)`,
          }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <span className="review-meta">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.context}</span>
        </span>
        <span className="review-google" aria-label="Google Bewertung">
          <GoogleLogo size={18} />
        </span>
      </header>
      <Stars />
      {testimonial.text ? <p>{testimonial.text}</p> : null}
    </article>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="section testimonials-section">
      <div className="testimonial-intro">
        <span className="eyebrow">
          <Star size={16} aria-hidden="true" />
          Kundenstimmen
        </span>
        <h2>Was Kunden über uns sagen.</h2>
        <div className="google-rating">
          <GoogleLogo size={26} />
          <strong>5,0</strong>
          <span className="google-rating-detail">
            <Stars size={17} />
            <span>Bewertungen auf Google</span>
          </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=MHS+Elektroinstallation+GmbH+Bad+Fischau-Brunn"
            target="_blank"
            rel="noreferrer"
          >
            Alle Bewertungen ansehen
          </a>
        </div>
      </div>

      <div className="review-marquee">
        <div className="review-track">
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={`${testimonial.name}-copy`}
              testimonial={testimonial}
              index={index}
              ariaHidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
