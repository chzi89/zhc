import Image from "next/image";
import "./globals.css";
import Head from "../components/head";

export const metadata = {
  title: "Home",
  description: "Main landing page",
};

export default function Home() {
  return (
    <>
      <Head />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden `bg-gradient-to-b from-surface-container-low/40 via-surface to-surface pb-space-xl pt-space-lg lg:pt-space-xl">
          <div className="max-w-7xl mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-secondary-container/40 text-on-secondary-container rounded-full">
                  <span className="material-symbols-outlined text-sm text-primary">
                    verified
                  </span>
                  <span className="font-label-sm text-label-sm font-medium tracking-wide uppercase">
                    Registered Homeopathic Medical Practice
                  </span>
                </div>
                <div className="space-y-space-xs">
                  <div className="flex items-baseline gap-space-xs flex-wrap">
                    <span className="font-headline-sm text-headline-sm text-secondary font-semibold">
                      Dr. AmanUllah, BHMS
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      • Licensed Homeopathic Physician
                    </span>
                  </div>
                  <h1 className="font-display text-display text-on-surface tracking-tight leading-tight">
                    Professional Homeopathic Care With a Patient-Centered
                    Approach
                  </h1>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Providing conscientious, individualized consultations that
                  respect your comprehensive medical history, constitutional
                  temperament, and long-term vitality.
                </p>
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary hover:bg-primary rounded-xl font-label-md text-label-md transition-all shadow-sm"
                    data-path="contact-clinic"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                    <span>Contact Clinic</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-secondary text-on-secondary hover:bg-tertiary rounded-xl font-label-md text-label-md transition-all shadow-sm"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-base">
                      chat
                    </span>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-md text-label-md transition-all"
                    data-path="health-wellness-blog"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-base">
                      menu_book
                    </span>
                    <span>Read Our Blog</span>
                  </a>
                </div>
                <div className="pt-space-md grid grid-cols-3 gap-space-md w-full max-w-lg">
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      100%
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      Individualized Case Analysis
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      BHMS
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      Graduated Clinical Physician
                    </div>
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
                    <div className="font-title-md text-title-md text-primary font-bold">
                      Ethical
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      Evidence-Aware Protocol
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative w-full `aspect-[4/5] rounded-full overflow-hidden shadow-xl bg-surface-container-low">
                  <img
                    alt="Dr. AmanUllah, BHMS"
                    className="w-full h-full object-cover object-top"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_-ZPGztTMd0awc2h4wR6NJR6wTmG2Lc7ag44FRYkp9ncEk65U6JprsRA2_Cl4mwYtLaUrCRnV-OiUDpYg1bhHi2Qt0-J5euIjH7F7LgDtwLVfSj0dSsNDV8ZtxR9221Buljg5qQl7VQ8Vb0OxfpxqAl6GiqXLH_fL0FcOjC4J1_s70EyszCmkGketTexwaqS_qvcAnE0rH6eOCyTn1S7ebCJWud_Tin5WN86sQBnGD75MznG4COiKw"
                  />
                  <div className="absolute inset-0 `bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-space-md text-inverse-on-surface">
                    <div className="inline-flex items-center gap-1.5 px-space-xs py-0.5 bg-primary/80 backdrop-blur-sm rounded-lg mb-1 text-on-primary font-caption text-caption font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                      In-Clinic &amp; Virtual Sessions
                    </div>
                    <div className="font-title-md text-title-md font-bold text-on-primary">
                      Dr. AmanUllah, BHMS
                    </div>
                    <div className="font-caption text-caption text-inverse-on-surface/80">
                      Chief Consultation Physician • Zakria Homeopathy Clinic
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block absolute -bottom-6 -left-8 w-60 rounded-xl overflow-hidden shadow-lg bg-surface-container-lowest p-space-xs">
                  <div className="relative w-full h-28 rounded-lg overflow-hidden">
                    <img
                      alt="Clinical Consultation Suite"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKFZYiWBqFHejKiFP3qv2C8RczShUaVnHWMx6SKAas9EDWSkoky-JUPCdixXSIW5BNnk2MYL_bEmwwoYF9WyhBXi2KYxHAjBjm9M9b2m2rVUYjqGoX-_BVbGBxm-INEF3MWDTO0JVpqtVKu-eB1q0zJj3zsjyw0ymGOGCYO5Wj5750c3IP2FgIa8XTHD4hpAE69TsJUsvYHkq713flzBrI52LMQIchlSUz3Tj4PRzc8d9twbQtOlK6Q"
                    />
                  </div>
                  <div className="p-space-xs flex items-center justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Consultation Suite
                      </div>
                      <div className="font-caption text-caption text-on-surface-variant">
                        Lahore Clinical Wing
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-lg">
                      medical_services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl bg-surface">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
              <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">
                Core Practice Pillars
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Foundations of Our Clinical Standard
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We align classical homeopathic repertory with disciplined
                medical interviewing to nurture authentic restoration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    clinical_notes
                  </span>
                </div>
                <span className="font-caption text-caption text-outline mb-1 font-mono tracking-wider">
                  PILLAR 01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Experienced Care
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Professional consultation focused on individual patient needs.
                  Decades of combined academic background and clinical
                  discipline guiding every diagnosis.
                </p>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                  <span>Rigorous Case Management</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    person_search
                  </span>
                </div>
                <span className="font-caption text-caption text-outline mb-1 font-mono tracking-wider">
                  PILLAR 02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Personalized Approach
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every consultation begins with understanding the patient's
                  concerns and history. We evaluate root predispositions rather
                  than prescribing superficial remedies.
                </p>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                  <span>Constitutional Profiling</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    health_and_safety
                  </span>
                </div>
                <span className="font-caption text-caption text-outline mb-1 font-mono tracking-wider">
                  PILLAR 03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Trusted Guidance
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Clear communication and professional guidance throughout the
                  consultation process. Transparent follow-ups ensure your
                  journey remains steady and safe.
                </p>
                <div className="mt-space-md pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                  <span>Ongoing Clinical Review</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl bg-surface-container-low/60">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <div className="lg:col-span-5 space-y-space-md sticky top-28">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">
                    Clinical Walkthrough
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs mb-space-sm">
                    What to Expect During Your Consultation
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Classical homeopathic assessment is a collaborative,
                    unhurried inquiry. We dedicate the necessary time to
                    comprehend the entirety of your symptomatology.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    alt="Consultation Environment"
                    className="w-full h-56 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKFZYiWBqFHejKiFP3qv2C8RczShUaVnHWMx6SKAas9EDWSkoky-JUPCdixXSIW5BNnk2MYL_bEmwwoYF9WyhBXi2KYxHAjBjm9M9b2m2rVUYjqGoX-_BVbGBxm-INEF3MWDTO0JVpqtVKu-eB1q0zJj3zsjyw0ymGOGCYO5Wj5750c3IP2FgIa8XTHD4hpAE69TsJUsvYHkq713flzBrI52LMQIchlSUz3Tj4PRzc8d9twbQtOlK6Q"
                  />
                  <div className="bg-surface-container-lowest p-space-md flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-xl">
                      verified_user
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      Calm, private consultation environment ensuring patient
                      dignity and complete medical confidentiality.
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-highest/60 space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md">
                    <span className="material-symbols-outlined text-lg">
                      policy
                    </span>
                    <span>Our Adherence to Medical Ethics</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    We pledge strict integrity: no unsubstantiated cure claims,
                    no rushed assembly-line appointments, and full transparency.
                    If a case requires immediate allopathic or surgical
                    intervention, we make responsible referrals.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-space-md">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-mono font-bold text-xs tracking-wider">
                      STEP 01
                    </span>
                    <span className="material-symbols-outlined text-secondary">
                      forum
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    In-Depth Discussion &amp; Health History Review
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We initiate our session with a detailed narrative of your
                    presenting complaints, chronicity, previous diagnostic
                    records, familial patterns, and personal health milestones.
                    Dr. AmanUllah listens without haste to map past therapies
                    and systemic responses.
                  </p>
                  <div className="pt-space-xs flex items-center gap-space-md text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        timer
                      </span>{" "}
                      45–60 Minutes Session
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        history_edu
                      </span>{" "}
                      Medical Records Review
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-mono font-bold text-xs tracking-wider">
                      STEP 02
                    </span>
                    <span className="material-symbols-outlined text-secondary">
                      psychology_alt
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Individualized Evaluation (Physical, Lifestyle &amp;
                    Emotional Factors)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Homeopathy observes the indivisible unity of body and mind.
                    We systematically analyze thermal preferences, dietary
                    habits, sleep architecture, environmental sensitivities,
                    stress responses, and cognitive stamina to isolate the
                    individualizing totality.
                  </p>
                  <div className="pt-space-xs flex items-center gap-space-md text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        tune
                      </span>{" "}
                      Repertorization Grid
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        self_improvement
                      </span>{" "}
                      Holistic Assessment
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm transition-all hover:bg-surface-bright">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-mono font-bold text-xs tracking-wider">
                      STEP 03
                    </span>
                    <span className="material-symbols-outlined text-secondary">
                      medication
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Personalized Homeopathic Recommendations &amp; Follow-Up
                    Guidance
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Following careful repertorization, Dr. AmanUllah outlines a
                    customized micro-dose regimen alongside clear dietary and
                    lifestyle recommendations. We structure structured follow-up
                    timelines to assess progression and calibrate remedies
                    prudently.
                  </p>
                  <div className="pt-space-xs flex items-center gap-space-md text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        schedule_send
                      </span>{" "}
                      Structured Review
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        biotech
                      </span>{" "}
                      Quality-Grade Remedies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl bg-surface">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-lg md:p-space-xl shadow-lg">
              <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                    Ready to Consult?
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    Begin Your Consultation Journey with Dr. AmanUllah
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                    Take the first step toward comprehensive constitutional
                    balance. Book an in-person session in Lahore or reach out
                    for preliminary consultation inquiries.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm items-stretch">
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-surface-container-lowest text-primary hover:bg-surface-container rounded-xl font-label-md text-label-md font-semibold transition-colors shadow-sm"
                    data-path="contact-clinic"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-base">
                      meeting_room
                    </span>
                    <span>Book In-Person Appointment</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-tertiary-container text-on-tertiary hover:bg-tertiary rounded-xl font-label-md text-label-md font-semibold transition-colors shadow-sm"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-base">
                      chat
                    </span>
                    <span>Quick WhatsApp Inquiry</span>
                  </a>
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
