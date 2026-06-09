import { Route } from "react-router-dom";
import type { Route as RouteType } from "../../../shared/types/Route.t.ts";
import { CheckoutRoutesArray } from "./CheckoutRoutes.tsx";

export const checkoutRoutes = (
    <Route path="checkout">
        {CheckoutRoutesArray.map((route: RouteType) => (
            <Route
                key={route.path}
                index={route.path === "/"}
                path={"/checkout" + route.path}
                element={route.element}
            />
        ))}
    </Route>
);
