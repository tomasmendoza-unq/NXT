import type { Product } from "./Product";

export interface ProductDetails {
    id: number;
    price: number;
    size: number;
    quantity: number;
    image: string;
    product?: Product;
    gallery: string[];
}
