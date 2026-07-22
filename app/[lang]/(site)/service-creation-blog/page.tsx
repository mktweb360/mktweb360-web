import { generateMetadata as _gm } from "../blog-creation-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-creation-blog/`) ?? meta.alternates,
  };
}

export { default } from "../blog-creation-service/page";
