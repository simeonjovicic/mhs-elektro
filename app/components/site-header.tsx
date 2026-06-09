"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../mhs_elektro_logo.png";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsVisible(window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className={`site-header${isVisible ? " is-visible" : ""}`}>
      <a className="brand" href="#top" aria-label="MHS Elektroinstallation">
        <Image
          src={logo}
          alt="MHS Elektroinstallation GmbH"
          className="brand-logo"
          priority
        />
      </a>
      <nav aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#galerie">Bildergalerie</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a className="header-contact" href="#kontakt">
        Kontaktieren
      </a>
    </header>
  );
}
