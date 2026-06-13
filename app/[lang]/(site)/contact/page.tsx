import type { Lang } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Contact Us — Mkt Web 360" : "Contactez-nous — Mkt Web 360",
    description:
      lang === "en"
        ? "Contact Mkt Web 360. Tell us about your project and we will get back to you within 24 hours."
        : "Contactez Mkt Web 360. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/contact/` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "Contact" : "Contact" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4 leading-tight">
            {isEn ? "Tell us about your project" : "Parlez-nous de votre projet"}
          </h1>
          <p className="text-xl text-primary-200">
            {isEn
              ? "We respond within 24 hours. No commitment required."
              : "Nous répondons dans les 24 heures. Sans engagement."}
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <ContactForm formType={`contact-${lang}`} />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-primary-50 rounded-2xl p-6">
              <p className="font-bold text-primary-600 mb-1">{isEn ? "Phone" : "Téléphone"}</p>
              <a href="tel:+34622748897" className="text-accent-500 hover:underline">
                +34 622 748 897
              </a>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6">
              <p className="font-bold text-primary-600 mb-1">Email</p>
              <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">
                info@mktweb360.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
