"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = "up",
    className,
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: 20 };
            case "down":
                return { y: -20 };
            case "left":
                return { x: 20 };
            case "right":
                return { x: -20 };
            default:
                return {};
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
