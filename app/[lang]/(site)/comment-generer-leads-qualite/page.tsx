import { generateMetadata as _gm } from "../how-to-generate-quality-leads/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/comment-generer-leads-qualite/`) ?? meta.alternates,
  };
}

export { default } from "../how-to-generate-quality-leads/page";
