export type PricingItemId =
  | "exterior"
  | "interior"
  | "full"
  | "upholstery"
  | "fullUpholstery";

export type PriceRange = {
  from: string;
  to: string;
};

export type PricingItem = {
  id: PricingItemId;
  auto: PriceRange;
  suv: PriceRange;
};

/** Chilean peso ranges from OPZ AUTO CARE price list */
export const pricingItems: PricingItem[] = [
  {
    id: "exterior",
    auto: { from: "$15.000", to: "$20.000" },
    suv: { from: "$18.000", to: "$25.000" },
  },
  {
    id: "interior",
    auto: { from: "$18.000", to: "$25.000" },
    suv: { from: "$22.000", to: "$30.000" },
  },
  {
    id: "full",
    auto: { from: "$28.000", to: "$40.000" },
    suv: { from: "$35.000", to: "$45.000" },
  },
  {
    id: "upholstery",
    auto: { from: "$35.000", to: "$50.000" },
    suv: { from: "$45.000", to: "$65.000" },
  },
  {
    id: "fullUpholstery",
    auto: { from: "$50.000", to: "$80.000" },
    suv: { from: "$70.000", to: "$100.000" },
  },
];

export const formatPriceRange = (range: PriceRange): string => {
  return `${range.from} — ${range.to}`;
};
