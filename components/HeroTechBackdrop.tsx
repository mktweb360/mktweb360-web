// Fondo animado de la primera diapositiva del hero (sustituye a la foto de la nave).
// Todo es CSS/SVG: sin imagen pesada que cargar, y el titular sigue siendo el LCP.
// Las animaciones se paran con prefers-reduced-motion (globals.css).

const PULSOS: { x: number; y: number; d: number }[] = [
  { x: 386, y: 190, d: 0 }, { x: 1516, y: 486, d: 1.1 }, { x: 1012, y: 53, d: 2.2 },
  { x: 1462, y: 336, d: 0.6 }, { x: 388, y: 57, d: 1.7 }, { x: 41, y: 208, d: 2.8 }, { x: 1430, y: 278, d: 3.3 },
];

// Etiquetas flotantes: los frentes en los que trabajamos (no son datos ni resultados).
const CHIPS: { t: string; cls: string; d: string; dur: string }[] = [
  { t: "SEO", cls: "left-[5%] top-[34%]", d: "0s", dur: "9s" },
  { t: "GEO · IA", cls: "right-[5%] top-[30%]", d: "1.2s", dur: "11s" },
  { t: "Google Ads", cls: "left-[9%] bottom-[22%]", d: "2.1s", dur: "10s" },
  { t: "Diseño web", cls: "right-[9%] bottom-[24%]", d: "0.6s", dur: "12s" },
  { t: "Google Maps", cls: "left-[13%] top-[18%]", d: "3s", dur: "13s" },
  { t: "Analítica", cls: "right-[14%] top-[17%]", d: "1.8s", dur: "10.5s" },
];

export function HeroTechBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a1322]" aria-hidden="true">
      {/* Auroras de color que se desplazan */}
      <div className="mw-aurora absolute -left-[15%] -top-[25%] h-[75%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.55),transparent_65%)] blur-3xl" />
      <div className="mw-aurora mw-aurora-2 absolute -right-[15%] top-[5%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.45),transparent_65%)] blur-3xl" />
      <div className="mw-aurora mw-aurora-3 absolute left-[25%] -bottom-[30%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.4),transparent_65%)] blur-3xl" />

      {/* Red de nodos */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-red-tech.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {PULSOS.map((p) => (
          <g key={`${p.x}-${p.y}`}>
            <circle cx={p.x} cy={p.y} r={4} className="mw-ping fill-accent-400" style={{ animationDelay: `${p.d}s` }} />
            <circle cx={p.x} cy={p.y} r={3} className="fill-accent-300" />
          </g>
        ))}
      </svg>

      {/* Suelo de rejilla en perspectiva que avanza */}
      <div className="absolute inset-x-0 bottom-0 h-[32%] [perspective:700px] [mask-image:linear-gradient(to_top,#000_15%,transparent_95%)]">
        <div className="mw-grid-floor absolute inset-x-[-50%] bottom-[-40%] h-[180%] origin-bottom [transform:rotateX(62deg)] [background-image:linear-gradient(rgba(167,139,250,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>
      {/* Línea de horizonte luminosa */}
      <div className="absolute inset-x-0 top-[84%] h-px bg-gradient-to-r from-transparent via-[#f472b6]/70 to-transparent" />
      <div className="absolute inset-x-[20%] top-[84%] h-24 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.25),transparent_70%)] blur-xl" />

      {/* Chips flotantes (solo escritorio) */}
      <div className="hidden lg:block">
        {CHIPS.map((c) => (
          <span
            key={c.t}
            className={`mw-float absolute ${c.cls} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md`}
            style={{ animationDelay: c.d, animationDuration: c.dur }}
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#a78bfa] to-accent-500" />
            {c.t}
          </span>
        ))}
      </div>

      {/* Velo central para legibilidad del titular */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_48%,rgba(10,19,34,0.65),transparent_75%)]" />
    </div>
  );
}
