import { Wrench, Settings, MessageSquare, ShieldCheck } from "lucide-react";

export interface ServiceOffering {
    id: string;
    title: string;
    description: string;
    iconName: string;
}

export const services: ServiceOffering[] = [
    {
        id: "installation",
        title: "Free Installation",
        description: "Professional installation support for all major appliances purchased from us.",
        iconName: "Wrench",
    },
    {
        id: "guidance",
        title: "Expert Guidance",
        description: "Personalized advice to help you choose the right product for your needs.",
        iconName: "MessageSquare",
    },
    {
        id: "support",
        title: "After-Sales Support",
        description: "We stand by our products and assist with warranty claims and service requests.",
        iconName: "ShieldCheck",
    },
    {
        id: "repair",
        title: "Repair Coordination",
        description: "Assistance in connecting with authorized service centers for repairs.",
        iconName: "Settings",
    },
];
