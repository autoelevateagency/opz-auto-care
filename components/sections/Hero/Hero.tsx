import type { Dictionary } from "@/data/dictionary";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./hero.css";

type HeroProps = {
  dict: Dictionary["hero"];
  bookMessage: string;
};

export const Hero = ({ dict, bookMessage }: HeroProps): React.JSX.Element => {
  return (
    <header id="inicio" className="hero">
      <div className="wrap">
        <div>
          <h1>
            <span className="l">{dict.line1}</span>
            <span className="l">{dict.line2}</span>
            <span className="l">{dict.line3}</span>
          </h1>
          <p>{dict.subtitle}</p>
          <div className="cta">
            <a className="btn" href={buildWhatsAppUrl(bookMessage)}>
              {dict.ctaPrimary}
            </a>
            <a className="btn ghost" href="#trabajo">
              {dict.ctaSecondary}
            </a>
          </div>
        </div>
        <PhotoSlot slot="hero" label={dict.photoLabel} className="hero-img" />
      </div>
    </header>
  );
};
