# AGENTS.md

## Project Overview

Build and maintain a professional, modern, responsive website for:

**Zikriya Homeopathy Clinic**
**Dr. AmanUllah, BHMS**

This is a professional clinic website focused on presenting the doctor, clinic information, educational health content, and contact information.

The website must feel trustworthy, clean, calm, and professional.

---

## Primary Goals

1. Present Zikriya Homeopathy Clinic professionally.
2. Introduce Dr. AmanUllah, BHMS.
3. Provide clear clinic information.
4. Publish educational blog content.
5. Make contacting the clinic easy.
6. Provide an excellent mobile experience.
7. Keep the UI simple and medically professional.

---

# Website Structure

The main pages are:

```text
/
├── Home
├── About
├── Blog
└── Contact
```

Blog articles should use a dynamic structure where appropriate:

```text
/blog/[slug]
```

---

# Design System

## Color Direction

Primary:

- White
- Deep navy
- Medical green / teal

Secondary:

- Light green
- Soft gray
- Off-white

Use accent colors carefully.

The website should feel:

- Medical
- Clean
- Calm
- Professional
- Trustworthy
- Modern

Avoid:

- Neon colors
- Excessive gradients
- Heavy glassmorphism
- Gaming-style UI
- Excessive animations
- Cluttered layouts

---

# Typography

Use a clean, highly readable font.

Recommended:

- Inter
- Manrope
- Plus Jakarta Sans

Headings should be strong but not oversized.

Body text must have comfortable line height and readable spacing.

---

# Components

Create reusable components where appropriate:

```text
components/
├── Navbar
├── Footer
├── Hero
├── DoctorCard
├── BlogCard
├── ContactCard
├── WhatsAppButton
├── SectionHeading
└── MedicalDisclaimer
```

Do not duplicate the same UI markup unnecessarily.

---

# Navbar

The navbar should contain:

```text
Zikriya Homeopathy Clinic

Home
About
Blog
Contact
```

Include a prominent but tasteful:

**WhatsApp**

button.

Navbar requirements:

- Sticky on desktop/mobile
- Responsive
- Clean mobile menu
- Active page indication
- Smooth transitions
- No excessive animation

---

# Home Page

The homepage should immediately communicate:

**Zikriya Homeopathy Clinic**

**Dr. AmanUllah, BHMS**

Use a professional doctor/profile image placeholder.

Primary actions:

- Contact Clinic
- WhatsApp
- Read Blog

Keep the hero concise.

Below the hero, show a small number of informational cards explaining the clinic's professional approach.

Do not create fake statistics or claims.

---

# About Page

Include:

## About the Clinic

A concise professional introduction to Zikriya Homeopathy Clinic.

## Dr. AmanUllah, BHMS

Include:

- Name
- Qualification
- Professional introduction
- Areas of interest
- Consultation approach

Do not invent additional qualifications, awards, certifications, experience years, hospital affiliations, or specialties.

Only display information explicitly provided by the project owner.

---

# Blog

Create a professional health and wellness blog.

Blog cards should include:

- Featured image
- Category
- Title
- Short excerpt
- Date
- Read Article button

Blog article pages should contain:

```text
Title
Featured Image
Author
Date
Article Content
Related Articles
Medical Disclaimer
```

Author:

**Dr. AmanUllah, BHMS**

Do not fabricate medical research, statistics, references, or credentials.

Medical information must be written carefully and should not promise guaranteed results.

Avoid phrases such as:

- Guaranteed cure
- 100% effective
- Permanent cure
- No side effects
- Works for everyone

---

# Contact Page

Include:

## Contact Zikriya Homeopathy Clinic

Editable contact information:

```text
Phone:
WhatsApp:
Email:
Address:
Clinic Hours:
```

Do not invent contact details.

Contact form:

```text
Name
Phone / Email
Message
Submit
```

Add a Google Maps placeholder if the clinic location is provided.

---

# WhatsApp

WhatsApp should be easily accessible throughout the website.

Use a reusable:

```text
WhatsAppButton
```

component.

The WhatsApp number must remain configurable through a single variable/configuration value.

Never hard-code the number in multiple components.

---

# Footer

Footer should contain:

**Zikriya Homeopathy Clinic**

**Dr. AmanUllah, BHMS**

Navigation:

```text
Home
About
Blog
Contact
```

Contact links:

```text
WhatsApp
Phone
Email
```

Add:

```text
© 2026 Zikriya Homeopathy Clinic. All rights reserved.
```

Include a small medical disclaimer.

---

# Medical Content Rules

This is a healthcare-related website.

Never:

- Diagnose a visitor
- Recommend prescription medication
- Promise treatment results
- Claim guaranteed cures
- Invent medical credentials
- Invent clinical statistics
- Invent patient testimonials
- Invent reviews
- Invent awards
- Invent certifications

Educational content should encourage readers to consult an appropriately qualified healthcare professional when necessary.

For emergencies, advise users to contact local emergency medical services rather than relying on the website.

---

# SEO

Every page must have:

- Unique title
- Meta description
- Appropriate heading hierarchy
- Descriptive image alt text
- Open Graph metadata
- Canonical URL where appropriate

Suggested site identity:

```text
Zikriya Homeopathy Clinic | Dr. AmanUllah, BHMS
```

Use natural keywords without keyword stuffing.

---

# Accessibility

Follow good accessibility practices:

- Semantic HTML
- Proper heading hierarchy
- Accessible buttons
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Descriptive alt text
- Labels for form inputs
- Mobile-friendly touch targets

---

# Performance

Prioritize:

- Optimized images
- Lazy loading where appropriate
- Minimal JavaScript
- Efficient components
- Fast page loading
- Responsive images
- No unnecessary libraries

Do not add libraries simply for small animations.

---

# Animations

Use subtle animations only:

- Fade-in
- Slide-up
- Button hover
- Card hover
- Smooth page transitions

Animations should support the content rather than distract from it.

Respect:

```text
prefers-reduced-motion
```

for users who disable animations.

---

# Responsive Design

The website must work properly on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large screens

Do not simply shrink the desktop layout.

Mobile navigation, cards, typography, forms, and spacing should be intentionally designed for small screens.

---

# Code Quality

Follow these rules:

- Keep components reusable.
- Use meaningful component names.
- Avoid duplicated code.
- Keep files organized.
- Use clear variable names.
- Remove unused imports.
- Remove unused components.
- Avoid unnecessary dependencies.
- Keep the code easy to maintain.

Before completing a feature, check for:

```text
TypeScript/JavaScript errors
Console errors
Broken links
Broken images
Responsive issues
Accessibility issues
```

---

# Content Policy

Do not create fake information just to fill the website.

Use placeholders when information is missing:

```text
[Phone Number]
[WhatsApp Number]
[Clinic Address]
[Clinic Hours]
```

Do not silently invent real-world details.

---

# Final Quality Standard

Before considering the project complete, verify:

- [ ] Home page works
- [ ] About page works
- [ ] Blog works
- [ ] Blog article pages work
- [ ] Contact page works
- [ ] Navigation works
- [ ] WhatsApp link works
- [ ] Email link works
- [ ] Mobile layout works
- [ ] Desktop layout works
- [ ] Images have alt text
- [ ] SEO metadata exists
- [ ] No console errors
- [ ] No fake medical claims
- [ ] No fake credentials
- [ ] No unnecessary sections
- [ ] Design remains professional and consistent

## Design Principle

Always prioritize:

**Trust → Clarity → Simplicity → Accessibility → Professionalism**

The final website should feel like a **real professional clinic website**, not an AI-generated template.
