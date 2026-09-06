import type { DemoItem } from "@/lib/demos";

/**
 * DemoPreviewBanner — banner con previsualización de una demo real del sector,
 * para insertar dentro de cada artículo "5 factores clave web para [sector]".
 * Reutiliza el mismo lenguaje visual que DemoCarousel (imagen + overlay + CTA).
 */
export function DemoPreviewBanner({ demo }: { demo: DemoItem }) {
  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver demo en vivo: ${demo.nombre}`}
      className="group not-prose relative block h-56 sm:h-64 rounded-2xl overflow-hidden shadow-[0_10px_28px_-10px_rgba(15,28,46,0.28)] hover:shadow-[0_24px_46px_-16px_rgba(15,28,46,0.42)] hover:-translate-y-1 transition-all duration-500"
    >
      <img
        src={demo.image}
        alt={demo.nombre}
        className="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
        <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
          Demo real de {demo.sector.toLowerCase()}
        </span>
        <h3 className="text-white font-bold text-lg sm:text-xl drop-shadow-sm">
          Así podría verse tu web · {demo.nombre}
        </h3>
        <span className="text-white/90 text-sm font-semibold mt-1 group-hover:underline">
          Ver demo en vivo →
        </span>
      </div>
    </a>
  );
}
