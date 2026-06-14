import { Outlet, Route } from "react-router-dom";
import { ProtectedRoute } from "../../../shared/components/protectedRoute/ProtectedRoute";
import { ClientRoutesArray } from "./ClientRoutes";
import type { RouteNavigate } from "../../../shared/types/Route.t";

export const clientRoutes = (
    <Route
        path="client"
        element={
            <ProtectedRoute requiredRole="ROLE_CLIENT">
                <Outlet />
            </ProtectedRoute>
        }
    >
        {ClientRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/client" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
