// Preguntas frecuentes de la portada (ES/EN/FR), con el diseño a dos columnas.
// Componente de servidor (<details> nativo, sin JS).

const TXT = {
  es: { kicker: "Preguntas frecuentes", h1: "Lo que todo el mundo", h2: "nos pregunta.", lead: "Y si tu duda no está aquí, pregúntanos directamente: te contestamos nosotros, sin rodeos.", cta: "Hacer una pregunta" },
  en: { kicker: "FAQ", h1: "What everyone", h2: "asks us.", lead: "And if your question isn't here, just ask us: we answer ourselves, straight to the point.", cta: "Ask a question" },
  fr: { kicker: "Questions fréquentes", h1: "Ce que tout le monde", h2: "nous demande.", lead: "Et si votre question n'y est pas, posez-la-nous directement : c'est nous qui répondons, sans détour.", cta: "Poser une question" },
} as const;

export function HomeFaq({ lang = "es", items }: { lang?: "es" | "en" | "fr"; items: { q: string; a: string }[] }) {
  const t = TXT[lang] ?? TXT.es;
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24 px-4 bg-white">
      <div aria-hidden="true" className="absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#db2777]/10 blur-3xl" />
      <div aria-hidden="true" className="absolute left-0 bottom-0 -z-10 h-[24rem] w-[24rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <p className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 ring-1 ring-gray-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            {t.kicker}
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-primary-700">
            {t.h1}{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 bg-clip-text text-transparent">{t.h2}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="rounded-full bg-accent-500 px-6 py-3 font-bold text-white shadow-[0_10px_25px_-10px_rgba(249,115,22,0.7)] transition-colors hover:bg-accent-600">
              {t.cta}
            </a>
            <a href="tel:+34622748987" className="rounded-full px-6 py-3 font-semibold text-primary-700 ring-1 ring-gray-300 transition-colors hover:bg-gray-50">
              +34 622 74 89 87
            </a>
          </div>
        </div>
        <div className="space-y-4">
          {items.map((faq, i) => (
            <details
              key={faq.q}
              className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 md:px-6 [&::-webkit-details-marker]:hidden">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-primary-600 ring-1 ring-gray-200 transition-all group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base md:text-lg font-bold text-primary-700">{faq.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
              </summary>
              <div className="mw-faq-body px-5 pb-6 md:px-6 md:pl-[5.5rem] text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
