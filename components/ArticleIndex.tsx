
/**
 * Índice del artículo (protocolo del blog, 09/11/2026): resumen con enlaces de ancla a cada apartado
 * y tiempo de lectura, justo debajo de la imagen de cabecera. Cada apartado enlazado lleva `id`
 * en su <h2> (y la clase `scroll-mt-24` para que la cabecera fija no lo tape).
 * Tiempo de lectura = palabras del cuerpo / 200 por minuto, redondeado hacia arriba.
 */
type L = "es" | "en" | "fr";
const T: Record<L, { title: string; min: (n: number) => string }> = {
  es: { title: "En este artículo", min: (n) => `${n} min de lectura` },
  en: { title: "In this article", min: (n) => `${n} min read` },
  fr: { title: "Dans cet article", min: (n) => `${n} min de lecture` },
};

export function ArticleIndex({ lang, minutes, items }: { lang: string; minutes: number; items: { id: string; label: string }[] }) {
  const t = T[lang === "en" || lang === "fr" ? lang : "es"];
  return (
    <nav aria-label={t.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm">
      <p className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <span className="font-semibold text-primary-700">{t.title}</span>
        <span className="text-gray-500 text-xs">⏱ {t.min(minutes)}</span>
      </p>
      <ol className="list-decimal pl-5 space-y-1">
        {items.map((i) => (
          <li key={i.id}><a href={`#${i.id}`} className="text-accent-600 hover:underline">{i.label}</a></li>
        ))}
      </ol>
    </nav>
  );
}
