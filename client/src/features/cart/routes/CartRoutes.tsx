import type { RouteNavigate } from "../../../shared/types/Route.t";
import { Cart } from "../pages/viewCart/Cart";

export const CartRoutesArray: RouteNavigate[] = [
    {
        path: "/",
        element: <Cart />,
    },
];
