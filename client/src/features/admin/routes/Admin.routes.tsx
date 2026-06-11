import { Outlet, Route } from "react-router-dom";
import type { Route as RouteType } from "../../../shared/types/Route.t.ts";
import { AdminRoutesArray } from "./AdminRoutes.tsx";
import { ProtectedRoute } from "../../../shared/components/protectedRoute/ProtectedRoute.tsx";
export const adminRoutes = (
    <Route
        path="admin"
        element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
                <Outlet />
            </ProtectedRoute>
        }
    >
        {AdminRoutesArray.map((route: RouteType) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/admin" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
