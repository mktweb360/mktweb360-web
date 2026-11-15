"use client";

import { useEffect, useReducer, useRef, useState, useSyncExternalStore } from "react";

/**
 * Conversación de ejemplo con un asistente de IA para la cabecera de GEO (prueba del 15/11/2026).
 * Se escribe sola: la pregunta aparece letra a letra, el asistente "piensa" un momento, responde
 * recomendando un negocio y, tras una pausa, pasa a otra pregunta de otro sector.
 *
 * - Es solo decoración (aria-hidden): los negocios son ficticios y el rótulo lo dice. No son resultados.
 * - La altura es constante: todas las conversaciones se apilan en la misma celda y solo se muestra
 *   la activa; el texto aún no escrito reserva su sitio (invisible), así que no hay saltos de diseño.
 * - Se detiene si la pestaña no está visible o la cabecera sale de pantalla, y con
 *   prefers-reduced-motion se muestra la primera conversación completa y quieta.
 * - Antes de hidratar el texto está vacío (no se pinta nada que luego haya que borrar).
 */

type Lang = "es" | "en" | "fr";
type Par = { q: string; antes: string; negocio: string; despues: string };

const PARES: Record<Lang, Par[]> = {
  es: [
    { q: "¿Qué fontanero de confianza me recomiendas en mi zona para una avería urgente?", antes: "Te recomiendo ", negocio: "Fontanería Ejemplo", despues: ": atiende urgencias, tiene reseñas verificadas y trabaja en tu zona." },
    { q: "Necesito un fisioterapeuta cerca de casa con buenas opiniones.", antes: "Una buena opción es ", negocio: "Clínica Fisio Ejemplo", despues: ": reseñas muy positivas, cita rápida y tratamientos explicados con claridad." },
    { q: "¿Quién me puede reformar un baño sin sorpresas en el presupuesto?", antes: "Prueba con ", negocio: "Reformas Ejemplo", despues: ": presupuesto cerrado por escrito, plazos claros y trabajos anteriores que puedes ver." },
    { q: "¿Qué abogado de familia me recomiendas para una primera consulta?", antes: "Puedes consultar con ", negocio: "Despacho Ejemplo", despues: ": especialistas en derecho de familia, primera consulta clara y trato cercano." },
  ],
  en: [
    { q: "Which trustworthy plumber do you recommend in my area for an urgent leak?", antes: "I recommend ", negocio: "Example Plumbing", despues: ": they handle emergencies, have verified reviews and work in your area." },
    { q: "I need a physiotherapist near home with good reviews.", antes: "A good option is ", negocio: "Example Physio Clinic", despues: ": very positive reviews, quick appointments and treatments explained clearly." },
    { q: "Who can renovate my bathroom with no surprises in the quote?", antes: "Try ", negocio: "Example Renovations", despues: ": fixed written quotes, clear timelines and previous jobs you can see." },
    { q: "Which family lawyer do you recommend for a first consultation?", antes: "You can consult ", negocio: "Example Law Firm", despues: ": family law specialists, a clear first consultation and a personal approach." },
  ],
  fr: [
    { q: "Quel plombier de confiance me recommandez-vous dans ma zone pour une urgence ?", antes: "Je vous recommande ", negocio: "Plomberie Exemple", despues: " : elle intervient en urgence, a des avis vérifiés et travaille dans votre zone." },
    { q: "Il me faut un kinésithérapeute près de chez moi avec de bons avis.", antes: "Une bonne option est ", negocio: "Cabinet Kiné Exemple", despues: " : avis très positifs, rendez-vous rapides et soins expliqués clairement." },
    { q: "Qui peut rénover ma salle de bains sans mauvaise surprise sur le devis ?", antes: "Essayez ", negocio: "Rénovations Exemple", despues: " : devis ferme par écrit, délais clairs et chantiers précédents visibles." },
    { q: "Quel avocat en droit de la famille me recommandez-vous pour une première consultation ?", antes: "Vous pouvez consulter ", negocio: "Cabinet Exemple", despues: " : spécialistes du droit de la famille, première consultation claire et approche personnalisée." },
  ],
};

const ROT: Record<Lang, { ia: string; reco: string; ejemplo: string }> = {
  es: { ia: "Asistente de IA", reco: "Recomendado", ejemplo: "Ejemplo ilustrativo con negocios ficticios" },
  en: { ia: "AI assistant", reco: "Recommended", ejemplo: "Illustrative example with fictional businesses" },
  fr: { ia: "Assistant IA", reco: "Recommandé", ejemplo: "Exemple illustratif avec des entreprises fictives" },
};

type Fase = "q" | "pensar" | "a" | "pausa";
const TICK = 30; // ms por paso
const PENSAR = 30; // pasos (~0,9 s)
const PAUSA = 120; // pasos (~3,6 s)
const VEL_A = 2; // letras por paso en la respuesta

