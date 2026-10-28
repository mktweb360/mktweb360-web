"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Escenario = "A" | "B";

export default function MetodologiaSeoPage() {
  const router = useRouter();
  const [escenario, setEscenario] = useState<Escenario>("A");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Uso interno</p>
          <h1 className="text-base font-bold">Plan de trabajo SEO — Referencia operativa</h1>
        </div>
        <button onClick={() => router.push("/area-privada/dashboard")} className="text-xs text-primary-300 hover:text-white">← Panel</button>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* Escenario selector */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Selecciona el escenario del cliente</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setEscenario("A")}
              className={`py-4 px-4 rounded-xl border-2 text-left transition-colors ${escenario === "A" ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}
            >
              <p className={`font-bold text-sm ${escenario === "A" ? "text-primary-700" : "text-gray-700"}`}>🌱 Escenario A</p>
              <p className="text-xs text-gray-500 mt-1">Dominio virgen — nunca ha trabajado SEO</p>
            </button>
            <button
              onClick={() => setEscenario("B")}
              className={`py-4 px-4 rounded-xl border-2 text-left transition-colors ${escenario === "B" ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}
            >
              <p className={`font-bold text-sm ${escenario === "B" ? "text-primary-700" : "text-gray-700"}`}>📉 Escenario B</p>
              <p className="text-xs text-gray-500 mt-1">Dominio con historial — SEO sin resultados</p>
            </button>
          </div>
        </div>

        {/* Checklist de arranque */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
          <h2 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span>⚡</span> Checklist de arranque — antes de empezar cualquier cuenta
          </h2>
          <ul className="space-y-2">
            {[
              "Acceso a Google Search Console (propietario o usuario delegado)",
              "Acceso a Google Analytics 4",
              "Acceso al panel de administración de la web (WordPress u otro)",
              "Credenciales FTP o acceso de servidor si se necesita",
              "Acceso a Google Business Profile si existe",
              "Dominio confirmado y SSL activo",
              "Screaming Frog configurado para el rastreo",
              "Herramienta de tracking de posiciones configurada con keywords objetivo",
              "Carpeta de cliente creada en la app con todos los datos",
              "Informe de auditoría inicial generado y enviado al cliente",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-amber-900">
                <span className="shrink-0 mt-0.5">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* MES 1 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
            Mes 1 — {escenario === "A" ? "Auditoría y base técnica" : "Diagnóstico de daños + base técnica"}
          </h2>

          {escenario === "B" && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">⚠ Escenario B — Semana 1 adicional: diagnóstico de historial</p>
              <ul className="space-y-1.5">
                {[
                  "Análisis del perfil de backlinks completo — detectar enlaces tóxicos o spam",
                  "Si hay perfil tóxico: preparar archivo de desautorización (Disavow)",
                  "Search Console → Acciones manuales — ¿hay penalización manual?",
                  "Análisis de tráfico histórico — ¿caída brusca coincidiendo con update Google?",
                  "Inventario de trabajo anterior — keywords mal atacadas, contenido thin, canibalización",
                  "Informe de diagnóstico de historial — daños por prioridad + plan correctivo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-red-800">
                    <span className="shrink-0 mt-0.5 text-red-400">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            {[
              {
                semana: "Semana 1 — Diagnóstico técnico completo",
                tareas: [
                  "Rastreo completo del dominio con Screaming Frog",
                  "Análisis de indexación: site:dominio.com — cuántas páginas indexa Google",
                  "Verificación y configuración de Google Search Console",
                  "Configuración de Google Analytics 4 + eventos de conversión",
                  "Análisis de velocidad — PageSpeed Insights desktop y móvil",
                  "Revisión de robots.txt y sitemap.xml",
                  "Revisión de estructura de URLs — limpias, sin parámetros, sin duplicados",
                  "Revisión de etiquetas canonical — sin canibalización",
                  "Verificación de certificado SSL activo",
                  "Análisis de Core Web Vitals — LCP, INP, CLS",
                  "Revisión de estructura de headings H1/H2/H3 en todas las páginas",
                  "Detección de contenido duplicado interno",
                  "Revisión de imágenes — alt text, tamaño, formato WebP",
                  "Análisis de la competencia top 3 — keywords y estructura",
                  "Entregable: informe de auditoría técnica con errores por prioridad (crítico / importante / mejora)",
                ],
              },
              {
                semana: "Semana 2 — Investigación de keywords",
                tareas: [
                  "Definir categorías de servicio/producto del cliente",
                  "Investigación de keywords primarias por categoría — volumen, dificultad, intención",
                  "Investigación de keywords long tail — menor dificultad, mayor conversión",
                  "Análisis de keywords locales si el negocio tiene ámbito geográfico",
                  "Clasificación por intención: informacional / navegacional / transaccional / comercial",
                  "Mapeo de keywords a páginas existentes",
                  "Detección de gaps — keywords con potencial sin página asignada",
                  "Selección de keywords objetivo prioritarias para los primeros 3 meses",
                  "Entregable: mapa de keywords con volumen, dificultad, intención y página asignada",
                ],
              },
              {
                semana: "Semanas 3 y 4 — Optimización on-page páginas principales",
                tareas: [
                  "Reescritura de title tag — keyword principal + marca, máx 60 caracteres",
                  "Reescritura de meta description — keyword + CTA, máx 155 caracteres",
                  "Revisión y optimización del H1 — una sola H1 por página, keyword principal",
                  "Optimización de H2/H3 — estructura lógica, keywords secundarias",
                  "Optimización del contenido — densidad de keyword, legibilidad, intención",
                  "Optimización de imágenes — alt text, compresión, formato WebP",
                  "Añadir schema markup — LocalBusiness, Service, FAQPage según corresponda",
                  "Optimización de enlaces internos — estructura de silos",
                  "Revisión de velocidad por página",
                  "Configuración de Google Business Profile si no existe",
                  "Entregable: resumen de cambios on-page + capturas antes/después",
                ],
              },
            ].map((bloque) => (
              <div key={bloque.semana} className="border border-gray-100 rounded-xl p-4">
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-3">{bloque.semana}</p>
                <ul className="space-y-1.5">
                  {bloque.tareas.map((t) => (
                    <li key={t} className={`flex items-start gap-2 text-sm ${t.startsWith("Entregable") ? "text-accent-600 font-semibold mt-2" : "text-gray-600"}`}>
                      <span className="shrink-0 mt-0.5">{t.startsWith("Entregable") ? "📋" : "→"}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* MESES 2-3 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
            Meses 2 y 3 — Construcción
          </h2>
          <ul className="space-y-2">
            {[
              "Creación de 2-3 artículos de blog SEO por mes — keyword objetivo, 800-1.500 palabras",
              "Optimización de 2-3 páginas adicionales por mes",
              "Revisión semanal de posiciones — Search Console + herramienta de tracking",
              "Revisión de nuevos errores en Search Console — 404, cobertura, experiencia",
              "Construcción de enlaces internos hacia páginas nuevas",
              "Optimización y publicación semanal en Google Business Profile (si procede)",
              "Informe mensual primeros 5 días del mes — posiciones, tráfico, errores, plan siguiente mes",
            ].map((t) => (
              <li key={t} className={`flex items-start gap-2 text-sm ${t.startsWith("Informe") ? "text-accent-600 font-semibold" : "text-gray-600"}`}>
                <span className="shrink-0 mt-0.5">{t.startsWith("Informe") ? "📋" : "→"}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* MESES 4-6 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
            Meses 4, 5 y 6 — Consolidación y crecimiento
          </h2>
          <ul className="space-y-2">
            {[
              "Continuación del plan de contenidos — 2-3 artículos mensuales",
              "Link building ético — directorios de calidad, menciones locales, colaboraciones",
              "Análisis de páginas en posiciones 10-20 — optimización para subir a top 5",
              "Revisión de CTR en Search Console — optimización de titles y metas con bajo CTR",
              "Análisis de comportamiento en GA4 — páginas con alta salida, bajo tiempo de sesión",
              "Ajustes técnicos según datos acumulados",
              "Informe mensual completo con evolución acumulada desde el inicio del proyecto",
            ].map((t) => (
              <li key={t} className={`flex items-start gap-2 text-sm ${t.startsWith("Informe") ? "text-accent-600 font-semibold" : "text-gray-600"}`}>
                <span className="shrink-0 mt-0.5">{t.startsWith("Informe") ? "📋" : "→"}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {escenario === "B" && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-4">
            <h3 className="font-bold text-red-700 mb-2">⚠ Nota importante — Escenario B</h3>
            <p className="text-sm text-red-800 leading-relaxed">En dominios con daño moderado-alto, los primeros resultados visibles pueden tardar 2-3 meses adicionales respecto al Escenario A. Comunicarlo al cliente en el primer informe con transparencia y datos reales.</p>
          </div>
        )}

      </div>
    </div>
  );
}
