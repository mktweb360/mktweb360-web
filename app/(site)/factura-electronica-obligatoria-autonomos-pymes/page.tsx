import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Factura electrónica obligatoria para autónomos y pymes: qué debes saber en 2026",
  description:
    "La factura electrónica será obligatoria para autónomos y pymes. Descubre qué implica, cuándo entra en vigor, qué necesitas y cómo prepararte.",
  alternates: { canonical: "https://www.mktweb360.com/factura-electronica-obligatoria-autonomos-pymes/" },
  openGraph: {
    title: "Factura electrónica obligatoria para autónomos y pymes: qué debes saber en 2026 | Mkt Web 360",
    description: "La factura electrónica será obligatoria para autónomos y pymes. Descubre qué implica, cuándo entra en vigor, qué necesitas y cómo prepararte.",
    url: "https://www.mktweb360.com/factura-electronica-obligatoria-autonomos-pymes/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Factura electrónica obligatoria para autónomos y pymes: qué debes saber en 2026",
  description: "La factura electrónica será obligatoria para autónomos y pymes. Descubre qué implica, cuándo entra en vigor, qué necesitas y cómo prepararte.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/factura-electronica-obligatoria-autonomos-pymes/",
  mainEntityOfPage: "https://www.mktweb360.com/factura-electronica-obligatoria-autonomos-pymes/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Factura electrónica obligatoria", item: "https://www.mktweb360.com/factura-electronica-obligatoria-autonomos-pymes/" },
  ],
};

const FAQS = [
  {
    q: "¿La factura electrónica es lo mismo que un PDF enviado por email?",
    a: "No. La factura electrónica requiere un formato estructurado específico (como Facturae), firma electrónica válida y en algunos casos registro en plataformas habilitadas. Un PDF no cumple los requisitos.",
  },
  {
    q: "¿Afecta a las facturas a particulares?",
    a: "No. La obligación se aplica a operaciones B2B, entre empresas y profesionales. Las facturas a consumidores finales quedan fuera de esta obligación por ahora.",
  },
  {
    q: "¿Qué software puedo usar para emitir facturas electrónicas?",
    a: "Existen varias opciones homologadas en el mercado. Lo importante es verificar que el software genera los formatos requeridos por la normativa española y que incluye firma electrónica.",
  },
  {
    q: "¿Cuándo debo empezar a prepararme?",
    a: "Cuanto antes mejor. Adaptar los procesos lleva tiempo y es preferible hacerlo con margen que bajo presión cuando la fecha de obligación esté próxima.",
  },
  {
    q: "¿Necesito un asesor para adaptarme a la factura electrónica?",
    a: "Para la parte fiscal y legal, sí es recomendable contar con asesoramiento. Para la parte tecnológica, muchos proveedores de software ofrecen soporte en la transición.",
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

export default function FacturaElectronicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Factura electrónica obligatoria para autónomos y pymes" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Factura electrónica obligatoria para autónomos y pymes: qué debes saber en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La Ley Crea y Crece establece la obligatoriedad progresiva de la factura electrónica para autónomos y pymes en sus relaciones entre empresas. Si todavía no te has preparado, este artículo te explica qué implica y por dónde empezar.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Enviar un PDF por email no es factura electrónica. Este es el malentendido más frecuente cuando se habla de la obligatoriedad que viene. La factura electrónica real tiene requisitos técnicos y legales concretos, y adaptarse a tiempo es mucho más sencillo si se empieza con margen.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es la factura electrónica y por qué se vuelve obligatoria</h2>
          <p>La factura electrónica es un documento de facturación emitido en formato digital estructurado, con validez legal equivalente a la factura en papel. La Ley Crea y Crece establece su obligatoriedad progresiva para autónomos y pymes en sus relaciones B2B (entre empresas y profesionales), con el objetivo de reducir la morosidad comercial y mejorar el control fiscal. No se trata de enviar un PDF por email — requiere un formato específico, firma electrónica y en algunos casos registro en plataformas habilitadas.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo entra en vigor y a quién afecta</h2>
          <p>La obligación se aplica en fases según el tamaño de la empresa. Las grandes empresas ya están obligadas. Para autónomos y pymes con menor facturación, la entrada en vigor está prevista de forma progresiva. Es importante no esperar al último momento, ya que adaptar los procesos de facturación lleva tiempo y requiere elegir la solución correcta. Afecta a todas las operaciones B2B en España — entre empresas y profesionales — no a facturas emitidas a consumidores finales.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué necesitas para cumplir con la obligación</h2>
          <p>Para emitir facturas electrónicas correctamente necesitas un software de facturación homologado que genere los formatos requeridos (Facturae o similar), capacidad de firmar electrónicamente los documentos, y en algunos casos acceso a plataformas de intercambio reconocidas. La mayoría de herramientas de gestión ya están adaptando sus sistemas, pero conviene verificarlo con tu proveedor actual.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Necesitas adaptar la presencia digital de tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">La factura electrónica es un paso hacia la digitalización completa. Si quieres revisar cómo está tu negocio digitalmente, podemos hacer un diagnóstico sin compromiso.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar auditoría digital
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué pasa si no te adaptas a tiempo</h2>
          <p>El incumplimiento puede acarrear sanciones económicas. Además, no poder emitir facturas electrónicas puede generar problemas operativos con clientes que ya las exigen o que trabajan con sistemas automatizados de recepción. La adaptación temprana evita urgencias y permite resolver problemas de proceso con margen.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo afecta a la gestión digital de tu negocio</h2>
          <p>La factura electrónica es una oportunidad para revisar y mejorar los procesos de gestión del negocio. Muchos autónomos y pymes aprovechan este momento para actualizar su software de gestión, integrar la facturación con su contabilidad y digitalizar otros procesos administrativos. La digitalización bien hecha reduce tiempo, errores y dependencia de gestiones manuales.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/como-digitalizar-tu-negocio/" className="text-accent-500 hover:underline">Cómo digitalizar tu negocio sin complicarte la vida</Link> · <Link href="/que-revisar-antes-de-invertir-mas-en-marketing-digital/" className="text-accent-500 hover:underline">Qué revisar antes de invertir más en marketing digital</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Digitaliza tu negocio con orden y sin complicaciones</h2>
            <p className="text-primary-200 mb-6">
              Desde la presencia web hasta los procesos digitales, en Mkt Web 360 ayudamos a autónomos y pymes a adaptarse al entorno digital con criterio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/auditoria-digital/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de auditoría digital
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la factura electrónica</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicio relacionado: <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link> · <Link href="/kit-digital/" className="text-accent-500 hover:underline">Kit Digital para empresas</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="factura-electronica-obligatoria-autonomos-pymes" />
    </>
  );
}
