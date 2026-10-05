import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About our company",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 p-8 text-zinc-900">
      <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
        ? Back home
      </Link>
      <h1 className="text-4xl font-semibold tracking-tight">About us</h1>
      <p className="text-lg leading-8 text-zinc-600">
        We build thoughtful digital products with clean code and a focus on user experience.
      </p>
    </main>
  );
}
