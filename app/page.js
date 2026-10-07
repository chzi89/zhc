import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "../lib/clinic-config";
import WhatsAppButton from "../components/whatsapp-button";
import Icon from "../components/icon";

export const metadata = {
  title: "Home",
  description:
    "Zikriya Homeopathy Clinic, introducing Dr. AmanUllah, BHMS and sharing general health education.",
  openGraph: {
    title: "Zikriya Homeopathy Clinic | Dr. AmanUllah, BHMS",
    description:
      "Clinic information and general educational content from Zikriya Homeopathy Clinic.",
    type: "website",
  },
};

const practicePrinciples = [
  {
    icon: "hearing",
    title: "Listen carefully",
    description:
      "A consultation is a chance to share your concerns and relevant health history.",
  },
  {
    icon: "info",
    title: "Explain clearly",
    description:
      "You should be able to ask questions and discuss any proposed next steps with a qualified healthcare professional.",
  },
  {
    icon: "health_and_safety",
    title: "Put safety first",
    description:
      "Website information cannot assess individual symptoms or replace professional or emergency care.",
  },
];

export default function HomePage() {
  return (
    <main className="w-full bg-surface pt-20">
      <section className="bg-surface-container-low py-space-xl md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-space-xl px-gutter lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-space-md">
            <p className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-sm py-1 font-label-sm text-label-sm font-medium uppercase tracking-wider text-primary">
              Homeopathy clinic
            </p>
            <h1 className="font-display text-display leading-tight text-on-surface">
              {clinicConfig.name}
            </h1>
            <p className="font-headline-sm text-headline-sm font-semibold text-secondary">
              {clinicConfig.doctor}, {clinicConfig.qualification}
            </p>
            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Learn about the clinic, meet the doctor, and read general
              educational information. Website content is not a diagnosis or a
              substitute for care from an appropriately qualified healthcare
              professional.
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-space-xs rounded-lg bg-primary px-space-lg py-space-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-tertiary `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href="/contact"
              >
                Contact clinic
              </Link>
              <WhatsAppButton className="inline-flex min-h-11 items-center justify-center gap-space-xs rounded-lg bg-secondary px-space-lg py-space-sm font-label-md text-label-md text-on-secondary transition-colors hover:bg-tertiary `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                WhatsApp
              </WhatsAppButton>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-space-xs rounded-lg bg-surface-container px-space-lg py-space-sm font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href="/Blog"
              >
                Read the blog
              </Link>
            </div>
          </div>

          <Image
            alt={`${clinicConfig.doctor}, ${clinicConfig.qualification}`}
            className="mx-auto aspect-square w-full max-w-sm rounded-full object-cover object-top"
            height={1080}
            priority
            sizes="(max-width: 1024px) 80vw, 32rem"
            src="/DrAmanUllah.jpeg"
            width={1080}
          />
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="py-space-xl">
        <div className="mx-auto max-w-7xl px-gutter">
          <div className="mx-auto mb-space-xl max-w-2xl space-y-space-xs text-center">
            <p className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
              About the clinic
            </p>
            <h2
              className="font-headline-lg text-headline-lg text-on-surface"
              id="approach-heading"
            >
              Clear information, respectful conversations
            </h2>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Learn what information is available and contact the clinic to
              confirm details before making plans.
            </p>
          </div>
          <div className="grid gap-space-md md:grid-cols-3">
            {practicePrinciples.map(({ icon, title, description }) => (
              <article
                className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
                key={title}
              >
                <Icon className="mb-space-sm size-6 text-primary" name={icon} />
                <h3 className="mb-space-xs font-headline-sm text-headline-sm text-on-surface">
                  {title}
                </h3>
                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="mx-auto mb-space-xl max-w-7xl px-gutter">
        <p className="rounded-xl bg-surface-container-high/60 p-space-md font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
          For severe or urgent symptoms, contact local emergency medical
          services. Do not rely on this website for emergency care.
        </p>
      </aside>
    </main>
  );
}
