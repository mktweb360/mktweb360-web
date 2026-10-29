"use client";
// chore: force cache invalidation for slider
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { preciosEnDatos, type PreciosOfertaSeo } from "@/lib/ofertas";

type Slide = {
  badge: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  bg: string;
  /** Capa entre imagen y texto (clase Tailwind). Por defecto, velo oscuro al 70 %. */
  overlay?: string;
  bgPosition?: string;
  price?: { old?: string; new: string; note?: string };
};

const SLIDES_BASE: Slide[] = [
  {
    badge: "SEO + GEO + Google Maps",
    title: "Que te encuentren en Google, en la IA y en el mapa",
    desc: "Posicionamiento SEO, GEO para que cualquier asistente de IA pueda encontrarte y citarte, y tu ficha de Google Business Profile optimizada. Un solo servicio mensual.",
    cta: "Ver qué incluye",
    href: "/oferta-seo-geo-gbp/",
    bg: "/oferta-seo-geo-gbp.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.72)_0%,rgba(15,28,46,0.5)_55%,rgba(15,28,46,0.2)_100%)]",
    bgPosition: "50% 40%",
    price: { new: "Desde 149 €/mes + IVA", note: "Con 6 meses de permanencia · o 349 €/mes sin permanencia" },
  },
  {
    badge: "Oferta Web Corporativa",
    title: "Tu web profesional, desde 249€",
    desc: "Diseño a medida integrado en WordPress para que gestiones tú los contenidos. Hosting, dominio y correo no incluidos. Sin permanencia.",
    cta: "Ver oferta completa",
    href: "/oferta-web-seo-organico/",
    bg: "/oferta-web-corporativa.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.70)_0%,rgba(15,28,46,0.48)_55%,rgba(15,28,46,0.18)_100%)]",
    bgPosition: "50% 45%",
  },
  {
    badge: "Tienda Online",
    title: "Tienda online profesional desde 490€",
    desc: "Sin comisiones por venta, sin licencias mensuales. Diseño 100% personalizado. SEO técnico incluido desde el primer día.",
    cta: "Ver oferta",
    href: "/landing/tienda-online-490/",
    bg: "/oferta-tienda-online.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.68)_0%,rgba(15,28,46,0.45)_55%,rgba(15,28,46,0.15)_100%)]",
    bgPosition: "50% 35%",
  },
];

// Los textos llevan las cifras de respaldo de la oferta SEO; el servidor pasa en «precios» las vigentes (preciosOfertaSeo).
export function OfertasSlider({ precios }: { precios?: PreciosOfertaSeo }) {
  const SLIDES = preciosEnDatos(SLIDES_BASE, precios);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES_BASE.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="relative py-16 px-4 bg-primary-700 overflow-hidden">
      {SLIDES.map((sl, i) => (
        <div key={sl.bg} aria-hidden="true" className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === active ? 1 : 0 }}>
          <Image src={sl.bg} alt="" fill loading="lazy" sizes="100vw" quality={90} className="object-cover" style={{ objectPosition: sl.bgPosition ?? "center" }} />
        </div>
      ))}
      <div className={`absolute inset-0 transition-colors duration-700 ${slide.overlay ?? "bg-primary-900/70"}`} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Todas las diapositivas se apilan en la misma celda de la rejilla: la sección toma la altura
            de la más alta (la primera, que lleva precio) y no da saltos al cambiar. Solo la activa es
            visible e interactiva (inert en las demás). */}
        <div className="grid">
          {SLIDES.map((sl, i) => {
            const isActive = i === active;
            return (
              <div
                key={sl.href}
                className={`[grid-area:1/1] flex flex-col items-center justify-center transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!isActive}
                inert={!isActive}
              >
                <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                  {sl.badge}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight [text-shadow:0_1px_6px_rgba(15,28,46,0.45)]">
                  {sl.title}
                </h2>
                <p className="text-white/90 max-w-xl mx-auto mb-6 [text-shadow:0_1px_4px_rgba(15,28,46,0.5)]">
                  {sl.desc}
                </p>
                {sl.price && (
                  <p className="mb-8 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                    {sl.price.old && <span className="text-white/70 line-through text-lg md:text-xl whitespace-nowrap">{sl.price.old}</span>}
                    <span className="text-accent-400 text-2xl md:text-3xl font-bold whitespace-nowrap">{sl.price.new}</span>
                    {sl.price.note && <span className="basis-full text-sm text-white/90">{sl.price.note}</span>}
                  </p>
                )}
                <Link
                  href={sl.href}
                  className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block"
                >
                  {sl.cta}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group p-2 -m-1.5 flex items-center justify-center"
              aria-label={`Ir a diapositiva ${i + 1}`}
            >
              <span className={`block w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-accent-500" : "bg-white/40 group-hover:bg-white/70"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
