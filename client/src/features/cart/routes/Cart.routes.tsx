import { Route } from "react-router-dom";
import { CartRoutesArray } from "./CartRoutes";
import type { Route as RouteType } from "../../../shared/types/Route.t.ts";

export const cartRoutes = (
    <Route path="cart">
        {CartRoutesArray.map((route: RouteType) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/cart" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
