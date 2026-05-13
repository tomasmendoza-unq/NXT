import type { BrandProps } from "./Brand";
import type { ProductDetails } from "./ProductDetails";

export interface ProductProps {
    id: number;
    image?: string;
    name: string;
    productDetails: ProductDetails[];
    productModel: string;
    productBrand: BrandProps;
}
