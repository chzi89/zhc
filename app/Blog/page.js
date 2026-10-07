import BlogContent from "./blog-content";

export const metadata = {
  title: "Health & Wellness Blog",
  description:
    "General educational information from Zikriya Homeopathy Clinic. This content does not replace professional medical advice.",
  openGraph: {
    title: "Health & Wellness Blog | Zikriya Homeopathy Clinic",
    description:
      "General educational information from Zikriya Homeopathy Clinic.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
