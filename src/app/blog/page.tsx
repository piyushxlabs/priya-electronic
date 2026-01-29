import Link from "next/link";
import { PageHeader } from "@/components/sections/products/PageHeader";
import { blogPosts } from "@/data/blogPosts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata = {
    title: "Blog & Guides | Priya Electronic - Home Appliance Tips in Raiwala",
    description: "Read our latest guides and tips on choosing the best AC, refrigerator, and home appliances in Raiwala, Dehradun.",
};

export default function BlogListingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Priya Electronic Blog Guides",
                        "description": "Expert advice on home appliances for Raiwala and Dehradun residents.",
                        "url": "https://priyaelectronic.com/blog",
                        "mainEntity": blogPosts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "url": `https://priyaelectronic.com/blog/${post.slug}`,
                            "datePublished": post.date
                        }))
                    })
                }}
            />
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Guides & Expert Advice
                    </h1>
                    <p className="text-lg text-gray-200 max-w-xl mx-auto">
                        Helping you make the right choice for your home and family
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
                                    <div className="p-6 flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-text-muted">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-muted text-sm mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-accent font-semibold text-sm">
                                            Read More
                                            <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
