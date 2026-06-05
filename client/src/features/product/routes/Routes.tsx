import type { Route } from "../../../shared/types/Route.t.ts";
import { ProductDetail } from "../pages/productDetail/ProductDetail";
import { ProductGrid } from "../pages/productGrid/ProductGrid";

export const Routes: Route[] = [
    {
        path: "/",
        element: <ProductGrid />,
    },
    {
        path: "/:id",
        element: <ProductDetail />,
    },
];
