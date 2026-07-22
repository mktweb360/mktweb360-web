import { generateMetadata as _gm } from "../email-marketing-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/email-marketing-entreprises/`) ?? meta.alternates,
  };
}

export { default } from "../email-marketing-service/page";
