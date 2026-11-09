import { TrackedLink } from "@/components/TrackedLink";
import { DEMOS_CONTENT, DEMOS_SLUG } from "@/lib/demos-page";
import { PINTORES_DEMOS } from "@/lib/demos";
import type { Lang } from "@/lib/i18n/routes";

// Caja con las 3 demos de pintores (artículo y landing). Enlaza a cada demo y a la página de demos.
const T: Record<Lang, { title: string; desc: string; all: string }> = {
  es: { title: "Mira cómo quedaría la web de un pintor", desc: "Tres demos con contenido de ejemplo: un pintor autónomo, una empresa de viviendas y locales, y una de fachadas y comunidades.", all: "Ver todas las demos" },
  en: { title: "See what a painter's website could look like", desc: "Three demos with sample content: a self-employed painter, a company for homes and shops, and one for facades and homeowners' associations.", all: "See all demos" },
  fr: { title: "Voyez à quoi pourrait ressembler le site d'un peintre", desc: "Trois démos au contenu d'exemple : un peintre indépendant, une entreprise pour logements et locaux, et une pour façades et copropriétés.", all: "Voir toutes les démos" },
};

export function PintoresDemosBox({ lang, where }: { lang: Lang; where: string }) {
  const t = T[lang];
  const c = DEMOS_CONTENT[lang];
  return (
    <aside className="bg-primary-50 border border-primary-100 rounded-2xl p-6 my-8">
      <p className="font-semibold text-primary-700 mb-1">{t.title}</p>
      <p className="text-gray-600 text-sm mb-4">{t.desc}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {PINTORES_DEMOS.map((d) => (
          <li key={d.id}>
            <a href={d.url} target="_blank" rel="noopener" className="block bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-accent-300 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image} alt={`${d.nombre}: ${c.painters[d.id].tagline}`} width={900} height={562} loading="lazy" className="w-full h-auto" />
              <span className="block p-3 text-sm font-semibold text-primary-700">{d.nombre}</span>
            </a>
          </li>
        ))}
      </ul>
      <TrackedLink href={DEMOS_SLUG[lang]} ctaId={`pintores-${where}-demos`} location={where} type="link" text={t.all} className="text-accent-600 font-semibold hover:underline">
        {t.all} →
      </TrackedLink>
    </aside>
  );
}
