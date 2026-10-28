// og:image de las páginas EN/FR (28/10/2026): la misma imagen que usa su equivalente en español.
// Antes 222 páginas EN/FR salían sin og:image (al compartirlas no aparecía ninguna imagen).
// La imagen se busca en el page.tsx de la versión ES (openGraph.images); si no hay, la general.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROUTES, langSlug } from "@/lib/i18n/routes";

const SITE = "https://www.mktweb360.com";
const POR_DEFECTO = "/og-image.jpg";
const cache = new Map<string, string>();

function ogDeLaVersionEs(slugIntl: string): string {
  if (cache.has(slugIntl)) return cache.get(slugIntl)!;
  let og = POR_DEFECTO;
  const r = ROUTES.find((x) => x.en === slugIntl || x.fr === slugIntl);
  if (r && r.es !== "/") {
    try {
      const src = readFileSync(join(process.cwd(), "app", "(site)", ...r.es.split("/").filter(Boolean), "page.tsx"), "utf8");
      const bloque = src.slice(src.indexOf("openGraph"));
      const m = bloque.match(/images:\s*\[\s*\{\s*url:\s*["'`]([^"'`]+)["'`]/) ?? bloque.match(/images:\s*\[\s*["'`]([^"'`]+)["'`]/);
      if (m && !m[1].includes("${")) og = m[1].replace(SITE, "");
    } catch {
      // Sin acceso al código fuente (render en tiempo de ejecución): imagen general.
    }
  }
  cache.set(slugIntl, og);
  return og;
}

export function ogImagesIntl(slugIntl: string) {
  return [{ url: `${SITE}${ogDeLaVersionEs(slugIntl)}`, width: 1200, height: 630 }];
}

/** openGraph completo para una página EN/FR que no lo declaraba. */
export function openGraphIntl(lang: string, slugIntl: string) {
  return {
    type: "website" as const,
    locale: lang === "fr" ? "fr_FR" : "en_GB",
    siteName: "Mkt Web 360",
    url: `${SITE}/${lang}/${langSlug(lang, slugIntl)}/`,
    images: ogImagesIntl(slugIntl),
  };
}
