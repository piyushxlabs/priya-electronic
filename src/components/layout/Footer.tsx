import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ContactLink } from "@/components/ui/ContactLink";
import { contactInfo } from "@/data/contact";

const footerLinks = {
    navigation: [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-primary dark:bg-dark-bg-elevated text-primary-foreground dark:text-dark-text-secondary transition-colors duration-200 border-t border-transparent dark:border-dark-border">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white dark:text-dark-text-primary">Priya Electronic</h3>
                        <p className="text-sm text-gray-300 dark:text-dark-text-secondary">
                            Your trusted local electronics shop in GhāziābĀd. Quality home appliances with expert service.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 dark:text-dark-text-secondary hover:text-white dark:hover:text-dark-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Icon name="Phone" className="h-5 w-5 text-accent mt-0.5" />
                                <span className="text-sm text-gray-300">{contactInfo.phone.display}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="Mail" className="h-5 w-5 text-accent mt-0.5" />
                                <span className="text-sm text-gray-300">{contactInfo.email}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="MapPin" className="h-5 w-5 text-accent mt-0.5" />
                                <span className="text-sm text-gray-300 dark:text-dark-text-secondary">
                                    {contactInfo.address.line1}<br />{contactInfo.address.line2}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Business Hours</h4>
                        <ul className="space-y-2">
                            {contactInfo.businessHours.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Icon name="Clock" className="h-5 w-5 text-accent mt-0.5" />
                                    <span className="text-sm text-gray-300">
                                        {item.day}: {item.hours}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 dark:border-dark-border text-center">
                    <p className="text-sm text-gray-400 dark:text-dark-text-tertiary">
                        © {new Date().getFullYear()} Priya Electronic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
