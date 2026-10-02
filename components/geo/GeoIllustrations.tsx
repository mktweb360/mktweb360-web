// Ilustraciones vectoriales de la página de GEO. Sin texto dentro (norma de Manué, 2-oct-2026):
// el texto vive en el HTML, la imagen solo lo explica visualmente.

/** Una pregunta a un asistente de IA y su respuesta, que cita como fuente a una empresa (la del cliente). */
export function AnswerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 400" role="img" aria-label="Ilustración: un asistente de IA responde a una pregunta y cita como fuente la web de una empresa" className={className}>
      <defs>
        <linearGradient id="geo-a-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8faff" />
          <stop offset="1" stopColor="#eef2fb" />
        </linearGradient>
        <filter id="geo-a-sh" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f1c2e" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="480" height="400" rx="28" fill="url(#geo-a-bg)" />
      {/* Ventana del asistente */}
      <g filter="url(#geo-a-sh)">
        <rect x="40" y="36" width="400" height="328" rx="20" fill="#ffffff" />
      </g>
      <rect x="40" y="36" width="400" height="44" rx="20" fill="#0f1c2e" />
      <rect x="40" y="60" width="400" height="20" fill="#0f1c2e" />
      <circle cx="66" cy="58" r="6" fill="#f97316" />
      <circle cx="86" cy="58" r="6" fill="#6455B9" />
      <circle cx="106" cy="58" r="6" fill="#ffffff" fillOpacity="0.5" />
      {/* Pregunta del usuario */}
      <rect x="196" y="100" width="220" height="44" rx="16" fill="#1e3a5f" />
      <rect x="214" y="116" width="150" height="8" rx="4" fill="#ffffff" fillOpacity="0.85" />
      <rect x="214" y="129" width="96" height="6" rx="3" fill="#ffffff" fillOpacity="0.5" />
      {/* Respuesta de la IA */}
      <circle cx="78" cy="180" r="16" fill="#6455B9" />
      <path d="M70 180 l5 5 l10 -11" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="166" width="300" height="9" rx="4.5" fill="#cbd5e1" />
      <rect x="104" y="183" width="260" height="9" rx="4.5" fill="#cbd5e1" />
      <rect x="104" y="200" width="280" height="9" rx="4.5" fill="#e2e8f0" />
      {/* Fuente citada: la empresa del cliente */}
      <g>
        <rect x="104" y="228" width="300" height="72" rx="14" fill="#fff7ed" stroke="#f97316" strokeWidth="2.5" />
        <rect x="120" y="250" width="8" height="30" rx="2" fill="#2D1E78" />
        <rect x="132" y="243" width="8" height="37" rx="2" fill="#6455B9" />
        <rect x="144" y="236" width="8" height="44" rx="2" fill="#F09614" />
        <rect x="170" y="246" width="140" height="10" rx="5" fill="#0f1c2e" />
        <rect x="170" y="264" width="190" height="8" rx="4" fill="#94a3b8" />
        <rect x="170" y="279" width="120" height="8" rx="4" fill="#cbd5e1" />
        {/* Estrella de recomendación */}
        <circle cx="404" cy="228" r="20" fill="#f97316" />
        <path d="M404 216 l3.6 7.6 8.3 1 -6.1 5.7 1.6 8.2 -7.4 -4.1 -7.4 4.1 1.6 -8.2 -6.1 -5.7 8.3 -1 z" fill="#ffffff" />
      </g>
      {/* Otras fuentes, en segundo plano */}
      <rect x="104" y="314" width="140" height="30" rx="10" fill="#f1f5f9" />
      <rect x="254" y="314" width="150" height="30" rx="10" fill="#f1f5f9" />
      <rect x="118" y="326" width="90" height="6" rx="3" fill="#cbd5e1" />
      <rect x="268" y="326" width="100" height="6" rx="3" fill="#cbd5e1" />
    </svg>
  );
}

/** Capas: SEO técnico como base, contenido citable encima y GEO como capa superior. */
export function LayersIllustration({ className = "" }: { className?: string }) {
  const layer = (y: number, top: string, side: string, front: string) => (
    <g>
      <path d={`M240 ${y} L400 ${y + 56} L240 ${y + 112} L80 ${y + 56} Z`} fill={top} />
      <path d={`M80 ${y + 56} L240 ${y + 112} L240 ${y + 140} L80 ${y + 84} Z`} fill={front} />
      <path d={`M400 ${y + 56} L240 ${y + 112} L240 ${y + 140} L400 ${y + 84} Z`} fill={side} />
    </g>
  );
  return (
    <svg viewBox="0 0 480 400" role="img" aria-label="Ilustración: tres capas apiladas; la base es el SEO técnico, encima el contenido citable y arriba el GEO" className={className}>
      <rect width="480" height="400" rx="28" fill="#f8faff" />
      <ellipse cx="240" cy="352" rx="190" ry="22" fill="#0f1c2e" fillOpacity="0.08" />
      {layer(206, "#cbd5e1", "#94a3b8", "#a7b4c6")}
      {layer(138, "#8b80d1", "#4b3fa3", "#6455B9")}
      {layer(70, "#fdba74", "#ea6a00", "#f97316")}
      {/* Señales que suben hacia la IA */}
      <g stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M240 60 V28" />
        <path d="M200 66 L186 40" />
        <path d="M280 66 L294 40" />
      </g>
      <circle cx="240" cy="22" r="8" fill="#f97316" />
      <circle cx="183" cy="34" r="6" fill="#6455B9" />
      <circle cx="297" cy="34" r="6" fill="#6455B9" />
    </svg>
  );
}
