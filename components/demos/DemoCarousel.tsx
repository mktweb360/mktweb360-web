"use client";

import { useEffect, useRef, useState } from "react";

export interface DemoItem {
  nombre: string;
  sector: string;
  url: string;
  image: string;
}

interface DemoCarouselProps {
  items: DemoItem[];
  /** ms entre rotaciones automáticas */
  intervalMs?: number;
}

/**
 * Carrusel de demos: 1 fila, columna grande (2/5) + 3 columnas pequeñas (1/5 c/u).
 * Las pequeñas son ~3/4 de la altura de la grande y se alinean al fondo de la fila
 * (hueco visible arriba), a propósito, para diferenciar visualmente la tarjeta activa.
 * Rota automáticamente por todos los items; pausa al pasar el ratón por encima.
 * Cada tarjeta es un enlace que abre la demo en pestaña nueva.
 */
export function DemoCarousel({ items, intervalMs = 4500 }: DemoCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || n <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, n, intervalMs]);

  if (n === 0) return null;

  const goPrev = () => setActive((i) => (i - 1 + n) % n);
  const goNext = () => setActive((i) => (i + 1) % n);

  // Ventana visible: 4 tarjetas empezando por la activa, dando la vuelta circularmente
  const visible = [0, 1, 2, 3].map((offset) => ({
    item: items[(active + offset) % n],
    offset,
  }));

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Precarga silenciosa de todas las imagenes: evita el parpadeo al rotar */}
      <div aria-hidden="true" className="hidden">
        {items.map((item) => (
          <img key={item.image} src={item.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-4">
        {visible.map(({ item, offset }) => {
          const isBig = offset === 0;
          const hiddenClass =
            offset === 1 ? "hidden sm:block" : offset >= 2 ? "hidden lg:block" : "block";
          return (
            <a
              key={`${item.nombre}-${offset}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${hiddenClass} ${
                isBig ? "h-64 sm:h-72" : "h-44 sm:h-[216px] self-end"
              } rounded-2xl overflow-hidden shadow-[0_10px_28px_-10px_rgba(15,28,46,0.28)] hover:shadow-[0_24px_46px_-16px_rgba(15,28,46,0.42)] hover:-translate-y-1.5 transition-all duration-500`}
            >
              <img
                src={item.image}
                alt={item.nombre}
                className="absolute inset-0 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                style={{ width: "100%", height: "100%", maxWidth: "none" }}
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/20 transition-colors duration-300" />
              <span
                className={`absolute left-3 bg-black/40 backdrop-blur-sm text-white font-semibold rounded-full ${
                  isBig ? "bottom-3 text-xs px-2.5 py-1" : "bottom-2 text-[10px] px-2 py-0.5"
                }`}
              >
                {item.sector}
              </span>
              <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                →
              </span>
              {isBig && (
                <h3 className="absolute right-3 bottom-3 text-white font-bold text-base sm:text-lg drop-shadow-sm">
                  {item.nombre}
                </h3>
              )}
            </a>
          );
        })}
      </div>

      {/* Controles: flechas + dots */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Demo anterior"
          className="w-8 h-8 rounded-full border border-gray-200 text-primary-600 flex items-center justify-center hover:bg-primary-50 transition-colors shrink-0"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {items.map((item, i) => (
            <button
              key={item.nombre}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver demo ${item.nombre}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent-500" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label="Siguiente demo"
          className="w-8 h-8 rounded-full border border-gray-200 text-primary-600 flex items-center justify-center hover:bg-primary-50 transition-colors shrink-0"
        >
          ›
        </button>
      </div>
    </div>
  );
}
