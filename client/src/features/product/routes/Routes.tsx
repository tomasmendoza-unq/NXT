import type { RouteNavigate } from "../../../shared/types/Route.t";
import { ProductDetail } from "../pages/productDetail/ProductDetail";
import { ProductGrid } from "../pages/productGrid/ProductGrid";

export const ProductRoutesArray: RouteNavigate[] = [
    {
        path: "/",
        element: <ProductGrid />,
    },
    {
        path: "/:id",
        element: <ProductDetail />,
    },
];
