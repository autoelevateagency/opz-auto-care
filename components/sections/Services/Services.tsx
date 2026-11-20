import type { Dictionary } from "@/data/dictionary";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import "./services.css";

type ServicesProps = {
  dict: Dictionary["services"];
};

export const Services = ({ dict }: ServicesProps): React.JSX.Element => {
  return (
    <section id="servicios">
      <div className="wrap">
        <h2>{dict.title}</h2>
        {dict.items.map((item) => (
          <article className="svc" key={item.slot}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
            <PhotoSlot slot={item.slot} label={item.photoLabel} />
          </article>
        ))}
      </div>
    </section>
  );
};
