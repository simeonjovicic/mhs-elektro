"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Gürhan Ocaktan",
    initials: "G",
    context: "5 Sterne · vor 3 Jahren",
    text: "Professional service with amazing crew. I definitely suggest it.",
  },
  {
    name: "Ivan Desic",
    initials: "I",
    context: "5 Sterne · vor 4 Jahren",
    text: "Sehr kompetente, pünktliche Firma und alles zu einem sehr fairen Preis ohne nachträgliche Überraschung, sehr zu empfehlen.",
  },
  {
    name: "Gerhard Kresnik",
    initials: "G",
    context: "5 Sterne · vor 3 Jahren",
    text: "Positive Bewertung auf Google.",
  },
  {
    name: "Akin İleri",
    initials: "A",
    context: "5 Sterne · vor 3 Jahren",
    text: "Positive Bewertung auf Google.",
  },
  {
    name: "George-Florin Silaghi",
    initials: "G",
    context: "5 Sterne · vor 8 Monaten",
    text: "5-Sterne-Bewertung auf Google.",
  },
  {
    name: "Manuel Röhrs",
    initials: "M",
    context: "5 Sterne · vor 5 Jahren",
    text: "5-Sterne-Bewertung auf Google.",
  },
];

const chunkSize = 3;

export function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const pages = useMemo(() => {
    const chunks = [];

    for (let index = 0; index < testimonials.length; index += chunkSize) {
      chunks.push(testimonials.slice(index, index + chunkSize));
    }

    return chunks;
  }, []);
  const activeTestimonials = pages[page] ?? pages[0];

  const showPrevious = () => {
    setPage((current) => (current - 1 + pages.length) % pages.length);
  };

  const showNext = () => {
    setPage((current) => (current + 1) % pages.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="testimonial-intro">
        <span className="eyebrow">
          <Star size={16} aria-hidden="true" />
          Kundenstimmen
        </span>
        <h2>Was Kunden über uns sagen.</h2>
        <div className="testimonial-controls">
          <button type="button" onClick={showPrevious} aria-label="Vorherige Reviews">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={showNext} aria-label="Nächste Reviews">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="testimonial-grid">
        {activeTestimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-avatar" aria-hidden="true">
              {testimonial.initials}
            </div>
            <div className="quote-mark">“</div>
            <div className="testimonial-rating" aria-label="5 von 5 Sternen">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.context}</span>
            </div>
            <p>{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
