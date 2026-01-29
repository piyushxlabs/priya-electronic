import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/services/PageHeader";
import { ServiceCards } from "@/components/sections/services/ServiceCards";
import { CTABlock } from "@/components/sections/home/CTABlock";

export const metadata: Metadata = {
    title: "Services | Priya Electronic - Home Appliances in GhāziābĀd",
    description: "Explore our services including installation, guidance, and after-sales support for home appliances.",
};

export default function ServicesPage() {
    return (
        <>
            <PageHeader />
            <ServiceCards />
            <CTABlock />
        </>
    );
}
