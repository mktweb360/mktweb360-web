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
          <div key={faq.q} className={`rounded-2xl ring-1 transition-all duration-300 ${isOpen ? "bg-white ring-transparent shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]" : "bg-gray-50 ring-gray-200"}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
            >
              <h3 className="font-bold text-primary-700">{faq.q}</h3>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl leading-none transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-[#7c3aed] to-accent-500 text-white" : "bg-white ring-1 ring-gray-200 text-accent-500"} ${
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
