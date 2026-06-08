import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso Legal — Mkt Web 360 SLU",
  description: "Aviso legal y condiciones de uso del sitio web de Mkt Web 360 SLU.",
  alternates: { canonical: "https://www.mktweb360.com/aviso-legal/" },
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Aviso Legal" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-6">Aviso Legal</h1>
      <div className="text-gray-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">1. Datos identificativos</h2>
          <p className="text-sm leading-relaxed">En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li><strong>Denominación social:</strong> Mkt Web 360 SLU</li>
            <li><strong>Domicilio social:</strong> El Viso de San Juan, Toledo, España</li>
            <li><strong>Email:</strong> info@mktweb360.com</li>
            <li><strong>Teléfono:</strong> +34 696 714 476</li>
            <li><strong>Sitio web:</strong> https://www.mktweb360.com</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">2. Condiciones de uso</h2>
          <p className="text-sm leading-relaxed">El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso correcto del sitio web de conformidad con la ley y las presentes condiciones.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">3. Propiedad intelectual</h2>
          <p className="text-sm leading-relaxed">Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos) son propiedad de Mkt Web 360 SLU o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización expresa.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">4. Limitación de responsabilidad</h2>
          <p className="text-sm leading-relaxed">Mkt Web 360 SLU no garantiza la disponibilidad continua del sitio web ni se responsabiliza de los daños que puedan derivarse de su uso.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">5. Legislación aplicable</h2>
          <p className="text-sm leading-relaxed">Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Toledo.</p>
        </section>
      </div>
    </div>
  );
}
