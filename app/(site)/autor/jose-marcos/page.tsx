import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";
import { allPosts } from "@/lib/blog";
import { AUTOR_NOMBRE, autorUrl } from "@/lib/autor";

// 28/10/2026 — Página de autor de los artículos del blog (E-E-A-T), decisión de José.
// SOLO datos ya publicados en la web: responsable de Mkt Web 360 SLU (aviso legal),
// en marcha desde 2016 (Nosotros), sede en El Viso de San Juan, Toledo, y servicios
// (schema de la organización en app/layout.tsx). Sin cargo, formación, años de
// experiencia, certificaciones ni perfiles personales: no figuran en la web.

const URL = autorUrl("es");

export const metadata: Metadata = {
  title: { absolute: "José Marcos, autor del blog de Mkt Web 360" },
  description:
    "José Marcos es el responsable de Mkt Web 360 SLU, agencia de marketing digital en marcha desde 2016, y firma los artículos de su blog sobre SEO, GEO, Google Ads, diseño web e IA.",
  alternates: alternatesFor("/autor/jose-marcos/") ?? { canonical: URL },
  // noindex hasta completar la página con la trayectoria de José (decisión del 28/10/2026).
  robots: { index: false, follow: true },
  openGraph: {
    title: "José Marcos, autor del blog | Mkt Web 360",
    description: "Responsable de Mkt Web 360 SLU y autor de los artículos del blog de la agencia.",
    url: URL,
    type: "profile",
  },
};

const TEMAS = [
  { label: "SEO", href: "/seo-posicionamiento-web-organico/" },
  { label: "GEO (posicionamiento en asistentes de IA)", href: "/geo-posicionamiento-ia/" },
  { label: "IA aplicada al marketing", href: "/ia-aplicada-al-marketing/" },
  { label: "Google Ads", href: "/sem-publicidad-ppc/" },
  { label: "Diseño web", href: "/diseno-de-paginas-web/" },
  { label: "Tiendas online", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
  { label: "Redes sociales", href: "/smm-social-media-marketing/" },
  { label: "Marketing de contenidos", href: "/marketing-de-contenidos/" },
  { label: "Email marketing", href: "/email-marketing/" },
  { label: "Auditoría digital", href: "/auditoria-digital/" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: URL,
  inLanguage: "es-ES",
  mainEntity: {
    "@type": "Person",
    "@id": `${URL}#person`,
    name: AUTOR_NOMBRE,
    url: URL,
    worksFor: { "@id": "https://www.mktweb360.com/#organization" },
    knowsAbout: TEMAS.map((t) => t.label),
  },
};

function fecha(d: string) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function AutorJoseMarcosPage() {
  const recientes = [...allPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: AUTOR_NOMBRE }]} />

        <header className="mb-10">
          <p className="text-sm font-semibold text-accent-500 mb-2">Autor del blog</p>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{AUTOR_NOMBRE}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Responsable de Mkt Web 360 SLU y autor de los artículos del blog de la agencia.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Sobre José Marcos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            José Marcos es el responsable de Mkt Web 360 SLU, la agencia de marketing digital que publica esta web, tal como figura en el{" "}
            <Link href="/aviso-legal/" className="text-accent-500 hover:underline">aviso legal</Link>. Firma los artículos del{" "}
            <Link href="/blog/" className="text-accent-500 hover:underline">blog</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mkt Web 360 está en marcha desde 2016, tiene su sede en El Viso de San Juan (Toledo) y trabaja con pymes y empresas de toda España.
            Más sobre la agencia y su forma de trabajar en{" "}
            <Link href="/nosotros/" className="text-accent-500 hover:underline">Quiénes somos</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Temas sobre los que escribe</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Los mismos servicios que presta la agencia:</p>
          <ul className="flex flex-wrap gap-2">
            {TEMAS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1.5 rounded-full border border-primary-100 hover:bg-primary-100">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Artículos recientes</h2>
          <ul className="space-y-3">
            {recientes.map((p) => (
              <li key={p.slug} className="p-4 border border-gray-200 rounded-xl">
                <Link href={`/${p.slug}/`} className="font-semibold text-primary-700 hover:text-accent-500">{p.title}</Link>
                <div className="text-sm text-gray-400 mt-1">
                  <time dateTime={p.date}>{fecha(p.date)}</time> · {p.category}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/blog/" className="text-accent-500 font-semibold hover:underline">Ver todos los artículos del blog →</Link>
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-primary-600 mb-3">Contacto</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Email: <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a> · Teléfono:{" "}
            <a href="tel:+34622748987" className="text-accent-500 hover:underline">+34 622 74 89 87</a> ·{" "}
            <Link href="/contacto/" className="text-accent-500 hover:underline">Formulario de contacto</Link>
          </p>
        </section>
      </div>
    </>
  );
}
