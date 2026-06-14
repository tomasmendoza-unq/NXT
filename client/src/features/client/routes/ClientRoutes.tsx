import type { RouteNavigate } from "../../../shared/types/Route.t";
import { Orders } from "../pages/Orders";

export const ClientRoutesArray: RouteNavigate[] = [
    {
        path: "/orders",
        element: <Orders />,
    },
];
