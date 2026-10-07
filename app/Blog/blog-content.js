"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Icon from "../../components/icon";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* <!-- Minimalist Top Editorial Header --> */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
                <div className="space-y-space-xs max-w-3xl">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span>Clinical Knowledge &amp; Guidance</span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Health &amp; Wellness Blog
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    General wellbeing information and practical guidance for
                    preparing to speak with a healthcare professional.
                  </p>
                </div>
                {/* <!-- Reader Quick Stats / Indicator --> */}
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <Icon className="size-6" name="menu_book" />
                  </div>
                  <div>
                    <div className="font-title-md text-title-md text-on-surface">
                      Curated Insights
                    </div>
                    <div className="font-caption text-caption text-secondary">
                      Authored by Dr. AmanUllah, BHMS
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Category Filter Tabs --> */}
              <div className="mt-space-xl flex items-center gap-space-xs overflow-x-auto pb-space-xs scrollbar-none">
                {[
                  "All Articles",
                  "Clinical Practice",
                  "Lifestyle & Nutrition",
                  "Preventive Health",
                  "Patient Guide",
                ].map((category) => (
                  <button
                    aria-pressed={activeCategory === category}
                    className={`cat-pill rounded-full px-space-md py-space-sm font-label-md text-label-md transition-all ${
                      activeCategory === category
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    }`}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category === "All Articles"
                      ? category
                      : category === "Patient Guide"
                        ? "Patient Guides"
                        : category}
                  </button>
                ))}
              </div>
            </div>
          </section>
          {/* <!-- Interactive Reader View: Dedicated Featured Article --> */}
          <section
            className="w-full bg-surface-container-lowest py-space-xl shadow-sm"
            id="featured-reader"
          >
            <div className="max-w-7xl mx-auto px-gutter">
              {/* <!-- Article Hero Layout --> */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* <!-- Left Spine / Vertical Meta Tagging --> */}
                <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-space-lg pt-space-md">
                  <span className="[writing-mode:vertical-rl] font-caption text-caption text-outline uppercase tracking-widest">
                    Clinical Practice Essay
                  </span>
                  <div className="w-px h-16 bg-surface-container-high"></div>
                  <button
                    className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors"
                    onClick={() => window.print()}
                    title="Print Article"
                    aria-label="Print article"
                    type="button"
                  >
                    <Icon className="size-5" name="print" />
                  </button>
                </div>
                {/* <!-- Center Editorial Column --> */}
                <div className="lg:col-span-11 space-y-space-lg">
                  {/* <!-- Featured Header Chips --> */}
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
                      Clinical Practice
                    </span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">
                      General education
                    </span>
                  </div>
                  {/* <!-- Title --> */}
                  <h2 className="font-display text-headline-lg lg:text-display text-on-surface font-semibold tracking-tight leading-tight">
                    Preparing for a Healthcare Consultation
                  </h2>
                  {/* <!-- Author Credential Strip --> */}
                  <div className="flex items-center gap-space-md py-space-sm bg-surface-container-low rounded-xl px-space-md">
                    <div className="w-12 h-12 `flex-shrink-0 overflow-hidden rounded-full bg-surface-tint/20">
                      <div className="w-full h-full flex items-center justify-center text-primary font-title-md">
                        DA
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface">
                        Dr. AmanUllah, BHMS
                      </span>
                      <span className="font-caption text-caption text-secondary">
                        Zikriya Homeopathy Clinic
                      </span>
                    </div>
                    <div className="ml-auto hidden sm:flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      General information
                    </div>
                  </div>
                  {/* <!-- Featured Image --> */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl lg:aspect-[1.79/1]">
                    <Image
                      alt="Illustration of a patient speaking with a healthcare professional"
                      className="object-cover"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      src="/consultation-illustration.svg"
                    />
                  </div>
                  {/* <!-- Deep Rich Article Body Content --> */}
                  <article className="space-y-space-md text-on-surface font-body-md text-body-md leading-relaxed pt-space-sm">
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed font-normal">
                      A healthcare consultation is an opportunity to discuss
                      your concerns, relevant history, and questions with an
                      appropriately qualified professional. The format and
                      duration of a visit vary by provider and individual need.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg my-space-lg items-center">
                      <div className="md:col-span-8 space-y-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          The Art of Thorough Homeopathic Case-Taking
                        </h3>
                        <p>
                          You may be asked when a concern began, how it has
                          changed, and what care you have already received.
                          Share relevant medicines and health history, and ask
                          the clinician to explain any proposed next steps.
                        </p>
                        <p>
                          This website cannot diagnose conditions or determine
                          which treatment is appropriate. Do not stop or change
                          prescribed treatment without discussing it with your
                          treating healthcare professional.
                        </p>
                      </div>
                      {/* <!-- Consultation preparation checklist --> */}
                      <div className="md:col-span-4 bg-surface-container rounded-xl p-space-md shadow-sm space-y-space-sm">
                        <div className="font-title-md text-title-md text-primary flex items-center gap-space-xs">
                          <Icon className="size-5" name="checklist" />
                          Before your visit
                        </div>
                        <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                          <li>Write down your questions and concerns.</li>
                          <li>
                            Bring a list of medicines and relevant history.
                          </li>
                          <li>Ask about benefits, risks, and alternatives.</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Deep Dive: Constitutional Signifiers --> */}
                    <div className="space-y-space-sm pt-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Share your health history
                      </h3>
                      <p>
                        A clinician may ask about your symptoms, relevant
                        medical history, current medicines, and what you hope to
                        discuss. Ask questions whenever advice or next steps are
                        unclear.
                      </p>
                      {/* <!-- Bento-style Key Inquiries Grid --> */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md py-space-sm">
                        <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                            <Icon className="size-4" name="thermostat" />
                          </div>
                          <div className="font-title-md text-title-md text-on-surface">
                            Thermal Preferences
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Specific reactivity to dry heat, damp drafts,
                            seasonal shifts, and micro-climates inside the
                            domestic space.
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                            <Icon className="size-4" name="bedtime" />
                          </div>
                          <div className="font-title-md text-title-md text-on-surface">
                            Circadian Rhythm &amp; Sleep
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Note sleep concerns or other changes that matter to
                            you and share them with a healthcare professional.
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                            <Icon className="size-4" name="psychology" />
                          </div>
                          <div className="font-title-md text-title-md text-on-surface">
                            Wellbeing
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Share stress or wellbeing concerns if they are
                            relevant to your appointment.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Doctor-Patient Alliance Section --> */}
                    <div className="space-y-space-sm pt-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Patient-Doctor Collaboration as the Cornerstone of Care
                      </h3>
                      <p>
                        Your clinician should explain proposed care and discuss
                        appropriate options with you. This website cannot assess
                        individual symptoms, recommend a treatment, or replace
                        urgent medical evaluation.
                      </p>
                    </div>
                    {/* <!-- Mandatory Educational Disclaimer Callout --> */}
                    <div className="mt-space-lg p-space-md bg-surface-container-high/60 rounded-xl flex items-start gap-space-md">
                      <Icon
                        className="mt-0.5 size-6 `flex-shrink-0 text-secondary"
                        name="info"
                      />
                      <div className="space-y-1">
                        <span className="font-title-md text-title-md text-on-surface">
                          Educational Disclaimer
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Information on this website is for general educational
                          purposes and does not replace professional medical
                          diagnosis, emergency medical care, or conventional
                          hospital treatment. Always consult Dr. AmanUllah or an
                          accredited healthcare provider before modifying any
                          prescribed regimen.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Bottom Reader CTA / WhatsApp Consultation Bar --> */}
                    <div className="mt-space-lg p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
                      <div className="space-y-1 text-center md:text-left">
                        <div className="font-headline-sm text-headline-sm text-on-surface">
                          Have questions about your individual health pattern?
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Schedule an in-depth clinical consultation with Dr.
                          AmanUllah, BHMS.
                        </div>
                      </div>
                      <Link
                        className="inline-flex `flex-shrink-0 items-center gap-space-xs rounded-lg bg-primary px-space-lg py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container"
                        href="/contact"
                      >
                        <Icon className="size-5" name="chat" />
                        <span>View contact options</span>
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Featured Blog Cards Grid (All 4 Requested Articles) --> */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter space-y-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                <div className="space-y-1">
                  <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    Curated Library
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    All Clinical Essays &amp; Health Guides
                  </h2>
                </div>
                <div className="font-caption text-caption text-on-surface-variant">
                  4 general educational articles
                </div>
              </div>
              {/* <!-- Articles Grid --> */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg"
                id="articles-grid"
              >
                {/* <!-- Card 1 --> */}
                <article
                  className="article-card flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all h-full"
                  data-category="Clinical Practice"
                  hidden={
                    activeCategory !== "All Articles" &&
                    activeCategory !== "Clinical Practice"
                  }
                >
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                        Clinical Practice
                      </span>
                      <span className="font-caption text-caption text-outline">
                        Publication date not provided
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors line-clamp-2">
                      Preparing for a Healthcare Consultation
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      Questions to consider when preparing for a healthcare
                      appointment.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md space-y-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      <Icon className="size-4" name="person" />
                      <span>Dr. AmanUllah, BHMS</span>
                    </div>
                    <Link
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/Blog/consultation"
                    >
                      <span>Read Article</span>
                      <Icon className="size-4" name="arrow_forward" />
                    </Link>
                  </div>
                </article>
                {/* <!-- Card 2 --> */}
                <article
                  className="article-card flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all h-full"
                  data-category="Lifestyle &amp; Nutrition"
                  hidden={
                    activeCategory !== "All Articles" &&
                    activeCategory !== "Lifestyle & Nutrition"
                  }
                >
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                        Lifestyle &amp; Nutrition
                      </span>
                      <span className="font-caption text-caption text-outline">
                        Publication date not provided
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors line-clamp-2">
                      Everyday Wellbeing
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      General information about sleep, hydration, and everyday
                      wellbeing.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md space-y-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      <Icon className="size-4" name="person" />
                      <span>Dr. AmanUllah, BHMS</span>
                    </div>
                    <Link
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/Blog/everyday-wellbeing"
                    >
                      <span>Read Article</span>
                      <Icon className="size-4" name="arrow_forward" />
                    </Link>
                  </div>
                </article>
                {/* <!-- Card 3 --> */}
                <article
                  className="article-card flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all h-full"
                  data-category="Preventive Health"
                  hidden={
                    activeCategory !== "All Articles" &&
                    activeCategory !== "Preventive Health"
                  }
                >
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                        Preventive Health
                      </span>
                      <span className="font-caption text-caption text-outline">
                        Publication date not provided
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors line-clamp-2">
                      When Symptoms Persist or Change
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      If symptoms continue, worsen, or concern you, seek advice
                      from an appropriately qualified professional.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md space-y-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      <Icon className="size-4" name="person" />
                      <span>Dr. AmanUllah, BHMS</span>
                    </div>
                    <Link
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/Blog/persistent-symptoms"
                    >
                      <span>Read Article</span>
                      <Icon className="size-4" name="arrow_forward" />
                    </Link>
                  </div>
                </article>
                {/* <!-- Card 4 --> */}
                <article
                  className="article-card flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all h-full"
                  data-category="Patient Guide"
                  hidden={
                    activeCategory !== "All Articles" &&
                    activeCategory !== "Patient Guide"
                  }
                >
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
                        Patient Guide
                      </span>
                      <span className="font-caption text-caption text-outline">
                        Publication date not provided
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors line-clamp-2">
                      When to Seek Professional or Emergency Care
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      Seek professional advice for severe, sudden, or worsening
                      symptoms; contact emergency services when needed.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md space-y-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                      <Icon className="size-4" name="person" />
                      <span>Dr. AmanUllah, BHMS</span>
                    </div>
                    <Link
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors"
                      href="/Blog/when-to-seek-care"
                    >
                      <span>Read Article</span>
                      <Icon className="size-4" name="arrow_forward" />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* <!-- Related Articles & Newsletter / Clinic Updates Section --> */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 space-y-space-sm">
                  <div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-semibold">
                    <Icon className="size-4" name="mail_outline" />
                    <span>CLINICAL DISPATCHES</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Questions about the clinic?
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Contact details and newsletter subscriptions are not
                    configured yet. Use the contact page to see the currently
                    available information.
                  </p>
                  <Link
                    className="inline-flex min-h-11 items-center rounded-lg bg-primary px-space-md py-space-sm font-label-md text-label-md text-on-primary"
                    href="/contact"
                  >
                    Contact information
                  </Link>
                </div>
                {/* <!-- Right Side: Mini Featured Checklist Box --> */}
                <div className="lg:col-span-5 bg-surface-container rounded-xl p-space-md space-y-space-sm">
                  <div className="font-title-md text-title-md text-on-surface">
                    The Classical Healing Approach
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-space-xs">
                      <Icon
                        className="mt-0.5 size-4 `flex-shrink-0 text-primary"
                        name="check_circle"
                      />
                      <span>
                        Discuss your health concerns and relevant history with
                        an appropriately qualified healthcare professional.
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <Icon
                        className="mt-0.5 size-4 `flex-shrink-0 text-primary"
                        name="check_circle"
                      />
                      <span>
                        Ask about the potential benefits, risks, and
                        alternatives of any proposed treatment.
                      </span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <Icon
                        className="mt-0.5 size-4 `flex-shrink-0 text-primary"
                        name="check_circle"
                      />
                      <span>
                        Seek follow-up advice from your healthcare professional
                        if symptoms persist, worsen, or concern you.
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-xs">
                    <Link
                      className="font-label-sm text-label-sm text-primary hover:text-secondary font-semibold flex items-center gap-1"
                      href="/about"
                    >
                      <span>Read Clinic Principles</span>
                      <Icon className="size-4" name="arrow_forward" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
