"use client";

import { useState } from "react";
import { clinicConfig } from "../lib/clinic-config";

export default function ContactInquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!clinicConfig.email) {
      setStatus(
        "The clinic email address has not been configured, so your message was not sent.",
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = `Clinic inquiry from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Phone or email: ${formData.get("replyTo")}`,
      "",
      String(formData.get("message")),
    ].join("\n");

    window.location.href = `mailto:${clinicConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email application should open with the message ready to send.",
    );
  }

  return (
    <form className="space-y-space-md" onSubmit={handleSubmit}>
      <div>
        <label
          className="mb-1 block font-label-md text-label-md text-on-surface"
          htmlFor="name"
        >
          Name
        </label>
        <input
          autoComplete="name"
          className="min-h-11 w-full rounded-lg border border-outline-variant bg-surface px-space-md text-on-surface `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          id="name"
          name="name"
          required
        />
      </div>

      <div>
        <label
          className="mb-1 block font-label-md text-label-md text-on-surface"
          htmlFor="replyTo"
        >
          Phone or email
        </label>
        <input
          autoComplete="email"
          className="min-h-11 w-full rounded-lg border border-outline-variant bg-surface px-space-md text-on-surface `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          id="replyTo"
          name="replyTo"
          required
        />
      </div>

      <div>
        <label
          className="mb-1 block font-label-md text-label-md text-on-surface"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full rounded-lg border border-outline-variant bg-surface p-space-md text-on-surface `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          id="message"
          name="message"
          required
          rows={5}
        />
      </div>

      <p className="text-sm leading-relaxed text-on-surface-variant">
        Do not include urgent medical concerns in this form. For emergencies,
        contact local emergency medical services.
      </p>
      <button
        className="min-h-11 rounded-lg bg-primary px-space-lg py-space-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-tertiary `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        type="submit"
      >
        Prepare email
      </button>
      {status && (
        <p aria-live="polite" className="text-sm text-on-surface-variant">
          {status}
        </p>
      )}
    </form>
  );
}
