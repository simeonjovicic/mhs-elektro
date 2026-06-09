"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import galleryOneAlt from "../../mhs_elektro_1-2.jpg";
import galleryOne from "../../mhs_elektro_1.jpg";
import galleryTwoAlt from "../../mhs_elektro_2-2.jpg";
import galleryTwo from "../../mhs_elektro_2.jpg";
import projectThree from "../../unnamed-3.jpg";
import projectOne from "../../unnamed.jpg";

const galleryImages = [
  {
    title: "Schaltschrank Anlage",
    image: galleryOne,
  },
  {
    title: "Verteilertechnik",
    image: galleryTwo,
  },
  {
    title: "Schaltschrank Detail",
    image: galleryOneAlt,
  },
  {
    title: "Elektroverteilung",
    image: galleryTwoAlt,
  },
  {
    title: "Projektaufnahme",
    image: projectOne,
  },
  {
    title: "Installation Detail",
    image: projectThree,
  },
];

export function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage =
    activeIndex === null ? null : galleryImages[activeIndex] ?? null;
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

  const closeGallery = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length,
    );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <figure className="gallery-item" key={item.title}>
            <button
              className="gallery-open"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${item.title} groß ansehen`}
            >
              <Image
                src={item.image}
                alt={item.title}
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                fill
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <button
            className="lightbox-backdrop"
            type="button"
            onClick={closeGallery}
            aria-label="Galerie schließen"
          />
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              type="button"
              onClick={closeGallery}
              aria-label="Schließen"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <button
              className="lightbox-nav previous"
              type="button"
              onClick={showPrevious}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <Image
              src={activeImage.image}
              alt={activeImage.title}
              className="lightbox-image"
              sizes="100vw"
              priority
            />
            <button
              className="lightbox-nav next"
              type="button"
              onClick={showNext}
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
            <div className="lightbox-caption">
              <strong>{activeImage.title}</strong>
              <span>
                {activePosition} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
