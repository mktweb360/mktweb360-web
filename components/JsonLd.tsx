import { intlArticleSchema } from "@/lib/schema";

// Bloque <script type="application/ld+json"> servido en el HTML (sin JS en el cliente).
// `<` se escapa para que ningún texto pueda cerrar la etiqueta script.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** BlogPosting de una plantilla de artículo EN/FR. `slug` = nombre de la carpeta de la plantilla. */
export function IntlArticleJsonLd({
  lang,
  slug,
  headline,
  image,
}: {
  lang: string;
  slug: string;
  headline?: string;
  image?: string;
}) {
  return <JsonLd data={intlArticleSchema(lang, slug, { headline, image })} />;
}
