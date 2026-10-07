import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "Zikriya Homeopathy Clinic | Dr. AmanUllah, BHMS",
    template: "%s | Zikriya Homeopathy Clinic",
  },
  description:
    "Clinic information and general educational content from Zikriya Homeopathy Clinic.",
  openGraph: {
    siteName: "Zikriya Homeopathy Clinic",
    title: "Zikriya Homeopathy Clinic | Dr. AmanUllah, BHMS",
    description:
      "Clinic information and general educational content from Zikriya Homeopathy Clinic.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
