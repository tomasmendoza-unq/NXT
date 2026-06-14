import type { RouteNavigate } from "../../../shared/types/Route.t";
import { ProductDetail } from "../pages/productDetail/ProductDetail";
import { Products } from "../pages/productGrid/Products";

export const ProductRoutesArray: RouteNavigate[] = [
    {
        path: "/",
        element: <Products />,
    },
    {
        path: "/:id",
        element: <ProductDetail />,
    },
];
