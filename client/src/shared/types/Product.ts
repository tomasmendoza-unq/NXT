import type { BrandProps } from "./Brand";
import type { ProductDetails } from "./ProductDetails";

export interface ProductProps {
    image: string;
    name: string;
    productDetails: ProductDetails[];
    productModel: string;
    productBrand: BrandProps;
}
