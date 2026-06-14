import { Route } from "react-router-dom";
import type { RouteNavigate } from "../../../shared/types/Route.t";
import { ProductRoutesArray } from "./Routes";

export const productRoutes = (
    <Route path="products">
        {ProductRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/products" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
