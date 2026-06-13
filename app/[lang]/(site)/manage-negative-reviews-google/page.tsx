import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Manage Negative Reviews on Google Professionally | Mkt Web 360"
      : "Comment gérer les avis négatifs sur Google de manière professionnelle | Mkt Web 360",
    description: isEn
      ? "How to respond to negative Google reviews professionally. Strategy, response templates and how to turn criticism into opportunities."
      : "Comment répondre aux avis négatifs sur Google de manière professionnelle. Stratégie, modèles de réponse et comment transformer les critiques en opportunités.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "manage-negative-reviews-google" : "gerer-avis-negatifs-google"}/`,
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
            { label: isEn ? "Negative reviews" : "Avis négatifs" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Reputation</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to manage negative reviews on Google without losing customers"
            : "Comment gérer les avis négatifs sur Google sans perdre de clients"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A poorly managed negative review can cost more customers than the criticism itself. This guide explains how to respond, what to say and how to turn a criticism into an opportunity to show professionalism."
            : "Un avis négatif mal géré peut coûter plus de clients que la critique elle-même. Ce guide explique comment répondre, quoi dire et comment transformer une critique en opportunité de montrer son professionnalisme."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Why negative reviews matter more than you think"
            : "Pourquoi les avis négatifs comptent plus que vous ne le pensez"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "93% of consumers say online reviews influence their purchasing decisions. A business with only 5-star reviews is actually viewed with suspicion — buyers know that some negative feedback is natural. What matters more than having no bad reviews is how you respond to them. A professional, empathetic response to a negative review can actually increase trust in potential customers reading it."
            : "93% des consommateurs disent que les avis en ligne influencent leurs décisions d'achat. Une entreprise avec uniquement des avis 5 étoiles est en réalité perçue avec suspicion — les acheteurs savent que quelques retours négatifs sont naturels. Ce qui compte plus que l'absence de mauvais avis, c'est la façon dont vous y répondez. Une réponse professionnelle et empathique à un avis négatif peut en réalité augmenter la confiance des clients potentiels qui la lisent."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google also uses review signals (quantity, recency, rating) as a local ranking factor. Ignoring reviews — positive or negative — signals to Google that you are not actively managing your business presence, which can affect your ranking in local results."
            : "Google utilise également les signaux d'avis (quantité, récence, note) comme facteur de classement local. Ignorer les avis — positifs ou négatifs — signale à Google que vous ne gérez pas activement la présence de votre entreprise, ce qui peut affecter votre classement dans les résultats locaux."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to respond to a negative review step by step"
            : "Comment répondre à un avis négatif étape par étape"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Step 1: Respond within 24–48 hours. Speed signals that you care. Step 2: Thank the reviewer for their feedback — even if it is critical. Step 3: Acknowledge the problem specifically without being defensive. Step 4: Apologise for the experience if it was genuinely negative. Step 5: Explain what action you will take or have taken. Step 6: Invite them to contact you directly to resolve the issue."
            : "Étape 1 : Répondez dans les 24 à 48 heures. La rapidité signale que vous vous souciez. Étape 2 : Remerciez l'évaluateur pour son retour — même s'il est critique. Étape 3 : Reconnaissez le problème spécifiquement sans être défensif. Étape 4 : Excusez-vous pour l'expérience si elle était vraiment négative. Étape 5 : Expliquez quelle action vous allez prendre ou avez prise. Étape 6 : Invitez-les à vous contacter directement pour résoudre le problème."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Never argue publicly. Even if the reviewer is factually wrong, arguing in public makes you look worse to the hundreds of future customers reading the exchange. Acknowledge, address, invite to resolve privately. Let future customers see that you handle criticism with professionalism."
            : "Ne débattez jamais publiquement. Même si l'évaluateur a factuellement tort, se disputer en public vous fait paraître pire aux centaines de futurs clients qui liront l'échange. Reconnaissez, adressez, invitez à résoudre en privé. Laissez les futurs clients voir que vous gérez les critiques avec professionnalisme."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Professional response templates for negative reviews"
            : "Modèles de réponse professionnelle aux avis négatifs"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Template for a service complaint: 'Thank you for taking the time to share your experience, [Name]. We are sorry that the service you received did not meet your expectations — this is not the standard we hold ourselves to. We would like the opportunity to make this right. Please contact us at [email/phone] so we can address this personally.'"
            : "Modèle pour une plainte sur le service : 'Merci de prendre le temps de partager votre expérience, [Prénom]. Nous sommes désolés que le service que vous avez reçu n'ait pas répondu à vos attentes — ce n'est pas la norme que nous nous imposons. Nous aimerions avoir l'opportunité de rectifier cela. Veuillez nous contacter à [email/téléphone] afin que nous puissions traiter cela personnellement.'"}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Adapt the template to the specific complaint — a generic response is worse than no response. Use the reviewer's name if visible, reference the specific issue, and always end with a direct contact invitation."
            : "Adaptez le modèle à la plainte spécifique — une réponse générique est pire qu'aucune réponse. Utilisez le nom de l'évaluateur s'il est visible, référencez le problème spécifique, et terminez toujours par une invitation de contact direct."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "When and how to request removal of a fake review"
            : "Quand et comment demander la suppression d'un avis faux"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google allows you to flag reviews that violate their policies: reviews from people who were never your customers, reviews that contain spam or fake content, reviews from competitors, or reviews with prohibited content (hate speech, personal information, illegal content). Flag via Google Business Profile Manager {'>'} select the review {'>'} Flag as inappropriate. Google's review process takes 7–14 days and does not always result in removal."
            : "Google vous permet de signaler les avis qui violent leurs politiques : avis de personnes qui n'étaient pas vos clients, avis contenant du spam ou du contenu faux, avis de concurrents, ou avis avec du contenu prohibé (discours de haine, informations personnelles, contenu illégal). Signalez via Google Business Profile Manager {'>'} sélectionnez l'avis {'>'} Signaler comme inapproprié. Le processus d'examen de Google prend 7 à 14 jours et ne résulte pas toujours en suppression."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Strategy to generate more positive reviews"
            : "Stratégie pour générer plus d'avis positifs"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The most effective way to manage negative reviews is to have so many positive ones that each negative one has minimal impact. Most satisfied customers do not leave reviews spontaneously — you have to ask. The best moment: immediately after a successful delivery, service completion or resolved support ticket. A simple SMS or email with a direct link to your Google review page converts at 15–25%."
            : "Le moyen le plus efficace de gérer les avis négatifs est d'en avoir tellement de positifs que chaque négatif a un impact minimal. La plupart des clients satisfaits ne laissent pas d'avis spontanément — vous devez demander. Le meilleur moment : immédiatement après une livraison réussie, une prestation terminée ou un ticket de support résolu. Un simple SMS ou email avec un lien direct vers votre page d'avis Google convertit à 15 à 25%."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Do not offer incentives for reviews — this violates Google's policies and can result in your listing being penalised. Instead, make it easy: a direct link, a QR code at your physical location, a follow-up email sequence. Volume and consistency over time is what builds a strong review profile."
            : "N'offrez pas d'incitations pour les avis — cela viole les politiques de Google et peut entraîner la pénalisation de votre fiche. Facilitez plutôt : un lien direct, un code QR dans votre lieu physique, une séquence d'emails de suivi. Le volume et la constance au fil du temps est ce qui construit un profil d'avis solide."}
        </p>

        <BlogBanner variant="default" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Reputation" />
    </>
  );
}
