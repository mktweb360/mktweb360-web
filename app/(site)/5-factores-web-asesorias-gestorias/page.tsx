import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfferBannerWebSeo } from "@/components/offers/OfferBannerWebSeo";
import { alternatesFor } from "@/lib/i18n/routes";
import { DemoPreviewBanner } from "@/components/DemoPreviewBanner";
import { DEMO_BY_ID } from "@/lib/demos";

export const metadata: Metadata = {
  title: "5 factores clave en la web de una asesoría o gestoría (2026)",
  description:
    "RGPD y doble rol de responsable/encargado del tratamiento, colegiación de gestores administrativos y preparación ante la factura electrónica obligatoria: los 5 factores que determinan si la web de tu asesoría o gestoría capta clientes o pierde su confianza.",
  alternates: alternatesFor("/5-factores-web-asesorias-gestorias/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-asesorias-gestorias/" },
  openGraph: {
    title: "5 factores clave en la web de una asesoría o gestoría | Mkt Web 360",
    description: "RGPD, colegiación de gestores administrativos y factura electrónica: los 5 factores que determinan si tu web de asesoría o gestoría capta clientes.",
    url: "https://www.mktweb360.com/5-factores-web-asesorias-gestorias/",
    type: "article",
    images: [{ url: "/og-5-factores-web-asesorias-gestorias.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una asesoría o gestoría",
  description:
    "Los 5 factores que determinan si la web de una asesoría o gestoría capta clientes: RGPD y doble rol de responsable/encargado del tratamiento, Delegado de Protección de Datos, colegiación de gestores administrativos, reserva de cita online y preparación ante la factura electrónica obligatoria.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-asesorias-gestorias/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-asesorias-gestorias/",
};

const FAQS = [
  {
    q: "¿Una asesoría es responsable o encargada del tratamiento de los datos de sus clientes?",
    a: "Depende de la actividad: actúa como encargada del tratamiento cuando gestiona nóminas, contabilidad o fiscalidad por cuenta de un cliente (lo que exige un contrato conforme al artículo 28 del RGPD con cada uno), y como responsable respecto de los datos propios de su plantilla y de la gestión interna del despacho.",
  },
  {
    q: "¿Es obligatorio tener un Delegado de Protección de Datos?",
    a: "No todas las asesorías están obligadas, pero el volumen y la sensibilidad de los datos que se gestionan a diario en el sector hacen recomendable contar con un DPO, ya sea un empleado formado internamente o un profesional externo.",
  },
  {
    q: "¿Cuándo será obligatoria la factura electrónica entre empresas?",
    a: "El calendario previsto por la Ley Crea y Crece establece octubre de 2027 para empresas con facturación superior a 8 millones de euros, y octubre de 2028 para el resto de empresas y autónomos.",
  },
  {
    q: "¿Hace falta colegiarse para ejercer como gestor administrativo?",
    a: "Sí — para ejercer como gestor administrativo es necesario superar el examen o máster habilitante correspondiente e inscribirse en el Colegio Oficial de Gestores Administrativos.",
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

export default function FactoresWebAsesoriasGestoriasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una asesoría o gestoría" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Asesorías y Gestorías</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una asesoría o gestoría
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una asesoría o gestoría gestiona a diario los datos fiscales, laborales y contables de sus clientes — un nivel de responsabilidad que su web debería reflejar desde el primer segundo, no solo en el trato en la oficina.
          </p>
          <Image
            src="/og-5-factores-web-asesorias-gestorias.jpg"
            alt="5 factores clave en la web de una asesoría o gestoría"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre el doble rol de responsable y encargada del tratamiento de datos, la colegiación del gestor administrativo y la transición hacia la factura electrónica obligatoria, la web de una asesoría o gestoría tiene que transmitir un nivel de rigor normativo que va más allá del diseño. Estos son los cinco factores que determinan si esa web capta clientes o genera dudas.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.abogados} />

          <h2 className="text-2xl font-bold text-primary-600">1. RGPD: el doble rol de responsable y encargada del tratamiento</h2>
          <p>
            Una asesoría actúa como encargada del tratamiento cuando gestiona nóminas, contabilidad o fiscalidad por cuenta de sus clientes — lo que exige un contrato conforme al artículo 28 del RGPD con cada uno de ellos — y como responsable respecto de sus propios datos de plantilla y gestión interna. Confundir ambos roles, o no formalizarlos por escrito, es uno de los incumplimientos más frecuentes del sector.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Delegado de Protección de Datos, cuando el volumen lo justifica</h2>
          <p>
            El volumen y la sensibilidad de los datos que gestiona a diario una asesoría —nóminas, datos fiscales, información bancaria— hacen recomendable contar con un Delegado de Protección de Datos, ya sea un profesional interno formado para ello o un servicio externo especializado. Mostrar en la web que existe esa figura es una señal de seriedad que un cliente exigente valora.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web deja claro cómo proteges los datos fiscales y laborales de tus clientes?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tus formularios y tu ficha de Google, y te decimos exactamente qué falta para captar clientes sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Solicitud de cita online, sin llamar</h2>
          <p>
            Buena parte de las búsquedas de asesoría ocurren fuera del horario de oficina — al cierre del trimestre fiscal, o un domingo por la noche antes de una gestión urgente. Un sistema de solicitud de cita integrado en la web capta a ese cliente en el momento exacto en que decide, sin depender de que alguien conteste el teléfono.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Colegiación visible del gestor administrativo</h2>
          <p>
            Ejercer como gestor administrativo exige superar el examen o máster habilitante correspondiente e inscribirse en el Colegio Oficial de Gestores Administrativos. Mostrar esta colegiación con claridad en la web —igual que un abogado muestra su número de colegiado— es una garantía de cualificación que diferencia a una asesoría seria de la competencia informal del sector.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Preparación ante la factura electrónica obligatoria</h2>
          <p>
            La Ley Crea y Crece marca octubre de 2027 para empresas con facturación superior a 8 millones de euros, y octubre de 2028 para el resto de empresas y autónomos, como fechas límite para la factura electrónica obligatoria entre empresas. Una asesoría que ya comunica en su web cómo va a acompañar a sus clientes en esta transición se posiciona un paso por delante del resto.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque la asesoría esté a tope en campaña fiscal</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras cierras nóminas o preparas declaraciones, tu web sigue abierta. Alguien que busca asesoría un domingo por la noche encuentra tu colegiación visible, entiende cómo proteges sus datos y solicita cita — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una asesoría o gestoría sigue captando clientes mientras la oficina está cerrada o a tope en campaña fiscal"
                width={760}
                height={1131}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de páginas web</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu asesoría o gestoría necesita una web que cumpla y que capte clientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de asesorías y gestorías con RGPD en regla, colegiación visible y solicitud de cita online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño de páginas web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una asesoría o gestoría</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">﹀</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="5-factores-web-asesorias-gestorias" />
    </>
  );
}
