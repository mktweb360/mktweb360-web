import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Contacto: pide presupuesto de marketing digital",
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

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué pasa después de enviar tu consulta</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 leading-relaxed">
          <li className="bg-primary-50 rounded-xl p-5"><strong className="block text-primary-700 mb-1">1. Revisamos tu caso</strong>Revisamos tu web y tu consulta antes de responder, para hablar de tu caso y no con generalidades.</li>
          <li className="bg-primary-50 rounded-xl p-5"><strong className="block text-primary-700 mb-1">2. Te respondemos en 24 horas</strong>Por email o por teléfono, como prefieras, con un primer diagnóstico y las preguntas que necesitamos resolver.</li>
          <li className="bg-primary-50 rounded-xl p-5"><strong className="block text-primary-700 mb-1">3. Propuesta a medida</strong>Si encaja, te enviamos una propuesta con objetivos, acciones, plazos y precio. Sin compromiso.</li>
        </ol>
        <p className="mt-8 text-gray-700 leading-relaxed">
          Trabajamos con empresas, pymes y autónomos de toda España en <Link href="/seo-posicionamiento-web-organico/" className="text-accent-700 underline underline-offset-2">SEO</Link>, <Link href="/geo-posicionamiento-ia/" className="text-accent-700 underline underline-offset-2">posicionamiento en IA</Link>, <Link href="/sem-publicidad-ppc/" className="text-accent-700 underline underline-offset-2">Google Ads</Link> y <Link href="/diseno-de-paginas-web/" className="text-accent-700 underline underline-offset-2">diseño web</Link>. Si todavía no sabes por dónde empezar, pide una <Link href="/auditoria-digital/" className="text-accent-700 underline underline-offset-2">auditoría de marketing digital</Link>.
        </p>
      </section>
    </div>
    </>
  );
}
