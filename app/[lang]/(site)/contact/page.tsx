import { ContactPageBody } from "@/components/ContactPageBody";
import { alternatesFor } from "@/lib/i18n/routes";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, intlPath, fromMeta, ORG_ID } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Contact Us" : "Contactez-nous",
    description:
      lang === "en"
        ? "Contact Mkt Web 360. Tell us about your project and we will get back to you within 24 hours."
        : "Contactez Mkt Web 360. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
    alternates: alternatesFor(`/${lang}/contact/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/contact/`,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <JsonLd data={webPageSchema("ContactPage", { lang, path: intlPath(lang, "contact"), ...fromMeta(await generateMetadata({ params })) }, { mainEntity: { "@id": ORG_ID } })} />
      <ContactPageBody lang={lang === "fr" ? "fr" : "en"} />
    </>
  );
}
