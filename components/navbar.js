"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WhatsAppButton from "./whatsapp-button";
import Icon from "./icon";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function renderLinks() {
    return navigation.map(({ href, label }) => {
      const isActive = pathname === href;

      return (
        <Link
          aria-current={isActive ? "page" : undefined}
          className={`font-label-md text-label-md transition-colors hover:text-primary ${
            isActive ? "font-semibold text-primary" : "text-on-surface-variant"
          }`}
          href={href}
          key={href}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      );
    });
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-gutter">
        <Link
          aria-label="Zikriya Homeopathy Clinic home"
          className="flex flex-col"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-title-md text-title-md leading-tight text-on-surface">
            Zikriya Homeopathy Clinic
          </span>
          <span className="font-caption text-caption uppercase tracking-wide text-secondary">
            Dr. AmanUllah, BHMS
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-space-lg lg:flex"
        >
          {renderLinks()}
          <WhatsAppButton className="rounded-lg bg-secondary px-space-md py-space-sm font-label-md text-label-md text-on-secondary transition-colors hover:bg-tertiary">
            WhatsApp
          </WhatsAppButton>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-on-surface hover:bg-surface-container `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon className="size-6" name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-space-md border-t border-outline-variant/30 bg-surface-container-lowest px-gutter py-space-md lg:hidden"
          id="mobile-navigation"
        >
          {renderLinks()}
          <WhatsAppButton className="inline-flex min-h-11 items-center justify-center rounded-lg bg-secondary px-space-md py-space-sm font-label-md text-label-md text-on-secondary">
            WhatsApp
          </WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
