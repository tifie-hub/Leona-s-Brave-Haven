import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site";
import "./globals.css";

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
    <html lang="en" className="h-full scroll-smooth">
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
