import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export const getDictionary = (locale: Locale = defaultLocale): Dictionary => {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
};
