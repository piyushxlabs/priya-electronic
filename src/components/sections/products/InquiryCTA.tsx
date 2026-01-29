import { ContactLink } from "@/components/ui/ContactLink";
import { contactInfo } from "@/data/contact";

export function InquiryCTA() {
    return (
        <section className="py-12 md:py-16 bg-background-alt transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Interested in Any Product?
                </h2>
                <p className="text-text-muted max-w-xl mx-auto mb-8">
                    Our team will help you choose the right appliance for your needs
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ContactLink
                        type="whatsapp"
                        value={contactInfo.whatsapp.value}
                        label="Contact Us on WhatsApp"
                    />
                    <ContactLink
                        type="phone"
                        value={contactInfo.phone.value}
                        label="Call for Product Details"
                    />
                </div>
            </div>
        </section>
    );
}
