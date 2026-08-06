/**
 * OfferBannerTiendaOnline — Banner full-width para la oferta Tienda Online desde 490€
 *
 * CAMPAÑA: tienda-online-490 (EVERGREEN — activa mientras dure la campaña de Ads)
 * Archivo de campaña en Drive: CAMPANA-tienda-online-490-evergreen.md
 *
 * INSERTAR EN: páginas de tienda online y artículos de blog relacionados
 *   - app/(site)/diseno-de-paginas-web/diseno-tiendas-online/page.tsx
 *   - Artículos de blog sobre ecommerce, crear tienda online, etc.
 *
 * CUANDO FINALICE LA CAMPAÑA:
 *   1. Eliminar este archivo
 *   2. Eliminar todos los imports de este componente
 *   3. Las páginas que lo importan quedan sin banner automáticamente
 *   4. Actualizar CAMPANA-tienda-online-490-evergreen.md en Drive → Estado: INACTIVA
 *   5. Añadir redirect 301: /landing/tienda-online-490 → /tienda-online/
 */

import Link from "next/link";

export function OfferBannerTiendaOnline() {
  return (
    <section
      className="relative overflow-hidden bg-primary-900 py-16 px-4"
      aria-label="Oferta Tienda Online desde 490€"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-500" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-primary-400" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400/40 rounded-full px-4 py-1.5 text-xs font-semibold text-accent-300 mb-4">
              <span>🛒</span>
              <span>Tienda online profesional</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Tu tienda online desde 490€
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              Sin comisiones por venta. Sin licencias mensuales. Con pasarela de pago,
              gestión de stock y todo lo que necesitas para vender online desde el primer día.
            </p>
          </div>

          {/* Right: price + CTA */}
          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <div className="flex items-baseline gap-3">
              <span className="text-white/40 line-through text-xl">desde 1.200€</span>
              <span className="text-5xl font-bold text-white">490€</span>
              <span className="text-white/60 text-sm">+ IVA</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="/landing/tienda-online-490/"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg text-sm whitespace-nowrap"
              >
                Ver la oferta completa →
              </Link>
              <a
                href="tel:+34622748987"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                📞 622 74 89 87
              </a>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { v: "490€", l: "precio desde" },
            { v: "0%", l: "comisión por venta" },
            { v: "WooCommerce", l: "plataforma incluida" },
            { v: "0€", l: "licencias mensuales" },
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
