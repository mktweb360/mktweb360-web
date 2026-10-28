import Link from "next/link";
import { AUTOR_NOMBRE, AUTOR_PATH, autorLang } from "@/lib/autor";

// Firma visible de los artículos del blog: «Por José Marcos» con enlace a la página de autor.
// - Por defecto es un <span> pensado para la fila de categoría y fecha de la cabecera.
// - `block` la pinta como párrafo propio, bajo el título, en las plantillas sin fila de fecha.
// - `className` / `linkClassName` sustituyen los estilos (p. ej. cabeceras de fondo oscuro).
const PREFIJO = { es: "Por", en: "By", fr: "Par" } as const;

export function AuthorByline({
  lang,
  block = false,
  className,
  linkClassName,
}: {
  lang?: string;
  block?: boolean;
  className?: string;
  linkClassName?: string;
}) {
  const l = autorLang(lang);
  const contenido = (
    <>
      {PREFIJO[l]}{" "}
      <Link href={AUTOR_PATH[l]} rel="author" className={linkClassName ?? "font-medium text-primary-600 hover:underline"}>
        {AUTOR_NOMBRE}
      </Link>
    </>
  );
  if (block) return <p className={className ?? "text-sm text-gray-500 mb-6"}>{contenido}</p>;
  return <span className={className ?? "text-sm text-gray-500"}>{contenido}</span>;
}
