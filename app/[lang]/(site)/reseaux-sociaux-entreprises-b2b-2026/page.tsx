import { generateMetadata as _gm } from "../social-media-b2b-companies-2026/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return { ...meta, alternates: alternatesFor(`/${lang}/reseaux-sociaux-entreprises-b2b-2026/`) ?? meta.alternates };
}

export { default } from "../social-media-b2b-companies-2026/page";
