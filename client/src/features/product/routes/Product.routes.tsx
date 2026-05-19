import { Route } from "react-router-dom";
import { Routes as ProductRoutesArray } from "./routes";
import type { Route as RouteType } from "../../../shared/types/Route.t.ts";

export const ProductRoutes = () => {
    return (
        <>
            {
                ProductRoutesArray.map((route: RouteType) => (
                    <Route key={route.path} path={`product${route.path}`} element={route.element} />
                ))
            }
        </>
    );
};
