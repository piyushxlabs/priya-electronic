import { Icon, type IconName } from "@/components/ui/Icon";

const trustIndicators: { iconName: IconName; title: string; description: string }[] = [
    {
        iconName: "Award",
        title: "Serving Since 2010",
        description: "Over 10 years of trusted service",
    },
    {
        iconName: "Shield",
        title: "Genuine Products",
        description: "Authorized dealer, no compromises",
    },
    {
        iconName: "Wrench",
        title: "Free Installation",
        description: "Expert setup support included",
    },
    {
        iconName: "Star",
        title: "Rated 4.5/5",
        description: "By our happy customers",
    },
];

export function TrustStrip() {
    return (
        <section className="py-8 md:py-12 bg-background-alt dark:bg-dark-bg-secondary border-y border-gray-200 dark:border-dark-border transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {trustIndicators.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-dark-bg-elevated flex items-center justify-center mb-3">
                                <Icon name={item.iconName} className="h-6 w-6 text-accent dark:text-dark-accent" />
                            </div>
                            <h3 className="font-semibold text-primary dark:text-dark-text-primary text-sm md:text-base">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-text-muted dark:text-dark-text-secondary mt-1">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
