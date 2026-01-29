const brands = [
    { name: "LG", id: "lg" },
    { name: "Samsung", id: "samsung" },
    { name: "Whirlpool", id: "whirlpool" },
    { name: "Godrej", id: "godrej" },
    { name: "Haier", id: "haier" },
];

export function BrandLogos() {
    return (
        <section className="py-12 bg-white dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-dark-border transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted text-center mb-8">
                    Authorized Dealer for Top Brands
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="w-20 h-12 bg-gray-100 dark:bg-dark-bg-elevated rounded flex items-center justify-center text-gray-400 dark:text-dark-text-tertiary font-bold text-sm grayscale hover:grayscale-0 transition-all border border-transparent dark:border-dark-border"
                        >
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
