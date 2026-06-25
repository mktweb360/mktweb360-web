import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Email Marketing para PYMEs — Primeros Pasos y Estrategia",
  description: "Guía de email marketing para PYMEs. Cómo empezar, qué herramientas usar, cómo construir tu lista y diseñar campañas que convierten. Resultados reales.",
  alternates: { canonical: "https://www.mktweb360.com/email-marketing-pymes/" },
  openGraph: {
    title: "Email Marketing para PYMEs — Primeros Pasos y Estrategia | Mkt Web 360",
    description: "Guía de email marketing para PYMEs. Cómo empezar, qué herramientas usar, cómo construir tu lista y diseñar campañas que convierten. Resultados reales.",
    url: "https://www.mktweb360.com/email-marketing-pymes/",
    images: [{ url: "/og-email-marketing-pymes.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Email Marketing para PYMEs — Primeros Pasos y Estrategia | Mkt Web 360",
  description: "Guía de email marketing para PYMEs. Cómo empezar, qué herramientas usar, cómo construir tu lista y diseñar campañas que convierten. Resultados reales.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/email-marketing-pymes/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/email-marketing-pymes/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Email marketing para PYMEs" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Marketing Digital</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Email marketing para PYMEs: guía de primeros pasos para empezar a vender por email</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">El email marketing sigue siendo el canal con mayor ROI en marketing digital. Esta guía explica cómo empezar desde cero, qué herramientas usar y cómo diseñar campañas que generen resultados reales.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por qué el email marketing sigue funcionando en 2025</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Hay un mito recurrente en el marketing digital: "el email ha muerto". Lo llevan diciendo desde hace 15 años, y cada año el email marketing demuestra lo contrario. El ROI medio del email marketing es de 42€ por cada euro invertido, según datos de la Data & Marketing Association. Ningún otro canal digital se le acerca.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La razón por la que el email funciona tan bien es estructural: cuando alguien te da su dirección de email, te está dando permiso para comunicarte con él directamente. No hay un algoritmo de red social que decida si tu mensaje llega o no. No hay que pagar por cada impresión. El email llega a la bandeja de entrada del suscriptor, que ha decidido libremente recibir tus comunicaciones.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para una PYME, el email marketing tiene además la ventaja de que no requiere grandes presupuestos ni equipos especializados para empezar. Con las herramientas actuales, una persona sola puede gestionar una estrategia de email marketing efectiva con unas pocas horas al mes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo construir tu lista de suscriptores desde cero</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La lista de suscriptores es el activo más valioso del email marketing. Una lista pequeña pero bien cualificada (personas realmente interesadas en lo que ofreces) vale infinitamente más que una lista grande de contactos genéricos.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formulario en tu web:</strong> La forma más básica. Coloca un formulario de suscripción en lugares estratégicos de tu web: el header, el footer, después de los artículos del blog y como popup de intención de salida. El texto del formulario debe comunicar claramente qué van a recibir y con qué frecuencia.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Lead magnet:</strong> Un recurso gratuito (guía, checklist, plantilla, video) que el usuario recibe a cambio de su email. El lead magnet debe ser relevante para tu negocio y valioso para tu cliente potencial. Un electricista podría ofrecer "Checklist de seguridad eléctrica para tu hogar". Una asesoría fiscal podría ofrecer "Guía de deducciones fiscales para autónomos".</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Clientes actuales:</strong> Si ya tienes clientes, pide su permiso explícito para suscribirlos a tu lista. La RGPD requiere consentimiento expreso, así que no importes contactos sin permiso. Pero un email personalizado a tus mejores clientes invitándoles a suscribirse a tu newsletter tiene una tasa de conversión muy alta.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formulario físico en tu local:</strong> Si tienes establecimiento físico, un tablet con un formulario de suscripción en el mostrador (con un incentivo como un descuento en la próxima compra) puede generar suscriptores locales de alta calidad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Herramientas de email marketing para PYMEs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">No necesitas una herramienta cara para empezar. Las plataformas de email marketing tienen planes gratuitos suficientes para una PYME en sus primeras etapas.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Mailchimp:</strong> El más conocido. Plan gratuito hasta 500 contactos y 1.000 emails al mes. Fácil de usar, buen editor de templates, automatizaciones básicas incluidas. Suficiente para empezar.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Brevo (antes Sendinblue):</strong> Plan gratuito con contactos ilimitados y hasta 300 emails al día. Muy buena relación calidad-precio en los planes de pago. Incluye SMS marketing y CRM básico.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>MailerLite:</strong> Plan gratuito hasta 1.000 suscriptores. Interfaz muy limpia e intuitiva. Buenas opciones de automatización y landing pages incluidas.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>ActiveCampaign:</strong> La opción más potente para PYMEs en crecimiento. No tiene plan gratuito, pero su CRM integrado y sus automatizaciones avanzadas lo hacen especialmente valioso si quieres conectar el email marketing con el proceso de ventas.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Tipos de emails que debe enviar tu empresa</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una estrategia de email marketing sólida combina distintos tipos de emails con objetivos diferentes.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Newsletter periódica:</strong> Contenido de valor regular (semanal, quincenal o mensual). El objetivo es mantener la relación y posicionarte como referente. No vende directamente, pero construye confianza que luego convierte.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Emails de bienvenida:</strong> La secuencia más importante. Los emails enviados en las primeras 24-48 horas después de la suscripción tienen las tasas de apertura más altas. Úsalos para presentarte, establecer expectativas y ofrecer el lead magnet si prometiste uno.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Emails promocionales:</strong> Ofertas, lanzamientos, descuentos. Deben usarse con moderación — si todo es promoción, la lista se desenganchará. La regla general es 80% contenido de valor, 20% contenido comercial.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Emails de recuperación:</strong> Para suscriptores inactivos o clientes que han dejado de comprar. Un email personalizado con un incentivo puede reactivar una parte significativa de estos contactos.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo escribir asuntos que se abren</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El asunto del email es lo que determina si el suscriptor abre o ignora tu email. Puedes tener el mejor contenido del mundo, pero si el asunto no genera curiosidad, el email no se abre. La tasa de apertura media en email marketing ronda el 21%, pero con buenos asuntos se puede superar el 35-40%.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los elementos que más influyen en la apertura son: la personalización (incluir el nombre del suscriptor en el asunto mejora las aperturas), la especificidad (un asunto concreto funciona mejor que uno vago), la curiosidad (generar una pregunta que solo se responde abriendo el email) y la urgencia genuina (no fabricada).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Evita palabras que activan los filtros de spam: "GRATIS", "GANA DINERO", "OFERTA EXCLUSIVA" en mayúsculas, exceso de signos de exclamación. Testea siempre dos versiones de asunto (A/B test) con una parte pequeña de tu lista antes de enviar al total.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Métricas de email marketing: qué medir y qué optimizar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las métricas principales que debes monitorizar en cada campaña son: tasa de apertura, tasa de clics (CTR), tasa de conversión, tasa de rebote (bounces) y tasa de baja.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La <strong>tasa de apertura</strong> mide el interés en el asunto y el reconocimiento de tu marca. Si cae consistentemente, revisa la calidad de tu lista y la relevancia de tus asuntos. La <strong>tasa de clics</strong> mide el interés en el contenido del email. Si las aperturas son buenas pero los clics son bajos, el problema está en el cuerpo del email o en el CTA.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La <strong>tasa de baja</strong> es un indicador de salud de tu lista: si supera el 0,5% consistentemente, estás enviando demasiado, enviando contenido irrelevante o a personas que no recuerdan haberse suscrito. Limpiar la lista regularmente (eliminar suscriptores inactivos) mejora las métricas globales y evita problemas de entregabilidad.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" />
    </>
  );
}
