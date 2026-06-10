import HomeIcon from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const links = [
    {
        label: "Inicio",
        path: "/",
        icon: HomeIcon,
    },
    {
        label: "Productos",
        path: "/product",
        icon: ShoppingCartIcon,
    },
    {
        label: "Marcas",
        path: "/brands",
        icon: LocalOfferIcon,
    },
    {
        label: "Carrito",
        path: "/cart",
        icon: ShoppingCartIcon,
    },
    {
        label: "Inicio de sesión",
        path: "auth/login",
        icon: Person,
    },
];
