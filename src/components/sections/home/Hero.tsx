"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ContactLink } from "@/components/ui/ContactLink";
import { ScrollFrameAnimation } from "@/components/motion/ScrollFrameAnimation";
import { contactInfo } from "@/data/contact";

// Animation configuration - matches files in hero-animation folder
// Files: Smooth_cinematic_transition_1080p_20260129102_016.jpg to _079.jpg (64 files)
const FRAME_CONFIG = {
    frameCount: 64,
    framePath: "/assets/images/hero-animation",
    framePattern: "Smooth_cinematic_transition_1080p_20260129102_{index}.jpg",
    indexDigits: 3,
    startIndex: 16,
};

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative h-[250vh]" // Increased height for better scroll feel
        >
            {/* Sticky wrapper - stays fixed while scrolling */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Scroll-controlled animation background */}
                <div className="absolute inset-0 z-0">
                    <ScrollFrameAnimation
                        frameCount={FRAME_CONFIG.frameCount}
                        framePath={FRAME_CONFIG.framePath}
                        framePattern={FRAME_CONFIG.framePattern}
                        indexDigits={FRAME_CONFIG.indexDigits}
                        startIndex={FRAME_CONFIG.startIndex}
                        targetRef={sectionRef} // PASS THE PARENT SECTION REF HERE
                        className="w-full h-full"
                    />
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 z-[5] bg-black/50" />

                {/* Hero content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Trusted Home Appliances for
                            <br className="hidden md:block" />
                            <span className="text-accent"> GhāziābĀd Families</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md">
                            Refrigerators, ACs, TVs, Washing Machines — Quality Products, Local Service
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/products">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    Browse Products
                                </Button>
                            </Link>

                            <ContactLink
                                type="whatsapp"
                                value={contactInfo.whatsapp.value}
                                label="Contact Us"
                                className="w-full sm:w-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-white/70 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
