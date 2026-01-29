import { Icon } from "@/components/ui/Icon";
import { ContactLink } from "@/components/ui/ContactLink";
import { contactInfo } from "@/data/contact";

export function ContactMethods() {
    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-8">
                            Get in Touch
                        </h2>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Icon name="Phone" className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                                    <p className="text-text-muted">{contactInfo.phone.display}</p>
                                    <ContactLink
                                        type="phone"
                                        value={contactInfo.phone.value}
                                        label="Call Now"
                                        className="mt-2 text-sm"
                                    />
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-green-100 flex items-center justify-center">
                                    <Icon name="MessageSquare" className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                                    <p className="text-text-muted">{contactInfo.whatsapp.display}</p>
                                    <ContactLink
                                        type="whatsapp"
                                        value={contactInfo.whatsapp.value}
                                        label="Message Us"
                                        className="mt-2 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                                    <p className="text-text-muted">{contactInfo.email}</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Icon name="MapPin" className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                                    <p className="text-text-muted">
                                        {contactInfo.address.line1}<br />
                                        {contactInfo.address.line2}
                                    </p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                                    {contactInfo.businessHours.map((item, index) => (
                                        <p key={index} className="text-text-muted">
                                            {item.day}: {item.hours}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact CTA */}
                    <div className="lg:pl-8">
                        <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl shadow-black/20">
                            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                            <p className="text-gray-200 mb-6">
                                Have a question about a product? Need help choosing the right appliance?
                                Reach out — we're happy to help!
                            </p>
                            <div className="space-y-3">
                                <ContactLink
                                    type="whatsapp"
                                    value={contactInfo.whatsapp.value}
                                    label="WhatsApp Us"
                                    className="w-full shadow-lg"
                                />
                                <ContactLink
                                    type="phone"
                                    value={contactInfo.phone.value}
                                    label="Call Now"
                                    className="w-full bg-white/20 hover:bg-white/30 shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
