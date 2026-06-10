"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".hero-copy",
  ".hero-media",
  ".section-heading",
  ".service-card",
  ".gallery-item",
  ".testimonial-intro",
  ".review-marquee",
  ".contact-copy",
  ".contact-form",
];

const STEP_MS = 90;
const DURATION_MS = 900;

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTORS.join(",")),
    );
    const countByParent = new Map<Element, number>();
    const delays = new Map<HTMLElement, number>();

    for (const element of elements) {
      const parent = element.parentElement ?? document.body;
      const index = countByParent.get(parent) ?? 0;
      const delay = Math.min(index, 7) * STEP_MS;

      countByParent.set(parent, index + 1);
      delays.set(element, delay);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.classList.add("reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const element = entry.target as HTMLElement;

          observer.unobserve(element);
          element.classList.add("is-revealed");

          window.setTimeout(
            () => {
              element.classList.remove("reveal", "is-revealed");
              element.style.removeProperty("--reveal-delay");
            },
            DURATION_MS + (delays.get(element) ?? 0),
          );
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
