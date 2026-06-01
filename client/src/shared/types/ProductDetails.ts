import type { ColorProps } from "./Color";

export interface ProductSizeOption {
    id: number;
    price: number;
    size: number;
    quantity: number;
}

export interface ProductVariant {
    color: ColorProps;
    image: string;
    sizes: ProductSizeOption[];
}

export interface ProductDetails {
    id: number;
    price: number;
    color: ColorProps;
    size: number;
    quantity: number;
    image: string;
}
