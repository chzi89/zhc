import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact information",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 p-8 text-zinc-900">
      <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
        ? Back home
      </Link>
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="text-lg leading-8 text-zinc-600">
        Email us at hello@example.com for questions, support, or collaboration.
      </p>
    </main>
  );
}
