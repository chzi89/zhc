import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../articles";
import { clinicConfig } from "../../../lib/clinic-config";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ${clinicConfig.name}`,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-surface px-gutter pb-space-xl pt-28">
      <article className="mx-auto max-w-3xl">
        <Link
          className="mb-space-lg inline-flex min-h-11 items-center text-primary underline"
          href="/Blog"
        >
          Back to the blog
        </Link>
        <header className="space-y-space-sm">
          <p className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
            {article.category}
          </p>
          <h1 className="font-display text-display text-on-surface">
            {article.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            By {clinicConfig.doctor}, {clinicConfig.qualification}
          </p>
          <p className="font-caption text-caption text-on-surface-variant">
            Publication date: [Publication Date]
          </p>
        </header>

        <div
          aria-label="Featured image placeholder"
          className="my-space-lg flex `aspect-[16/9] items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant"
          role="img"
        >
          Featured image
        </div>

        <div className="space-y-space-md font-body-md text-body-md leading-relaxed text-on-surface">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-space-lg rounded-xl bg-surface-container-high/60 p-space-md font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
          <strong className="text-on-surface">Medical disclaimer:</strong> This
          article is for general education only and does not diagnose or treat a
          condition or replace advice from a qualified healthcare professional.
          For emergencies, contact local emergency medical services.
        </aside>

        <section aria-labelledby="related-articles" className="mt-space-xl">
          <h2
            className="mb-space-md font-headline-sm text-headline-sm text-on-surface"
            id="related-articles"
          >
            Related articles
          </h2>
          <ul className="space-y-space-sm">
            {relatedArticles.map((related) => (
              <li key={related.slug}>
                <Link
                  className="text-primary underline"
                  href={`/Blog/${related.slug}`}
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
