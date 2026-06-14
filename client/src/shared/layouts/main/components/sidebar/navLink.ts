import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DashboardIcon from "@mui/icons-material/Dashboard";

export type UserRole = "ROLE_ADMIN" | "ROLE_CLIENT" | "guest";

export interface NavLink {
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    roles: UserRole[];
}

export const links: NavLink[] = [
    {
        label: "Inicio",
        path: "/",
        icon: HomeIcon,
        roles: ["ROLE_CLIENT", "guest"],
    },
    {
        label: "Productos",
        path: "/product",
        icon: ShoppingCartIcon,
        roles: ["ROLE_CLIENT", "guest"],
    },
    {
        label: "Marcas",
        path: "/brands",
        icon: LocalOfferIcon,
        roles: ["ROLE_CLIENT", "guest"],
    },
    {
        label: "Carrito",
        path: "/cart",
        icon: ShoppingCartIcon,
        roles: ["ROLE_CLIENT", "guest"],
    },
    {
        label: "Ordenes de compra",
        path: "/admin/orders",
        icon: DashboardIcon,
        roles: ["ROLE_ADMIN"],
    },
    {
        label: "Ordenes de compra",
        path: "/client/orders",
        icon: DashboardIcon,
        roles: ["ROLE_CLIENT"],
    },
    {
        label: "Productos",
        path: "/admin/products",
        icon: DashboardIcon,
        roles: ["ROLE_ADMIN"],
    },
    {
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: DashboardIcon,
        roles: ["ROLE_ADMIN"],
    },
];
