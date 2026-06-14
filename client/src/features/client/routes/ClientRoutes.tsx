import type { RouteNavigate } from "../../../shared/types/Route.t";
import { OrdersClient } from "../pages/Orders";

export const ClientRoutesArray: RouteNavigate[] = [
    {
        path: "/orders",
        element: <OrdersClient />,
    },
];
