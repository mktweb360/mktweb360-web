import { generateMetadata as _gm } from "../chatgpt-for-digital-marketing/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/chatgpt-pour-marketing-digital/`) ?? meta.alternates,
  };
}

export { default } from "../chatgpt-for-digital-marketing/page";
