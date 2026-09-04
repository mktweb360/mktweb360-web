"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden rounded-2xl pr-10 sm:pr-16">
      {/* Interrogación de fondo: una sola, para toda la capa del acordeón (no por pregunta).
          Vive en el hueco reservado por el padding derecho, detrás de las tarjetas (-z-10).
          Al estar recortada por este contenedor overflow-hidden, cuyo alto total crece o
          decrece según se abren/cierran las preguntas, se revela más o menos silueta del
          carácter según el conmutador. */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-0 -z-10 translate-x-1/4 text-[420px] font-black italic leading-none -skew-x-6 text-primary-900/[0.05]"
      >
        ?
      </span>

      <div className="relative z-10 space-y-4">
        {items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.q}
              className="rounded-2xl border border-gray-100 bg-gray-50"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              >
                <h3 className="font-bold text-primary-700">{faq.q}</h3>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-600 font-bold transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
