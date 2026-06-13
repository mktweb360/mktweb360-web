export type Lang = "es" | "en" | "fr";

export const defaultLang: Lang = "es";
export const supportedLangs: Lang[] = ["es", "en", "fr"];

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/fr")) return "fr";
  return "es";
}

export const langNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

export const langLocales: Record<Lang, string> = {
  es: "es_ES",
  en: "en_GB",
  fr: "fr_FR",
};
