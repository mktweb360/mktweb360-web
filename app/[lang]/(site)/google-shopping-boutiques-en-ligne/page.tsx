import { generateMetadata as _gm } from "../google-shopping-for-online-stores/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/google-shopping-boutiques-en-ligne/`) ?? meta.alternates,
  };
}

export { default } from "../google-shopping-for-online-stores/page";
