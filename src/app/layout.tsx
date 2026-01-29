import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priya Electronic | Home Appliances in Raiwala, Dehradun",
  description: "Your trusted local electronics shop in Raiwala, Dehradun. Quality refrigerators, ACs, TVs, and washing machines with expert service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://priyaelectronic.com",
              "name": "Priya Electronic",
              "image": "https://priyaelectronic.com/assets/images/logo.png",
              "description": "Trusted home appliances store in Raiwala, Dehradun. Refrigerators, ACs, TVs, washing machines.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Market",
                "addressLocality": "Raiwala",
                "addressRegion": "Dehradun",
                "postalCode": "249205",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.1234", // Approximate for Raiwala
                "longitude": "78.2345"
              },
              "url": "https://priyaelectronic.com",
              "telephone": "+916395536126",
              "priceRange": "₹₹",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://priyaelectronic.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://priyaelectronic.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://priyaelectronic.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://priyaelectronic.com/about"
                }
              ]
            })
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
