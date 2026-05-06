import type { ColorProps } from "./Color";

export interface ProductDetails {
    id: number;
    price: number;
    color: ColorProps;
    size: number;
    quantity: number;
}
