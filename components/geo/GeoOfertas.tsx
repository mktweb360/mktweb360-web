import Link from "next/link";
import { preciosOfertaSeo } from "@/lib/precios-planes";
import { BF_FIN_TEXTO, PRECIO_GEO_SOLO, type BfLang } from "@/lib/black-friday";

// Ofertas de la página de GEO (decididas por José el 15/11/2026):
//  - GEO solo: 99 €/mes + IVA, precio PERMANENTE, sin permanencia. NO lleva etiqueta «Black Friday» (no es temporal).
//  - Pack SEO + GEO + Google Maps: oferta Black Friday (149 €/mes 6 meses, sin permanencia, hasta el 30/11/2026), sin precio tachado.
// El importe del pack sale de preciosOfertaSeo() (catálogo de MktOS con respaldo); el de GEO solo, de lib/black-friday.ts.
const T = {
  es: {
    h: "Dos formas de empezar con el GEO",
    soloT: "GEO solo",
    soloD: "Auditoría de visibilidad en IA, contenido citable, datos estructurados y seguimiento mensual. Para empezar por la visibilidad en asistentes de IA.",
    soloP: (n: number) => `${n} €/mes + IVA`,
    soloN: "Precio permanente · sin permanencia",
    packT: "SEO + GEO + Google Maps",
    packD: "El GEO junto con el posicionamiento en Google y tu ficha de Google Business Profile, en un solo servicio mensual.",
    packP: (n: number) => `Black Friday: ${n} €/mes + IVA durante 6 meses`,
    packN: (fin: string, g: number) => `Sin permanencia · contratando hasta el ${fin} · tarifa general: ${g} €/mes + IVA, sin permanencia`,
    ver: "Ver la oferta completa",
    cond: "Condiciones de la oferta Black Friday",
    pie: "Ofertas para empresas y profesionales. Importes sin IVA.",
    ruta: "/oferta-seo-geo-gbp/",
  },
  en: {
    h: "Two ways to start with GEO",
    soloT: "GEO on its own",
    soloD: "AI visibility audit, citable content, structured data and monthly monitoring. A way to start with visibility in AI assistants.",
    soloP: (n: number) => `€${n}/month + VAT`,
    soloN: "Permanent price · no minimum term",
    packT: "SEO + GEO + Google Maps",
    packD: "GEO together with Google search positioning and your Google Business Profile listing, in a single monthly service.",
    packP: (n: number) => `Black Friday: €${n}/month + VAT for 6 months`,
    packN: (fin: string, g: number) => `No minimum term · when you sign up by ${fin} · standard rate: €${g}/month + VAT, no minimum term`,
    ver: "Request a free diagnosis",
    cond: "Black Friday offer terms",
    pie: "Offers for businesses and professionals. Amounts exclude VAT.",
    ruta: "/oferta-seo-geo-gbp/",
  },
  fr: {
    h: "Deux façons de commencer avec le GEO",
    soloT: "GEO seul",
    soloD: "Audit de visibilité dans les IA, contenu citable, données structurées et suivi mensuel. Pour commencer par la visibilité dans les assistants IA.",
    soloP: (n: number) => `${n} €/mois HT`,
    soloN: "Prix permanent · sans engagement",
    packT: "SEO + GEO + Google Maps",
    packD: "Le GEO avec le référencement sur Google et votre fiche Google Business Profile, dans un seul service mensuel.",
    packP: (n: number) => `Black Friday : ${n} €/mois HT pendant 6 mois`,
    packN: (fin: string, g: number) => `Sans engagement · en souscrivant avant le ${fin} · tarif général : ${g} €/mois HT, sans engagement`,
    ver: "Demander un diagnostic gratuit",
    cond: "Conditions de l'offre Black Friday",
    pie: "Offres pour entreprises et professionnels. Montants hors TVA.",
    ruta: "/oferta-seo-geo-gbp/",
  },
} as const;

// La oferta del pack solo tiene landing en ES: en EN/FR el enlace lleva al diagnóstico gratuito y las condiciones, a la página de precios SEO.
export async function GeoOfertas({ lang = "es", verHref, condHref }: { lang?: BfLang; verHref?: string; condHref?: string }) {
  const t = T[lang];
  const po = await preciosOfertaSeo();
  const href = verHref ?? t.ruta;
  const cond = condHref ?? `${href}#condiciones-black-friday`;
  return (
    <section id="oferta" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-8 text-center">{t.h}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col">
            <h3 className="font-bold text-primary-700 text-xl mb-2">{t.soloT}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{t.soloD}</p>
            <p className="text-3xl font-black text-primary-700">{t.soloP(PRECIO_GEO_SOLO)}</p>
            <p className="text-sm text-gray-600 mt-1">{t.soloN}</p>
          </div>
          <div className="rounded-2xl border-2 border-accent-500 bg-white p-6 flex flex-col">
            <h3 className="font-bold text-primary-700 text-xl mb-2">{t.packT}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{t.packD}</p>
            <p className="text-3xl font-black text-primary-700">{t.packP(po.permanencia6m)}</p>
            <p className="text-sm text-gray-600 mt-1">{t.packN(BF_FIN_TEXTO[lang], po.sinPermanencia)}</p>
            <Link href={href} className="mt-4 text-primary-600 font-semibold text-sm underline underline-offset-2 hover:text-accent-700">
              {t.ver}
            </Link>
            <Link href={cond} className="mt-1 text-primary-600 text-sm underline underline-offset-2 hover:text-accent-700">
              {t.cond}
            </Link>
          </div>
        </div>
        <p className="text-xs text-gray-600 text-center mt-6">{t.pie}</p>
      </div>
    </section>
  );
}
