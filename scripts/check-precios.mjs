// Guarda anti-regresión de la política de precios (decisión de José, 25/10/2026):
// la web y el asistente NO muestran precios de servicios; solo las OFERTAS vigentes llevan precio (lib/ofertas.ts).
// Uso: node scripts/check-precios.mjs   (pnpm check:precios). Sale con código 1 si encuentra algo.
//
// Qué comprueba:
//  1. Ningún `priceRange` en el código de la web (JSON-LD de precio orientativo).
//  2. `offers` / `priceSpecification` con precio solo en páginas de oferta (lista OFERTA_FILES).
//  3. Importes que fueron precios propios de servicios (lista PRECIOS_RETIRADOS) en líneas que no sean de mercado/terceros.
//  4. Precios de planes leídos por código (preciosPlanesSeo, p.precio) fuera de las páginas de oferta.
// Si añades una oferta nueva, añade su página a OFERTA_FILES y sus importes a lib/ofertas.ts.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "components", "public/llms.txt", "public/llms-full.txt"];
const EXCLUIR = [/node_modules/, /\.claude/, /^app[\\/]area-privada/, /^app[\\/]api/, /^app[\\/]portal/, /^app[\\/]admin/];

// Páginas/componentes de OFERTA (pueden llevar precio, schema de oferta y comparativas con su cifra).
const OFERTA_FILES = [
  /oferta-seo-geo-gbp/, /oferta-web-seo-organico/, /tienda-online/, /landing[\\/]tienda-online-490/, /online-store/, /online-store-offer/,
  /components[\\/]offers/, /OfertasSlider/, /BlogBanner/, /HomeClient/, /HomeInteractive/, /LangHeroSlider/, /Footer/, /HomeAuditoria/,
  /diseno-de-paginas-web/, /diseno-web-toledo/, /web-design-toledo/, /diseno-web-tienda-online/, /ecommerce-no-commissions/,
  /diseno-web-para-clinicas/, /web-design-clinics/, /corporate-website-design/, /paginas-corporativas/, /web-design-dentists/,
  /seo-pricing/, /precios-seo/, /consultor-seo/, /seo-consultant/, /agencia-marketing-digital-toledo/, /digital-marketing-agency-toledo/,
  /agencia-seo-toledo/, /seo-agency-toledo/, /tiendas-online-toledo/, /auditoria-digital/, /digital-audit/, /llms/,
];
// Importes que fueron precios propios de servicios y ya no deben aparecer como tarifa nuestra.
const PRECIOS_RETIRADOS = [199, 590, 449, 790, 690, 990, 290, 390, 350, 100];
// Líneas que hablan de mercado o de terceros: se permiten.
const MERCADO = /mercado|market|march[eé]|terceros|referencia|reference|competencia|agencias? (pequeñ|medi|grand)|shopify|wix|woocommerce|tidio|intercom|zendesk|botpress|stripe|paypal|redsys|sancion|multa|cuota|aut[oó]nomo|self-employed|social security|contribution|cotisation|ind[eé]pendant|hosting|dominio|cpc|inversi[oó]n publicitaria|presupuesto publicitario|roas|adsense|rpm|ahorro/i;

function* walk(p) {
  let st;
  try { st = statSync(p); } catch { return; }
  if (EXCLUIR.some((r) => r.test(p))) return;
  if (st.isDirectory()) { for (const f of readdirSync(p)) yield* walk(join(p, f)); }
  else if (/\.(tsx?|txt)$/.test(p)) yield p;
}

const fallos = [];
for (const root of ROOTS) {
  for (const f of walk(root)) {
    const esOferta = OFERTA_FILES.some((r) => r.test(f));
    readFileSync(f, "utf8").split("\n").forEach((line, i) => {
      const ref = `${f}:${i + 1}`;
      if (/priceRange\s*:/.test(line)) fallos.push(`${ref}  priceRange en JSON-LD (no se publican precios orientativos)`);
      if (!esOferta && /priceSpecification|"price"\s*:|\bprice:\s*(?:p\.|String|\d)/.test(line) && !/price:\s*(?:0|"0")\b/.test(line))
        fallos.push(`${ref}  schema con precio fuera de una página de oferta`);
      // Precios que llegan por código (catálogo de MktOS o importes de los planes), invisibles para la lista de importes.
      if (!esOferta && /preciosPlanesSeo|\.precio as number|\$\{p\.precio\}/.test(line))
        fallos.push(`${ref}  precio de plan leído del catálogo fuera de una página de oferta (usa precioTexto o lib/ofertas.ts)`);
      if (!esOferta && !MERCADO.test(line)) {
        for (const n of PRECIOS_RETIRADOS) {
          const rx = new RegExp(`(?<![\\d.,])${n}\\s?(€|euros?\\b)|€\\s?${n}(?![\\d.,])`, "i");
          if (rx.test(line)) fallos.push(`${ref}  ${n} € parece una tarifa propia que ya no se publica: ${line.trim().slice(0, 110)}`);
        }
      }
    });
  }
}

if (fallos.length) {
  console.error(`check-precios: ${fallos.length} posible(s) precio(s) de servicio fuera de las ofertas\n` + fallos.join("\n"));
  console.error("\nSi es una cifra de mercado o de un tercero, deja claro en la frase que lo es («referencia de mercado, no una tarifa nuestra»). Si es una oferta, añade su página a OFERTA_FILES.");
  process.exit(1);
}
console.log("check-precios: sin precios de servicios fuera de las ofertas");
