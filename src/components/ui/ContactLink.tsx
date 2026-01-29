import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

interface ContactLinkProps {
    type: "whatsapp" | "phone" | "email";
    value: string;
    label?: string;
    className?: string;
    iconOnly?: boolean;
}

const contactConfig: Record<
    ContactLinkProps["type"],
    { iconName: IconName; getHref: (value: string) => string; brandColor?: string }
> = {
    whatsapp: {
        iconName: "MessageSquare",
        getHref: (value) => `https://wa.me/${value}`,
        brandColor: "hover:bg-green-600",
    },
    phone: {
        iconName: "Phone",
        getHref: (value) => `tel:${value}`,
    },
    email: {
        iconName: "Mail",
        getHref: (value) => `mailto:${value}`,
    },
};

export function ContactLink({ type, value, label, className, iconOnly = false }: ContactLinkProps) {
    const config = contactConfig[type];
    const href = config.getHref(value);

    return (
        <Link
            href={href}
            target={type === "whatsapp" ? "_blank" : undefined}
            rel={type === "whatsapp" ? "noopener noreferrer" : undefined}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200",
                type === "whatsapp" && "bg-green-500 text-white hover:bg-green-600 shadow-sm",
                type === "phone" && "bg-accent text-accent-foreground hover:bg-accent/90 dark:bg-dark-brand-primary dark:hover:bg-dark-brand-secondary shadow-sm",
                type === "email" && "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-dark-bg-elevated dark:border-dark-border dark:text-dark-text-primary shadow-sm",
                iconOnly && "p-2.5",
                className
            )}
        >
            <Icon name={config.iconName} className="h-5 w-5" />
            {!iconOnly && <span>{label || value}</span>}
        </Link>
    );
}
