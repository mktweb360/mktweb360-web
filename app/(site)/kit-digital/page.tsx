import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Kit Digital — Agente Digitalizador Autorizado",
  description:
    "Solicita tu ayuda del Kit Digital con Mkt Web 360. Somos agente digitalizador autorizado. Hasta 12.000€ en bonos para digitalizar tu empresa.",
  alternates: { canonical: "https://www.mktweb360.com/kit-digital/" },
};

export default function KitDigitalPage() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Kit Digital" }]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Kit Digital — Digitaliza tu Empresa con Subvenciones</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        El programa Kit Digital del Gobierno de España ofrece ayudas de hasta 12.000€ para que PYMEs y autónomos digitalicen su negocio. En Mkt Web 360 somos agente digitalizador autorizado y te acompañamos en todo el proceso.
      </p>
      <section className="bg-accent-50 border border-accent-200 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-accent-700 mb-4">¿Cuánta ayuda puedes recibir?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { segment: "Segmento I", employees: "10-49 empleados", amount: "12.000€" },
            { segment: "Segmento II", employees: "3-9 empleados", amount: "6.000€" },
            { segment: "Segmento III", employees: "0-2 empleados", amount: "2.000€" },
          ].map(s => (
            <div key={s.segment} className="bg-white rounded-xl p-4 border border-accent-200 text-center">
              <p className="font-bold text-primary-600">{s.segment}</p>
              <p className="text-sm text-gray-500 mb-2">{s.employees}</p>
              <p className="text-3xl font-bold text-accent-500">{s.amount}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Soluciones digitales disponibles</h2>
        <ul className="space-y-2 text-gray-700">
          {[
            "Sitio web y presencia en internet",
            "Comercio electrónico (tienda online)",
            "Gestión de redes sociales",
            "Gestión de clientes (CRM)",
            "Business Intelligence y analítica",
            "Gestión de procesos (ERP)",
            "Ciberseguridad",
          ].map(item => (
            <li key={item} className="flex gap-3">
              <span className="text-accent-500 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Cómo funciona el proceso?</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Comprueba si eres elegible", desc: "La empresa debe estar inscrita en el Censo de empresarios y tener antigüedad mínima de 6 meses." },
            { step: "2", title: "Solicita el bono Kit Digital", desc: "Accede a acelerapyme.es y solicita tu bono según el segmento de tu empresa." },
            { step: "3", title: "Elige tu agente digitalizador", desc: "Selecciona Mkt Web 360 como tu agente digitalizador autorizado." },
            { step: "4", title: "Firma el acuerdo de digitalización", desc: "Formalizamos el acuerdo y comenzamos a implementar las soluciones digitales." },
          ].map(item => (
            <div key={item.step} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
              <span className="text-accent-500 font-bold text-xl shrink-0 w-8">{item.step}.</span>
              <div>
                <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary-600 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Solicita información sobre el Kit Digital</h2>
        <p className="text-primary-200 mb-6">Te ayudamos a solicitar tu bono Kit Digital y a elegir las soluciones más adecuadas para tu empresa.</p>
        <div className="bg-white rounded-xl p-6">
          <ContactForm />
        </div>
      </section>
    </div>
    <RelatedArticles category="Estrategia" />
    </>
  );
}
