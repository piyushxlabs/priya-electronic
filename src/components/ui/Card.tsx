import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, href, children, ...props }, ref) => {
        const cardContent = (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border border-gray-200 bg-white dark:border-dark-border dark:bg-dark-bg-secondary transition-all duration-300 shadow-sm",
                    href && "hover:-translate-y-1 hover:shadow-lg dark:hover:bg-dark-bg-elevated dark:hover:shadow-dark cursor-pointer",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );

        if (href) {
            return <Link href={href}>{cardContent}</Link>;
        }

        return cardContent;
    }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
    )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight text-primary", className)} {...props} />
    )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p ref={ref} className={cn("text-sm text-text-muted", className)} {...props} />
    )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
