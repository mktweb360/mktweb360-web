// Home: componente de servidor. Solo HeroSlider, ServicesTab, carruseles y formularios
// se hidratan en el cliente (HomeInteractive.tsx y componentes propios).
import Link from "next/link";
import Image from "next/image";
import { getVisiblePosts } from "@/lib/blog";
import { OfertasSlider } from "@/components/OfertasSlider";
import { ContactForm } from "@/components/ContactForm";
import { BlogCarousel } from "@/components/BlogCarousel";
import { HeroSlider, ServicesTab, TestimonialsCarousel } from "@/components/HomeInteractive";

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
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_75%_at_50%_50%,rgba(15,28,46,0.78)_0%,rgba(15,28,46,0.6)_55%,rgba(15,28,46,0.35)_100%)]" />
        <div className="max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            SEO + GEO + Google Maps
          </span>
          <h2 id="oferta-seo-geo-gbp" className="text-3xl md:text-5xl font-bold leading-tight mb-5 [text-shadow:0_2px_10px_rgba(15,28,46,0.6)]">
            Que te encuentren en Google, en la IA y en el mapa
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 [text-shadow:0_1px_4px_rgba(15,28,46,0.6)]">
            Tus clientes te buscan en el buscador, en Google Maps y también preguntando a un asistente de IA. Trabajamos los tres frentes en un solo servicio mensual: posicionamiento SEO, GEO para que cualquier IA pueda encontrarte y citarte, y tu ficha de Google Business Profile.
          </p>
          <p className="mb-10 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
            <span className="text-[#ff7a00] text-4xl md:text-5xl font-bold whitespace-nowrap [text-shadow:0_2px_10px_rgba(15,28,46,0.6)]">349 €/mes</span>
            <span className="text-white/90 text-base whitespace-nowrap">+ IVA</span>
            <span className="basis-full text-white/90 text-base">Tres servicios en uno · sin permanencia</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/oferta-seo-geo-gbp/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors">
              Quiero aparecer
            </Link>
            <Link href="/oferta-seo-geo-gbp/#incluye" className="border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Ver qué incluye
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 px-4 bg-primary-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "+1.000", label: "proyectos entregados" },
            { value: "+10 años", label: "de experiencia digital" },
            { value: "Nacional", label: "servicio en toda España" },
            { value: "Exclusivo", label: "un cliente por sector y zona" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-bold text-accent-400">{m.value}</div>
              <div className="text-sm text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Por qué elegir Mkt Web 360?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                ),
                title: "+10 años de experiencia",
                desc: "Una década ayudando a empresas españolas a crecer online con estrategias de marketing digital.",
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                ),
                title: "Trato cercano y dedicado",
                desc: "No somos una gran agencia impersonal. Cada cliente tiene un responsable dedicado y atención directa.",
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                ),
                title: "Exclusividad sectorial",
                desc: "No trabajamos con tu competencia en tu zona. Tu sector es exclusivamente tuyo en tu área geográfica.",
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
                ),
                title: "IA aplicada a tu proyecto",
                desc: "La experiencia de un equipo senior. La precisión de la inteligencia artificial. Protocolos propios de IA en cada servicio.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Listo para hacer crecer tu negocio?</h2>
            <p className="text-primary-200">Solicita una auditoría gratuita de tu presencia digital. Sin compromiso.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
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
