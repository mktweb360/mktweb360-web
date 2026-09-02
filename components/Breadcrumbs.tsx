import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs, items }: { crumbs?: Crumb[]; items?: Crumb[]; lang?: string }) {  const list = crumbs ?? items ?? [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `https://www.mktweb360.com${c.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap gap-1 items-center">
          {list.map((c, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-400">/</span>}
              {c.href && i < list.length - 1 ? (
                <Link href={c.href} className="hover:text-primary-600 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
