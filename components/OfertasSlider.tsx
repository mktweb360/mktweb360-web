"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SLIDES = [
  {
    badge: "Oferta especial junio",
    title: "6 meses de SEO por el precio de 3",
    desc: "Contrata cualquier servicio SEO este mes y llévate 6 meses de posicionamiento pagando solo 3. Plazas limitadas.",
    cta: "Quiero esta oferta",
    href: "/oferta-seo/",
  },
  {
    badge: "Oferta Web + SEO",
    title: "Tu web profesional + 6 meses de SEO por 999€",
    desc: "Web profesional + 6 meses de SEO por solo 999€ + IVA. Hosting, dominio, correo corporativo y soporte incluidos. Solo 5 plazas.",
    cta: "Ver oferta completa",
    href: "/oferta-web-seo/",
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

  return (
    <section className="py-12 px-4 bg-primary-700 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative min-h-[200px]">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
              i === active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {slide.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{slide.title}</h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8">{slide.desc}</p>
            <Link
              href={slide.href}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block"
            >
              {slide.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 relative z-10" style={{ marginTop: "220px" }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === active ? "bg-accent-500" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
