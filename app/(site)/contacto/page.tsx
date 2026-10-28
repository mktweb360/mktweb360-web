import type { Metadata } from "next";
import { ContactPageBody } from "@/components/ContactPageBody";
import { alternatesFor } from "@/lib/i18n/routes";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, fromMeta, ORG_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto: presupuesto de marketing digital",
  description: "Contacta con Mkt Web 360. Solicita tu presupuesto gratuito de marketing digital, SEO, Google Ads, redes sociales o diseño web. Tel: +34 622 748 987.",
  alternates: alternatesFor("/contacto/") ?? { canonical: "https://www.mktweb360.com/contacto/" },
};

// ContactPage: los datos de contacto (teléfono, email, dirección) ya están en el schema de la
// organización del layout raíz; aquí se referencia por @id en vez de repetir otra LocalBusiness.
const contactSchema = webPageSchema("ContactPage", { lang: "es", path: "/contacto/", ...fromMeta(metadata) }, { mainEntity: { "@id": ORG_ID } });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactPageBody lang="es" />
    </>
  );
}
