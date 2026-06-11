import type { Route } from "../../../shared/types/Route.t";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const AdminRoutesArray: Route[] = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
];
