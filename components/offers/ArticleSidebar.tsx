/**
 * Barra lateral de los artículos del blog (9/11/2026): solo escritorio (lg+), fija al desplazarse.
 * Lleva una oferta según el tema del artículo, el diagnóstico gratuito y las demos. Sin scripts de terceros.
 * Los precios salen de lib/ofertas.ts (solo las ofertas vigentes muestran precio).
 *
 * CAMPAÑAS que aparecen aquí (si se retira una oferta, quitar su tema y revisar este archivo):
 * oferta-web-corporativa (web 249 €), oferta-seo-geo-gbp (SEO + GEO + Maps), tienda-online (490 €).
 */
import type { ReactNode } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import {
  PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M,
  PRECIO_TIENDA_ONLINE_DESDE,
  PRECIO_WEB_PROFESIONAL_DESDE,
} from "@/lib/ofertas";
import { DEMOS_SLUG } from "@/lib/demos-page";
import { LANDING_SLUG, ruta } from "@/lib/landing-pintores";
import type { Lang } from "@/lib/i18n/routes";

export type ArticleTopic = "seo" | "web" | "tienda" | "pintores" | "general";

type Offer = { badge: string; title: string; price?: string; desc: string; cta: string; href: string };

function offer(topic: ArticleTopic, lang: Lang): Offer {
  const eur = (n: number) => (lang === "en" ? `€${n}` : `${n} €`);
  const vat = lang === "en" ? "+ VAT" : lang === "fr" ? "HT" : "+ IVA";
  const from = lang === "en" ? "From" : lang === "fr" ? "À partir de" : "Desde";
  const perMonth = lang === "en" ? "/month" : lang === "fr" ? "/mois" : "/mes";
  const O: Record<ArticleTopic, Record<Lang, Offer>> = {
    seo: {
      es: { badge: "Oferta SEO + GEO + Maps", title: "Que te encuentren en Google, en la IA y en el mapa", price: `${from} ${eur(PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M)}${perMonth} ${vat}`, desc: "Posicionamiento SEO, visibilidad en asistentes de IA y tu ficha de Google, en un solo servicio mensual.", cta: "Ver qué incluye", href: "/oferta-seo-geo-gbp/" },
      en: { badge: "SEO + GEO + Maps offer", title: "Get found on Google, in AI and on the map", price: `${from} ${eur(PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M)}${perMonth} ${vat}`, desc: "SEO, visibility in AI assistants and your Google profile in a single monthly service.", cta: "See what is included", href: "/en/local-seo-services/" },
      fr: { badge: "Offre SEO + GEO + Maps", title: "Soyez trouvé sur Google, dans l'IA et sur la carte", price: `${from} ${eur(PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M)}${perMonth} ${vat}`, desc: "SEO, visibilité dans les assistants IA et votre fiche Google, en un seul service mensuel.", cta: "Voir le détail", href: "/fr/local-seo-services/" },
    },
    web: {
      es: { badge: "Oferta web profesional", title: "Tu web profesional, a medida", price: `${from} ${eur(PRECIO_WEB_PROFESIONAL_DESDE)} ${vat}`, desc: "Diseño a medida en WordPress para que gestiones tú los contenidos. Hosting, dominio y correo aparte. Sin permanencia.", cta: "Ver la oferta", href: "/oferta-web-seo-organico/" },
      en: { badge: "Professional website offer", title: "Your professional website, custom built", price: `${from} ${eur(PRECIO_WEB_PROFESIONAL_DESDE)} ${vat}`, desc: "Custom design on WordPress so you manage the content. Hosting, domain and email not included. No minimum term.", cta: "See the web design service", href: "/en/web-design/" },
      fr: { badge: "Offre site professionnel", title: "Votre site professionnel, sur mesure", price: `${from} ${eur(PRECIO_WEB_PROFESIONAL_DESDE)} ${vat}`, desc: "Conception sur mesure sous WordPress pour gérer vous-même les contenus. Hébergement, domaine et messagerie non inclus. Sans engagement.", cta: "Voir le service de création de site", href: "/fr/creation-site-web/" },
    },
    tienda: {
      es: { badge: "Oferta tienda online", title: "Tu tienda online sin comisiones por venta", price: `${from} ${eur(PRECIO_TIENDA_ONLINE_DESDE)}`, desc: "Tienda con WooCommerce, sin comisiones por venta ni licencias mensuales y con el SEO técnico hecho desde el principio.", cta: "Ver la oferta", href: "/tienda-online/" },
      en: { badge: "Online store offer", title: "Your online store with no sales commission", price: `${from} ${eur(PRECIO_TIENDA_ONLINE_DESDE)}`, desc: "WooCommerce store with no sales commission or monthly licence, with technical SEO done from day one.", cta: "See the online store service", href: "/en/online-store/" },
      fr: { badge: "Offre boutique en ligne", title: "Votre boutique en ligne sans commission", price: `${from} ${eur(PRECIO_TIENDA_ONLINE_DESDE)}`, desc: "Boutique WooCommerce sans commission sur les ventes ni licence mensuelle, avec le SEO technique fait dès le départ.", cta: "Voir le service boutique en ligne", href: "/fr/boutique-en-ligne/" },
    },
    pintores: {
      es: { badge: "Para pintores", title: "Una web que reciba presupuestos", desc: "Diseñamos webs para pintores y empresas de pintura, con SEO local, ficha de Google y galería de trabajos.", cta: "Ver el servicio", href: LANDING_SLUG.es },
      en: { badge: "For painters", title: "A website that brings quote requests", desc: "We design websites for painters and painting companies, with local SEO, Google profile and a job gallery.", cta: "See the service", href: LANDING_SLUG.en },
      fr: { badge: "Pour les peintres", title: "Un site qui reçoit des demandes de devis", desc: "Nous concevons des sites pour peintres et entreprises de peinture, avec SEO local, fiche Google et galerie de chantiers.", cta: "Voir le service", href: LANDING_SLUG.fr },
    },
    general: {
      es: { badge: "Diagnóstico", title: "¿Cómo está tu web hoy?", desc: "Revisamos tu web y tu ficha de Google y te decimos qué corregir primero.", cta: "Pide tu diagnóstico", href: "/auditoria-digital/" },
      en: { badge: "Diagnosis", title: "How is your website doing today?", desc: "We review your website and Google profile and tell you what to fix first.", cta: "Get your diagnosis", href: "/en/digital-audit/" },
      fr: { badge: "Diagnostic", title: "Où en est votre site aujourd'hui ?", desc: "Nous examinons votre site et votre fiche Google et vous disons quoi corriger en premier.", cta: "Demandez votre diagnostic", href: "/fr/audit-digital/" },
    },
  };
  return O[topic][lang];
}

