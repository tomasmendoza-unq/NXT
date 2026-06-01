import type { BrandProps } from "./Brand";
import type { ProductDetails, ProductVariant } from "./ProductDetails";

export interface ProductProps {
    id: number;
    image: string;
    name: string;
    productDetails: ProductDetails[];
    productVariants: ProductVariant[];
    productModel: string;
    productBrand: BrandProps;
}
