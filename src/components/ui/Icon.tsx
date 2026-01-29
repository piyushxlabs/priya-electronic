import { LucideProps, Phone, Mail, MapPin, Clock, Shield, Award, Users, Wrench, Star, Menu, X, ChevronRight, Package, CheckCircle, MessageSquare, Settings, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName =
    | "Phone" | "Mail" | "MapPin" | "Clock" | "Shield" | "Award" | "Users"
    | "Wrench" | "Star" | "Menu" | "X" | "ChevronRight" | "Package" | "CheckCircle"
    | "MessageSquare" | "Settings" | "ShieldCheck";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
    Phone, Mail, MapPin, Clock, Shield, Award, Users,
    Wrench, Star, Menu, X, ChevronRight, Package, CheckCircle,
    MessageSquare, Settings, ShieldCheck
};

interface IconProps extends LucideProps {
    name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
    const LucideIcon = iconMap[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <LucideIcon className={cn("shrink-0", className)} {...props} />;
}
