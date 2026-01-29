import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/products/PageHeader";
import { CategoryGrid } from "@/components/sections/products/CategoryGrid";
import { InquiryCTA } from "@/components/sections/products/InquiryCTA";
import { BrandLogos } from "@/components/sections/products/BrandLogos";

export const metadata: Metadata = {
    title: "Products | Priya Electronic - Home Appliances in Raiwala, Dehradun",
    description: "Browse our range of refrigerators, air conditioners, televisions, and washing machines from top brands.",
};

export default function ProductsPage() {
    return (
        <>
            <PageHeader />
            <CategoryGrid />
            <InquiryCTA />
            <BrandLogos />
        </>
    );
}
