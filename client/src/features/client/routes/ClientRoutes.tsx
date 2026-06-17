import type { RouteNavigate } from "../../../shared/types/Route.t";
import { OrderDetail } from "../pages/orderDetail/OrderDetail";
import { Orders } from "../pages/Orders";

export const ClientRoutesArray: RouteNavigate[] = [
    {
        path: "/orders",
        element: <Orders />,
    },
    {
        path: "/orders/details/:idOrder",
        element: <OrderDetail />,
    },
];
