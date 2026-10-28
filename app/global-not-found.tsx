import { NotFoundView, notFoundMetadata } from "@/components/NotFoundView";
import { RootDocument } from "@/components/RootDocument";

// 404 de las URLs que no encajan en ninguna ruta (hay varios layouts raíz, así que Next usa este archivo).
export const metadata = notFoundMetadata;

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es">
      <NotFoundView conCabecera />
    </RootDocument>
  );
}
