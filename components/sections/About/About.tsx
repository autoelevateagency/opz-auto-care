import type { Dictionary } from "@/data/dictionary";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import "./about.css";

type AboutProps = {
  dict: Dictionary["about"];
};

export const About = ({ dict }: AboutProps): React.JSX.Element => {
  return (
    <section id="nosotros">
      <div className="wrap">
        <div className="about-l">
          <h2>{dict.title}</h2>
          <p>{dict.body}</p>
        </div>
        <PhotoSlot slot="about" label={dict.photoLabel} className="about-img" />
      </div>
    </section>
  );
};
