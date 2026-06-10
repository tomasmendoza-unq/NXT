import { Route } from "react-router-dom";
import type { Route as RouteType } from "../../../shared/types/Route.t.ts";
import { AuthRoutesArray } from "./AuthRoutes.tsx";

export const authRoutes = (
    <Route path="auth">
        {AuthRoutesArray.map((route: RouteType) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/auth" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
