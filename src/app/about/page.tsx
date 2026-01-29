import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/about/PageHeader";
import { Story } from "@/components/sections/about/Story";
import { TrustFactors } from "@/components/sections/about/TrustFactors";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { CTABlock } from "@/components/sections/home/CTABlock";

export const metadata: Metadata = {
    title: "About Us - Priya Electronic | Trusted Electronics Shop Since 2010",
    description: "Learn about Priya Electronic, Raiwala's trusted home appliance store. Serving Dehradun families with genuine products, expert guidance, and after-sales support.",
    alternates: {
        canonical: "https://priyaelectronic.com/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <PageHeader />
            <Story />
            <TrustFactors />
            <TeamSection />
            <CTABlock />
        </>
    );
}
