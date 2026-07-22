import { generateMetadata as _gm } from "../ppc-google-ads/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/campagnes-google-ads/`) ?? meta.alternates,
  };
}

export { default } from "../ppc-google-ads/page";
