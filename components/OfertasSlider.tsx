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
  {
    badge: "Tienda Online",
    title: "Tienda online profesional desde 490€",
    desc: "Sin comisiones por venta, sin licencias mensuales. Diseño 100% personalizado. SEO técnico incluido desde el primer día. Solo 5 plazas.",
    cta: "Ver oferta",
    href: "/tienda-online/",
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
    <section className="py-16 px-4 bg-primary-700">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
          {SLIDES[active].badge}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight min-h-[4rem]">
          {SLIDES[active].title}
        </h2>
        <p className="text-primary-200 max-w-xl mx-auto mb-8 min-h-[3rem]">
          {SLIDES[active].desc}
        </p>
        <Link
          href={SLIDES[active].href}
          className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block mb-10"
        >
          {SLIDES[active].cta}
        </Link>
        <div className="flex justify-center gap-3">
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
      </div>
    </section>
  );
}
