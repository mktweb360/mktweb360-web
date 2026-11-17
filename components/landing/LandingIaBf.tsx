import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/TrackedLink";
import { CondicionesBlackFriday } from "@/components/CondicionesBlackFriday";
import { MovilIaDemo } from "@/components/landing/MovilIaDemo";
import { LlamamosCampo } from "@/components/landing/LlamamosCampo";
import { PRECIO_GEO_SOLO, BF_FIN_TEXTO, etiquetaBf } from "@/lib/black-friday";
import { planPorId } from "@/lib/planes-seo";
import { preciosOfertaSeo } from "@/lib/precios-planes";

// Landing de campaña (Google Ads) con el gancho «visibilidad en IA». Dos variantes, cada una con su formType y su ctaId
// para medir por separado (GTM/Google Ads):
//  - "geo":  GEO solo, 99 €/mes + IVA, precio PERMANENTE. Sin etiqueta Black Friday, sin fecha de fin ni urgencia (no es temporal).
//  - "pack": SEO + GEO + Google Maps, oferta Black Friday (precio de preciosOfertaSeo(), sin permanencia, hasta BF_FIN_ISO).
// Las inclusiones salen de lib/planes-seo.ts (plan «pyme») y de la página de GEO. No se prometen menciones ni resultados:
// el plazo de 2-4 meses es el que ya publica /geo-posicionamiento-ia/. Landing noindex. Se retira con el resto de piezas Black Friday.

type Variante = "geo" | "pack";

const GEO_INCLUYE = [
  "Auditoría de visibilidad en IA: cómo te mencionan (o no) ChatGPT, Gemini, Copilot, Perplexity, Claude o el modo IA de Google",
  "Contenido citable: respuestas claras a lo que preguntan tus clientes",
  "Datos estructurados y llms.txt para que los asistentes entiendan tu negocio",
  "Seguimiento mensual de tu visibilidad en asistentes de IA",
];

interface Props {
  variante: Variante;
  formType: string;
  titular: string;
  entradilla: string;
  whatsapp: string;
  /** Opcionales (solo la landing GEO): texto en mayúsculas sobre el titular, subtítulo, gancho y móvil de ejemplo. */
  eyebrow?: string;
  subtitulo?: string;
  gancho?: string;
  conMovil?: boolean;
}

