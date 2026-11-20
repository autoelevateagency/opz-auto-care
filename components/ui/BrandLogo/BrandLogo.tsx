import { siteConfig } from "@/data/site";
import "./brand-logo.css";

type BrandLogoProps = {
  href?: string;
  ariaLabel?: string;
};

export const BrandLogo = ({
  href = "#inicio",
  ariaLabel,
}: BrandLogoProps): React.JSX.Element => {
  return (
    <a
      className="logo"
      href={href}
      aria-label={ariaLabel ?? `${siteConfig.brand}, inicio`}
    >
      <b>{siteConfig.brandShort}</b>
      <small>{siteConfig.brandTag}</small>
    </a>
  );
};
