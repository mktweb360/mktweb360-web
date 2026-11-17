"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Móvil ilustrativo de la landing «visibilidad en IA». Pantalla genérica de asistente de IA, sin marcas.
// Todo el texto es de ejemplo: los negocios son ficticios y la respuesta no la ha generado ninguna IA (se dice en la etiqueta visible).
// El HTML del servidor lleva el texto COMPLETO (buscadores y lectores sin JavaScript lo ven). Al montar, si el visitante no pide
// «reducir movimiento», se vacía antes de pintar y se reproduce la escritura una vez.

const PREGUNTA = "Necesito un pintor de confianza para mi piso, ¿quién me recomiendas?";
const INTRO = "Algunas opciones de ejemplo con buenas opiniones en tu zona:";
const NEGOCIOS = ["Pinturas Ejemplo A", "Reformas Ejemplo B", "Pintores Ejemplo C"];
const PATROCINADO = "Patrocinado · Anuncio de ejemplo";

// Alto de la zona visible del móvil (px): lo que ocupa la conversación completa a 300 px de ancho.
const ALTO_PX = 308;

// Nombres de las IA principales (marcas citadas, sin logotipos), repartidos sin alinear.
const IAS: { t: string; cls: string; d: string; dur: string; tw: string }[] = [
  { t: "ChatGPT", cls: "right-3 top-[3%]", d: "0s", dur: "10s", tw: "6s" },
  { t: "Gemini", cls: "right-0 top-[22%]", d: "-2.5s", dur: "12s", tw: "7.5s" },
  { t: "Copilot", cls: "right-5 top-[41%]", d: "-5s", dur: "11s", tw: "5.5s" },
  { t: "Perplexity", cls: "right-1 top-[60%]", d: "-1.5s", dur: "13s", tw: "8s" },
  { t: "Claude", cls: "right-4 top-[79%]", d: "-4s", dur: "10.5s", tw: "6.8s" },
];

type Fase = "completo" | "pregunta" | "pensando" | "respuesta";

export function MovilIaDemo() {
  const [fase, setFase] = useState<Fase>("completo");
  const [nPregunta, setNPregunta] = useState(PREGUNTA.length);
  const [nRespuesta, setNRespuesta] = useState(Infinity);
  const raiz = useRef<HTMLDivElement>(null);
  const empezado = useRef(false);

  const respuestaCompleta = [INTRO, ...NEGOCIOS].join("\n");
  const total = respuestaCompleta.length;

  // Si hay animación, vacía el contenido antes del primer pintado (el servidor ya envió el texto completo).
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Deliberado: hay que vaciar el texto antes del primer pintado (el HTML del servidor lo lleva completo).
    /* eslint-disable react-hooks/set-state-in-effect */
    setFase("pregunta");
    setNPregunta(0);
    setNRespuesta(0);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Arranca al ver el móvil en pantalla.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (fase === "completo" || !raiz.current) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(raiz.current);
    return () => io.disconnect();
  }, [fase]);

  useEffect(() => {
    if (!visible || empezado.current) return;
    empezado.current = true;
    let t: ReturnType<typeof setTimeout>;
    let i = 0;
    const escribePregunta = () => {
      i += 1;
      setNPregunta(i);
      if (i < PREGUNTA.length) t = setTimeout(escribePregunta, 32);
      else {
        setFase("pensando");
        t = setTimeout(() => {
          setFase("respuesta");
          let j = 0;
          const escribeRespuesta = () => {
            j += 2;
            setNRespuesta(j);
            if (j < total) t = setTimeout(escribeRespuesta, 22);
            else setNRespuesta(Infinity);
          };
          escribeRespuesta();
        }, 1500);
      }
    };
    t = setTimeout(escribePregunta, 500);
    return () => clearTimeout(t);
  }, [visible, total]);

  const completo = fase === "completo";
  const pregunta = completo ? PREGUNTA : PREGUNTA.slice(0, nPregunta);
  const respuesta = completo || nRespuesta === Infinity ? respuestaCompleta : respuestaCompleta.slice(0, nRespuesta);
  const lineas = respuesta.split("\n");
  const verRespuesta = completo || fase === "respuesta";
  const verPatrocinado = completo || nRespuesta === Infinity;

  return (
    <figure ref={raiz} className="mx-auto w-full" aria-label="Ejemplo ilustrativo de una conversación con un asistente de IA">
      <div className="flex items-end justify-center gap-2">
      {/* Nombres de las IA principales al fondo, a la izquierda y pegados al móvil, con un parpadeo y un vaivén horizontal muy suaves. Sin logotipos. */}
      <div aria-hidden="true" className="pointer-events-none relative hidden sm:block w-[120px] shrink-0" style={{ height: ALTO_PX }}>
        {IAS.map((c) => (
          <span
            key={c.t}
            className={`mw-estrella absolute ${c.cls} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-sm font-semibold text-white/85 backdrop-blur-sm`}
            style={{ animationDelay: c.d, animationDuration: `${c.dur}, ${c.tw}` }}
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#a78bfa] to-accent-500" />
            {c.t}
          </span>
        ))}
      </div>

      {/* Móvil recortado: solo se ve la zona del texto; si la conversación crece, sube como un chat con scroll. */}
      <div className="relative w-[280px] shrink-0 overflow-hidden rounded-t-[2.4rem] border-[9px] border-b-0 border-gray-900 bg-gray-900 shadow-2xl" style={{ height: ALTO_PX }}>
        <div className="relative flex h-full flex-col rounded-t-[1.8rem] bg-gray-50 text-gray-900 overflow-hidden">
          <div className="absolute left-1/2 top-1.5 z-10 -translate-x-1/2 h-4 w-20 rounded-full bg-gray-900" aria-hidden="true" />
          <div className="relative z-[5] pt-7 pb-2 px-4 text-center text-[11px] font-semibold text-gray-500 border-b border-gray-200 bg-white">Asistente de IA</div>
          <div className="flex-1 min-h-0 px-3 pb-3 flex flex-col justify-end gap-2.5 overflow-hidden text-[13px] leading-snug">
            <div className="flex justify-end">
              <p className="bg-accent-500 text-white rounded-2xl rounded-br-sm px-3 py-2 max-w-[88%]">
                {pregunta}
                {fase === "pregunta" && visible && <span className="inline-block w-px h-3.5 bg-white align-middle ml-0.5 mw-blink" aria-hidden="true" />}
              </p>
            </div>

            {fase === "pensando" && (
              <div className="flex" aria-hidden="true">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1">
                  {[0, 1, 2].map((n) => (
                    <span key={n} className="mw-dot h-1.5 w-1.5 rounded-full bg-gray-400" style={{ animationDelay: `${n * 150}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {verRespuesta && (
              <div className="flex">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[94%] space-y-1.5">
                  {lineas.map((l, n) =>
                    n === 0 ? (
                      <p key={n}>{l}</p>
                    ) : (
                      <p key={n} className="flex gap-1.5">
                        <span className="text-accent-500 font-bold">{n}.</span>
                        <span>{l}</span>
                      </p>
                    ),
                  )}
                </div>
              </div>
            )}

            {verPatrocinado && <p className="text-[10px] text-gray-500 border-t border-dashed border-gray-300 pt-1.5 pl-1">{PATROCINADO}</p>}
          </div>
        </div>
      </div>
      </div>
      <figcaption className="mt-2 text-center text-[11px] text-primary-200">
        <strong className="text-white">Ejemplo ilustrativo:</strong> negocios y respuesta ficticios, no generados por una IA.
      </figcaption>
    </figure>
  );
}
