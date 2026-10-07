export const articles = [
  {
    slug: "consultation",
    title: "Preparing for a Healthcare Consultation",
    category: "Clinical Practice",
    featuredImage: "/consultation-illustration.svg",
    featuredImageAlt:
      "Illustration of a patient speaking with a healthcare professional",
    excerpt:
      "Questions to consider when preparing to speak with a healthcare professional.",
    paragraphs: [
      "A healthcare consultation is an opportunity to discuss your concerns, relevant history, and questions with an appropriately qualified professional. The format and duration of a visit vary by provider and individual need.",
      "Before your visit, consider writing down when a concern began, how it has changed, and what care you have already received. Bring a list of current medicines and relevant health records if available.",
      "Ask the clinician to explain proposed next steps, potential benefits and risks, and any alternatives. Do not stop or change prescribed treatment without discussing it with your treating healthcare professional.",
    ],
  },
  {
    slug: "everyday-wellbeing",
    title: "Everyday Wellbeing",
    category: "Lifestyle & Nutrition",
    excerpt:
      "General reminders about sleep, hydration, meals, and talking with a clinician.",
    paragraphs: [
      "Regular sleep, hydration, balanced meals, and appropriate physical activity are common parts of general wellbeing. Individual needs and abilities differ.",
      "If you are considering a significant change to your diet, activity, or care, ask a qualified healthcare professional whether it is appropriate for you.",
      "This article is general information. It does not diagnose or treat a health condition.",
    ],
  },
  {
    slug: "persistent-symptoms",
    title: "When Symptoms Persist or Change",
    category: "Preventive Health",
    excerpt:
      "Seek professional advice when symptoms continue, worsen, or concern you.",
    paragraphs: [
      "Persistent, recurring, or worsening symptoms deserve assessment by an appropriately qualified healthcare professional. An online article cannot determine their cause.",
      "Share relevant health history and current medicines with your clinician. Do not delay prescribed care or use website content to diagnose or treat a condition.",
      "If symptoms are sudden, severe, or urgent, contact local emergency medical services.",
    ],
  },
  {
    slug: "when-to-seek-care",
    title: "When to Seek Professional or Emergency Care",
    category: "Patient Guide",
    excerpt:
      "How to decide when a health concern needs prompt professional attention.",
    paragraphs: [
      "Seek professional assessment for concerning, severe, sudden, or worsening symptoms. This website cannot assess your individual situation.",
      "For a medical emergency, contact your local emergency medical services immediately rather than relying on a website or waiting for an online response.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
