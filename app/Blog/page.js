import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Latest posts and updates",
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 p-8 text-zinc-900">
      <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
        ? Back home
      </Link>
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <ul className="list-disc space-y-2 pl-6 text-lg text-zinc-600">
        <li>Introducing the new design system</li>
        <li>Shipping faster with better workflows</li>
        <li>Designing for clarity and performance</li>
      </ul>
    </main>
  );
}
