import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Gestión Redes Sociales — Community Manager España | Mkt Web 360",
  description:
    "Servicio profesional de gestión de redes sociales y community management para empresas. Instagram, Facebook, LinkedIn y TikTok. Estrategia, contenido, publicaciones e informes mensuales. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/smm-social-media-marketing/" },
  openGraph: {
    title: "Gestión Redes Sociales — Community Manager | Mkt Web 360",
    description: "Community management profesional para tu empresa. Instagram, Facebook, LinkedIn, TikTok.",
    url: "https://www.mktweb360.com/smm-social-media-marketing/",
    images: [{ url: "/imagen-redes-sociales.jpg", width: 1200, height: 900, alt: "Gestión redes sociales Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Redes Sociales y Community Management",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de gestión de redes sociales para empresas. Estrategia de contenidos, diseño gráfico, publicaciones, atención al cliente y análisis de resultados mensuales.",
  areaServed: "España",
  url: "https://www.mktweb360.com/smm-social-media-marketing/",
};

const FAQS = [
  {
    q: "¿Cuántas publicaciones incluye el servicio mensual?",
    a: "Depende del plan contratado. El plan básico incluye 12 publicaciones mensuales en 2 redes sociales. El plan avanzado sube a 20 publicaciones en 3 redes, incluyendo reels y stories. Cada publicación incluye diseño gráfico y copy optimizado.",
  },
  {
    q: "¿Tengo que darles el contenido o lo crean ellos?",
    a: "Nosotros creamos el contenido completo: diseño, texto y publicación. Solo necesitamos una sesión inicial para entender tu negocio, tu tono de comunicación y tus objetivos. A partir de ahí trabajamos de forma autónoma con tu aprobación mensual.",
  },
  {
    q: "¿Qué resultados puedo esperar y en cuánto tiempo?",
    a: "Los primeros resultados visibles en términos de alcance e interacción suelen verse a partir del segundo mes. El crecimiento sostenido de seguidores cualificados y la generación de consultas desde redes sociales requieren entre 3 y 6 meses de trabajo constante.",
  },
  {
    q: "¿Gestionáis también la publicidad en redes sociales?",
    a: "Sí. La gestión de Social Ads (Meta Ads, LinkedIn Ads) es un servicio complementario al community management. Combinarlo con una buena estrategia orgánica es la fórmula más eficiente para crecer en redes y captar clientes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuántas publicaciones incluye el servicio mensual?", acceptedAnswer: { "@type": "Answer", text: "Depende del plan contratado. El plan básico incluye 12 publicaciones mensuales en 2 redes sociales. El plan avanzado sube a 20 publicaciones en 3 redes, incluyendo reels y stories. Cada publicación incluye diseño gráfico y copy optimizado." } },
    { "@type": "Question", name: "¿Tengo que darles el contenido o lo crean ellos?", acceptedAnswer: { "@type": "Answer", text: "Nosotros creamos el contenido completo: diseño, texto y publicación. Solo necesitamos una sesión inicial para entender tu negocio, tu tono de comunicación y tus objetivos. A partir de ahí trabajamos de forma autónoma con tu aprobación mensual." } },
    { "@type": "Question", name: "¿Qué resultados puedo esperar y en cuánto tiempo?", acceptedAnswer: { "@type": "Answer", text: "Los primeros resultados visibles en términos de alcance e interacción suelen verse a partir del segundo mes. El crecimiento sostenido de seguidores cualificados y la generación de consultas desde redes sociales requieren entre 3 y 6 meses de trabajo constante." } },
    { "@type": "Question", name: "¿Gestionáis también la publicidad en redes sociales?", acceptedAnswer: { "@type": "Answer", text: "Sí. La gestión de Social Ads (Meta Ads, LinkedIn Ads) es un servicio complementario al community management. Combinarlo con una buena estrategia orgánica es la fórmula más eficiente para crecer en redes y captar clientes." } },
  ],
};

export default function SmmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Redes Sociales" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Gestión Redes Sociales — Community Manager España
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Gestionamos tus redes sociales de forma profesional para construir una comunidad fiel, aumentar tu visibilidad de marca y convertir seguidores en clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-redes-sociales.jpg" alt="Gestión redes sociales" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Plataformas e incluye */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Plataformas que gestionamos</h2>
            <ul className="space-y-2 text-gray-700">
              {["Instagram", "Facebook / Meta", "LinkedIn (B2B)", "TikTok", "X (Twitter)", "Google Business Profile"].map(p => (
                <li key={p} className="flex gap-2"><span className="text-accent-500">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">¿Qué incluye el servicio?</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Estrategia de contenidos mensual",
                "Diseño gráfico de publicaciones",
                "Redacción de copies optimizados",
                "Programación y publicación",
                "Gestión de comentarios y mensajes",
                "Informe mensual de métricas",
                "Campañas de Social Ads (opcional)",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Por qué importan */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Por qué las redes sociales importan para tu negocio?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las redes sociales son mucho más que publicar fotos. Son un canal de comunicación directo con tus clientes potenciales, una herramienta de fidelización y un canal de captación cuando se gestionan con criterio y estrategia.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El problema es que la mayoría de empresas publica sin un plan editorial claro, sin analizar qué funciona, sin coherencia visual y sin una estrategia de crecimiento detrás. El resultado es tiempo invertido sin retorno visible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Una gestión profesional de redes sociales aumenta el reconocimiento de marca, genera confianza antes del primer contacto y, cuando se combina con publicidad social bien segmentada, se convierte en uno de los canales de captación más rentables para negocios locales y PYMEs.
          </p>
        </section>

        {/* Proceso de trabajo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Análisis y estrategia", desc: "Estudiamos tu negocio, tu competencia y tu audiencia objetivo. Definimos el tono de comunicación, los pilares de contenido y los objetivos medibles para los primeros 3 meses." },
              { num: "02", title: "Planificación editorial", desc: "Creamos el calendario editorial mensual con los temas, formatos y frecuencia de publicación. Lo revisas y apruebas antes de empezar a publicar." },
              { num: "03", title: "Producción y publicación", desc: "Diseñamos las piezas gráficas, redactamos los textos y programamos las publicaciones en los horarios de mayor alcance para tu audiencia." },
              { num: "04", title: "Análisis e informe", desc: "Cada mes recibes un informe con las métricas reales: alcance, interacciones, crecimiento de seguidores, clics y evolución respecto al mes anterior." },
            ].map(step => (
              <div key={step.num} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para qué tipo de empresa */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Para qué tipo de empresa es este servicio?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gestionamos redes sociales para empresas de todos los sectores, con especial experiencia en:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Hostelería y restauración", desc: "Contenido visual de platos, ambiente y experiencia. Gestión de reseñas y campañas de captación local." },
              { sector: "Clínicas y salud", desc: "Comunicación de confianza, divulgación de servicios y captación de pacientes respetando la normativa del sector." },
              { sector: "Comercio local y retail", desc: "Promoción de productos, ofertas y novedades. Campañas para aumentar visitas a tienda física y ventas online." },
              { sector: "Servicios profesionales y B2B", desc: "LinkedIn como canal principal de autoridad y captación. Contenido que posiciona como referente en el sector." },
              { sector: "Inmobiliarias", desc: "Escaparate de propiedades, captación de compradores y vendedores, y construcción de marca personal del agente." },
              { sector: "Ecommerce y tiendas online", desc: "Contenido de producto, social proof, campañas de Meta Ads y estrategias para reducir el abandono de carrito." },
            ].map(s => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Planes de gestión de redes sociales</h2>
          <p className="text-gray-600 mb-8">Precios orientativos. El presupuesto final depende del número de redes, volumen de contenido y si se incluye publicidad.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Plan Básico",
                precio: "Desde 500 €/mes",
                redes: "2 redes sociales",
                items: ["12 publicaciones mensuales", "Diseño gráfico incluido", "Copies optimizados", "Gestión de comentarios", "Informe mensual"],
              },
              {
                plan: "Plan Avanzado",
                precio: "Desde 750 €/mes",
                redes: "3 redes sociales",
                items: ["20 publicaciones mensuales", "Reels y stories", "Diseño gráfico premium", "Gestión activa de comunidad", "Informe avanzado con KPIs", "Reunión mensual de seguimiento"],
                destacado: true,
              },
              {
                plan: "Plan Completo",
                precio: "Desde 1.200 €/mes",
                redes: "Todas las redes",
                items: ["Publicaciones ilimitadas", "Social Ads incluido", "Producción de vídeo básica", "Estrategia de influencers", "Informe semanal", "Account manager dedicado"],
              },
            ].map(p => (
              <div key={p.plan} className={`rounded-2xl p-6 border-2 flex flex-col ${p.destacado ? "border-accent-500 bg-accent-50" : "border-gray-100 bg-white"}`}>
                <p className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-2">{p.redes}</p>
                <h3 className="text-xl font-bold text-primary-700 mb-1">{p.plan}</h3>
                <p className="text-2xl font-bold text-accent-500 mb-4">{p.precio}</p>
                <ul className="space-y-2 flex-1">
                  {p.items.map(i => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700"><span className="text-accent-500 shrink-0">✓</span>{i}</li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Solicitar presupuesto
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué elegir Mkt Web 360 para gestionar tus redes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: "Estrategia real, no relleno", desc: "Cada publicación responde a un objetivo concreto: alcance, captación, fidelización o conversión. No publicamos por publicar." },
              { titulo: "Contenido creado desde cero", desc: "No usamos plantillas genéricas. Cada pieza se diseña y redacta específicamente para tu marca, tu sector y tu audiencia." },
              { titulo: "IA aplicada al análisis", desc: "Utilizamos protocolos propios de inteligencia artificial para analizar qué contenidos funcionan mejor y optimizar el calendario editorial cada mes." },
              { titulo: "Informes con datos reales", desc: "Recibes cada mes un informe con las métricas verificables de tu cuenta. Sin pantallazos manipulados, sin datos inflados." },
            ].map(d => (
              <div key={d.titulo} className="flex gap-4">
                <span className="text-accent-500 text-xl shrink-0">✓</span>
                <div>
                  <p className="font-bold text-primary-700 mb-1">{d.titulo}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre gestión de redes sociales</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tus redes sociales?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu situación actual y te proponemos una estrategia personalizada para tu sector.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Social Media" title="Más sobre redes sociales y marketing" />
    </>
  );
}
