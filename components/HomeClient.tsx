// Home: componente de servidor. Solo HeroSlider, ServicesTab, carruseles y formularios
// se hidratan en el cliente (HomeInteractive.tsx y componentes propios).
import Link from "next/link";
import Image from "next/image";
import { getVisiblePosts } from "@/lib/blog";
import { OfertasSlider } from "@/components/OfertasSlider";
import { ContactForm } from "@/components/ContactForm";
import { BlogCarousel } from "@/components/BlogCarousel";
import { HeroSlider, ServicesTab, TestimonialsCarousel } from "@/components/HomeInteractive";
import { CompromisoExclusividad } from "@/components/CompromisoExclusividad";
import { HomeContacto } from "@/components/HomeContacto";

const FAQS = [
  {
    q: "¿Cuánto tiempo tarda en verse resultados con el SEO?",
    a: "Los primeros resultados del SEO suelen verse entre 3 y 6 meses, aunque depende de la competencia del sector y el estado actual de la web. El SEO es una inversión a largo plazo con resultados duraderos.",
  },
  {
    q: "¿Trabajáis con exclusividad sectorial?",
    a: "Sí, uno de nuestros valores es la exclusividad sectorial por zona geográfica. No trabajamos con dos empresas del mismo sector en la misma área para evitar conflictos de interés.",
  },
  {
    q: "¿Cuál es el proceso para empezar a trabajar juntos?",
    a: "El proceso es simple: contacta con nosotros, realizamos una auditoría gratuita de tu situación digital, te presentamos una propuesta personalizada y, si encaja, comenzamos a trabajar.",
  },
  {
    q: "¿Ofrecéis informes de resultados?",
    a: "Sí, enviamos informes mensuales detallados con todas las métricas relevantes: posiciones SEO, tráfico, conversiones, rendimiento de campañas y evolución de redes sociales.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Slider */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <HeroSlider />
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-3">¿Qué quieres conseguir?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Elige tu objetivo y descubre los servicios que te ayudan a conseguirlo.</p>
          </div>
          <ServicesTab />
        </div>
      </section>

      {/* Oferta SEO + GEO + GBP — bloque destacado (permanente desde 2-oct-2026).
          Inventario: CAMPAÑA-oferta-seo-geo-gbp-2026-10-02.md (Drive). */}
      <section aria-labelledby="oferta-seo-geo-gbp" className="relative isolate overflow-hidden text-white">
        <Image
          src="/oferta-seo-geo-gbp-home.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover -z-20"
          style={{ objectPosition: "50% 40%" }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(15,28,46,0.72)] lg:bg-[linear-gradient(90deg,rgba(15,28,46,0.82)_0%,rgba(15,28,46,0.62)_45%,rgba(15,28,46,0.4)_75%,rgba(15,28,46,0.3)_100%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              SEO + GEO + Google Maps
            </span>
            <h2 id="oferta-seo-geo-gbp" className="text-3xl md:text-5xl font-bold leading-tight mb-5 [text-shadow:0_2px_10px_rgba(15,28,46,0.6)]">
              Que te encuentren en Google, en la IA y en el mapa
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 [text-shadow:0_1px_4px_rgba(15,28,46,0.6)]">
              Tus clientes te buscan en el buscador, en Google Maps y también preguntando a un asistente de IA. Trabajamos los tres frentes en un solo servicio mensual: posicionamiento SEO, GEO para que cualquier IA pueda encontrarte y citarte, y tu ficha de Google Business Profile.
            </p>
            <p className="mb-8 flex flex-wrap items-baseline justify-center lg:justify-start gap-x-3 gap-y-1">
              <span className="text-[#ff7a00] text-4xl md:text-5xl font-bold whitespace-nowrap [text-shadow:0_2px_10px_rgba(15,28,46,0.6)]">349 €/mes</span>
              <span className="text-white/90 text-base whitespace-nowrap">+ IVA</span>
              <span className="basis-full text-white/90 text-base">Tres servicios en uno · sin permanencia</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/oferta-seo-geo-gbp/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-accent-600 transition-colors">
                Quiero aparecer
              </Link>
              <Link href="/oferta-seo-geo-gbp/#incluye" className="border border-white/60 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors">
                Ver qué incluye
              </Link>
            </div>
          </div>

          {/* Formulario: auditoría gratuita SEO + GEO + Google Business Profile */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-600">Sin coste ni compromiso</p>
            <p className="mt-1 mb-5 text-xl font-bold text-primary-700">Pide tu auditoría SEO + GEO + Google Maps</p>
            <ContactForm
              formType="auditoria"
              websiteRequired
              gbpField={{ label: "Tu negocio en Google Maps (opcional)", placeholder: "Nombre del negocio y ciudad, o enlace a tu ficha" }}
              messageLabel="¿Qué te gustaría conseguir? (opcional)"
              messageOptional
              messagePlaceholder="Más clientes de tu zona, vender online, aparecer en la IA…"
              submitLabel="Quiero mi auditoría gratuita"
            />
          </div>
        </div>
      </section>

      {/* Compromiso: exclusividad por sector y zona + principios (sustituye a cifras y "¿Por qué elegir?") */}
      <CompromisoExclusividad />

      {/* Prueba social: reseñas reales de Google (nombre y origen verificables) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary-100 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Lo que dicen nuestros clientes</span>
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              El sector cambia.<br />
              <span className="text-accent-500">El método no.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Trabajamos con negocios de sectores muy distintos. Lo que tienen en común: quieren más clientes y resultados medibles.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Slider ofertas */}
      <OfertasSlider />

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 transition-colors flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform text-lg">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto: pasos + formulario de auditoría gratuita */}
      <HomeContacto />

      {/* Últimas publicaciones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Blog</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-700">Últimas publicaciones</h2>
            </div>
            <Link href="/blog/" className="text-accent-500 font-semibold text-sm hover:underline hidden md:block">
              Ver todos los artículos →
            </Link>
          </div>
          <BlogCarousel posts={getVisiblePosts().slice(0, 12).map(({ slug, title, excerpt, category, date }) => ({ slug, title, excerpt, category, date, tags: [], relatedSlugs: [] }))} />
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog/" className="text-accent-500 font-semibold text-sm hover:underline">
              Ver todos los artículos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
