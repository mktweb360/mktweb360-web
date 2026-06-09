import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Cómo Elegir el Mejor Hosting para tu Web — Guía Completa 2024",
  description: "Guía completa para elegir el mejor hosting para tu página web. Tipos de hosting, qué factores importan, cómo afecta al SEO y recomendaciones por tipo de proyecto.",
  alternates: { canonical: "https://www.mktweb360.com/como-elegir-el-mejor-hosting-para-tu-web/" },
  openGraph: {
    title: "Cómo Elegir el Mejor Hosting para tu Web | Mkt Web 360",
    description: "Guía para elegir el hosting adecuado según tu tipo de web, presupuesto y necesidades de rendimiento.",
    url: "https://www.mktweb360.com/como-elegir-el-mejor-hosting-para-tu-web/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Elegir el Mejor Hosting para tu Web",
  description: "Guía completa para elegir el hosting correcto para tu página web.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2023-10-25",
  url: "https://www.mktweb360.com/como-elegir-el-mejor-hosting-para-tu-web/",
  mainEntityOfPage: "https://www.mktweb360.com/como-elegir-el-mejor-hosting-para-tu-web/",
};

export default function MejorHostingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo Elegir el Mejor Hosting" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web</span>
            <time className="text-sm text-gray-400" dateTime="2023-10-25">25 de octubre de 2023</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo Elegir el Mejor Hosting para tu Web
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El hosting es la base de tu presencia online. Una mala elección puede afectar gravemente a la velocidad de tu web, a tu posicionamiento SEO y a la experiencia de tus usuarios.
          </p>
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Qué es un hosting y por qué es importante?</h2>
          <p>El hosting web es el servicio que almacena los archivos de tu web en servidores conectados a internet 24/7. Cuando alguien escribe tu dominio en el navegador, se conecta a ese servidor para cargar tu web. La calidad del hosting determina la velocidad de carga, la disponibilidad y la seguridad de tu sitio.</p>
          <p>Google usa la velocidad de carga como factor de posicionamiento (Core Web Vitals). Un hosting lento perjudica directamente tu SEO, aumenta la tasa de rebote y reduce las conversiones. Por eso la elección del hosting no es un tema menor.</p>

          <h2 className="text-2xl font-bold text-primary-600">Tipos de hosting</h2>

          <div className="space-y-4">
            {[
              {
                title: "Hosting compartido",
                price: "desde 3€/mes",
                pros: "Económico, fácil de gestionar, soporte incluido.",
                cons: "Recursos compartidos con otras webs, rendimiento variable, menos control.",
                ideal: "Webs corporativas sencillas, blogs, pequeños negocios locales con poco tráfico.",
              },
              {
                title: "VPS (Servidor Virtual Privado)",
                price: "desde 15€/mes",
                pros: "Recursos dedicados, mejor rendimiento, más control sobre la configuración.",
                cons: "Requiere más conocimientos técnicos o gestión por parte del proveedor.",
                ideal: "PYMEs con tráfico medio-alto, tiendas online en crecimiento, webs con funcionalidades específicas.",
              },
              {
                title: "Servidor dedicado",
                price: "desde 80€/mes",
                pros: "Máximo rendimiento, total control, seguridad aislada.",
                cons: "Caro, requiere administración técnica especializada.",
                ideal: "Empresas grandes, e-commerce con alto volumen de tráfico, plataformas con requisitos técnicos específicos.",
              },
              {
                title: "Hosting en la nube (Cloud)",
                price: "desde 10€/mes",
                pros: "Escalable, pago por uso, alta disponibilidad, redundancia.",
                cons: "Precio variable según el uso, puede ser complejo de gestionar.",
                ideal: "Proyectos con tráfico variable, startups en crecimiento, aplicaciones web.",
              },
            ].map(type => (
              <div key={type.title} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-primary-700">{type.title}</h3>
                  <span className="text-accent-500 font-semibold text-sm">{type.price}</span>
                </div>
                <p className="text-sm mb-1"><span className="text-emerald-600 font-medium">✓ Ventajas:</span> {type.pros}</p>
                <p className="text-sm mb-1"><span className="text-red-600 font-medium">✗ Inconvenientes:</span> {type.cons}</p>
                <p className="text-sm"><span className="text-primary-600 font-medium">Ideal para:</span> {type.ideal}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué factores mirar al elegir un hosting</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Uptime garantizado:</strong> Busca al menos un 99.9% de disponibilidad. Cada hora de caída cuesta ventas y daña tu SEO.</li>
            <li><strong>Velocidad y localización de servidores:</strong> Para webs dirigidas a España, elige servidores en España o en la Unión Europea.</li>
            <li><strong>Soporte técnico:</strong> Que sea 24/7 y en español. Los problemas técnicos no avisan.</li>
            <li><strong>Certificado SSL incluido:</strong> Imprescindible para el SEO y la confianza del usuario. Hoy debe venir incluido en cualquier plan.</li>
            <li><strong>Copias de seguridad automáticas:</strong> Comprueba la frecuencia de los backups y si están incluidos en el precio.</li>
            <li><strong>Escalabilidad:</strong> Que puedas aumentar recursos fácilmente si tu web crece.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Cómo afecta el hosting al SEO</h2>
          <p>Un hosting lento impacta negativamente en el LCP (Largest Contentful Paint), uno de los Core Web Vitals que Google usa como factor de ranking. Además, si tu web cae frecuentemente, los bots de Google pueden tener problemas para indexarla correctamente.</p>
          <p>Para webs WordPress, los plugins de caché (como WP Rocket o LiteSpeed Cache) pueden compensar parte de un hosting lento, pero no pueden sustituir a un buen servidor. Lo ideal es empezar con un buen hosting desde el principio.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Necesitas ayuda para elegir hosting para tu web?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 nos encargamos del hosting, la seguridad y el mantenimiento técnico de tu web para que tú puedas centrarte en tu negocio.</p>
            <Link href="/diseno-de-paginas-web/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver diseño web profesional
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-elegir-el-mejor-hosting-para-tu-web" />
    </>
  );
}
