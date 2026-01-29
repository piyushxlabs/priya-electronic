import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ContactLink } from "@/components/ui/ContactLink";
import { contactInfo } from "@/data/contact";

const footerLinks = {
    navigation: [
        { href: "/", label: "Home" },
        { href: "/products", label: "Our Appliances" },
        { href: "/blog", label: "Expert Blog Guides" },
        { href: "/about", label: "Our Story" },
        { href: "/faq", label: "FAQs" },
        { href: "/contact", label: "Contact Us" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground transition-colors duration-200 border-t border-transparent">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Priya Electronic</h3>
                        <p className="text-sm text-gray-300">
                            Your trusted destination for home appliances and electronics in Raiwala since 2010.
                            Check our <Link href="/blog" className="text-accent hover:underline">Blog</Link> for expert guides.
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
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
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
                                <span className="text-sm text-gray-300">
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
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Priya Electronic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
