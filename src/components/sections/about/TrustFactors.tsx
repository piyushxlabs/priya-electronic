import { Icon, type IconName } from "@/components/ui/Icon";

const trustFactors: { iconName: IconName; title: string; description: string }[] = [
    {
        iconName: "Award",
        title: "Years of Experience",
        description: "Over 14 years serving GhāziābĀd families with quality appliances.",
    },
    {
        iconName: "Shield",
        title: "Genuine Products",
        description: "We only stock authorized products — no compromises on quality.",
    },
    {
        iconName: "MessageSquare",
        title: "Expert Guidance",
        description: "Our team helps you choose what you need, not what costs most.",
    },
    {
        iconName: "ShieldCheck",
        title: "After-Sales Support",
        description: "Warranty claims, service coordination — we're here for you.",
    },
    {
        iconName: "CheckCircle",
        title: "Transparent Pricing",
        description: "No hidden costs, no surprise charges. What you see is what you pay.",
    },
];

export function TrustFactors() {
    return (
        <section className="py-16 md:py-24 bg-background-alt dark:bg-dark-bg-secondary transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-dark-text-primary mb-4">
                        Why Customers Trust Us
                    </h2>
                    <p className="text-text-muted dark:text-dark-text-secondary max-w-xl mx-auto">
                        What makes Priya Electronic different from the rest
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trustFactors.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white dark:bg-dark-bg-elevated border border-gray-200 dark:border-dark-border flex items-start gap-4 transition-colors"
                        >
                            <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 dark:bg-dark-bg-secondary flex items-center justify-center">
                                <Icon name={item.iconName} className="h-6 w-6 text-accent dark:text-dark-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary dark:text-dark-text-primary mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-text-muted dark:text-dark-text-secondary">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
