import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Cabecera de la página de GEO con corte recto en diagonal (prueba del 15/11/2026).
 * Escritorio: texto a la izquierda sobre fondo sólido y foto a la derecha, separados por una
 * línea recta inclinada (clip-path). Móvil: foto de fondo bajo un velo oscuro, texto a ancho completo.
 * El contenido (migas, H1, textos, CTA) lo pone cada página: este componente solo da el marco.
 */
export function GeoHeroCorte({ children }: { children: ReactNode }) {
  return (
    <section className="mw-hero-corte relative isolate overflow-hidden bg-[#0f1c2e] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 lg:left-1/2 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
      >
        <Image
          src="/geo-hero.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: "100% 40%" }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0f1c2e]/80 lg:hidden" />
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 lg:min-h-[560px] grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">
        <div>{children}</div>
      </div>
    </section>
  );
}
