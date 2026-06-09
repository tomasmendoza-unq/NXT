import type { Route } from "../../../shared/types/Route.t";
import { Cart } from "../pages/viewCart/Cart";

export const CartRoutesArray: Route[] = [
    {
        path: "/",
        element: <Cart />,
    },
];
