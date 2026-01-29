"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { contactInfo } from "@/data/contact";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-gradient-to-br from-black/98 via-black/95 to-primary/20 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary/50 backdrop-blur-2xl"
                >
                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-md border-b border-white/10 dark:border-dark-border flex items-center justify-between px-6">
                        <span className="text-white dark:text-dark-text-primary font-semibold text-sm tracking-wide">MENU</span>
                        <div className="flex items-center gap-4">
                            <ThemeToggle className="bg-white/10 border-white/20 hover:bg-white/20" />
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Icon name="X" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col justify-center h-full px-8 pt-24 pb-40">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-accent/30 transition-all"
                                >
                                    <span className="text-2xl font-light text-white/60 dark:text-dark-text-secondary group-hover:text-white dark:group-hover:text-dark-text-primary group-hover:translate-x-2 transition-all">
                                        {link.label}
                                    </span>
                                    <Icon name="ChevronRight" className="h-5 w-5 text-white/20 dark:text-dark-text-tertiary group-hover:text-accent dark:group-hover:text-dark-accent group-hover:translate-x-1 transition-all" />
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Bottom Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm space-y-3"
                    >
                        <a
                            href={`tel:${contactInfo.phone.value}`}
                            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-accent to-accent/80 text-white font-semibold shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.02] transition-all"
                        >
                            <Icon name="Phone" className="h-5 w-5" />
                            Call Now
                        </a>
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp.value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                        >
                            <Icon name="MessageSquare" className="h-5 w-5" />
                            Contact Us
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
