import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/productCategories";
import { Icon } from "@/components/ui/Icon";

export function CategoryGrid() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-dark-bg-primary transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {productCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors">
                                    {category.name}
                                </h3>
                                {category.description && (
                                    <p className="text-text-muted dark:text-dark-text-secondary text-sm mb-4">
                                        {category.description}
                                    </p>
                                )}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-sm font-medium text-accent dark:text-dark-accent hover:underline"
                                >
                                    Inquire Now
                                    <Icon name="ChevronRight" className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
