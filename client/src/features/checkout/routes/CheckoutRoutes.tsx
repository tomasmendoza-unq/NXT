import type { Route } from "../../../shared/types/Route.t";
import { Checkout } from "../pages/Checkout";

export const CheckoutRoutesArray: Route[] = [
    {
        path: "/",
        element: <Checkout />,
    },
];
