import { Hero } from "@/components/sections/home/Hero";
import { ProductPreview } from "@/components/sections/home/ProductPreview";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { CTABlock } from "@/components/sections/home/CTABlock";

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
