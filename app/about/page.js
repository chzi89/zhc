import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "../../lib/clinic-config";

export const metadata = {
  title: "About",
  description:
    "Learn about Zikriya Homeopathy Clinic and Dr. AmanUllah, BHMS.",
  openGraph: {
    title: "About | Zikriya Homeopathy Clinic",
    description:
      "About Zikriya Homeopathy Clinic and Dr. AmanUllah, BHMS.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-surface px-gutter pb-space-xl pt-28">
      <div className="mx-auto max-w-7xl">
        <header className="mb-space-xl max-w-3xl space-y-space-sm">
          <p className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
            About the clinic
          </p>
          <h1 className="font-display text-display text-on-surface">
            {clinicConfig.name}
          </h1>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            This website introduces the clinic and provides general
            educational information. Clinic-specific details will be added
            when confirmed.
          </p>
        </header>

        <section
          aria-labelledby="doctor-heading"
          className="grid gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm md:grid-cols-[minmax(12rem,0.8fr)_2fr]"
        >
          <Image
            alt={`${clinicConfig.doctor}, ${clinicConfig.qualification}`}
            className="aspect-square w-full rounded-lg object-cover object-top"
            height={1080}
            sizes="(max-width: 768px) 100vw, 35vw"
            src="/DrAmanUllah.jpeg"
            width={1080}
          />
          <div className="space-y-space-md">
            <div>
              <p className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
                Doctor
              </p>
              <h2
                className="mt-1 font-headline-lg text-headline-lg text-on-surface"
                id="doctor-heading"
              >
                {clinicConfig.doctor}, {clinicConfig.qualification}
              </h2>
            </div>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              The project-provided information confirms Dr. AmanUllah&apos;s
              BHMS qualification. Additional biography and practice details
              have not been provided.
            </p>
            <dl className="grid gap-space-md sm:grid-cols-2">
              <div className="rounded-lg bg-surface-container-low p-space-md">
                <dt className="font-title-md text-title-md text-on-surface">
                  Areas of interest
                </dt>
                <dd className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  [Areas of Interest]
                </dd>
              </div>
              <div className="rounded-lg bg-surface-container-low p-space-md">
                <dt className="font-title-md text-title-md text-on-surface">
                  Consultation approach
                </dt>
                <dd className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  [Consultation Approach]
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <aside className="mt-space-lg rounded-xl bg-surface-container-high/60 p-space-md font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
          <strong className="text-on-surface">Medical disclaimer:</strong>{" "}
          Website content is for general education and does not diagnose or
          replace professional medical care. For emergencies, contact local
          emergency medical services.
        </aside>

        <div className="mt-space-lg">
          <Link
            className="inline-flex min-h-11 items-center rounded-lg bg-primary px-space-lg py-space-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            href="/contact"
          >
            Contact the clinic
          </Link>
        </div>
      </div>
    </main>
  );
}
