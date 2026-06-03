import type { ProductDetails } from "./ProductDetails";

export interface Color {
    id: number;
    name: string;
    color: string;
    details: ProductDetails[];
}
