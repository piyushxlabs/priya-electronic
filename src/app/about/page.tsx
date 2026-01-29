import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/about/PageHeader";
import { Story } from "@/components/sections/about/Story";
import { TrustFactors } from "@/components/sections/about/TrustFactors";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { CTABlock } from "@/components/sections/home/CTABlock";

export const metadata: Metadata = {
    title: "About Us | Priya Electronic - Home Appliances in Raiwala, Dehradun",
    description: "Learn about Priya Electronic - your trusted local electronics shop in Raiwala since 2010.",
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
