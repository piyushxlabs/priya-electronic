"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="container mx-auto px-4 md:px-6 pt-4">
                <div className={cn(
                    "relative rounded-2xl transition-all duration-500 border border-transparent",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/10"
                        : "bg-white/10 backdrop-blur-md"
                )}>
                    {/* Animated gradient border */}
                    <div className={cn(
                        "absolute inset-0 rounded-2xl transition-opacity duration-500",
                        scrolled ? "opacity-0" : "opacity-100",
                        "bg-gradient-to-r from-accent/20 via-transparent to-accent/20 p-[1px]"
                    )}>
                        <div className="w-full h-full rounded-2xl bg-transparent" />
                    </div>

                    <div className="relative flex h-16 md:h-18 items-center justify-between px-4 md:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent/50 group-hover:scale-110 transition-all duration-300">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className={cn(
                                "text-lg md:text-xl font-bold tracking-tight transition-all duration-300",
                                scrolled ? "text-primary" : "text-white drop-shadow-lg"
                            )}>
                                Priya Electronic
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group",
                                        scrolled
                                            ? "text-gray-700 hover:text-accent hover:bg-accent/5"
                                            : "text-white/90 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="ml-2 inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent/90 px-6 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                className={cn(
                                    "inline-flex items-center justify-center rounded-xl p-2.5 transition-all duration-300",
                                    scrolled
                                        ? "text-primary hover:bg-gray-100"
                                        : "text-white hover:bg-white/10"
                                )}
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Icon name="Menu" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </header>
    );
}
