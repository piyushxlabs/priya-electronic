import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contactInfo } from "@/data/contact";

export function MapEmbed() {
    return (
        <section className="py-8 bg-background-alt transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">Find Us</h3>
                    <Link
                        href={contactInfo.address.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:underline text-sm"
                    >
                        <Icon name="MapPin" className="h-4 w-4 mr-1" />
                        Get Directions
                    </Link>
                </div>

                {/* Map Placeholder - Replace with actual Google Maps embed */}
                <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111995.24376198982!2d77.35498245!3d28.6691565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c04cf1c1c5%3A0xf8d34c0f7c0f7c0f!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Priya Electronic Location"
                    />
                </div>
            </div>
        </section>
    );
}
