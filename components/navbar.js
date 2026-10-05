export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <img
            alt="Zakria Homeopathy Clinic Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdj-wVNGBRw-LVxPUZ6BR7tBFzyFYZMCBwZ_B4gYRz_TT-pcwi9RLlOym06M4pfIC2bFjK1WtTn_dTQznR0b_35yRZtvcZ1QFIJtJCHio_vCjMypb_caySK31_NAnaTd0am8bWCsWzPvLXYl54r3XN0dHAfg18CPi-PYX-3j9dWKjPlxywNB-V4Uk4H81dtWRJY3kUpTa1Rz3E_06g2imWEerzFyAWrUIjwB4cFUcqFxBNOuRlur3Bzw"
          />
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-on-surface leading-tight">
              Zakria Homeopathy Clinic
            </span>
            <span className="font-caption text-caption text-secondary tracking-wide uppercase">
              Dr. AmanUllah, BHMS
            </span>
          </div>
        </div>
        <nav
          className="hidden lg:flex items-center gap-space-lg"
          data-active-classes="text-primary font-medium"
        >
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="home"
            href="#"
          >
            Home
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="about-dr-amanullah"
            href="#"
          >
            About Dr. AmanUllah
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="health-wellness-blog"
            href="#"
          >
            Health &amp; Wellness Blog
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="contact-clinic"
            href="#"
          >
            Contact Clinic
          </a>
        </nav>
      </div>
    </header>
  );
}