/** Pinta `texto` con las primeras `n` letras visibles y el resto invisible (reserva el sitio). */
function Escrito({ partes, n }: { partes: { t: string; cls?: string }[]; n: number }) {
  // Letras ya escritas antes de cada parte (calculado sin reasignar variables durante el render).
  const inicios = partes.map((_, k) => partes.slice(0, k).reduce((acc, q) => acc + q.t.length, 0));
  return (
    <>
      {partes.map((p, k) => {
        const ver = Math.max(0, Math.min(p.t.length, n - inicios[k]));
        return (
          <span key={k} className={p.cls}>
            {p.t.slice(0, ver)}
            <span className="invisible">{p.t.slice(ver)}</span>
          </span>
        );
      })}
    </>
  );
}

type Estado = { i: number; fase: Fase; n: number };

function avanzar(e: Estado, longitudes: { q: number; a: number }[]): Estado {
  const l = longitudes[e.i];
  const n = e.n + 1;
  if (e.fase === "q") return n >= l.q ? { ...e, fase: "pensar", n: 0 } : { ...e, n };
  if (e.fase === "pensar") return n >= PENSAR ? { ...e, fase: "a", n: 0 } : { ...e, n };
  if (e.fase === "a") return n * VEL_A >= l.a ? { ...e, fase: "pausa", n: 0 } : { ...e, n };
  return n >= PAUSA ? { i: (e.i + 1) % longitudes.length, fase: "q", n: 0 } : { ...e, n };
}

function useMovimientoReducido() {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function GeoHeroChat({ lang = "es" }: { lang?: Lang }) {
  const pares = PARES[lang];
  const rot = ROT[lang];
  const longitudes = pares.map((p) => ({ q: p.q.length, a: (p.antes + p.negocio + p.despues).length }));
  const raiz = useRef<HTMLDivElement>(null);
  const quieto = useMovimientoReducido();
  const [{ i, fase, n }, paso] = useReducer((e: Estado) => avanzar(e, longitudes), { i: 0, fase: "q", n: 0 });
  const [activo, setActivo] = useState(false); // visible en pantalla y pestaña visible

  useEffect(() => {
    if (quieto) return;
    let enPantalla = false;
    const actualizar = () => setActivo(enPantalla && !document.hidden);
    const io = new IntersectionObserver(([e]) => {
      enPantalla = e.isIntersecting;
      actualizar();
    }, { threshold: 0.2 });
    if (raiz.current) io.observe(raiz.current);
    document.addEventListener("visibilitychange", actualizar);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", actualizar);
    };
  }, [quieto]);

  useEffect(() => {
    if (quieto || !activo) return;
    const id = window.setInterval(paso, TICK);
    return () => window.clearInterval(id);
  }, [quieto, activo, paso]);

  return (
    <div ref={raiz} className="w-full" aria-hidden="true">
      <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md xl:p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-white/70">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#a78bfa] to-accent-500" />
          {rot.ia}
        </div>
        {/* Todas las conversaciones en la misma celda: la altura es la de la más larga */}
        <div className="grid">
          {pares.map((p, k) => {
            const actual = k === i;
            const lenQ = p.q.length;
            const lenA = (p.antes + p.negocio + p.despues).length;
            let verQ = 0, verA = 0, pensando = false, caret = false;
            if (quieto) {
              if (k === 0) { verQ = lenQ; verA = lenA; }
            } else if (actual) {
              verQ = fase === "q" ? n : lenQ;
              verA = fase === "a" ? Math.min(lenA, n * VEL_A) : fase === "pausa" ? lenA : 0;
              pensando = fase === "pensar";
              caret = fase === "q";
            }
            const mostrar = quieto ? k === 0 : actual;
            return (
              <div key={k} className={`col-start-1 row-start-1 ${mostrar ? "" : "invisible"}`}>
                <div className="ml-auto mb-4 max-w-[88%] rounded-2xl rounded-br-sm bg-gradient-to-br from-[#7c3aed] to-[#c026d3] px-4 py-3 text-sm leading-snug text-white xl:text-base">
                  <Escrito partes={[{ t: p.q }]} n={verQ} />
                  {caret && <span className="mw-blink ml-0.5 inline-block w-[2px] bg-white align-middle" style={{ height: "1em" }} />}
                </div>
                <div className="relative max-w-[94%]">
                  <div className={`rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 px-4 py-3 text-sm leading-snug text-white/90 xl:text-base ${verA > 0 ? "" : "opacity-0"}`}>
                    <Escrito
                      partes={[{ t: p.antes }, { t: p.negocio, cls: "font-bold text-accent-400" }, { t: p.despues }]}
                      n={verA}
                    />
                    <span className="mt-3 flex">
                      <span className={`inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-300 ${verA >= lenA ? "" : "invisible"}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                        {rot.reco}
                      </span>
                    </span>
                  </div>
                  {pensando && (
                    <div className="absolute left-0 top-0 inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 px-4 py-3.5">
                      <span className="mw-dot h-2 w-2 rounded-full bg-white/70" />
                      <span className="mw-dot h-2 w-2 rounded-full bg-white/70" style={{ animationDelay: "0.2s" }} />
                      <span className="mw-dot h-2 w-2 rounded-full bg-white/70" style={{ animationDelay: "0.4s" }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] uppercase tracking-wider text-white/45">{rot.ejemplo}</p>
    </div>
  );
}
