import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad — Mkt Web 360 SLU",
  description: "Política de privacidad y protección de datos personales de Mkt Web 360 SLU conforme al RGPD.",
  alternates: { canonical: "https://www.mktweb360.com/politica-de-privacidad/" },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Política de Privacidad" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-6">Política de Privacidad</h1>
      <div className="text-gray-700 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">1. Responsable del tratamiento</h2>
          <p>Mkt Web 360 SLU, con domicilio en El Viso de San Juan, Toledo, España. Email: info@mktweb360.com</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">2. Datos que recopilamos</h2>
          <p>A través de nuestro formulario de contacto recopilamos: nombre, dirección de email, teléfono y el mensaje que nos envías. Estos datos se usan exclusivamente para atender tu consulta.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">3. Base jurídica del tratamiento</h2>
          <p>El tratamiento de tus datos se basa en tu consentimiento expreso al enviar el formulario de contacto (Art. 6.1.a RGPD).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">4. Conservación de datos</h2>
          <p>Conservamos tus datos durante el tiempo necesario para atender tu consulta y, si hay relación contractual, durante el tiempo que establezca la legislación aplicable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">5. Tus derechos</h2>
          <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad enviando un email a info@mktweb360.com.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-2">6. Transferencias internacionales</h2>
          <p>No realizamos transferencias internacionales de datos personales fuera del Espacio Económico Europeo.</p>
        </section>
      </div>
    </div>
  );
}
