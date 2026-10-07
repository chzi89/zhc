import Link from "next/link";
import { clinicConfig } from "../lib/clinic-config";
import WhatsAppButton from "./whatsapp-button";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pb-space-lg pt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-7xl px-gutter">
        <div className="mb-space-xl grid grid-cols-1 gap-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-space-sm">
            <h2 className="font-title-md text-title-md text-on-surface">
              {clinicConfig.name}
            </h2>
            <p className="font-label-sm text-label-sm font-medium text-secondary">
              {clinicConfig.doctor}, {clinicConfig.qualification}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Educational information on this website is general in nature and
              is not a substitute for advice from a qualified healthcare
              professional.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-space-sm">
            <h2 className="font-title-md text-title-md text-on-surface">
              Navigation
            </h2>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="transition-colors hover:text-primary"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-space-sm">
            <h2 className="font-title-md text-title-md text-on-surface">
              Contact
            </h2>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <WhatsAppButton className="inline-flex min-h-11 items-center text-left transition-colors hover:text-primary">
                WhatsApp
              </WhatsAppButton>
              <p>
                Phone:{" "}
                {clinicConfig.phone ? (
                  <a href={`tel:${clinicConfig.phone}`}>{clinicConfig.phone}</a>
                ) : (
                  <Link className="underline" href="/contact">
                    Contact details not provided
                  </Link>
                )}
              </p>
              <p>
                Email:{" "}
                {clinicConfig.email ? (
                  <a href={`mailto:${clinicConfig.email}`}>
                    {clinicConfig.email}
                  </a>
                ) : (
                  <span>Contact details not provided</span>
                )}
              </p>
            </div>
          </div>

          <div className="space-y-space-sm">
            <h2 className="font-title-md text-title-md text-on-surface">
              Clinic information
            </h2>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p>Address: {clinicConfig.address || "Not provided"}</p>
              <p>Clinic hours: {clinicConfig.clinicHours || "Not provided"}</p>
            </div>
          </div>
        </div>

        <p className="mb-space-lg rounded-xl bg-surface-container-high/40 p-space-md text-center font-caption text-caption leading-relaxed text-on-surface-variant">
          For urgent or emergency symptoms, contact local emergency medical
          services. Do not rely on this website for emergency care.
        </p>
        <p className="text-center font-caption text-caption text-on-surface-variant">
          © 2026 {clinicConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
