import { About } from "@/components/sections/About/About";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer/Footer";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Hero } from "@/components/sections/Hero/Hero";
import { Nav } from "@/components/sections/Nav/Nav";
import { Services } from "@/components/sections/Services/Services";
import { defaultLocale, getDictionary } from "@/data/dictionary";

export default function Home(): React.JSX.Element {
  const dict = getDictionary(defaultLocale);

  return (
    <>
      <Nav dict={dict.nav} bookMessage={dict.whatsapp.book} />
      <Hero dict={dict.hero} bookMessage={dict.whatsapp.book} />
      <About dict={dict.about} />
      <Services dict={dict.services} />
      <Gallery dict={dict.work} />
      <Contact
        dict={dict.contact}
        scheduleMessage={dict.whatsapp.schedule}
        helloMessage={dict.whatsapp.hello}
      />
      <Footer
        dict={dict.footer}
        nav={dict.nav}
        helloMessage={dict.whatsapp.hello}
      />
    </>
  );
}
