export function PageHeader() {
    return (
        <section className="py-12 md:py-16 bg-primary dark:bg-dark-bg-elevated transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-dark-text-primary mb-4">
                    Our Services
                </h1>
                <p className="text-lg text-gray-200 dark:text-dark-text-secondary max-w-xl mx-auto">
                    We don't just sell appliances — we support you every step of the way
                </p>
            </div>
        </section>
    );
}
