import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Gestionar las Reseñas Negativas en Google — Guía Práctica | Mkt Web 360",
  description: "Aprende a responder y gestionar reseñas negativas en Google de forma profesional. Estrategia, plantillas de respuesta y cómo convertir críticas en oportunidades.",
  alternates: { canonical: "https://www.mktweb360.com/gestion-resenas-negativas-google/" },
  openGraph: {
    title: "Cómo Gestionar las Reseñas Negativas en Google — Guía Práctica | Mkt Web 360",
    description: "Aprende a responder y gestionar reseñas negativas en Google de forma profesional. Estrategia, plantillas de respuesta y cómo convertir críticas en oportunidades.",
    url: "https://www.mktweb360.com/gestion-resenas-negativas-google/",
  },
};

export default function Page() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Reseñas negativas Google" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Reputación Online</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo gestionar las reseñas negativas en Google sin perder clientes</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Una reseña negativa mal gestionada puede costar más clientes que la propia crítica. Esta guía explica cómo responder, qué decir y cómo convertir una crítica en una oportunidad de mostrar profesionalidad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por qué las reseñas negativas importan más de lo que crees</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas de Google son el equivalente digital del boca a boca, pero con una diferencia crucial: son permanentes y las ve todo el mundo. Según estudios de BrightLocal, el 87% de los consumidores lee reseñas online antes de tomar una decisión de compra local, y el 79% confía en las reseñas online tanto como en las recomendaciones personales.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una reseña negativa no solo puede disuadir a un cliente potencial; puede aparecer en Google Maps e influir en decenas o cientos de personas que buscan tu tipo de negocio cada mes. Por eso, la gestión proactiva de reseñas no es opcional: es parte de la estrategia de marketing digital de cualquier negocio con presencia local.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Sin embargo, hay una paradoja: los negocios que tienen alguna reseña negativa y la gestionan bien generan a veces más confianza que los que solo tienen reseñas de 5 estrellas. Los consumidores saben que la perfección absoluta no existe, y un perfil sin ninguna crítica puede parecer sospechoso. Lo que marca la diferencia es cómo responde el negocio.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo responder una reseña negativa paso a paso</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El proceso de respuesta a una reseña negativa tiene pasos claros. El error más común es responder de forma reactiva e impulsiva, especialmente cuando la crítica parece injusta.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 1 — Espera antes de responder:</strong> Si la reseña te ha enfadado o te parece completamente injusta, espera unas horas antes de escribir. Una respuesta emocional puede hacer mucho más daño que la propia reseña negativa.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 2 — Identifica si la crítica es legítima:</strong> ¿Hay algo de verdad en lo que dice el cliente? Si la hubo un problema real, reconócelo honestamente. Si la crítica es falsa o malintencionada, la respuesta será diferente, pero nunca agresiva.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 3 — Responde siempre en público:</strong> Tu respuesta no es solo para el cliente que se quejó, sino para todos los que leerán esa reseña en el futuro. Redacta pensando en ese público más amplio.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 4 — Sé breve y profesional:</strong> No necesitas escribir un ensayo. Una respuesta de 3-5 frases que reconozca la experiencia, explique brevemente el contexto y ofrezca resolver el problema es suficiente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 5 — Invita a continuar la conversación en privado:</strong> Incluye un dato de contacto (email o teléfono) para que el cliente pueda resolver el problema directamente. Esto demuestra voluntad de solución y saca la conversación del espacio público.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Plantillas de respuesta profesional para reseñas negativas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Estas plantillas son puntos de partida. Siempre personaliza la respuesta para que no parezca un mensaje automático.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Para una queja legítima:</strong> "Gracias por tomarte el tiempo de contarnos tu experiencia, [Nombre]. Lamentamos que tu visita no haya cumplido las expectativas. Tienes razón en que [punto específico] no estuvo a la altura de nuestros estándares habituales. Nos gustaría tener la oportunidad de compensarte. Por favor, contáctanos en [email/teléfono] para que podamos resolverlo directamente."</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Para una crítica que no reconoces:</strong> "Hola, [Nombre]. Gracias por tu reseña. Sentimos que tu experiencia no haya sido satisfactoria. No hemos podido identificar tu visita con los datos que disponemos. Te agradeceríamos que te pusieras en contacto con nosotros en [email/teléfono] para poder entender qué ocurrió y buscar una solución."</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Para una reseña que parece de la competencia o falsa:</strong> "Hola. No hemos encontrado ningún registro que coincida con la experiencia descrita. Si eres cliente nuestro, te invitamos a contactarnos directamente en [email/teléfono] para aclarar cualquier malentendido. Estamos a tu disposición."</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuándo y cómo solicitar la eliminación de una reseña falsa</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google permite solicitar la eliminación de reseñas que violan sus políticas, pero no todas las reseñas negativas califican para ser eliminadas. Las que sí pueden denunciarse son: spam o contenido falso (el usuario nunca fue cliente), contenido que contiene insultos u odio, conflictos de interés (empleados actuales o de la competencia) y contenido que incluye información personal.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para denunciar una reseña, ve a tu ficha de GBP, busca la reseña, haz clic en los tres puntos y selecciona "Denunciar reseña". Elige el motivo más específico que aplique a tu caso. Google revisa la denuncia en un plazo de 3-5 días hábiles. Si la rechaza, puedes escalar el caso al soporte de Google Business Profile.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Importante: Google no elimina reseñas simplemente porque el negocio no está de acuerdo con ellas. Una reseña negativa legítima, aunque te parezca injusta, no puede eliminarse solo por ser negativa. La solución es responder profesionalmente y generar más reseñas positivas que la "disipen".</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia para generar más reseñas positivas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La mejor defensa contra una reseña negativa es tener muchas reseñas positivas. Un negocio con 100 reseñas de media 4,6 estrellas soporta mucho mejor una crítica ocasional que uno con 8 reseñas de media 5 estrellas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La forma más efectiva de generar reseñas es simplemente pedirlas. Muchos clientes satisfechos no dejan reseñas porque no se les ha pedido, no porque no quisieran. El momento óptimo para pedir una reseña es justo después de que el cliente ha recibido el servicio y está satisfecho: al salir del local, en el mensaje de seguimiento por email o WhatsApp, o en la factura.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Facilita el proceso al máximo. El enlace directo a tu ficha de Google para dejar una reseña se puede obtener desde el panel de GBP. Crea un QR con ese enlace y tenlo visible en el mostrador, en las facturas y en tus materiales de comunicación.</p>
        <p className="text-gray-700 leading-relaxed mb-4">No ofrezcas incentivos a cambio de reseñas (descuentos, regalos, sorteos). Google lo considera una manipulación y puede eliminar las reseñas obtenidas de esta manera, además de penalizar la ficha.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Herramientas para monitorizar tu reputación online</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una estrategia de reputación online no puede depender de que revises manualmente tu ficha de Google cada día. Existen herramientas que automatizan el seguimiento y te avisan cuando aparece una nueva reseña o mención.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Google Alerts:</strong> Gratuita y sencilla. Configura alertas con el nombre de tu empresa para recibir notificaciones por email cada vez que Google indexa una nueva mención. No cubre las reseñas de GBP, pero sí menciones en webs, blogs y noticias.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Google Business Profile:</strong> El propio panel de GBP envía notificaciones cuando recibes una nueva reseña. Asegúrate de tener activadas las notificaciones en la app o por email.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Herramientas avanzadas:</strong> Para negocios con mayor presencia o que necesitan monitorizar múltiples plataformas (Google, TripAdvisor, Booking, Trustpilot), herramientas como ReviewTrackers, Birdeye o Reputation.com centralizan todas las reseñas en un solo panel y permiten responder desde la misma plataforma.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="Reputación Online" />
    </>
  );
}
