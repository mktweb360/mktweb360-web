"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const totalPages = Math.max(1, Math.ceil(posts.length / perView));
  useEffect(() => { setPage((p) => Math.min(p, totalPages - 1)); }, [totalPages]);
  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const t = setInterval(() => setPage((p) => (p + 1) % totalPages), 5000);
    return () => clearInterval(t);
  }, [paused, totalPages]);

  const go = (p: number) => setPage(((p % totalPages) + totalPages) % totalPages);

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${page * 100}%)` }}>
          {posts.map((post) => (
            <div key={post.slug} className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
              <Link href={`/${post.slug}/`} className="h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-accent-400 hover:shadow-md transition-all group flex flex-col">
                <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide mb-2">{post.category}</span>
                <h3 className="font-bold text-primary-700 group-hover:text-accent-500 transition-colors line-clamp-3 text-sm leading-snug flex-1 mb-3">{post.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-xs font-semibold text-accent-500">Leer artículo →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => go(page - 1)} aria-label="Anterior"
        className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-primary-700 hover:bg-accent-500 hover:text-white transition-colors">‹</button>
      <button type="button" onClick={() => go(page + 1)} aria-label="Siguiente"
        className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-primary-700 hover:bg-accent-500 hover:text-white transition-colors">›</button>
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} type="button" onClick={() => go(i)} aria-label={`Ir a la página ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-accent-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