export async function LandingIaBf({ variante, formType, titular, entradilla, whatsapp, eyebrow, subtitulo, gancho, conMovil }: Props) {
  const esPack = variante === "pack";
  const po = esPack ? await preciosOfertaSeo() : null;
  const plan = esPack ? planPorId("pyme", "es") : null;
  const precioInterior = esPack && po ? (
    <>
      <div className="text-3xl font-black text-accent-400">
        {po.permanencia6m} €/mes <span className="text-base font-semibold text-primary-200">+ IVA</span>
      </div>
      <p className="text-sm text-primary-200 mt-1">
        Black Friday: {po.permanencia6m} €/mes + IVA durante 6 meses · Tarifa general: {po.sinPermanencia} €/mes + IVA · sin permanencia · contratando hasta el{" "}
        {BF_FIN_TEXTO.es}
      </p>
      <p className="text-xs text-primary-300 mt-2">Pasados los 6 meses hablamos contigo para acordar cómo seguir.</p>
    </>
  ) : (
    <>
      <div className="text-3xl font-black text-accent-400">
        {PRECIO_GEO_SOLO} €/mes <span className="text-base font-semibold text-primary-200">+ IVA</span>
      </div>
      <p className="text-sm text-primary-200 mt-1">Precio permanente · sin permanencia</p>
    </>
  );
  const wa = `https://wa.me/34622748987?text=${encodeURIComponent(whatsapp)}`;
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image src="/logo.png" alt="Mkt Web 360" width={150} height={42} priority />
          <a href="tel:+34622748987" className="text-primary-700 text-sm font-semibold hover:text-accent-500 transition-colors">
            622 74 89 87
          </a>
        </div>
      </header>

      <section className="mw-skin-hero text-white py-12 md:py-14 px-4 overflow-x-clip">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 items-start">
          <div className="md:col-start-1 md:row-start-1">
            {esPack && (
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5">
                {etiquetaBf("es")}
              </span>
            )}
            {eyebrow && (
              <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase text-white" style={{ letterSpacing: "2px" }}>
                {eyebrow}
              </p>
            )}
            <h1 className={conMovil ? "text-3xl md:text-4xl font-bold mb-3 leading-tight text-accent-400" : "text-3xl md:text-4xl font-bold mb-4 leading-tight"}>{titular}</h1>
            {subtitulo && <p className="text-lg font-semibold text-white mb-2 leading-snug">{subtitulo}</p>}
            <p className={conMovil ? "text-base text-primary-200 mb-4 leading-relaxed" : "text-lg text-primary-200 mb-6 leading-relaxed"}>{entradilla}</p>
            {conMovil ? (
              <>
                <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
                  <div className="bg-white/10 rounded-2xl px-5 py-3 sm:w-fit sm:whitespace-nowrap">{precioInterior}</div>
                  <div className="flex flex-row sm:flex-col gap-2 sm:min-w-[190px]">
                    <TrackedLink
                      href={wa}
                      ctaId="whatsapp-ia-geo"
                      location="landing-ia-bf"
                      type="contact"
                      text="Escríbenos"
                      newTab
                      className="flex flex-1 items-center justify-center rounded-xl bg-[#178f49] px-5 py-3 sm:py-0 text-base font-bold text-white hover:bg-[#137a3d] transition-colors"
                    >
                      Escríbenos
                    </TrackedLink>
                    <LlamamosCampo formType={formType} />
                  </div>
                </div>
                {gancho && <p className="text-center text-lg font-semibold italic text-white mb-1">🚀 {gancho}</p>}
              </>
            ) : (
              <>
                <div className="bg-white/10 rounded-2xl px-5 py-4 mb-6">{precioInterior}</div>
                <TrackedLink
                  href={wa}
                  ctaId={esPack ? "whatsapp-ia-pack" : "whatsapp-ia-geo"}
                  location="landing-ia-bf"
                  type="contact"
                  text="Prefiero escribir por WhatsApp"
                  newTab
                  className="inline-block border border-white/40 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Prefiero escribir por WhatsApp
                </TrackedLink>
              </>
            )}
          </div>

          {conMovil && (
            <div className="md:col-start-1 md:row-start-2 order-last md:order-none">
              <MovilIaDemo />
            </div>
          )}

          <div className={`bg-white text-gray-900 rounded-3xl p-6 shadow-xl ${conMovil ? "md:col-start-2 md:row-start-1 md:row-span-2 md:self-center" : ""}`} id="contacto">
            <h2 className="text-xl font-bold text-primary-700 mb-1">Pide tu diagnóstico gratuito</h2>
            <p className="text-sm text-gray-600 mb-4">Cuéntanos tu caso y te respondemos con una propuesta a medida.</p>
            <ContactForm formType={formType} submitLabel="Pedir diagnóstico gratuito" />
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-3">Por qué importa estar en las respuestas de IA</h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Cada vez más personas preguntan a ChatGPT, Gemini, Copilot, Perplexity, Claude o al modo IA de Google antes de contratar. Si tu empresa no
              aparece en esas respuestas, ese cliente potencial no llega a conocerte.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El efecto en las respuestas de los asistentes puede tardar entre 2 y 4 meses en notarse. No se garantizan menciones ni posiciones: lo que
              hacemos es dejar tu información clara, estructurada y fácil de citar, y medir cada mes cómo evoluciona.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-3">{esPack && plan ? plan.nombre : "GEO: posicionamiento en IA"}</h2>
            {esPack && plan && (
              <>
                <p className="text-gray-700 mb-3">Para: {plan.paraQuien.charAt(0).toLowerCase() + plan.paraQuien.slice(1)}.</p>
                <h3 className="font-semibold text-primary-700 mb-2">Tamaño del proyecto</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                  {plan.limites.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            )}
            <h3 className="font-semibold text-primary-700 mb-2">Qué incluye</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {(esPack && plan ? plan.incluye : GEO_INCLUYE).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-14 px-4">
        {esPack ? (
          <CondicionesBlackFriday lang="es" />
        ) : (
          <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="font-bold text-primary-700 text-lg mb-3">Condiciones</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
              <li>Servicio de GEO solo a {PRECIO_GEO_SOLO} € al mes + IVA: es un precio permanente, no una oferta temporal.</li>
              <li>Sin permanencia: puedes darte de baja avisando con 30 días de antelación. Servicio para empresas y profesionales.</li>
            </ul>
          </div>
        )}
      </section>

      <footer className="border-t border-gray-100 py-6 px-4 text-center text-xs text-gray-500">
        Mkt Web 360 SLU · mktweb360.com · info@mktweb360.com
      </footer>
    </main>
  );
}
