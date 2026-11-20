import type { Dictionary } from "@/data/dictionary";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo/BrandLogo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./footer.css";

type FooterProps = {
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
  helloMessage: string;
};

export const Footer = ({
  dict,
  nav,
  helloMessage,
}: FooterProps): React.JSX.Element => {
  return (
    <footer>
      <div className="wrap">
        <div>
          <BrandLogo />
          <p>{dict.blurb}</p>
        </div>
        <ul aria-label={dict.linksLabel}>
          <li>
            <a href="#inicio">{nav.home}</a>
          </li>
          <li>
            <a href="#nosotros">{nav.about}</a>
          </li>
          <li>
            <a href="#servicios">{nav.services}</a>
          </li>
          <li>
            <a href="#trabajo">{nav.work}</a>
          </li>
          <li>
            <a href="#contacto">{nav.contact}</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={siteConfig.instagramUrl} rel="noopener noreferrer" target="_blank">
              {dict.instagram}
            </a>
          </li>
          <li>
            <a href={buildWhatsAppUrl(helloMessage)}>{dict.whatsapp}</a>
          </li>
          <li>{siteConfig.location}</li>
        </ul>
        <div className="copy">{dict.copy}</div>
      </div>
    </footer>
  );
};
