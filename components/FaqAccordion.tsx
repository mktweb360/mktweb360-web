"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className="relative isolate overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
          >
            {/* Interrogación de fondo: gigante, muy sutil, oblicua, con bastante grosor.
                Al estar en un contenedor overflow-hidden cuyo alto crece/decrece con el acordeón,
                se revela más o menos silueta del carácter según se abre o se cierra. */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute top-0 right-3 -z-10 text-[320px] font-black italic leading-none -skew-x-6 text-primary-900/[0.05]"
            >
              ?
            </span>

            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="relative z-10 w-full flex items-center justify-between gap-4 text-left px-6 py-5"
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
              className="relative z-10 grid transition-[grid-template-rows] duration-300 ease-out"
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
  );
}
