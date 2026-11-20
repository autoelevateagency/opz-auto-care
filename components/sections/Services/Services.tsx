import type { Dictionary } from "@/data/dictionary";
import { formatPriceRange, pricingItems } from "@/data/pricing";
import "./services.css";

type ServicesProps = {
  dict: Dictionary["services"];
};

export const Services = ({ dict }: ServicesProps): React.JSX.Element => {
  return (
    <section id="servicios">
      <div className="wrap">
        <h2>{dict.title}</h2>
        <div className="price-table" role="table" aria-label={dict.title}>
          <div className="price-head" role="row">
            <span role="columnheader">{dict.columns.service}</span>
            <span role="columnheader">{dict.columns.auto}</span>
            <span role="columnheader">{dict.columns.suv}</span>
          </div>
          {pricingItems.map((item) => (
            <article className="price-row" role="row" key={item.id}>
              <h3 role="cell">{dict.items[item.id]}</h3>
              <p role="cell" data-label={dict.columns.auto}>
                <span className="price-from">{item.auto.from}</span>
                <span className="price-sep" aria-hidden="true">
                  —
                </span>
                <span className="price-to">{item.auto.to}</span>
                <span className="sr-only">{formatPriceRange(item.auto)}</span>
              </p>
              <p role="cell" data-label={dict.columns.suv}>
                <span className="price-from">{item.suv.from}</span>
                <span className="price-sep" aria-hidden="true">
                  —
                </span>
                <span className="price-to">{item.suv.to}</span>
                <span className="sr-only">{formatPriceRange(item.suv)}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
