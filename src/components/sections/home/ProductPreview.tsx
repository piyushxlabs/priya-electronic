import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/productCategories";
import { Icon } from "@/components/ui/Icon";

export function ProductPreview() {
    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Explore Our Products
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Browse our range of quality home appliances from top brands
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {productCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Product Image */}
                            <div className="aspect-square relative bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={`${category.name} for Sale in Raiwala, Dehradun`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-semibold text-primary text-center group-hover:text-accent transition-colors">
                                    {category.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
