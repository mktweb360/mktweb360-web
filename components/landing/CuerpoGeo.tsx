import Image from "next/image";
import type { ReactNode } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import { PRECIO_TIENDA_ONLINE_DESDE, PRECIO_WEB_PROFESIONAL_DESDE } from "@/lib/ofertas";

// Cuerpo de la landing GEO (visibilidad en IA): impacto, frases cortas e ilustraciones HTML/CSS (sin imágenes que cargar).
// Todo el texto va en el HTML del servidor. Los negocios de las ilustraciones son ficticios y están rotulados como ejemplo.
// No se prometen menciones ni posiciones: el plazo de 2-4 meses es el que publica /geo-posicionamiento-ia/.
// Precios de web y tienda: vienen de lib/ofertas.ts (fuente única de las ofertas).

const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const IcoLupa = () => (<svg {...svg} width="28" height="28"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
const IcoDoc = () => (<svg {...svg} width="28" height="28"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>);
const IcoCodigo = () => (<svg {...svg} width="28" height="28"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>);
const IcoGrafico = () => (<svg {...svg} width="28" height="28"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>);
const IcoChat = () => (<svg {...svg} width="28" height="28"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z" /></svg>);
const IcoSpark = () => (<svg {...svg} width="28" height="28"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></svg>);
const IcoCheck = () => (<svg {...svg} width="18" height="18" strokeWidth="2.4"><path d="m5 12 5 5 9-10" /></svg>);
const IcoTienda = () => (<svg {...svg} width="28" height="28"><path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9a3 3 0 0 0 5.3 1.9A3 3 0 0 0 12 12a3 3 0 0 0 2.7-1.1A3 3 0 0 0 20 9M10 20v-5h4v5" /></svg>);
const IcoWeb = () => (<svg {...svg} width="28" height="28"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></svg>);

function Cabecera({ etiqueta, children, claro = false }: { etiqueta?: string; children: ReactNode; claro?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {etiqueta && (
        <p className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase ${claro ? "bg-white/10 text-white" : "bg-primary-50 text-primary-700"}`} style={{ letterSpacing: "2px" }}>
          {etiqueta}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight md:text-4xl ${claro ? "text-white" : "text-primary-700"}`}>{children}</h2>
    </div>
  );
}

// Resultados de ejemplo del buscador «de antes» (negocios ficticios, rotulados como ejemplo).
const RESULTADOS = [
  { n: "Pinturas Ejemplo A", url: "pinturas-ejemplo-a.es", d: "Pintores de pisos y locales. Presupuesto sin compromiso.", anuncio: true },
  { n: "Reformas Ejemplo B", url: "reformas-ejemplo-b.es", d: "Reformas integrales y pintura. Pide tu presupuesto.", anuncio: true },
  { n: "Los 10 mejores pintores de tu ciudad", url: "directorio-ejemplo.es", d: "Listado con teléfonos y valoraciones de pintores.", anuncio: false },
  { n: "Pintores Ejemplo C", url: "pintores-ejemplo-c.es", d: "Pintura de interior y exterior. Trabajos garantizados.", anuncio: false },
];

export function CuerpoGeo({ whatsapp }: { whatsapp: string }) {
  const wa = `https://wa.me/34622748987?text=${encodeURIComponent(whatsapp)}`;
  return (
    <>
      {/* 1 · Antes / Ahora */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Cabecera etiqueta="El cambio">
            <span className="text-gray-400">Antes veían 10 enlaces.</span>
            <br />
            Ahora reciben <span className="text-accent-500">unos pocos nombres.</span>
          </Cabecera>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="relative rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-4 text-xs font-bold uppercase text-gray-400" style={{ letterSpacing: "2px" }}>Antes · Buscador de siempre</p>
              <div className="mb-4 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 shadow-sm">
                <span className="text-gray-400"><svg {...svg} width="16" height="16"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></span>
                pintor de confianza cerca de mí
              </div>
              <ul className="space-y-3.5">
                {RESULTADOS.map((r) => (
                  <li key={r.n} className="text-left">
                    <p className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-[10px] font-bold text-gray-500">{r.n.charAt(0)}</span>
                      {r.url}
                      {r.anuncio && <span className="rounded border border-gray-400 px-1 text-[10px] font-semibold leading-4 text-gray-600">Anuncio</span>}
                    </p>
                    <p className="text-[15px] font-medium leading-snug text-blue-700">{r.n}</p>
                    <p className="text-xs leading-snug text-gray-500">{r.d}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-gray-200 pt-3 text-xs font-semibold text-gray-500">… y 6 enlaces más. El cliente compara y elige.</p>
              <p className="mt-3 text-[11px] text-gray-400"><strong className="text-gray-600">Ejemplo ilustrativo:</strong> negocios ficticios.</p>
            </div>
            <div className="relative rounded-3xl bg-[#0f1c2e] p-6 text-white shadow-2xl ring-1 ring-accent-500/40">
              <p className="mb-4 text-xs font-bold uppercase text-accent-400" style={{ letterSpacing: "2px" }}>Ahora · Asistente de IA</p>
              <div className="mb-4 flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-accent-500 px-4 py-2.5 text-sm">Necesito un pintor de confianza para mi piso, ¿quién me recomiendas?</p>
              </div>
              <div className="rounded-2xl rounded-bl-sm bg-white/10 p-4 text-sm">
                <p className="mb-3 text-primary-200">Algunas opciones de ejemplo con buenas opiniones en tu zona:</p>
                <ul className="space-y-2">
                  {["Pinturas Ejemplo A", "Reformas Ejemplo B", "Pintores Ejemplo C"].map((n) => (
                    <li key={n} className="flex items-center gap-2 font-semibold">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-white"><IcoCheck /></span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[11px] text-primary-300"><strong className="text-white">Ejemplo ilustrativo:</strong> negocios y respuesta ficticios, no generados por una IA.</p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xl font-semibold text-primary-700">
            La pregunta ya no es solo dónde te encuentran. <span className="text-accent-500">Es si te encuentran.</span>
          </p>
        </div>
      </section>

      {/* 2 · Pregunta → Respuesta → ¿Estás tú? */}
      <section className="mw-skin-band px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <Cabecera claro>Así de simple es lo que pasa</Cabecera>
          <ol className="grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "Tu cliente pregunta", d: "A ChatGPT, Gemini, Perplexity, Claude o Google con IA.", i: <IcoChat />, c: "border border-white/10 bg-white/[0.07] text-white backdrop-blur-sm" },
              { n: "02", t: "La IA responde", d: "Con unos pocos negocios. No con diez enlaces.", i: <IcoSpark />, c: "border border-white/10 bg-white/[0.07] text-white backdrop-blur-sm" },
              { n: "03", t: "¿Estás tú?", d: "Ahí es donde trabajamos contigo.", i: <IcoLupa />, c: "bg-accent-500 text-white" },
            ].map((p) => (
              <li key={p.n} className={`relative rounded-3xl p-7 shadow-lg ${p.c}`}>
                <span className="absolute right-6 top-4 text-5xl font-black opacity-10">{p.n}</span>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">{p.i}</span>
                <h3 className="mb-1 text-xl font-bold">{p.t}</h3>
                <p className={p.c.includes("accent") ? "text-white/90" : "text-primary-200"}>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · Qué hacemos (alto = el del contenido; la foto queda fija en la ventana y la fila pasa por encima: parallax) */}
      <section className="relative isolate overflow-hidden bg-[#0f1c2e] px-4 py-16 text-white [clip-path:inset(0)] md:py-20">
        {/* Foto de fondo (imagen generada con IA: manos con un móvil y un chat de asistente en el metro). Decorativa.
            Va fija en la ventana (fixed) y recortada por la fila (clip-path): al hacer scroll se ve el efecto parallax.
            Con «reducir movimiento» pasa a ser un fondo normal. */}
        <div className="fixed inset-0 -z-10 motion-reduce:absolute" aria-hidden="true">
          <Image src="/landing/ia-metro.jpg" alt="" fill sizes="100vw" className="object-cover object-[78%_50%]" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f1c2e]/75 via-[#0f1c2e]/35 to-[#0f1c2e]/75" aria-hidden="true" />
        <div className="mx-auto max-w-5xl">
          <Cabecera etiqueta="Qué hacemos" claro>Que las IA entiendan tu negocio. <span className="text-accent-400">Y puedan citarlo.</span></Cabecera>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Auditoría", d: "Vemos qué dice la IA de ti.", i: <IcoLupa /> },
              { t: "Contenido citable", d: "Respuestas claras a lo que pregunta tu cliente.", i: <IcoDoc /> },
              { t: "Datos estructurados", d: "Y llms.txt: tu negocio, legible para las IA.", i: <IcoCodigo /> },
              { t: "Seguimiento mensual", d: "Medimos cómo evoluciona.", i: <IcoGrafico /> },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-white/10 bg-[#0f1c2e]/60 p-6 backdrop-blur-md">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-accent-500 text-white">{c.i}</span>
                <h3 className="mb-1 text-lg font-bold">{c.t}</h3>
                <p className="text-sm leading-relaxed text-primary-200">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Urgencia + llamada a la acción */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-primary-700 md:text-5xl">El que antes empiece, parte con ventaja.</h2>
          <p className="mx-auto mb-3 max-w-2xl rounded-2xl border border-accent-200 bg-accent-50 px-5 py-4 text-base text-gray-800 md:text-lg">
            📢 ChatGPT ya muestra anuncios en España desde el 24 de agosto de 2026 (versiones gratuita y Go). Las respuestas de las IA se están convirtiendo en un escaparate.
          </p>
          <p className="mb-8 text-xs text-gray-500">
            Fuente:{" "}
            <a href="https://www.xataka.com/robotica-e-ia/oficial-chatgpt-anuncios-llegara-a-espana-proximo-lunes-24-agosto" target="_blank" rel="noopener noreferrer" className="text-primary-700 underline">Xataka</a>
            . Los primeros cambios pueden notarse entre 2 y 4 meses después de empezar.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrackedLink href="#contacto" ctaId="diagnostico-ia-geo" location="landing-ia-bf-cuerpo" type="link" text="Pedir diagnóstico gratuito" className="w-full rounded-full bg-accent-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-accent-600 sm:w-auto">
              Pedir diagnóstico gratuito
            </TrackedLink>
            <TrackedLink href={wa} ctaId="whatsapp-ia-geo" location="landing-ia-bf-cuerpo" type="contact" text="Escríbenos" newTab className="w-full rounded-full bg-[#178f49] px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-[#137a3d] sm:w-auto">
              Escríbenos
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* 5 · Web y tienda */}
      <section className="mw-skin-band px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <Cabecera etiqueta="Y tu web" claro>
            ¿Está a la altura? <span className="text-accent-500">Si no, la renovamos.</span>
          </Cabecera>
          <p className="mx-auto -mt-4 mb-10 max-w-2xl text-center text-lg text-primary-200">Una web clara y bien estructurada es la base para que te citen.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "Web profesional", p: `Desde ${PRECIO_WEB_PROFESIONAL_DESDE} € + IVA`, d: "Pago único. Hosting, dominio y correo no incluidos.", href: "/oferta-web-seo-organico/", id: "oferta-web-desde-ia-geo", i: <IcoWeb /> },
              { t: "Tienda online", p: `Desde ${PRECIO_TIENDA_ONLINE_DESDE} € + IVA`, d: "Sin comisiones por venta ni licencias mensuales.", href: "/tienda-online/", id: "oferta-tienda-desde-ia-geo", i: <IcoTienda /> },
            ].map((o) => (
              <div key={o.t} className="flex flex-col rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 text-white">{o.i}</span>
                <h3 className="text-xl font-bold text-primary-700">{o.t}</h3>
                <p className="mt-2 text-3xl font-black text-accent-500">{o.p}</p>
                <p className="mb-6 mt-1 flex-1 text-gray-600">{o.d}</p>
                <TrackedLink href={o.href} ctaId={o.id} location="landing-ia-bf-cuerpo" type="link" text={`Ver la oferta: ${o.t}`} newTab className="self-start rounded-full border-2 border-primary-700 px-6 py-2.5 text-sm font-bold text-primary-700 transition hover:bg-primary-700 hover:text-white">
                  Ver la oferta
                </TrackedLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
