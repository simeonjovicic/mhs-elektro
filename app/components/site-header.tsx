"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../mhs_elektro_logo.png";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      <nav
        id="site-navigation"
        className={isMenuOpen ? "is-open" : ""}
        aria-label="Hauptnavigation"
      >
        <a href="#leistungen" onClick={closeMenu}>
          Leistungen
        </a>
        <a href="#galerie" onClick={closeMenu}>
          Bildergalerie
        </a>
        <a href="#kontakt" onClick={closeMenu}>
          Kontakt
        </a>
      </nav>
      <a className="header-contact" href="#kontakt">
        Kontaktieren
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => {
          setIsMenuOpen((current) => !current);
        }}
      >
        {isMenuOpen ? (
          <X size={22} aria-hidden="true" />
        ) : (
          <Menu size={22} aria-hidden="true" />
        )}
      </button>
    </header>
  );
}
