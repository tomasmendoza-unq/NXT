import { Route } from "react-router-dom";
import { CartRoutesArray } from "./CartRoutes";
import type { RouteNavigate } from "../../../shared/types/Route.t";

export const cartRoutes = (
    <Route path="cart">
        {CartRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/cart" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
