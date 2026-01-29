import { Icon } from "@/components/ui/Icon";

export function Story() {
    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-text-muted leading-relaxed">
                            <p>
                                Founded in 2010, Priya Electronic started as a small family-run shop with a simple mission:
                                to help Raiwala families find reliable home appliances without the confusion and pressure
                                of big showrooms.
                            </p>
                            <p>
                                Over the years, we've grown from selling televisions to offering a full range of home
                                appliances — refrigerators, air conditioners, washing machines, and more. But our
                                core commitment has never changed: honest advice, fair prices, and service you can count on.
                            </p>
                            <p>
                                Today, we serve thousands of families across Raiwala and surrounding areas. Many of
                                our customers come back year after year, and refer their friends and family. That trust
                                is something we work hard to earn every day.
                            </p>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="order-1 lg:order-2">
                        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                            <div className="text-center">
                                <Icon name="Users" className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                                <p className="text-primary/60 font-medium">Shop Photo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
