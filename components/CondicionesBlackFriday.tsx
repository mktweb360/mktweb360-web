import { BF_FIN_TEXTO, TARIFA_GENERAL_PACK, type BfLang } from "@/lib/black-friday";

// Condiciones de las ofertas Black Friday (lib/black-friday.ts). Solo lo decidido por José el 15/11/2026: fechas, duración,
// qué pasa después, sin permanencia, IVA no incluido. No añadir condiciones que no estén decididas (exclusiones, combinaciones…).
const TXT = {
  es: {
    h: "Condiciones de la oferta Black Friday",
    items: (fin: string) => [
      `Contratando hasta el ${fin}, incluido. Oferta para empresas y profesionales.`,
      "Todos los importes son al mes y sin IVA (+ IVA). Todas las ofertas son sin permanencia: puedes darte de baja avisando con 30 días de antelación.",
      "SEO Local Esencial y el pack SEO + GEO + Google Maps: el precio de campaña dura 6 meses desde la contratación. Crecimiento / Multisede, Ecommerce S y Ecommerce M: dura el primer año.",
      "Al terminar el periodo no pasas automáticamente a otro precio: hablamos contigo para acordar cómo seguir.",
      `El precio habitual que se indica en cada plan es el que se aplica fuera de la campaña. En el pack SEO + GEO + Google Maps la tarifa general es de ${TARIFA_GENERAL_PACK} € al mes + IVA, sin permanencia.`,
      "El servicio de GEO solo a 99 € al mes + IVA no es una oferta temporal: es un precio permanente, sin permanencia.",
    ],
  },
  en: {
    h: "Black Friday offer terms",
    items: (fin: string) => [
      `Sign up by ${fin}, inclusive. Offer for businesses and professionals.`,
      "All amounts are per month and exclude VAT (+ VAT). All offers have no minimum term: you can cancel with 30 days' notice.",
      "Local SEO Essential and the SEO + GEO + Google Maps pack: the campaign price lasts 6 months from sign-up. Growth / Multi-location, Ecommerce S and Ecommerce M: it lasts the first year.",
      "When the period ends you do not move automatically to another price: we talk with you to agree how to continue.",
      `The regular price shown on each plan is the one that applies outside the campaign. For the SEO + GEO + Google Maps pack the standard rate is €${TARIFA_GENERAL_PACK} per month + VAT, with no minimum term.`,
      "The GEO-only service at €99 per month + VAT is not a temporary offer: it is a permanent price, with no minimum term.",
    ],
  },
  fr: {
    h: "Conditions de l'offre Black Friday",
    items: (fin: string) => [
      `En souscrivant avant le ${fin}, inclus. Offre pour entreprises et professionnels.`,
      "Tous les montants sont mensuels et hors TVA (HT). Toutes les offres sont sans engagement : vous pouvez résilier avec 30 jours de préavis.",
      "SEO Local Essentiel et le pack SEO + GEO + Google Maps : le prix de campagne dure 6 mois à partir de la souscription. Croissance / Multi-sites, Ecommerce S et Ecommerce M : il dure la première année.",
      "À la fin de la période, vous ne passez pas automatiquement à un autre prix : nous en discutons avec vous pour convenir de la suite.",
      `Le prix habituel indiqué sur chaque plan est celui qui s'applique hors campagne. Pour le pack SEO + GEO + Google Maps, le tarif général est de ${TARIFA_GENERAL_PACK} € par mois HT, sans engagement.`,
      "Le service GEO seul à 99 € par mois HT n'est pas une offre temporaire : c'est un prix permanent, sans engagement.",
    ],
  },
} as const;

export function CondicionesBlackFriday({ lang = "es", className = "" }: { lang?: BfLang; className?: string }) {
  const t = TXT[lang];
  return (
    <section id="condiciones-black-friday" className={`max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 ${className}`}>
      <h2 className="font-bold text-primary-700 text-lg mb-3">{t.h}</h2>
      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
        {t.items(BF_FIN_TEXTO[lang]).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}
