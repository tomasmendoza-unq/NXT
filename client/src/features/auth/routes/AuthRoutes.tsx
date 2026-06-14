import type { RouteNavigate } from "../../../shared/types/Route.t";
import { Login } from "../pages/login/Login";

export const AuthRoutesArray: RouteNavigate[] = [
    {
        path: "/login",
        element: <Login />,
    },
];
