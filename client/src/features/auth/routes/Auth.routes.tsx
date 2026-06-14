import { Route } from "react-router-dom";
import { AuthRoutesArray } from "./AuthRoutes.tsx";
import type { RouteNavigate } from "../../../shared/types/Route.t.ts";

export const authRoutes = (
    <Route path="auth">
        {AuthRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/auth" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
