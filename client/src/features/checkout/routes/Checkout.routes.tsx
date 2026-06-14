import { Route } from "react-router-dom";
import { CheckoutRoutesArray } from "./CheckoutRoutes.tsx";
import type { RouteNavigate } from "../../../shared/types/Route.t.ts";

export const checkoutRoutes = (
    <Route path="checkout">
        {CheckoutRoutesArray.map((route: RouteNavigate) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/checkout" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
