export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)] pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          <div className="space-y-space-sm">
            <div className="font-title-md text-title-md text-on-surface">
              Zakria Homeopathy Clinic
            </div>
            <div className="font-label-sm text-label-sm text-secondary font-medium">
              Dr. AmanUllah, BHMS
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Holistic, evidence-grounded classical homeopathic practice
              committed to gentle restoration and sustained vitality.
            </p>
          </div>
          <div className="space-y-space-sm">
            <div className="font-title-md text-title-md text-on-surface">
              Quick Navigation
            </div>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  data-path="home"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  data-path="about-dr-amanullah"
                  href="#"
                >
                  About Dr. AmanUllah
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  data-path="health-wellness-blog"
                  href="#"
                >
                  Health &amp; Wellness Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  data-path="contact-clinic"
                  href="#"
                >
                  Contact Clinic
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-space-sm">
            <div className="font-title-md text-title-md text-on-surface">
              Direct Contact
            </div>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-sm text-secondary">
                  chat
                </span>
                <span>WhatsApp: +92 300 0000000</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-sm text-secondary">
                  call
                </span>
                <span>Phone: +92 42 30000000</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-sm text-secondary">
                  mail
                </span>
                <span>Email: clinic@zakriahomeopathy.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-space-sm">
            <div className="font-title-md text-title-md text-on-surface">
              Clinic Location &amp; Hours
            </div>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-sm text-secondary mt-0.5">
                  location_on
                </span>
                <span>
                  Main Clinical Wing, Healthcare Boulevard, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-sm text-secondary mt-0.5">
                  schedule
                </span>
                <span>
                  Mon – Sat: 10:00 AM – 8:00 PM
                  <br />
                  Sunday: By Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-md bg-surface-container-high/40 rounded-xl p-space-md mb-space-lg text-center">
          <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface">
              Medical Disclaimer:
            </span>{" "}
            Information on this website is for general educational purposes and
            does not replace professional medical advice.
          </p>
        </div>
        <div className="text-center font-caption text-caption text-on-surface-variant">
          © 2026 Zakria Homeopathy Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
