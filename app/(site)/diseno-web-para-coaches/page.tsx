import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño Web para Coaches",
  description:
    "Diseño web profesional para coaches, consultores y formadores. Web que transmite autoridad, capta leads y convierte visitas en clientes. Sin comisiones.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-para-coaches/" },
  openGraph: {
    title: "Diseño Web para Coaches | Mkt Web 360",
    description:
      "Diseño web profesional para coaches, consultores y formadores. Web que transmite autoridad, capta leads y convierte visitas en clientes. Sin comisiones.",
    url: "https://www.mktweb360.com/diseno-web-para-coaches/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Diseño Web para Coaches: Autoridad Digital que Genera Clientes",
  description:
    "Diseño web profesional para coaches, consultores y formadores. Web que transmite autoridad, capta leads y convierte visitas en clientes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "/og-image.jpg",
  url: "https://www.mktweb360.com/diseno-web-para-coaches/",
  mainEntityOfPage: "https://www.mktweb360.com/diseno-web-para-coaches/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Diseño web para coaches", item: "https://www.mktweb360.com/diseno-web-para-coaches/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta una web para un coach o consultor?",
    a: "Una web profesional para coach o consultor parte desde 690€ dependiendo del número de servicios, si incluye blog, área de recursos o integración con plataformas de pago. El precio incluye diseño, desarrollo, SEO técnico y formación para gestión autónoma.",
  },
  {
    q: "¿Puedo vender mis programas o cursos directamente desde la web?",
    a: "Sí. Podemos integrar pasarelas de pago (Stripe, PayPal) para venta directa de sesiones, programas o cursos. También podemos conectar con plataformas como Hotmart o Teachable si ya las usas.",
  },
  {
    q: "¿Qué es un lead magnet y cómo lo integráis en la web?",
    a: "Un lead magnet es un recurso gratuito (ebook, masterclass, checklist) que ofreces a cambio del email del visitante. Lo integramos con tu herramienta de email marketing (Mailchimp, ActiveCampaign, etc.) para que el proceso sea completamente automático.",
  },
  {
    q: "¿Me ayudáis a definir qué poner en la web si no sé por dónde empezar?",
    a: "Sí. Parte de nuestro proceso es ayudarte a estructurar tu propuesta de valor, tus servicios y tu historia de forma que conecte con tu cliente ideal. No solo diseñamos — también te ayudamos a pensar qué comunicar y cómo.",
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

export default function DisenoWebCoachesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web para coaches" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Servicios Profesionales</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">25 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Diseño Web para Coaches: Autoridad Digital que Genera Clientes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Para un coach o consultor, la web no es solo un escaparate — es la herramienta principal de construcción de autoridad y captación de clientes. Una web bien diseñada trabaja mientras tú duermes, atrayendo a las personas correctas y filtrando a las que no son tu cliente ideal.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El coaching y la consultoría son servicios donde la confianza lo es todo. Antes de contratar a un coach, un potencial cliente va a investigar quién eres, qué resultados has conseguido con otros clientes, qué metodología usas y si tu forma de comunicarte conecta con él. Todo eso sucede en tu web, mucho antes de la primera conversación.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué la marca personal es el centro de todo</h2>
          <p>
            A diferencia de otras empresas donde el producto o el precio son los protagonistas, en el coaching el protagonista eres tú. Tu historia, tu experiencia, tu metodología y los resultados que has conseguido con tus clientes son los argumentos de venta más potentes que tienes. La web tiene que reflejar todo eso de forma auténtica y coherente.
          </p>
          <p>
            Una web genérica con fotos de stock y textos corporativos no funciona para un coach. Lo que funciona es una web que muestra quién eres realmente, qué transformación ofreces, por qué eres la persona adecuada para acompañar ese cambio y qué dicen quienes ya han trabajado contigo.
          </p>
          <p>
            El diseño debe acompañar esa autenticidad: colores, tipografía, fotografías y tono de comunicación alineados con tu personalidad y con el tipo de cliente al que te diriges. Un coach de liderazgo empresarial necesita una web muy distinta a la de una coach de bienestar o un consultor financiero.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué debe tener la web de un coach o consultor</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Página "Sobre mí" potente:</strong> no es una bio cronológica — es tu historia de transformación y los motivos por los que haces lo que haces. Es la página más visitada después de la home en las webs de coaches.</li>
            <li><strong>Servicios con claridad total:</strong> qué incluye cada programa, a quién va dirigido, qué resultados puede esperar el cliente y cómo es el proceso. Sin vaguedades ni jerga que no entienda tu cliente ideal.</li>
            <li><strong>Testimonios reales y específicos:</strong> no basta con "fue genial". Los testimonios que convierten hablan del antes, el proceso y el después. Incluyen nombre, foto y contexto.</li>
            <li><strong>Lead magnet con captación de email:</strong> un ebook, una masterclass gratuita, un test o una guía que aporta valor inmediato a cambio del email. Es la forma más eficiente de construir tu lista de potenciales clientes.</li>
            <li><strong>Blog o podcast integrado:</strong> el contenido de valor posiciona tu autoridad, mejora tu SEO y mantiene a tu audiencia conectada entre lanzamiento y lanzamiento.</li>
            <li><strong>Llamada a la acción clara:</strong> reserva de sesión de descubrimiento, formulario de contacto o acceso al programa. Cada página debe tener un solo objetivo claro.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">SEO para coaches: cómo te encuentran tus clientes ideales</h2>
          <p>
            La mayoría de coaches subestiman el SEO porque creen que sus clientes llegan por redes sociales o referidos. Y es cierto que esos canales funcionan — pero no escalan. Una vez que tu web posiciona en Google para las búsquedas de tu nicho, atrae tráfico cualificado de forma continua y completamente gratuita.
          </p>
          <p>
            Las keywords para coaches suelen ser búsquedas de intención alta: "coach de liderazgo empresarial", "consultor de marketing digital autónomos", "coach de vida Madrid". Son búsquedas con relativamente bajo volumen pero muy alta intención de contratar. El blog es el vehículo más potente para capturar esas búsquedas informacionales y convertir esos lectores en leads.
          </p>
          <p>
            También funciona muy bien el SEO local si tu servicio tiene componente presencial: "coach empresarial en Barcelona" o "consultor estratégico Valencia" tienen búsquedas específicas con poca competencia y alta intención.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una web que refleje quién eres y atraiga a tus clientes ideales?</p>
            <p className="text-gray-600 text-sm mb-4">Diseñamos webs para coaches y consultores que transmiten autoridad, captan leads y convierten. Con SEO incluido y gestión autónoma.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar presupuesto
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Proceso de trabajo: de cero a web en 4 pasos</h2>
          <ul className="list-none space-y-4">
            {[
              { n: "1", t: "Estrategia de marca y posicionamiento", d: "Definimos juntos tu propuesta de valor, tu cliente ideal, tu diferenciación y los mensajes clave que van a aparecer en la web. Sin esto, el diseño no tiene base." },
              { n: "2", t: "Diseño alineado con tu marca personal", d: "Creamos un diseño único que refleja tu personalidad y conecta con tu audiencia. Paleta de colores, tipografías y estética coherente con tu identidad." },
              { n: "3", t: "Contenido, lead magnet e integraciones", d: "Redactamos los textos principales, integramos tu lead magnet con el email marketing y conectamos las herramientas que ya usas (calendarios, formularios, pagos)." },
              { n: "4", t: "Formación y lanzamiento", d: "Te enseñamos a gestionar la web, publicar contenido y actualizar tus servicios de forma autónoma. La web es tuya, sin dependencias." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Tu autoridad digital, lista para atraer clientes</h2>
            <p className="text-primary-200 mb-6">
              Una web que refleja quién eres, posiciona en Google y convierte visitas en clientes ideales. Sin comisiones, sin licencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar presupuesto
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
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
            Ver también: <Link href="/como-crear-propuesta-de-valor/" className="text-accent-500 hover:underline">Cómo crear tu propuesta de valor</Link> · <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño web profesional</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="diseno-web-para-coaches" category="Diseño Web" />
    </>
  );
}
