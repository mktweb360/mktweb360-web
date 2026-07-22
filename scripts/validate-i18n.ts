// Guardián de coherencia i18n. Ejecuta: `node --experimental-strip-types scripts/validate-i18n.ts`
// (o `npx tsx scripts/validate-i18n.ts`). Sale con código 1 si detecta cualquier incoherencia.
// Objetivo: impedir que app/[lang] y lib/i18n/routes.ts se desincronicen.
import { existsSync, readdirSync } from "node:fs";
import { ROUTES, type Lang } from "../lib/i18n/routes.ts";

const LANG_SITE = "app/[lang]/(site)";
const ES_SITE = "app/(site)";
const errors: string[] = [];

// dirs [lang] reales (subcarpetas con page.tsx), excluye la home (page.tsx raíz)
const langDirs = readdirSync(LANG_SITE, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((n) => existsSync(`${LANG_SITE}/${n}/page.tsx`));

// índice slug -> rutas que lo referencian (canónico o alias)
const slugRefs = new Map<string, string[]>();
const addRef = (slug: string, es: string) => {
  if (slug === "" || slug === undefined) return;
  slugRefs.set(slug, [...(slugRefs.get(slug) || []), es]);
};
for (const r of ROUTES) {
  if (r.en) addRef(r.en, r.es + " (en)");
  if (r.fr) addRef(r.fr, r.es + " (fr)");
  for (const a of r.aliases || []) addRef(a.slug, r.es + " (alias)");
}

// conjunto de todos los slugs conocidos en ROUTES
const known = new Set<string>();
for (const r of ROUTES) {
  if (r.en) known.add(r.en);
  if (r.fr) known.add(r.fr);
  for (const a of r.aliases || []) known.add(a.slug);
}

// R1: dir en app/[lang]/(site)/ que NO está en ROUTES
for (const dir of langDirs) {
  if (!known.has(dir)) errors.push(`R1  dir [lang]/${dir} no está en ROUTES (ni canónico ni alias)`);
}

// R2: ROUTES apunta (en/fr) a un dir [lang] inexistente
for (const r of ROUTES) {
  for (const lang of ["en", "fr"] as Lang[]) {
    const slug = lang === "en" ? r.en : r.fr;
    if (slug === undefined) continue;
    const path = slug === "" ? `${LANG_SITE}/page.tsx` : `${LANG_SITE}/${slug}/page.tsx`;
    if (!existsSync(path)) errors.push(`R2  ${r.es} declara ${lang}="${slug}" pero falta ${path}`);
  }
}

// R3: ROUTES.es sin page.tsx en app/(site)/
for (const r of ROUTES) {
  const rel = r.es === "/" ? "" : r.es.replace(/^\/|\/$/g, "");
  const path = rel === "" ? `${ES_SITE}/page.tsx` : `${ES_SITE}/${rel}/page.tsx`;
  if (!existsSync(path)) errors.push(`R3  ROUTES.es ${r.es} sin page.tsx (${path})`);
}

// R4: un slug aparece en >1 route distinta (un mismo slug como en+fr de la MISMA route es OK)
for (const [slug, refs] of slugRefs) {
  const distinctEs = new Set(refs.map((x) => x.replace(/ \((en|fr|alias)\)$/, "")));
  if (distinctEs.size > 1) errors.push(`R4  slug "${slug}" referenciado por varias routes: ${[...distinctEs].join(", ")}`);
}

// informe
const byRule = (p: string) => errors.filter((e) => e.startsWith(p));
console.log(`\n=== validate-i18n: ${langDirs.length} dirs [lang], ${ROUTES.length} routes ===`);
for (const rule of ["R1", "R2", "R3", "R4"]) {
  const list = byRule(rule);
  console.log(`\n${rule} (${list.length}):`);
  list.forEach((e) => console.log("  " + e));
}
console.log(`\nTOTAL incoherencias: ${errors.length}`);
if (errors.length) process.exit(1);
console.log("OK — i18n coherente.");
