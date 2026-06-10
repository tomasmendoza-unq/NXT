import type { Route } from "../../../shared/types/Route.t";
import { Login } from "../pages/login/Login";

export const AuthRoutesArray: Route[] = [
    {
        path: "/login",
        element: <Login />,
    },
];
