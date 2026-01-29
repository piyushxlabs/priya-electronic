"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
        productInterest: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For now, just show success message
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", phone: "", message: "", productInterest: "" });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
    };

    return (
        <section className="py-16 md:py-24 bg-background transition-colors duration-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-text-muted">
                            Fill out the form below and we'll get back to you within 24 hours
                        </p>
                    </div>

                    {submitStatus === "success" ? (
                        <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center">
                            <p className="text-green-700 font-medium">
                                Thank you! We've received your message and will get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                label="Name *"
                                type="text"
                                placeholder="Your name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />

                            <Input
                                label="Phone Number *"
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />

                            <div className="w-full">
                                <label className="block text-sm font-medium text-text-main mb-1.5">
                                    Product Interest
                                </label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-200"
                                    value={formData.productInterest}
                                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                                >
                                    <option value="">Select a category (optional)</option>
                                    <option value="refrigerators">Refrigerators</option>
                                    <option value="ac">Air Conditioners</option>
                                    <option value="tv">Televisions</option>
                                    <option value="washing-machine">Washing Machines</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-medium text-text-main mb-1.5">
                                    Message *
                                </label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-200"
                                    placeholder="How can we help you?"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="secondary"
                                size="lg"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
