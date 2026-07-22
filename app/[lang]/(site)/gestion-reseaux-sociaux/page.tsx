import { generateMetadata as _gm } from "../social-media-management/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/gestion-reseaux-sociaux/`) ?? meta.alternates,
  };
}

export { default } from "../social-media-management/page";
