import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CondicionesBlackFriday } from "@/components/CondicionesBlackFriday";
import { PROMOS_BF, lineaBf, despuesBf, etiquetaBf, type BfPlanId } from "@/lib/black-friday";
import { planPorId, type PlanId } from "@/lib/planes-seo";

// Landing de campaña (Google Ads) de un plan con precio Black Friday. Todo sale de fuentes únicas:
// precio, duración y fechas de lib/black-friday.ts; límites e inclusiones de lib/planes-seo.ts (ya aprobados).
// No añade cifras, plazos ni resultados propios. La landing es noindex: no compite con las páginas del sitio.
// Campaña temporal: se retira con el resto de piezas Black Friday (skill gestion-campanas-temporales).

interface Props {
  id: BfPlanId & PlanId;
  /** formType del formulario (llega al CRM y a GA4). */
  formType: string;
  /** H1 propio de la landing (intención del anuncio). */
  titular: string;
  /** Frase bajo el titular. */
  entradilla: string;
  /** Texto prefijado del mensaje de WhatsApp. */
  whatsapp: string;
}

export function LandingPlanBf({ id, formType, titular, entradilla, whatsapp }: Props) {
  const plan = planPorId(id, "es");
  const promo = PROMOS_BF[id];
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

      <section className="mw-skin-hero text-white py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              {etiquetaBf("es")}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{titular}</h1>
            <p className="text-lg text-primary-200 mb-6 leading-relaxed">{entradilla}</p>
            <div className="bg-white/10 rounded-2xl px-5 py-4 mb-6">
              <div className="text-3xl font-black text-accent-400">
                {promo.promo} €/mes <span className="text-base font-semibold text-primary-200">+ IVA</span>
              </div>
              <p className="text-sm text-primary-200 mt-1">{lineaBf(id, "es")}</p>
              <p className="text-xs text-primary-300 mt-2">{despuesBf(id, "es")}.</p>
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="inline-block border border-white/40 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-white/10 transition-colors"
              data-cta="whatsapp"
            >
              Prefiero escribir por WhatsApp
            </a>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-xl" id="contacto">
            <h2 className="text-xl font-bold text-primary-700 mb-1">Pide tu diagnóstico gratuito</h2>
            <p className="text-sm text-gray-600 mb-4">Cuéntanos tu caso y te respondemos con una propuesta a medida.</p>
            <ContactForm formType={formType} submitLabel="Pedir diagnóstico gratuito" />
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-2">{plan.nombre}</h2>
            <p className="text-gray-700 mb-5">Para: {plan.paraQuien.charAt(0).toLowerCase() + plan.paraQuien.slice(1)}.</p>
            <h3 className="font-semibold text-primary-700 mb-2">Tamaño del proyecto</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {plan.limites.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary-700 mb-2">Qué incluye</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {plan.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-14 px-4">
        <CondicionesBlackFriday lang="es" />
      </section>

      <footer className="border-t border-gray-100 py-6 px-4 text-center text-xs text-gray-500">
        Mkt Web 360 SLU · mktweb360.com · info@mktweb360.com
      </footer>
    </main>
  );
}
