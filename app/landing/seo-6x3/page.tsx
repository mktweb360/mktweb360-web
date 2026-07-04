import type { Metadata } from "next";
import Image from "next/image";
import { OfertaSeoForm } from "@/components/OfertaSeoForm";

export const metadata: Metadata = {
  title: "6 Meses de SEO por el Precio de 3 — Oferta Limitada | Mkt Web 360",
  description: "Posicionamiento web profesional durante 6 meses completos pagando solo 3. Solo 5 plazas. Trabajo real, métricas reales.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-6x3/" },
  robots: { index: false, follow: false },
};

const INCLUDES = [
  "Auditoría técnica completa del dominio",
  "Investigación de keywords por sector y zona",
  "Optimización on-page de las páginas principales",
  "Creación de contenido SEO mensual",
  "Seguimiento semanal de posiciones",
  "Informe mensual con métricas reales",
  "Acceso a Google Search Console y GA4 — siempre tuyos",
  "Contacto directo con tu responsable de cuenta",
];

const FASES = [
  { periodo: "Mes 1", titulo: "Base y diagnóstico", color: "bg-primary-600", items: ["Auditoría técnica completa", "Mapa de keywords", "Optimización on-page principal", "Configuración de métricas"] },
  { periodo: "Meses 2-3", titulo: "Construcción", color: "bg-primary-500", items: ["Contenido SEO mensual", "Optimización de páginas secundarias", "Google Business Profile", "Primer informe de evolución"] },
  { periodo: "Meses 4-6", titulo: "Consolidación", color: "bg-accent-500", items: ["Link building ético", "Optimización de posiciones 10-20", "Análisis de conversión", "Informe mensual acumulado"] },
];

const WA = "https://wa.me/34622748987?text=Hola%2C%20me%20interesa%20la%20oferta%20SEO%206x3";

export default function LandingSeo6x3Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER MÍNIMO */}
      <header className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image src="/logo.png" alt="Mkt Web 360" width={150} height={42} priority />
          <a href="tel:+34622748987" className="text-primary-700 text-sm font-semibold hover:text-accent-500 transition-colors">
            📞 622 74 89 87
          </a>
        </div>
      </header>

      {/* BANNER URGENCIA */}
      <div className="bg-accent-500 py-2.5 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white text-sm font-bold mb-1">Solo 5 incorporaciones al mes — y tiene una razón</p>
          <p className="text-white/90 text-xs leading-relaxed">Cada cliente nuevo requiere entre 40 y 60 horas de trabajo en el primer mes. Limitamos las incorporaciones para garantizar que cada proyecto recibe esa dedicación completa. Buscamos empresas con un proyecto serio que quieran crecer con nosotros. Nuestro éxito es el tuyo.</p>
        </div>
      </div>

      {/* HERO + FORMULARIO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* COPY IZQUIERDA */}
          <div>
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Oferta especial
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              6 meses de SEO<br />
              <span className="text-accent-400">por el precio de 3</span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed">
              Posicionamiento web profesional durante 6 meses completos. Trabajo real, métricas reales, resultados verificables.
            </p>
            <p className="text-primary-300 text-sm italic mb-8">
              Esta oferta no está disponible en nuestra tarifa habitual. Es una campaña limitada para incorporar nuevas cuentas.
            </p>

            {/* TRUST PILLS */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { value: "6 meses", label: "de trabajo SEO completo" },
                { value: "Solo 5", label: "plazas disponibles" },
                { value: "48h", label: "para arrancar tras la firma" },
                { value: "100%", label: "tus datos, siempre tuyos" },
              ].map((m) => (
                <div key={m.label} className="bg-white/10 rounded-xl px-4 py-3">
                  <div className="text-lg font-bold text-accent-400">{m.value}</div>
                  <div className="text-xs text-primary-200 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* WHATSAPP */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors shadow-lg text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.532 5.856L.054 23.486a.5.5 0 0 0 .609.61l5.7-1.494A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.374l-.36-.214-3.733.979.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              Prefiero hablar por WhatsApp
            </a>
            <p className="text-primary-300 text-xs mt-2 ml-1">Respuesta en menos de 1 hora en horario laboral</p>
          </div>

          {/* FORMULARIO DERECHA */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <p className="text-center text-sm font-semibold text-primary-600 mb-1">Comprueba si tu dominio cumple los requisitos</p>
            <p className="text-center text-xs text-gray-400 mb-5">Analizamos tu caso y te contactamos en menos de 24 horas</p>
            <OfertaSeoForm />
          </div>

        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 text-center mb-2">Qué incluye la oferta</h2>
          <p className="text-center text-gray-500 text-sm mb-8">6 meses de trabajo SEO real. No prometemos posiciones — prometemos el trabajo que las genera.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {INCLUDES.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-primary-600 mb-6 text-center">Cómo se distribuye el trabajo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FASES.map((fase) => (
                <div key={fase.periodo} className="rounded-xl overflow-hidden border border-gray-100">
                  <div className={`${fase.color} text-white px-4 py-3`}>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">{fase.periodo}</p>
                    <p className="font-bold">{fase.titulo}</p>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {fase.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-accent-500 shrink-0 mt-0.5">→</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 text-center mb-8">¿Esta oferta es para ti?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">✅ Encaja si...</h3>
              <ul className="space-y-3">
                {[
                  "Tienes web propia y quieres que Google te encuentre",
                  "Nunca has trabajado el SEO de tu web",
                  "Has trabajado el SEO pero no has visto resultados reales",
                  "Quieres clientes que te buscan, no solo los que ya te conocen",
                  "Puedes comprometerte 6 meses y quieres hacerlo bien",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent-500 shrink-0 mt-0.5">✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-500 mb-4">❌ No encaja si...</h3>
              <ul className="space-y-3">
                {[
                  "No tienes web propia todavía",
                  "Buscas resultados en menos de 2 meses",
                  "No puedes facilitar acceso a tu web y herramientas",
                  "Quieres garantía de posiciones concretas en Google",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="shrink-0 mt-0.5">✗</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 px-4 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">¿Lo tienes claro?</h2>
          <p className="text-primary-200 mb-6 text-sm">Quedan 5 plazas. Cuando se cubran, la oferta cierra.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Solicitar mi plaza →
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO LEGAL */}
      <footer className="bg-primary-900 py-5 px-4 text-center">
        <p className="text-primary-400 text-xs">
          © {new Date().getFullYear()} Mkt Web 360 SLU — CIF B87679304 ·{" "}
          <a href="/politica-de-privacidad/" className="hover:text-white transition-colors">Política de privacidad</a>
          {" · "}
          <a href="/aviso-legal/" className="hover:text-white transition-colors">Aviso legal</a>
        </p>
      </footer>

    </main>
  );
}
