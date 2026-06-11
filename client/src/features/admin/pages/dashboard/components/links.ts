interface ManageLink {
    path: string;
    title: string;
    image: string;
}

export const manageLinks: ManageLink[] = [
    {
        path: "/admin/products",
        title: "Gestion de productos",
        image: "/src/assets/products.jfif",
    },
    {
        path: "/admin/orders",
        title: "Ordenes de compra",
        image: "/src/assets/oc.jfif",
    },
    {
        path: "/admin/clients",
        title: "Gestion de marcas",
        image: "/src/assets/brands.jfif",
    },
];
