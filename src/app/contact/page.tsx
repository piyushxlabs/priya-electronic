import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/contact/PageHeader";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { MapEmbed } from "@/components/sections/contact/MapEmbed";
import { InquiryForm } from "@/components/sections/contact/InquiryForm";

export const metadata: Metadata = {
    title: "Contact Us - Priya Electronic Raiwala | Visit Our Store or Call",
    description: "Visit Priya Electronic in Raiwala, Dehradun. Phone: +91-6395536126, Address: Main Market, Raiwala. Open Mon-Sat 10 AM - 8 PM. Get directions and store hours.",
    alternates: {
        canonical: "https://priyaelectronic.com/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <PageHeader />
            <ContactMethods />
            <MapEmbed />
            <InquiryForm />
        </>
    );
}
