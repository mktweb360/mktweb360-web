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
 * Carrusel de demos: imagen grande arriba (ancho completo de la columna) + fila de
 * 3 miniaturas debajo (grid-cols-3), siempre visibles. Pensado para columnas más
 * estrechas (2 carruseles lado a lado al 50%) en vez de una fila ancha con las
 * miniaturas al lado.
 * Rota automáticamente por todos los items; pausa al pasar el ratón por encima.
 * Cada tarjeta es un enlace que abre la demo en pestaña nueva.
 */
export function DemoCarousel({ items, intervalMs = 4500 }: DemoCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || n < 1) return;
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

  // Ventana visible: 4 tarjetas empezando por la activa, dando la vuelta circularmente.
  // offset 0 = tarjeta grande; offsets 1-3 = las 3 miniaturas de abajo.
  const visible = [0, 1, 2, 3].map((offset) => ({
    item: items[(active + offset) % n],
    offset,
  }));
  const big = visible[0];
  const thumbs = visible.slice(1);

  const renderCard = (item: DemoItem, key: string, isBig: boolean) => (
    <a
      key={key}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block ${
        isBig ? "h-56 sm:h-64" : "h-20 sm:h-24"
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
          isBig ? "bottom-3 text-xs px-2.5 py-1" : "bottom-1.5 text-[10px] px-2 py-0.5"
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

      <div className="mb-4">
        {renderCard(big.item, `${big.item.nombre}-big`, true)}
        <div className="grid grid-cols-3 gap-3 mt-3">
          {thumbs.map(({ item, offset }) => renderCard(item, `${item.nombre}-${offset}`, false))}
        </div>
      </div>

      {/* Controles/dots */}
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