const T: Record<Lang, { audit: string; auditTitle: string; auditDesc: string; demos: string; demosDesc: string }> = {
  es: { audit: "Pide tu diagnóstico gratuito", auditTitle: "Diagnóstico gratuito", auditDesc: "Sin compromiso: te decimos qué mejorar en tu web.", demos: "Ver demos de webs", demosDesc: "Mira cómo quedaría una web como la tuya." },
  en: { audit: "Get your free diagnosis", auditTitle: "Free diagnosis", auditDesc: "No obligation: we tell you what to improve on your site.", demos: "See website demos", demosDesc: "See what a website like yours could look like." },
  fr: { audit: "Demandez votre diagnostic gratuit", auditTitle: "Diagnostic gratuit", auditDesc: "Sans engagement : nous vous disons quoi améliorer sur votre site.", demos: "Voir des démos de sites", demosDesc: "Voyez à quoi pourrait ressembler un site comme le vôtre." },
};

export function ArticleSidebar({ lang: langIn, topic }: { lang: string; topic: ArticleTopic }) {
  const lang: Lang = langIn === "en" || langIn === "fr" ? langIn : "es";
  const o = offer(topic, lang);
  const t = T[lang];
  const auditHref = ruta("/auditoria-digital/", lang);
  const sameAsAudit = topic === "general";
  return (
    <aside aria-label={o.badge} className="hidden lg:block lg:sticky lg:top-24 space-y-4 text-sm">
      <div className="mw-skin-cta text-white rounded-2xl p-5">
        <span className="inline-block bg-accent-500/20 border border-accent-400/50 rounded-full px-3 py-1 text-xs font-semibold text-accent-200 mb-3">{o.badge}</span>
        <p className="text-lg font-bold leading-snug mb-2">{o.title}</p>
        {o.price && <p className="text-accent-300 font-semibold mb-2">{o.price}</p>}
        <p className="text-primary-200 mb-4 leading-relaxed">{o.desc}</p>
        <TrackedLink href={o.href} ctaId={`sidebar-${topic}-oferta`} location="sidebar" type="link" text={o.cta} className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-full transition-colors">
          {o.cta} →
        </TrackedLink>
      </div>
      {!sameAsAudit && (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <p className="font-bold text-primary-700 mb-1">{t.auditTitle}</p>
          <p className="text-gray-600 mb-3">{t.auditDesc}</p>
          <TrackedLink href={auditHref} ctaId={`sidebar-${topic}-auditoria`} location="sidebar" type="audit" text={t.audit} className="text-accent-600 font-semibold hover:underline">
            {t.audit} →
          </TrackedLink>
        </div>
      )}
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
        <p className="font-bold text-primary-700 mb-1">{t.demos}</p>
        <p className="text-gray-600 mb-3">{t.demosDesc}</p>
        <TrackedLink href={DEMOS_SLUG[lang]} ctaId={`sidebar-${topic}-demos`} location="sidebar" type="link" text={t.demos} className="text-accent-600 font-semibold hover:underline">
          {t.demos} →
        </TrackedLink>
      </div>
    </aside>
  );
}

/** Contenedor del artículo con barra lateral: columna de lectura + lateral, al ancho del módulo de relacionados (max-w-5xl). */
export function ArticleShell({ lang, topic, children }: { lang: string; topic: ArticleTopic; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:grid lg:grid-cols-[minmax(0,1fr)_288px] lg:gap-8 lg:items-start">
      <article className="mw-article min-w-0 w-full max-w-3xl mx-auto lg:mx-0">{children}</article>
      <ArticleSidebar lang={lang} topic={topic} />
    </div>
  );
}
