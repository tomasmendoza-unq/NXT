import type { RouteNavigate } from "../../../shared/types/Route.t";
import { AddProduct } from "../pages/addProduct/AddProduct";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Orders } from "../pages/orders/Orders";

export const AdminRoutesArray: RouteNavigate[] = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/orders/:status?",
        element: <Orders />,
    },
    {
        path: "/create/product",
        element: <AddProduct />,
    },
];
