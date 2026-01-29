import { Icon, type IconName } from "@/components/ui/Icon";

const differentiators: { iconName: IconName; title: string; description: string }[] = [
    {
        iconName: "Users",
        title: "Local Service, Personal Attention",
        description: "We know our customers by name and provide personalized recommendations based on your needs.",
    },
    {
        iconName: "Award",
        title: "Competitive Pricing",
        description: "Top brands at prices that match or beat online retailers, without hidden costs.",
    },
    {
        iconName: "MessageSquare",
        title: "Expert Guidance",
        description: "Our team helps you choose the right appliance, not just the most expensive one.",
    },
    {
        iconName: "ShieldCheck",
        title: "After-Sales Support",
        description: "We're here for you even after the purchase — warranty claims, repairs, and more.",
    },
];

export function WhyChoose() {
    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Why Choose Priya Electronic?
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        We combine local presence with modern professionalism
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {differentiators.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Icon name={item.iconName} className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
