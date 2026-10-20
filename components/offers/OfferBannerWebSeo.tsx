/**
 * OfferBannerWebSeo — Banner full-width de la oferta «Web profesional desde 249 €».
 * (El nombre del archivo se conserva para no tocar los imports de las páginas que lo usan.)
 *
 * CAMPAÑA: oferta-web-corporativa (EVERGREEN — activa). Inventario: CAMPAÑA-ofertas-web-y-seo-2026-10-20.md (Drive).
 * 20-oct-2026: se retira el paquete «Web + 6 meses de SEO por 999 €» y el precio tachado de 2.600 €.
 *
 * INSERTADO EN: páginas de diseño web y artículos «5 factores web…» (grep OfferBannerWebSeo).
 *
 * CUANDO FINALICE LA OFERTA:
 *   1. Eliminar este archivo y todos los imports de este componente.
 *   2. Las páginas que lo importan quedan sin banner automáticamente.
 *   3. Actualizar el documento de campaña en Drive → Estado: RETIRADA.
 */

import Link from "next/link";

export function OfferBannerWebSeo() {
  return (
    <section
      className="relative overflow-hidden bg-primary-900 py-16 px-4"
      aria-label="Oferta web profesional — desde 249 €"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-500" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-primary-400" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400/40 rounded-full px-4 py-1.5 text-xs font-semibold text-accent-300 mb-4">
              <span>Oferta web profesional</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Tu web profesional, desde 249 €
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              Diseño a medida integrado en WordPress para que gestiones tú los contenidos. Hosting, dominio y correo no incluidos. Sin permanencia.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="flex items-baseline gap-3">
              <span className="text-white/60 text-sm">Desde</span>
              <span className="text-5xl font-bold text-white">249 €</span>
              <span className="text-white/60 text-sm">+ IVA</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
              <Link
                href="/oferta-web-seo-organico/"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg text-sm whitespace-nowrap"
              >
                Ver la oferta completa →
              </Link>
              <a href="tel:+34622748987" className="text-white/70 hover:text-white text-sm transition-colors">
                📞 622 74 89 87
              </a>
            </div>
            <Link href="/auditoria-digital/" className="text-white/70 hover:text-white text-xs underline underline-offset-2 mt-1">
              ¿Prefieres empezar con una auditoría gratuita de tu web?
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { v: "249 €", l: "desde, + IVA" },
            { v: "A medida", l: "diseño de tu negocio" },
            { v: "WordPress", l: "gestionas tú los contenidos" },
            { v: "0 €", l: "permanencia" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-bold text-accent-400 text-lg">{s.v}</div>
              <div className="text-white/50 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
