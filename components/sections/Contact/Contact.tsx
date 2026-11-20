import type { Dictionary } from "@/data/dictionary";
import { siteConfig } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./contact.css";

type ContactProps = {
  dict: Dictionary["contact"];
  scheduleMessage: string;
  helloMessage: string;
};

export const Contact = ({
  dict,
  scheduleMessage,
  helloMessage,
}: ContactProps): React.JSX.Element => {
  return (
    <section id="contacto">
      <div className="wrap ct">
        <div>
          <h2>{dict.title}</h2>
          <a className="btn" href={buildWhatsAppUrl(scheduleMessage)}>
            {dict.cta}
          </a>
        </div>
        <dl>
          <dt>{dict.brandLabel}</dt>
          <dd>{dict.brandValue}</dd>
          <dt>{dict.locationLabel}</dt>
          <dd>{siteConfig.location}</dd>
          <dt>{dict.bookingLabel}</dt>
          <dd>
            <a href={buildWhatsAppUrl(helloMessage)}>{dict.bookingValue}</a>
          </dd>
          <dt>{dict.socialLabel}</dt>
          <dd>
            <a href={siteConfig.instagramUrl} rel="noopener noreferrer" target="_blank">
              {siteConfig.instagramHandle}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
};
