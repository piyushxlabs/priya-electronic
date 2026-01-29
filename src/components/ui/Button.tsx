import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        // Variant styles
        const variants = {
            primary: "bg-accent dark:bg-dark-accent text-accent-foreground hover:brightness-110 shadow-sm transition-all",
            secondary: "bg-primary text-primary-foreground dark:bg-dark-bg-elevated dark:border-dark-border dark:text-dark-text-primary hover:bg-primary/90 dark:hover:bg-dark-bg-elevated/80 border border-transparent shadow-md",
            outline: "border border-gray-200 dark:border-dark-border bg-background dark:bg-dark-bg-secondary hover:bg-accent hover:text-accent-foreground dark:hover:bg-dark-accent dark:hover:text-white dark:text-dark-text-primary",
            ghost: "hover:bg-accent/10 dark:hover:bg-dark-bg-elevated dark:text-dark-text-secondary dark:hover:text-dark-text-primary",
            link: "text-primary dark:text-dark-brand-primary underline-offset-4 hover:underline",
        };

        // Size styles
        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
