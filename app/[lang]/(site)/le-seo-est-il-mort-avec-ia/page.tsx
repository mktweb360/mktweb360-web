import { generateMetadata as _gm } from "../is-seo-dead-with-ai/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/le-seo-est-il-mort-avec-ia/`) ?? meta.alternates,
  };
}

export { default } from "../is-seo-dead-with-ai/page";
