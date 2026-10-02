"use client";
// chore: force cache invalidation for slider
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

const SLIDES: Slide[] = [
  {
    badge: "SEO + GEO + Google Maps",
    title: "Que te encuentren en Google, en la IA y en el mapa",
    desc: "Posicionamiento SEO, GEO para que cualquier asistente de IA pueda encontrarte y citarte, y tu ficha de Google Business Profile optimizada. Un solo servicio mensual.",
    cta: "Ver qué incluye",
    href: "/oferta-seo-geo-gbp/",
    bg: "/oferta-seo-geo-gbp.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.72)_0%,rgba(15,28,46,0.5)_55%,rgba(15,28,46,0.2)_100%)]",
    bgPosition: "50% 40%",
    price: { new: "349 €/mes + IVA", note: "Tres servicios en uno · sin permanencia" },
  },
  {
    badge: "Oferta Web Corporativa",
    title: "Tu web profesional, desde 249€",
    desc: "Solo la web: 249€. Con 6 meses de SEO incluido: 999€ + IVA. Hosting, dominio, correo corporativo, blog y soporte incluidos.",
    cta: "Ver oferta completa",
    href: "/oferta-web-seo/",
    bg: "/oferta-web-corporativa.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.70)_0%,rgba(15,28,46,0.48)_55%,rgba(15,28,46,0.18)_100%)]",
    bgPosition: "50% 45%",
  },
  {
    badge: "Tienda Online",
    title: "Tienda online profesional desde 490€",
    desc: "Sin comisiones por venta, sin licencias mensuales. Diseño 100% personalizado. SEO técnico incluido desde el primer día. Solo 5 plazas.",
    cta: "Ver oferta",
    href: "/landing/tienda-online-490/",
    bg: "/oferta-tienda-online.jpg",
    overlay: "bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(15,28,46,0.68)_0%,rgba(15,28,46,0.45)_55%,rgba(15,28,46,0.15)_100%)]",
    bgPosition: "50% 35%",
  },
];

export function OfertasSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
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
        <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
          {slide.badge}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight min-h-[4rem] [text-shadow:0_1px_6px_rgba(15,28,46,0.45)]">
          {slide.title}
        </h2>
        <p className="text-white/90 max-w-xl mx-auto mb-6 min-h-[3rem] [text-shadow:0_1px_4px_rgba(15,28,46,0.5)]">
          {slide.desc}
        </p>
        {slide.price && (
          <p className="mb-8 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
            {slide.price.old && <span className="text-white/70 line-through text-lg md:text-xl whitespace-nowrap">{slide.price.old}</span>}
            <span className="text-accent-400 text-2xl md:text-3xl font-bold whitespace-nowrap">{slide.price.new}</span>
            {slide.price.note && <span className="basis-full text-sm text-white/90">{slide.price.note}</span>}
          </p>
        )}
        <Link
          href={slide.href}
          className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block mb-10"
        >
          {slide.cta}
        </Link>
        <div className="flex justify-center gap-3">
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
