import { generateMetadata as _gm } from "../how-to-write-content-that-doesnt-sound-like-ai/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates:
      alternatesFor(`/${lang}/comment-ecrire-contenu-qui-ne-sonne-pas-ia/`) ?? meta.alternates,
  };
}

export { default } from "../how-to-write-content-that-doesnt-sound-like-ai/page";
