import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Leona’s Brave Haven | Dog Rescue in Sarasota, Florida",
    template: "%s | Leona’s Brave Haven",
  },
  description: site.description,
  keywords: [
    "dog rescue in Sarasota, Florida",
    "Florida dog rescue",
    "adopt a rescued dog in Florida",
    "foster a rescue dog",
    "emergency dog rescue",
    "help abandoned and injured dogs",
  ],
  openGraph: {
    title: "Leona’s Brave Haven | Dog Rescue in Sarasota, Florida",
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/leonas-brave-haven-logo.png",
        alt: site.name,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  founder: site.founder,
  email: site.email,
  slogan: site.motto,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.street,
    addressLocality: site.location.city,
    addressRegion: site.location.state,
    postalCode: site.location.zip,
    addressCountry: "US",
  },
  areaServed: "Florida",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
