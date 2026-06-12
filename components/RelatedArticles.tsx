import Link from "next/link";
import { getLatestPosts, getRelatedPosts, getPostsByCategory } from "@/lib/blog";

type Props = {
  currentSlug?: string;
  category?: string;
  title?: string;
};

export function RelatedArticles({ currentSlug, category, title = "Artículos relacionados" }: Props) {
  const posts = currentSlug
    ? getRelatedPosts(currentSlug, 3)
    : category
    ? getPostsByCategory(category, 3)
    : getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-50 pt-12 pb-0 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:border-accent-500 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="mt-2 font-bold text-primary-900 group-hover:text-accent-500 transition-colors line-clamp-3 text-sm leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-accent-500">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
