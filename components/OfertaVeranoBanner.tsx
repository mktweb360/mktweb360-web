import Link from "next/link";

export function OfertaVeranoBanner() {
  return (
    <section className="py-12 px-4 bg-primary-900">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-accent-500/40 bg-primary-900 p-8 md:p-10 text-center text-white shadow-lg">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Oferta verano · Solo julio y agosto
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Paquete SEO + GEO + GBP al 50%:{" "}
            <span className="text-accent-400">349€/mes</span>
          </h3>
          <p className="text-sm text-primary-200 mb-7">
            <span className="line-through opacity-70">699€/mes</span> · 5 plazas disponibles
          </p>
          <Link
            href="/landing/seo-geo-gbp-verano/"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Quiero la oferta →
          </Link>
        </div>
      </div>
    </section>
  );
}
