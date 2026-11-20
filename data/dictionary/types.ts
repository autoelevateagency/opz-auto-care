export type Locale = "es" | "en";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    ariaLabel: string;
    home: string;
    about: string;
    services: string;
    work: string;
    contact: string;
    book: string;
    openMenu: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoLabel: string;
  };
  about: {
    title: string;
    body: string;
    photoLabel: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      body: string;
      photoLabel: string;
      slot: "s1" | "s2" | "s3";
    }>;
  };
  work: {
    title: string;
    prev: string;
    next: string;
    galleryLabel: string;
    photoLabel: string;
  };
  contact: {
    title: string;
    cta: string;
    brandLabel: string;
    brandValue: string;
    locationLabel: string;
    bookingLabel: string;
    bookingValue: string;
    socialLabel: string;
  };
  footer: {
    blurb: string;
    linksLabel: string;
    instagram: string;
    whatsapp: string;
    copy: string;
  };
  whatsapp: {
    book: string;
    schedule: string;
    hello: string;
  };
};
