import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/productCategories";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function CategoryGrid() {
    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {productCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={`${category.name} in Raiwala - Top Brands & Models`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {category.name}
                                </h3>
                                {category.description && (
                                    <p className="text-text-muted text-sm mb-4">
                                        {category.description}
                                    </p>
                                )}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                                >
                                    Inquire Now
                                    <Icon name="ChevronRight" className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-text-muted mb-4">Have questions about our products?</p>
                    <Link href="/faq">
                        <Button variant="outline">Visit FAQ Page</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
