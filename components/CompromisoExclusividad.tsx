// Bloque de compromiso de la home: sustituye a la franja de cifras y a "¿Por qué elegir…?".
// Componente de servidor, sin JS en cliente: la animación del mapa es CSS (globals.css, .mw-ping)
// y se desactiva con prefers-reduced-motion.
//
// El mapa es decorativo: /mapa-espana-puntos.svg se generó con es-atlas (provincias del IGN) y la
// proyección cónica conforme de España con Canarias recolocada. Los puntos naranjas NO representan
// clientes reales; ilustran la regla "una empresa por sector en cada zona".
import Link from "next/link";

const MAP_W = 436;
const MAP_H = 401;

// Puntos resaltados (coordenadas de la rejilla del SVG). Retardos escalonados para que no
// pulsen a la vez.
const ZONAS: { x: number; y: number; d: number }[] = [
  { x: 351, y: 92, d: 0.4 },   // Barcelona
  { x: 281, y: 176, d: 1.6 },  // Valencia
  { x: 99, y: 274, d: 2.4 },   // Sevilla
  { x: 197, y: 29, d: 3.1 },   // Bilbao
  { x: 36, y: 22, d: 0.9 },    // A Coruña
  { x: 148, y: 302, d: 2.0 },  // Málaga
  { x: 379, y: 162, d: 2.8 },  // Palma
  { x: 113, y: 386, d: 1.2 },  // Las Palmas
  { x: 260, y: 239, d: 3.6 },  // Murcia
];
const TU_ZONA = { x: 176, y: 148 }; // centro peninsular

const PRINCIPIOS = [
  {
    n: "01",
    title: "Toda España, sin distancia",
    desc: "Da igual dónde esté tu negocio. Trabajamos en remoto con cualquier provincia: videollamada cuando hace falta, teléfono y email siempre.",
  },
  {
    n: "02",
    title: "Hablas con quien hace el trabajo",
    desc: "Sin comerciales ni cuentas que cambian de manos. La persona que diseña tu estrategia es la misma que te coge el teléfono.",
  },
  {
    n: "03",
    title: "IA con criterio humano",
    desc: "Usamos inteligencia artificial en cada servicio para analizar más y llegar antes. Las decisiones sobre tu negocio las toma siempre una persona.",
  },
  {
    n: "04",
    title: "Cuentas claras cada mes",
    desc: "Un informe con lo que de verdad importa —contactos, ventas, posiciones—, explicado para que lo entiendas sin ser experto.",
  },
];

export function CompromisoExclusividad() {
  return (
    <section
      aria-labelledby="compromiso-exclusividad"
      className="relative isolate overflow-hidden bg-[#0f1c2e] text-white"
    >
      {/* Luz ambiental y rejilla */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(800px_520px_at_12%_30%,rgba(124,58,237,0.22),transparent_70%),radial-gradient(700px_520px_at_85%_45%,rgba(249,115,22,0.16),transparent_70%),radial-gradient(600px_400px_at_55%_100%,rgba(236,72,153,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)]"
      />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-8 items-center">
          {/* Mensaje */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              Exclusividad por sector y zona
            </p>
            <h2
              id="compromiso-exclusividad"
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.35rem] font-black leading-[1.04] tracking-tight"
            >
              Tu competencia
              <br />
              <span className="bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-accent-500 bg-clip-text text-transparent">
                no podrá contratarnos.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
              Trabajamos con una sola empresa de cada sector en cada zona de España. Si esa empresa
              eres tú, todo lo que construimos juntos —la estrategia, los contenidos, las posiciones
              que vas ganando— trabaja solo para ti. Nunca para el negocio de enfrente.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-4">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-4 font-bold text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.7)] transition-colors hover:bg-accent-600"
              >
                ¿Está libre tu sector?
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.72a.75.75 0 1 1 1.03-1.09l5.25 4.93a.75.75 0 0 1 0 1.09l-5.25 4.93a.75.75 0 1 1-1.03-1.09l3.96-3.72H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
              </Link>
              <Link
                href="/auditoria-digital/"
                className="text-sm font-semibold text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-accent-500"
              >
                o empieza por la auditoría gratuita
              </Link>
            </div>
          </div>

          {/* Mapa */}
          <figure className="relative mx-auto w-full max-w-[520px]">
            <div className="relative" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mapa-espana-puntos.svg"
                alt=""
                width={MAP_W}
                height={MAP_H}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full opacity-70"
              />
              <svg
                viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                {ZONAS.map((z) => (
                  <g key={`${z.x}-${z.y}`}>
                    <circle cx={z.x} cy={z.y} r={3} className="mw-ping fill-accent-500" style={{ animationDelay: `${z.d}s` }} />
                    <circle cx={z.x} cy={z.y} r={2.6} className="fill-accent-400" />
                  </g>
                ))}
                {/* Tu zona */}
                <circle cx={TU_ZONA.x} cy={TU_ZONA.y} r={14} className="fill-accent-500/15" />
                <circle cx={TU_ZONA.x} cy={TU_ZONA.y} r={5} className="mw-ping mw-ping-slow fill-white" />
                <circle cx={TU_ZONA.x} cy={TU_ZONA.y} r={4.5} className="fill-white" />
              </svg>
              {/* Etiqueta "Tu zona" anclada al punto central */}
              <div
                className="absolute -translate-y-1/2"
                style={{ left: `${((TU_ZONA.x + 14) / MAP_W) * 100}%`, top: `${(TU_ZONA.y / MAP_H) * 100}%` }}
              >
                <div className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-[#0f1c2e]/80 px-3 py-2 shadow-xl backdrop-blur-md">
                  <svg className="h-4 w-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                  <span className="text-xs leading-tight">
                    <span className="block font-bold">Tu sector, tu zona</span>
                    <span className="block text-white/65">Reservado solo para ti</span>
                  </span>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-center text-xs text-white/50">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent-400 align-middle" aria-hidden="true" />
              Una empresa por sector en cada zona, en toda España
            </figcaption>
          </figure>
        </div>

        {/* Principios */}
        <div className="mt-20 grid gap-x-10 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPIOS.map((p) => (
            <div key={p.n}>
              <span className="font-mono text-sm font-bold text-accent-400">{p.n}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-primary-200">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
