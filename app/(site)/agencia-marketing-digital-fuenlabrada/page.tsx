import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";

const URL = "https://www.mktweb360.com/agencia-marketing-digital-fuenlabrada/";
const DESC =
  "Agencia de marketing digital nacida en Fuenlabrada: SEO local, diseño web, tiendas online y Google Ads para comercios, servicios e industria del sur de Madrid.";
const OG = "/api/og?title=" + encodeURIComponent("Agencia de marketing digital en Fuenlabrada") + "&cat=" + encodeURIComponent("SEO Local");

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital en Fuenlabrada",
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: "Agencia de Marketing Digital en Fuenlabrada | Mkt Web 360",
    description: DESC,
    url: URL,
    images: [{ url: OG, width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: "¿Tenéis oficina en Fuenlabrada?",
    a: "Ya no. Mkt Web 360 tuvo su oficina y su domicilio fiscal en Fuenlabrada; hoy trabajamos desde El Viso de San Juan (Toledo), en la misma zona sur de Madrid y norte de Toledo. Atendemos a empresas de Fuenlabrada: el día a día del proyecto se lleva por videollamada, teléfono y correo, como con el resto de clientes de España.",
  },
  {
    q: "¿Qué conviene primero a un negocio de Fuenlabrada: SEO, Google Ads o una web nueva?",
    a: "Depende de dónde se pierden hoy los clientes. Si la web no transmite confianza o no se ve bien en el móvil, cualquier inversión en tráfico se desperdicia: primero la web. Si la web es correcta pero nadie la encuentra, SEO local y ficha de Google. Si necesitas contactos este mes, Google Ads mientras el SEO madura. Lo decidimos con una auditoría gratuita antes de proponer nada.",
  },
  {
    q: "¿Incluye el diseño web el hosting y el dominio?",
    a: "Sí. En los proyectos de diseño web gestionamos alojamiento, dominio y correo corporativo, para que no tengas que coordinar varios proveedores.",
  },
  {
    q: "¿Trabajáis con empresas de los polígonos y con mayoristas?",
    a: "Sí. Para empresas B2B la prioridad no es el tráfico masivo sino aparecer cuando un comprador profesional busca el producto o el servicio: web corporativa clara, catálogo bien estructurado, fichas en Google y campañas de nicho en Google Ads.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agencia de marketing digital en Fuenlabrada",
  serviceType: "Marketing digital, SEO local, diseño web y Google Ads",
  provider: { "@id": "https://www.mktweb360.com/#organization" },
  areaServed: { "@type": "City", name: "Fuenlabrada", containedInPlace: { "@type": "AdministrativeArea", name: "Comunidad de Madrid" } },
  description: DESC,
  url: URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const SERVICIOS = [
  { t: "Posicionamiento SEO", d: "Para que tu empresa aparezca cuando alguien busca tu servicio en Fuenlabrada y en los municipios de alrededor.", href: "/seo-posicionamiento-web-organico/" },
  { t: "SEO local y ficha de Google", d: "Ficha de Google Business Profile completa, reseñas y páginas locales para salir en el mapa.", href: "/seo-local/" },
  { t: "Diseño de páginas web", d: "Webs rápidas, claras en el móvil y pensadas para que la visita termine en llamada o formulario.", href: "/diseno-de-paginas-web/" },
  { t: "Tiendas online", d: "Para comercios y distribuidores que quieren vender fuera del local sin pagar comisiones por venta.", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
  { t: "Google Ads", d: "Contactos desde el primer día para servicios con demanda urgente o mientras el SEO coge fuerza.", href: "/sem-publicidad-ppc/" },
  { t: "Auditoría digital", d: "Diagnóstico de tu web, tu ficha y tu competencia antes de invertir un euro más.", href: "/auditoria-digital/" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO local", href: "/seo-local/" }, { label: "Fuenlabrada" }]} />
        <p className="text-sm text-accent-700 font-semibold mb-2">SEO Local · Sur de Madrid</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Agencia de marketing digital en Fuenlabrada: SEO, diseño web y captación para empresas del sur de Madrid</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">Mkt Web 360 empezó en Fuenlabrada. Allí tuvimos nuestra oficina y nuestro domicilio fiscal, y conocemos de primera mano el tejido empresarial de la zona. Hoy trabajamos desde El Viso de San Juan y atendemos a negocios de Fuenlabrada igual que al resto de España.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Tres tipos de empresa, tres estrategias distintas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Fuenlabrada conviven realidades muy diferentes, y el marketing digital que funciona para una no sirve para otra. Antes de hablar de canales, conviene saber en cuál de estos grupos está tu negocio.</p>
        <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-2">Comercio y servicios de barrio</h3>
        <p className="text-gray-700 leading-relaxed mb-4">Talleres, clínicas, academias, peluquerías, reformas, asesorías. Tu cliente vive o trabaja cerca y decide en minutos, normalmente desde el móvil. Aquí manda la ficha de Google: horario correcto, fotos reales, reseñas respondidas y una web que cargue rápido y tenga el teléfono a un toque. Es el terreno del <Link href="/seo-local/" className="text-primary-600 underline underline-offset-2 hover:text-accent-700">SEO local</Link>.</p>
        <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-2">Industria y distribución en los polígonos</h3>
        <p className="text-gray-700 leading-relaxed mb-4">Empresas que venden a otras empresas. El comprador profesional compara proveedores con calma, revisa la web, el catálogo y la solvencia antes de pedir presupuesto. Lo que importa es una <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="text-primary-600 underline underline-offset-2 hover:text-accent-700">web corporativa</Link> que explique bien qué fabricas o distribuyes, a quién y con qué garantías, y estar en Google para las búsquedas técnicas de tu producto, que suelen tener poco volumen pero mucho valor.</p>
        <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-2">Mayoristas e importadores</h3>
        <p className="text-gray-700 leading-relaxed mb-4">Fuenlabrada alberga el polígono Cobo Calleja, considerado uno de los centros empresariales con mayor concentración de empresas de Europa y el principal núcleo importador y distribuidor de productos de China en España (<a href="https://es.wikipedia.org/wiki/Pol%C3%ADgono_industrial_Cobo_Calleja" target="_blank" rel="noopener" className="text-primary-600 underline underline-offset-2 hover:text-accent-700">fuente</a>). Para un mayorista, el canal digital no sustituye a la nave: la complementa con un catálogo online para clientes profesionales, pedidos recurrentes y una <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-primary-600 underline underline-offset-2 hover:text-accent-700">tienda online B2B</Link> que atiende pedidos fuera del horario de almacén.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Lo que hacemos por empresas de Fuenlabrada</h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {SERVICIOS.map((s) => (
            <Link key={s.href} href={s.href} className="block bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-accent-300 hover:bg-white hover:shadow-md transition-all">
              <p className="font-bold text-primary-600 mb-1">{s.t}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo saber si tu negocio está perdiendo clientes en Google</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Haz esta prueba en cinco minutos, desde el móvil y en una ventana de incógnito:</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Busca tu servicio seguido de «Fuenlabrada» (por ejemplo, «taller de chapa Fuenlabrada»). ¿Sales en el mapa? ¿En qué posición?</li>
          <li>Busca lo mismo con «cerca de mí» estando en tu local. Es la búsqueda que hacen tus clientes de verdad.</li>
          <li>Abre tu ficha de Google: ¿el horario, el teléfono y la web son correctos? ¿Respondes las reseñas?</li>
          <li>Entra en tu web desde el móvil: ¿carga en menos de tres segundos y el botón de llamar se ve sin hacer scroll?</li>
          <li>Mira los tres primeros competidores: ¿cuántas reseñas tienen frente a las tuyas?</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">Si fallas en dos o más puntos, hay clientes que te están buscando y acaban en la competencia. Es lo primero que revisamos en la <Link href="/auditoria-digital/" className="text-primary-600 underline underline-offset-2 hover:text-accent-700">auditoría gratuita</Link>.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo trabajamos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Primero diagnóstico, luego propuesta. Analizamos tu web, tu ficha de Google y a tus competidores directos en Fuenlabrada, y te proponemos solo los canales que tienen sentido para tu tipo de negocio y tu presupuesto. Un único responsable lleva tu proyecto de principio a fin, con informes que explican qué se ha hecho y qué resultado ha dado. Y no trabajamos con dos negocios que compitan en el mismo sector y la misma zona.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold text-primary-700 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Tienes un negocio en Fuenlabrada?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos qué haces y dónde quieres llegar. Te respondemos con un primer diagnóstico, sin compromiso.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO Local" />
    </>
  );
}
