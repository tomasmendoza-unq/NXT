import type { RouteNavigate } from "../../../shared/types/Route.t";
import { Checkout } from "../pages/Checkout";

export const CheckoutRoutesArray: RouteNavigate[] = [
    {
        path: "/",
        element: <Checkout />,
    },
];
