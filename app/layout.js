import NavBar from "@/components/NavBar";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://flako-ltd.vercel.app/"),
  title: {
    default:
      "Flako Industries - Fine Products and Unmatched Quality | Leader in Production",
    template:
      "%s | Flako Industries - Fine Products and Unmatched Quality | Leader in Production",
  },
  description:
    "At Flako Industries, we boast decades of experience and take pride in producing the finest products. Our commitment to quality shines through our diverse collection. Embrace excellence with Flako, the unparalleled leader in the production industry.",
  keywords: [
    "Flako Industries",
    "Quality products",
    "Production leader",
    "Fine craftsmanship",
    "Unmatched excellence",
    "Experienced manufacturer",
    "Diverse product collection",
    "Superior production",
    "Skilled employees",
    "Dedicated teamwork",
    "Industry reputation",
    "Top-notch service",
    "Product manufacturing",
    "Expert production",
    "Reliable manufacturing",
    "Commitment to quality",
    "Production expertise",
    "Leading production company",
    "High-quality products",
    "Innovative production",
  ],
  authors: [{ name: "collinz Web developer", url: "https://www.desishub.com" }],
  creator: "collinz",
  publisher: "collinz",
  openGraph: {
    title:
      "Flako Industries - Fine Products and Unmatched Quality | Leader in Production",
    description:
      "At Flako Industries, we boast decades of experience and take pride in producing the finest products. Our commitment to quality shines through our diverse collection. Embrace excellence with Flako, the unparalleled leader in the production industry.",
    url: "https://www.flakoindustries.com",
    siteName: "Flako Industries",
    images: [
      {
        url: "https://www.flakoindustries.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction.",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
    title:
      "Flako Industries - Fine Products and Unmatched Quality | Leader in Production",
    description:
      "At Flako Industries, we boast decades of experience and take pride in producing the finest products. Our commitment to quality shines through our diverse collection. Embrace excellence with Flako, the unparalleled leader in the production industry.",
  },
  alternates: {
    canonical: "https://flako-ltd.vercel.app/",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
