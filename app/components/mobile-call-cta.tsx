"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const CALL_BUTTON_ID = "hero-call-button";
const CTA_SIZE = 56;
const CTA_MARGIN = 18;
const DOCK_THRESHOLD = 88;

export function MobileCallCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callButton = document.getElementById(CALL_BUTTON_ID);

    if (!callButton) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let frame = 0;

    const updateVisibility = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const rect = callButton.getBoundingClientRect();
        const isMobile = mobileQuery.matches;
        const shouldShow = isMobile && rect.top < DOCK_THRESHOLD;
        const finalCenterX = window.innerWidth - CTA_MARGIN - CTA_SIZE / 2;
        const finalCenterY = window.innerHeight - CTA_MARGIN - CTA_SIZE / 2;
        const startCenterX = rect.left + rect.width / 2;
        const startCenterY = rect.top + rect.height / 2;

        document.documentElement.style.setProperty(
          "--call-cta-from-x",
          `${Math.round(startCenterX - finalCenterX)}px`,
        );
        document.documentElement.style.setProperty(
          "--call-cta-from-y",
          `${Math.round(startCenterY - finalCenterY)}px`,
        );
        callButton.classList.toggle("is-docked-source", shouldShow);

        setIsVisible((current) => (current === shouldShow ? current : shouldShow));
        frame = 0;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    mobileQuery.addEventListener("change", updateVisibility);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      mobileQuery.removeEventListener("change", updateVisibility);
      callButton.classList.remove("is-docked-source");
    };
  }, []);

  return (
    <a
      className={`mobile-call-cta${isVisible ? " is-visible" : ""}`}
      href="tel:+43262234773"
      aria-label="Direkt anrufen"
    >
      <Phone size={24} aria-hidden="true" />
    </a>
  );
}
