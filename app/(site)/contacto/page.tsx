import type { Metadata } from "next";
import { ContactPageBody } from "@/components/ContactPageBody";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Contacto: presupuesto de marketing digital",
  description: "Contacta con Mkt Web 360. Solicita tu presupuesto gratuito de marketing digital, SEO, Google Ads, redes sociales o diseño web. Tel: +34 622 748 987.",
  alternates: alternatesFor("/contacto/") ?? { canonical: "https://www.mktweb360.com/contacto/" },
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
  description: "Agencia de marketing digital especializada en SEO, Google Ads, diseño web y GEO para PYMEs y empresas en España.",
  areaServed: "España",
  sameAs: [
    "https://www.facebook.com/mktweb360/",
    "https://x.com/MktWeb360",
    "https://www.instagram.com/mktweb360/",
    "https://www.linkedin.com/company/mkt-web-360-s-l/",
    "https://www.youtube.com/@mktweb360",
    "https://www.pinterest.es/mktweb3812/",
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <ContactPageBody lang="es" />
    </>
  );
}
