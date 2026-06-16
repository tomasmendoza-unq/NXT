import type { ProductDetails } from "./ProductDetails";

export interface Color {
    id: number;
    name: string;
    color: string;
    image: string;
    gallery: string[];
    details: ProductDetails[];
}
