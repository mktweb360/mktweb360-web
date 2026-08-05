import { generateMetadata as _gm } from "../social-seo-instagram-tiktok-linkedin/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates:
      alternatesFor(`/${lang}/seo-social-instagram-tiktok-linkedin-moteurs-recherche/`) ?? meta.alternates,
  };
}

export { default } from "../social-seo-instagram-tiktok-linkedin/page";
