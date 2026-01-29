import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Priya Electronic Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen">
            {/* Header */}
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm transition-colors">
                        <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-accent text-white text-xs font-semibold rounded uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-white/60 text-sm">{post.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-primary">
                            {post.content.split('\n').map((line, i) => {
                                if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-bold text-primary mt-12 mb-6">{line.replace('# ', '')}</h1>;
                                if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-primary mt-10 mb-4">{line.replace('## ', '')}</h2>;
                                if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-primary mt-8 mb-3">{line.replace('### ', '')}</h3>;
                                if (line.startsWith('- ')) return <li key={i} className="ml-6 list-disc mb-2">{line.replace('- ', '')}</li>;
                                if (line.startsWith('---')) return <hr key={i} className="my-8 border-gray-200" />;
                                if (line.trim() === '') return <div key={i} className="h-4" />;

                                // Handling bold text **text** in a simple way
                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <p key={i} className="text-lg leading-relaxed mb-4">
                                        {parts.map((part, j) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={j}>{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">Need expert advice for your specific needs?</h3>
                            <p className="text-text-muted mb-8">Visit our store in Raiwala or message us on WhatsApp for a personalized recommendation.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact">
                                    <Button variant="primary" size="lg">Visit Store</Button>
                                </Link>
                                <Link href="https://wa.me/916395536126">
                                    <Button variant="outline" size="lg">WhatsApp Us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
