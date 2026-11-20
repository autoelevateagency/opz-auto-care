"use client";

import { useState } from "react";
import type { Dictionary } from "@/data/dictionary";
import { BrandLogo } from "@/components/ui/BrandLogo/BrandLogo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./nav.css";

type NavProps = {
  dict: Dictionary["nav"];
  bookMessage: string;
};

export const Nav = ({ dict, bookMessage }: NavProps): React.JSX.Element => {
  const [open, setOpen] = useState(false);

  const closeMenu = (): void => {
    setOpen(false);
  };

  return (
    <nav aria-label={dict.ariaLabel}>
      <div className="wrap">
        <BrandLogo />
        <button
          className="burger"
          type="button"
          aria-label={dict.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <i />
          <i />
        </button>
        <div className={`links${open ? " open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            {dict.home}
          </a>
          <a href="#nosotros" onClick={closeMenu}>
            {dict.about}
          </a>
          <a href="#servicios" onClick={closeMenu}>
            {dict.services}
          </a>
          <a href="#trabajo" onClick={closeMenu}>
            {dict.work}
          </a>
          <a href="#contacto" onClick={closeMenu}>
            {dict.contact}
          </a>
          <a className="btn" href={buildWhatsAppUrl(bookMessage)} onClick={closeMenu}>
            {dict.book}
          </a>
        </div>
      </div>
    </nav>
  );
};
