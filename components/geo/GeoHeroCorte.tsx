import type { ReactNode } from "react";

/**
 * Cabecera de la página de GEO con corte recto en forma de rayo (prueba del 15/11/2026).
 * Escritorio: texto a la izquierda sobre fondo sólido (≈60 %) y, a la derecha (≈40 %), una captura
 * estilizada de una respuesta de IA que recomienda un negocio (HTML/CSS, sin imagen que cargar).
 * Los separa un corte recto: arriba el sólido invade un poco el panel (pico pequeño), en el tramo
 * central el corte es vertical (en el 60 %) y abajo el panel invade más el sólido (pico grande), con
 * la misma inclinación en los dos picos. El panel empieza en el 48 % de la cabecera, así que 31,5 %
 * del panel = 64 % de la cabecera arriba; 23 % = 60 % en el tramo vertical; 0 % = 48 % abajo.
 * En la parte sólida flotan, con movimiento lento, los nombres de las IA principales (solo
 * escritorio ancho; se paran con prefers-reduced-motion, ver globals.css).
 * Móvil: fondo sólido con auroras y texto a ancho completo; la captura no se muestra.
 * El contenido (migas, H1, textos, CTA) lo pone cada página: este componente solo da el marco.
 * El ejemplo es ilustrativo (negocio ficticio, rotulado como tal); no es un resultado real.
 */

type Lang = "es" | "en" | "fr";

const TXT: Record<Lang, { ia: string; pregunta: string; antes: string; negocio: string; despues: string; reco: string; ejemplo: string }> = {
  es: {
    ia: "Asistente de IA",
    pregunta: "¿Qué fontanero de confianza me recomiendas en mi zona para una avería urgente?",
    antes: "Te recomiendo ",
    negocio: "Fontanería Ejemplo",
    despues: ": atiende urgencias, tiene reseñas verificadas y trabaja en tu zona.",
    reco: "Recomendado",
    ejemplo: "Ejemplo ilustrativo con un negocio ficticio",
  },
  en: {
    ia: "AI assistant",
    pregunta: "Which trustworthy plumber do you recommend in my area for an urgent leak?",
    antes: "I recommend ",
    negocio: "Example Plumbing",
    despues: ": they handle emergencies, have verified reviews and work in your area.",
    reco: "Recommended",
    ejemplo: "Illustrative example with a fictional business",
  },
  fr: {
    ia: "Assistant IA",
    pregunta: "Quel plombier de confiance me recommandez-vous dans ma zone pour une urgence ?",
    antes: "Je vous recommande ",
    negocio: "Plomberie Exemple",
    despues: " : elle intervient en urgence, a des avis vérifiés et travaille dans votre zone.",
    reco: "Recommandé",
    ejemplo: "Exemple illustratif avec une entreprise fictive",
  },
};

// Nombres de las IA principales que cita el texto de la página (marcas citadas, sin logotipos).
const IAS: { t: string; cls: string; d: string; dur: string }[] = [
  { t: "ChatGPT", cls: "left-[50.5%] top-[12%]", d: "0s", dur: "9s" },
  { t: "Gemini", cls: "left-[53%] top-[27%]", d: "1.4s", dur: "11s" },
  { t: "Copilot", cls: "left-[50.5%] top-[42%]", d: "2.6s", dur: "10s" },
  { t: "Perplexity", cls: "left-[51.5%] top-[56%]", d: "0.8s", dur: "12s" },
  { t: "Claude", cls: "left-[54%] top-[70%]", d: "2s", dur: "10.5s" },
];

export function GeoHeroCorte({ children, lang = "es" }: { children: ReactNode; lang?: Lang }) {
  const t = TXT[lang];
  return (
    <section className="mw-hero-corte relative isolate overflow-hidden bg-[#0f1c2e] text-white">
      {/* Auroras suaves que se desplazan (toda la cabecera) */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 overflow-hidden">
        <div className="mw-aurora absolute -left-[15%] -top-[30%] h-[80%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.28),transparent_65%)] blur-3xl" />
        <div className="mw-aurora mw-aurora-3 absolute left-[10%] -bottom-[35%] h-[70%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_65%)] blur-3xl" />
      </div>

      {/* Panel derecho con el corte: captura estilizada de una respuesta de IA */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 hidden bg-gradient-to-br from-[#2a1d63] via-[#1b1340] to-[#0c1426] lg:left-[48%] lg:block lg:[clip-path:polygon(31.5%_0,100%_0,100%_100%,0_100%,23%_62%,23%_14%)]"
      >
        <div className="mw-aurora mw-aurora-2 absolute -right-[20%] top-[0%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.32),transparent_65%)] blur-3xl" />
        <div className="mw-aurora absolute left-[20%] -bottom-[25%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.45),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 flex items-center pl-[28%] pr-[5%]">
          <div className="mw-float w-full" style={{ animationDuration: "13s" }}>
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md xl:p-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#a78bfa] to-accent-500" />
                {t.ia}
              </div>
              <div className="ml-auto mb-4 max-w-[88%] rounded-2xl rounded-br-sm bg-gradient-to-br from-[#7c3aed] to-[#c026d3] px-4 py-3 text-sm leading-snug text-white xl:text-base">
                {t.pregunta}
              </div>
              <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 px-4 py-3 text-sm leading-snug text-white/90 xl:text-base">
                {t.antes}
                <strong className="font-bold text-accent-400">{t.negocio}</strong>
                {t.despues}
                <span className="mt-3 flex">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                    {t.reco}
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-wider text-white/45">{t.ejemplo}</p>
          </div>
        </div>
      </div>

      {/* Nombres de las IA flotando en la parte sólida (solo escritorio ancho) */}
      <div aria-hidden="true" className="pointer-events-none hidden min-[1360px]:block">
        {IAS.map((c) => (
          <span
            key={c.t}
            className={`mw-float absolute ${c.cls} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-sm font-semibold text-white/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md`}
            style={{ animationDelay: c.d, animationDuration: c.dur }}
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#a78bfa] to-accent-500" />
            {c.t}
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 lg:min-h-[560px] grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
        <div>{children}</div>
      </div>
    </section>
  );
}
