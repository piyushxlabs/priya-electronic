import { Icon } from "@/components/ui/Icon";

export function TeamSection() {
    return (
        <section className="py-16 md:py-20 bg-background dark:bg-dark-bg-primary transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* Team Photo Placeholder */}
                    <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-dark-bg-elevated dark:to-dark-bg-secondary flex items-center justify-center mb-8">
                        <div className="text-center">
                            <Icon name="Users" className="h-12 w-12 text-primary/40 dark:text-dark-text-tertiary mx-auto mb-2" />
                            <p className="text-primary/60 dark:text-dark-text-tertiary font-medium text-sm">Team Photo</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-4">
                        The Priya Electronic Team
                    </h3>
                    <p className="text-text-muted dark:text-dark-text-secondary leading-relaxed">
                        Our team of experienced professionals is dedicated to helping you find the perfect
                        appliances for your home. We believe in building lasting relationships with our
                        customers — not just making sales.
                    </p>
                </div>
            </div>
        </section>
    );
}
