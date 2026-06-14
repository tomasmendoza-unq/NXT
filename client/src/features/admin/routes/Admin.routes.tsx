import { Outlet, Route } from "react-router-dom";
import { AdminRoutesArray } from "./AdminRoutes.tsx";
import { ProtectedRoute } from "../../../shared/components/protectedRoute/ProtectedRoute.tsx";
import type { RouteNavigate } from "../../../shared/types/Route.t.ts";
export const adminRoutes = (
    <Route
        path="admin"
        element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
                <Outlet />
            </ProtectedRoute>
        }
    >
        {AdminRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/admin" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
