import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/data/services";

export function ServiceCards() {
    const getIcon = (iconName: string): IconName => {
        const iconMap: Record<string, IconName> = {
            Wrench: "Wrench",
            MessageSquare: "MessageSquare",
            ShieldCheck: "ShieldCheck",
            Settings: "Settings",
        };
        return iconMap[iconName] || "CheckCircle";
    };

    return (
        <section className="py-16 md:py-24 bg-background dark:bg-dark-bg-primary transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 rounded-xl bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md dark:hover:bg-dark-bg-elevated dark:hover:shadow-dark transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-dark-bg-elevated flex items-center justify-center mb-4">
                                <Icon name={getIcon(service.iconName)} className="h-6 w-6 text-accent dark:text-dark-accent" />
                            </div>
                            <h3 className="font-semibold text-primary dark:text-dark-text-primary mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-text-muted dark:text-dark-text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
