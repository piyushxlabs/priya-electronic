import { LucideProps, Phone, Mail, MapPin, Clock, Shield, Award, Users, Wrench, Star, Menu, X, ChevronRight, Package, CheckCircle, MessageSquare, Settings, ShieldCheck, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName =
    | "Phone" | "Mail" | "MapPin" | "Clock" | "Shield" | "Award" | "Users"
    | "Wrench" | "Star" | "Menu" | "X" | "ChevronRight" | "Package" | "CheckCircle"
    | "MessageSquare" | "Settings" | "ShieldCheck" | "HelpCircle" | "ArrowRight" | "ArrowLeft";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
    Phone, Mail, MapPin, Clock, Shield, Award, Users,
    Wrench, Star, Menu, X, ChevronRight, Package, CheckCircle,
    MessageSquare, Settings, ShieldCheck, HelpCircle, ArrowRight, ArrowLeft
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
