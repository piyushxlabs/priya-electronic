import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/products/PageHeader";
import { CategoryGrid } from "@/components/sections/products/CategoryGrid";
import { InquiryCTA } from "@/components/sections/products/InquiryCTA";
import { BrandLogos } from "@/components/sections/products/BrandLogos";

export const metadata: Metadata = {
    title: "Our Products - Refrigerators, ACs, TVs | Priya Electronic Raiwala",
    description: "Explore our range: Refrigerators (single door, double door, side-by-side), air conditioners, LED TVs, washing machines. Authorized dealer in Raiwala, Dehradun.",
    keywords: "buy refrigerator raiwala, AC shop dehradun, TV store raiwala, washing machine dealer uttarakhand",
    alternates: {
        canonical: "https://priyaelectronic.com/products",
    },
};

export default function ProductsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Home Appliances Collection - Priya Electronic",
                        "description": "Premium refrigerators, ACs, TVs, and washing machines in Raiwala, Dehradun.",
                        "url": "https://priyaelectronic.com/products"
                    })
                }}
            />
            <PageHeader />
            <CategoryGrid />
            <InquiryCTA />
            <BrandLogos />
        </>
    );
}
