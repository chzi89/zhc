import ContactInquiryForm from "../../components/contact-inquiry-form";
import WhatsAppButton from "../../components/whatsapp-button";
import { clinicConfig } from "../../lib/clinic-config";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zikriya Homeopathy Clinic. Contact details can be updated when confirmed by the clinic.",
  openGraph: {
    title: "Contact | Zikriya Homeopathy Clinic",
    description: "Contact information for Zikriya Homeopathy Clinic.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-surface px-gutter pb-space-xl pt-28">
      <div className="mx-auto max-w-7xl">
        <header className="mb-space-xl max-w-3xl space-y-space-sm">
          <p className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
            Contact
          </p>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Contact {clinicConfig.name}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Use the clinic contact options below. Please seek emergency care
            locally for urgent medical concerns.
          </p>
        </header>

        <div className="grid gap-space-lg lg:grid-cols-2">
          <section
            aria-labelledby="clinic-contact-heading"
            className="space-y-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
          >
            <h2
              className="font-headline-sm text-headline-sm text-on-surface"
              id="clinic-contact-heading"
            >
              Clinic information
            </h2>
            <dl className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
              <div>
                <dt className="font-semibold text-on-surface">Phone</dt>
                <dd>
                  {clinicConfig.phone ? (
                    <a className="text-primary underline" href={`tel:${clinicConfig.phone}`}>
                      {clinicConfig.phone}
                    </a>
                  ) : (
                    "[Phone Number]"
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-on-surface">WhatsApp</dt>
                <dd>
                  {clinicConfig.whatsappNumber || "[WhatsApp Number]"}
                  <WhatsAppButton className="ml-2 inline-flex min-h-11 items-center text-primary underline">
                    Open WhatsApp
                  </WhatsAppButton>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-on-surface">Email</dt>
                <dd>
                  {clinicConfig.email ? (
                    <a
                      className="text-primary underline"
                      href={`mailto:${clinicConfig.email}`}
                    >
                      {clinicConfig.email}
                    </a>
                  ) : (
                    "[Email Address]"
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-on-surface">Address</dt>
                <dd>{clinicConfig.address || "[Clinic Address]"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-on-surface">Clinic hours</dt>
                <dd>{clinicConfig.clinicHours || "[Clinic Hours]"}</dd>
              </div>
            </dl>
            {!clinicConfig.email && (
              <p className="rounded-lg bg-surface-container-low p-space-md text-sm leading-relaxed text-on-surface-variant">
                An email address has not been provided. Please use the phone or
                WhatsApp contact options instead.
              </p>
            )}
          </section>

          <section
            aria-labelledby="inquiry-heading"
            className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
          >
            <h2
              className="mb-space-md font-headline-sm text-headline-sm text-on-surface"
              id="inquiry-heading"
            >
              Send an inquiry
            </h2>
            <ContactInquiryForm />
          </section>
        </div>
      </div>
    </main>
  );
}
