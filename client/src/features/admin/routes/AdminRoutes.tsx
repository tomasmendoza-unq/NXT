import type { Route } from "../../../shared/types/Route.t";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Orders } from "../pages/orders/Orders";

export const AdminRoutesArray: Route[] = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/orders/:status?",
        element: <Orders />,
    },
];
