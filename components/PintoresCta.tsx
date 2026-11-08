import { TrackedLink } from "@/components/TrackedLink";
import { LANDING_SLUG, ruta, type LandingLang } from "@/lib/landing-pintores";

// Caja de llamada a la acción del artículo sobre webs para pintores (ES/EN/FR).
// Lleva a la landing de servicio, al diagnóstico gratuito y al contacto, con evento cta_click.
const T: Record<LandingLang, { audit: string; contact: string; service: string }> = {
  es: { audit: "Pide tu diagnóstico gratuito", contact: "Hablar con nosotros", service: "Ver el servicio de páginas web para pintores" },
  en: { audit: "Get your free diagnosis", contact: "Talk to us", service: "See our website design service for painters" },
  fr: { audit: "Demandez votre diagnostic gratuit", contact: "Nous contacter", service: "Voir notre service de création de site pour peintres" },
};

export function PintoresCta({
  lang,
  where,
  title,
  desc,
  strong,
}: {
  lang: LandingLang;
  where: string;
  title: string;
  desc: string;
  /** Bloque final: fondo oscuro y los tres enlaces. */
  strong?: boolean;
}) {
  const t = T[lang];
  const wrap = strong ? "mw-skin-cta text-white rounded-3xl p-8 my-10" : "bg-primary-50 rounded-xl p-6 border border-primary-100 my-8";
  const titleCls = strong ? "text-2xl font-bold mb-3" : "font-semibold text-primary-700 mb-2";
  const descCls = strong ? "text-primary-200 mb-6" : "text-gray-600 text-sm mb-4";
  const primary = "inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors";
  const second = strong
    ? "inline-block border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
    : "inline-block border-2 border-primary-600 text-primary-700 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-50 transition-colors";
  return (
    <aside className={wrap}>
      {strong ? <h2 className={titleCls}>{title}</h2> : <p className={titleCls}>{title}</p>}
      <p className={descCls}>{desc}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <TrackedLink href={ruta("/auditoria-digital/", lang)} ctaId={`art-pintores-${where}-auditoria`} location={`articulo-${where}`} type="audit" text={t.audit} className={primary}>{t.audit}</TrackedLink>
        <TrackedLink href={ruta("/contacto/", lang)} ctaId={`art-pintores-${where}-contacto`} location={`articulo-${where}`} type="contact" text={t.contact} className={second}>{t.contact}</TrackedLink>
        {strong && (
          <TrackedLink href={LANDING_SLUG[lang]} ctaId={`art-pintores-${where}-servicio`} location={`articulo-${where}`} type="link" text={t.service} className={second}>{t.service}</TrackedLink>
        )}
      </div>
      {!strong && (
        <p className="mt-4 text-sm">
          <TrackedLink href={LANDING_SLUG[lang]} ctaId={`art-pintores-${where}-servicio`} location={`articulo-${where}`} type="link" text={t.service} className="text-accent-600 font-semibold hover:underline">{t.service} →</TrackedLink>
        </p>
      )}
    </aside>
  );
}
