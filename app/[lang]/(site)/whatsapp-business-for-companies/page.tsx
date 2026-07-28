import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "WhatsApp Business for Companies: Complete Setup and Strategy Guide 2026"
      : "WhatsApp Business pour les Entreprises : Guide Complet de Configuration et Stratégie 2026",
    description: isEn
      ? "How to use WhatsApp Business to attract and retain clients. Setup, automations, catalogue and strategy for businesses. Updated guide 2026."
      : "Comment utiliser WhatsApp Business pour attirer et fidéliser des clients. Configuration, automatisations, catalogue et stratégie pour les entreprises. Guide mis à jour 2026.",
    alternates: alternatesFor(`/${lang}/whatsapp-business-for-companies/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/whatsapp-business-for-companies/`,
    },
    openGraph: {
      title: isEn
        ? "WhatsApp Business for Companies: Complete Setup and Strategy Guide 2026 | Mkt Web 360"
        : "WhatsApp Business pour les Entreprises : Guide Complet de Configuration et Stratégie 2026 | Mkt Web 360",
      description: isEn
        ? "How to use WhatsApp Business to attract and retain clients. Setup, automations, catalogue and strategy for businesses."
        : "Comment utiliser WhatsApp Business pour attirer et fidéliser des clients. Configuration, automatisations, catalogue et stratégie pour les entreprises.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "WhatsApp Business" : "WhatsApp Business" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "WhatsApp Marketing" : "WhatsApp Marketing"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "WhatsApp Business for companies: complete guide to setup and strategy"
            : "WhatsApp Business pour les entreprises : guide complet de configuration et stratégie"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "WhatsApp Business is the communication channel with the highest open rate — 98%. This guide explains how to configure it correctly, which features to leverage and how to use it to attract and retain clients."
            : "WhatsApp Business est le canal de communication avec le taux d'ouverture le plus élevé — 98 %. Ce guide explique comment le configurer correctement, quelles fonctionnalités exploiter et comment l'utiliser pour attirer et fidéliser des clients."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "WhatsApp Business vs regular WhatsApp: key differences"
                : "WhatsApp Business vs WhatsApp normal : différences clés"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "WhatsApp Business is a separate, free application designed specifically for businesses. Unlike regular WhatsApp, it offers features designed for commercial communication: a business profile with contact information and description, a product and service catalogue, automatic replies, labels for organising conversations and message statistics."
                : "WhatsApp Business est une application séparée, gratuite, conçue spécifiquement pour les entreprises. Contrairement à WhatsApp normal, elle offre des fonctionnalités pensées pour la communication commerciale : profil d'entreprise avec informations de contact et description, catalogue de produits et services, réponses automatiques, étiquettes pour organiser les conversations et statistiques de messages."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The phone number can be the same one you use for personal WhatsApp if you switch between apps, or you can use a different number dedicated exclusively to the business. The second option is more professional: it separates personal communication from business communication and makes management easier if more than one person needs access to the account."
                : "Le numéro de téléphone peut être le même que vous utilisez pour WhatsApp personnel si vous changez d'une app à l'autre, ou vous pouvez utiliser un numéro différent dédié exclusivement à l'entreprise. La deuxième option est plus professionnelle : elle sépare la communication personnelle de la professionnelle et facilite la gestion si plus d'une personne doit accéder au compte."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "An important difference: standard WhatsApp Business can only be used on one device (like regular WhatsApp). If you need several team members to manage the same account from different devices, you need the WhatsApp Business API, which has a cost but offers far greater capabilities."
                : "Une différence importante : WhatsApp Business standard ne peut être utilisé que sur un seul appareil (comme WhatsApp normal). Si vous avez besoin que plusieurs membres de l'équipe gèrent le même compte depuis différents appareils, vous avez besoin de l'API WhatsApp Business, qui a un coût mais offre des capacités bien plus grandes."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "How to set up your business profile" : "Comment configurer votre profil d'entreprise"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "A complete and professional WhatsApp Business profile setup builds trust from the very first message and makes it easy for potential clients to find the information they need without having to ask for it."
                : "Une configuration complète et professionnelle du profil WhatsApp Business génère de la confiance dès le premier message et facilite la recherche des informations dont les clients potentiels ont besoin sans avoir à les demander."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Business name:" : "Nom de l'entreprise :"}</strong>{" "}
              {isEn
                ? "Use the official name of your business, as it appears on your website and on Google. Consistency across channels makes it easier for clients to recognise you."
                : "Utilisez le nom officiel de votre entreprise, tel qu'il apparaît sur votre site web et sur Google. La cohérence entre les canaux facilite la reconnaissance de votre marque par les clients."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Profile photo:" : "Photo de profil :"}</strong>{" "}
              {isEn
                ? "Your company logo, high resolution. Do not use personal photos or generic images."
                : "Le logo de votre entreprise, en haute résolution. N'utilisez pas de photos personnelles ni d'images génériques."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Description:" : "Description :"}</strong>{" "}
              {isEn
                ? "139 characters to describe what your company does and what problem it solves. Be direct and client-benefit focused."
                : "139 caractères pour décrire ce que fait votre entreprise et quel problème elle résout. Soyez direct et orienté vers le bénéfice du client."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Business hours:" : "Horaires d'ouverture :"}</strong>{" "}
              {isEn
                ? "Configure the days and hours when you attend via WhatsApp. This manages client expectations and avoids frustration when messages take time to be answered."
                : "Configurez les jours et horaires où vous répondez par WhatsApp. Cela gère les attentes des clients et évite la frustration quand le message tarde à recevoir une réponse."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Address and website:" : "Adresse et site web :"}</strong>{" "}
              {isEn
                ? "Add your physical address if you have premises and a link to your website. These details appear on your profile and help clients find you."
                : "Ajoutez votre adresse physique si vous avez un local et le lien vers votre site web. Ces données apparaissent sur votre profil et aident les clients à vous trouver."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Product and service catalogue in WhatsApp"
                : "Catalogue de produits et services dans WhatsApp"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The WhatsApp Business catalogue allows you to create a showcase of your products or services directly in the app. Clients can view the catalogue from your profile without needing to visit your website, and can send orders or enquiries about specific products directly in the chat."
                : "Le catalogue WhatsApp Business permet de créer une vitrine de vos produits ou services directement dans l'application. Les clients peuvent voir le catalogue depuis votre profil sans avoir besoin de visiter votre site web, et peuvent envoyer des commandes ou des demandes sur des produits spécifiques directement dans le chat."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For each catalogue item you can add: name, description, price, link to the product on your website and reference code. For hospitality, retail or professional services businesses, having a well-configured catalogue can be the difference between a client asking about price (and perhaps not buying) versus arriving at the chat already with purchase intent formed."
                : "Pour chaque article du catalogue, vous pouvez ajouter : nom, description, prix, lien vers le produit sur votre site web et code de référence. Pour les entreprises de restauration, distribution ou services professionnels, avoir le catalogue bien configuré peut faire la différence entre un client qui demande le prix (et peut-être n'achète pas) et un client qui arrive au chat avec l'intention d'achat déjà formée."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For service businesses, the catalogue works equally well: present each service with a clear description, estimated time and indicative price. This reduces qualification time in each conversation."
                : "Pour les entreprises de services, le catalogue fonctionne tout aussi bien : présentez chaque service avec une description claire, le temps estimé et le prix indicatif. Cela réduit le temps de qualification dans chaque conversation."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Automatic replies and welcome messages"
                : "Réponses automatiques et messages de bienvenue"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The basic automations of WhatsApp Business are simple but very effective for improving the client experience and reducing manual management time."
                : "Les automatisations basiques de WhatsApp Business sont simples mais très efficaces pour améliorer l'expérience client et réduire le temps de gestion manuelle."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Welcome message:" : "Message de bienvenue :"}</strong>{" "}
              {isEn
                ? "Sent automatically when someone contacts you for the first time or after 14 days of inactivity. Use it to thank the contact, introduce your company and manage response time expectations. Avoid generic messages — personalise the tone to match your brand voice."
                : "Envoyé automatiquement quand quelqu'un vous contacte pour la première fois ou après 14 jours d'inactivité. Utilisez-le pour remercier le contact, présenter votre entreprise et gérer les attentes de délai de réponse. Évitez les messages génériques — personnalisez le ton pour qu'il corresponde à la voix de votre marque."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Away message:" : "Message d'absence :"}</strong>{" "}
              {isEn
                ? "Activated outside business hours. Informs the client that you are away and when you will respond. Including your business hours in this message reduces client frustration for those who do not remember them."
                : "Activé en dehors des horaires d'ouverture. Informe le client que vous êtes absent et quand vous répondrez. Inclure les horaires d'ouverture dans ce message réduit la frustration des clients qui ne les retiennent pas."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Quick replies:" : "Réponses rapides :"}</strong>{" "}
              {isEn
                ? "Shortcuts for messages you send frequently (quotes, opening hours, address, catalogue link). Activated with '/' followed by a keyword. This saves considerable time in daily management."
                : "Raccourcis pour les messages que vous envoyez fréquemment (devis, informations sur les horaires, adresse, lien vers le catalogue). Activés avec « / » suivi d'un mot-clé. Cela économise un temps considérable dans la gestion quotidienne."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "WhatsApp lead generation strategy" : "Stratégie d'acquisition via WhatsApp"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Having WhatsApp Business set up is only the first step. The acquisition strategy defines how you bring potential clients to start a conversation with you through this channel."
                : "Avoir WhatsApp Business configuré n'est que la première étape. La stratégie d'acquisition définit comment vous amenez des clients potentiels à initier une conversation avec vous par ce canal."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The WhatsApp button on your website and in your Google Business Profile is the most efficient entry point: it captures people who are already looking for what you offer. A link or button that opens a pre-filled WhatsApp conversation reduces friction to the minimum."
                : "Le bouton WhatsApp sur votre site web et dans votre Google Business Profile est le point d'entrée le plus efficace : il capture des personnes qui cherchent déjà ce que vous proposez. Un lien ou bouton qui ouvre une conversation WhatsApp pré-remplie réduit la friction au minimum."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For businesses that advertise on Meta (Facebook and Instagram), ads with a WhatsApp CTA generally have a higher conversion rate than ads with a form, because they reduce friction: the user clicks and directly starts a conversation, without filling in data."
                : "Pour les entreprises qui font de la publicité sur Meta (Facebook et Instagram), les annonces avec un CTA WhatsApp ont généralement un taux de conversion supérieur aux annonces avec formulaire car elles réduisent la friction : l'utilisateur clique et commence directement une conversation, sans remplir de données."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "WhatsApp QR codes on physical materials (business cards, leaflets, shop windows) connect the offline world with the digital channel in a very simple way and have a surprisingly high usage rate."
                : "Les QR codes WhatsApp sur les supports physiques (cartes de visite, flyers, vitrines) connectent le monde offline avec le canal digital de manière très simple et ont un taux d'utilisation étonnamment élevé."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "WhatsApp Business API: when to make the leap"
                : "API WhatsApp Business : quand franchir le pas"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The WhatsApp Business API is designed for businesses with high message volumes that need advanced automations, CRM integration or attendance by multiple agents from the same number. It is the option used by mid-sized ecommerce businesses, clinics with high appointment volumes or companies with customer service teams."
                : "L'API WhatsApp Business est conçue pour les entreprises avec un volume élevé de messages qui ont besoin d'automatisations avancées, d'intégration CRM ou d'assistance par plusieurs agents depuis le même numéro. C'est l'option utilisée par les e-commerces de taille moyenne, les cliniques avec un grand volume de rendez-vous ou les entreprises avec des équipes de service client."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Unlike the free app, the API has a cost: you pay per conversation initiated (with different rates depending on whether the client or business initiates it) and you need an intermediary provider (BSP — Business Solution Provider) to manage the technical integration."
                : "Contrairement à l'application gratuite, l'API a un coût : on paie par conversation initiée (avec des tarifs différents selon que c'est le client ou l'entreprise qui initie) et on a besoin d'un prestataire intermédiaire (BSP — Business Solution Provider) qui gère l'intégration technique."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The capabilities the API adds are: multiple agents on the same number, chatbots for automatic qualification, CRM integration (HubSpot, Salesforce), mass sending of marketing messages with WhatsApp-approved templates, and advanced conversation analytics. For businesses managing more than 50–100 conversations per month, the API investment is quickly recovered in management time."
                : "Les capacités que l'API ajoute sont : plusieurs agents sur le même numéro, chatbots pour la qualification automatique, intégration CRM (HubSpot, Salesforce), envoi massif de messages marketing avec des modèles approuvés par WhatsApp, et analytique avancée des conversations. Pour les entreprises qui gèrent plus de 50 à 100 conversations par mois, l'investissement dans l'API est rapidement amorti en temps de gestion."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Do you need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "Tell us about your project and we will get back to you in less than 24 hours."
                : "Parlez-nous de votre projet et nous vous répondrons en moins de 24 heures."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Contact us" : "Nous contacter"}
              </a>
              <a
                href={`/${lang}/whatsapp-marketing-service/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See WhatsApp Marketing service" : "Voir le service WhatsApp Marketing"}
              </a>
            </div>
          </div>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
    </>
  );
}
