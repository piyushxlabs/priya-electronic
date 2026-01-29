import Link from "next/link";
import { ContactLink } from "@/components/ui/ContactLink";
import { Icon } from "@/components/ui/Icon";
import { contactInfo } from "@/data/contact";

export function CTABlock() {
    return (
        <section className="py-16 md:py-20 bg-accent transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Upgrade Your Home?
                </h2>
                <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
                    Visit our store or get in touch — we're here to help you find the perfect appliance.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <ContactLink
                        type="whatsapp"
                        value={contactInfo.whatsapp.value}
                        label="Contact Us on WhatsApp"
                        className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 shadow-lg"
                    />
                    <ContactLink
                        type="phone"
                        value={contactInfo.phone.value}
                        label="Call Now"
                        className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30 border border-white/30 shadow-lg"
                    />
                </div>

                <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                    <Icon name="Clock" className="h-4 w-4" />
                    <span>Open {contactInfo.businessHours[0].day}: {contactInfo.businessHours[0].hours}</span>
                </div>
            </div>
        </section>
    );
}
