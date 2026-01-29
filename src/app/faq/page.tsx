import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";

export const metadata = {
    title: "Frequently Asked Questions | Priya Electronic Raiwala",
    description: "Get answers to common questions about installation, warranty, delivery, and services at Priya Electronic in Raiwala, Dehradun.",
};

const faqs = [
    {
        q: "Do you provide installation service?",
        a: "Yes, we provide professional installation for all major appliances including ACs, Washing Machines, and Wall-Mounted TVs. Our expert technicians ensure everything is set up correctly."
    },
    {
        q: "What brands do you sell?",
        a: "We are authorized dealers for top brands including Samsung, LG, Whirlpool, Haier, Voltas, and Sony."
    },
    {
        q: "Do you offer EMI options?",
        a: "Yes, we have easy EMI options available through various banks and finance partners like Bajaj Finserv to help you buy your favorite appliances with ease."
    },
    {
        q: "What is your warranty policy?",
        a: "All products sold at Priya Electronic come with the official manufacturer's warranty. We also assist our customers in coordinating with the brand's service centers for any warranty claims."
    },
    {
        q: "Do you deliver in Raiwala and Dehradun?",
        a: "Yes, we provide home delivery services across Raiwala and nearby areas in Dehradun. Same-day delivery is often available for products in stock."
    },
    {
        q: "How do I choose the right refrigerator size?",
        a: "As a general rule: 2-3 members need 200-250L, 4-5 members need 300-450L, and larger families should look for 500L+ models. Visit us for a more detailed guide!"
    }
];

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />

            <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Common Questions
                    </h1>
                    <p className="text-lg text-gray-200 max-w-xl mx-auto">
                        Find answers to common queries about our products and services
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, i) => (
                            <Card key={i} className="p-6 md:p-8">
                                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                                    <Icon name="HelpCircle" className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <div className="pl-9">
                                    <p className="text-text-muted leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
