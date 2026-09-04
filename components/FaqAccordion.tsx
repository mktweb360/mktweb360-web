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
          <div key={faq.q} className="rounded-2xl border border-gray-100 bg-gray-50">
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
  );
}
