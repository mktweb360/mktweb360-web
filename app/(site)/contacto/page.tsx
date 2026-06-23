import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Mkt Web 360 Agencia de Marketing Digital",
  description: "Contacta con Mkt Web 360. Solicita tu presupuesto gratuito de marketing digital, SEO, Google Ads, redes sociales o diseño web. Tel: +34 622 748 987.",
  alternates: { canonical: "https://www.mktweb360.com/contacto/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mkt Web 360 SLU",
  url: "https://www.mktweb360.com",
  telephone: "+34622748987",
  email: "info@mktweb360.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Chopo 98",
    addressLocality: "El Viso de San Juan",
    postalCode: "45215",
    addressRegion: "Toledo",
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.8878, longitude: -4.0647 },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "€€",
  description: "Agencia de marketing digital especializada en SEO, Google Ads, diseño web y GEO para PYMEs y empresas en España.",
  areaServed: "España",
  sameAs: ["https://www.linkedin.com/company/mkt-web-360"],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Contacto</h1>
      <p className="text-xl text-gray-600 mb-10">
        ¿Tienes un proyecto en mente? Cuéntanoslo y te respondemos en menos de 24 horas con una propuesta personalizada.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div>
            <h2 className="font-semibold text-primary-700 mb-2">Dirección</h2>
            <address className="text-gray-600 not-italic text-sm">
              El Viso de San Juan<br />
              Toledo, España
            </address>
          </div>
          <div>
            <h2 className="font-semibold text-primary-700 mb-2">Teléfono</h2>
            <a href="tel:+34622748987" className="text-accent-500 font-medium hover:underline">+34 622 748 987</a>
          </div>
          <div>
            <h2 className="font-semibold text-primary-700 mb-2">Email</h2>
            <a href="mailto:info@mktweb360.com" className="text-accent-500 font-medium hover:underline">info@mktweb360.com</a>
          </div>
          <div>
            <h2 className="font-semibold text-primary-700 mb-2">Horario</h2>
            <p className="text-gray-600 text-sm">Lunes a Viernes: 9:00 — 18:00</p>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
