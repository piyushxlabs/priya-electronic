export interface ProductCategory {
    id: string;
    name: string;
    description?: string;
    image: string;
    href: string;
}

export const productCategories: ProductCategory[] = [
    {
        id: "refrigerators",
        name: "Refrigerators",
        description: "Single Door, Double Door, and Side-by-Side options",
        image: "/assets/images/products/refrigerator.png",
        href: "/products#refrigerators",
    },
    {
        id: "ac",
        name: "Air Conditioners",
        description: "Split and Window ACs for efficient cooling",
        image: "/assets/images/products/ac.png",
        href: "/products#ac",
    },
    {
        id: "washing-machines",
        name: "Washing Machines",
        description: "Top Load, Front Load, and Semi-Automatic",
        image: "/assets/images/products/washing-machine.png",
        href: "/products#washing-machines",
    },
    {
        id: "televisions",
        name: "Televisions",
        description: "Smart LED and 4K TVs for home entertainment",
        image: "/assets/images/products/tv.png",
        href: "/products#televisions",
    },
    {
        id: "microwave",
        name: "Microwave Ovens",
        description: "Convection and Grill microwaves for your kitchen",
        image: "/assets/images/products/refrigerator.png",
        href: "/products#microwave",
    },
];
