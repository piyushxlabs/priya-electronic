import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/contact/PageHeader";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { MapEmbed } from "@/components/sections/contact/MapEmbed";
import { InquiryForm } from "@/components/sections/contact/InquiryForm";

export const metadata: Metadata = {
    title: "Contact | Priya Electronic - Home Appliances in GhāziābĀd",
    description: "Get in touch with Priya Electronic. Visit our store, call us, or send a message on WhatsApp.",
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
