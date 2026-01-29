import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { ProductPreview } from "@/components/sections/home/ProductPreview";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { CTABlock } from "@/components/sections/home/CTABlock";

export const metadata: Metadata = {
  title: "Priya Electronic - Home Appliances in Raiwala, Dehradun | Refrigerators, ACs, TVs",
  description: "Buy genuine home appliances in Raiwala, Dehradun. Refrigerators, air conditioners, televisions, washing machines. Trusted local service since 2010. Expert guidance, competitive prices.",
  keywords: "electronics shop raiwala, home appliances dehradun, refrigerator store raiwala, AC dealer uttarakhand, TV showroom, washing machine shop",
  openGraph: {
    title: "Priya Electronic - Trusted Home Appliances in Raiwala",
    description: "Quality refrigerators, ACs, TVs, washing machines in Raiwala, Dehradun. Local service, genuine products.",
    url: "https://priyaelectronic.com",
    siteName: "Priya Electronic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Electronic - Home Appliances Raiwala",
    description: "Trusted electronics shop in Raiwala, Dehradun",
  },
  alternates: {
    canonical: "https://priyaelectronic.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductPreview />
      <WhyChoose />
      <CTABlock />
    </>
  );
}
