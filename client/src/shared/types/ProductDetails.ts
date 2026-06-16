import type { Product } from "./Product";

export interface ProductDetails {
    id: number;
    price: number;
    size: number;
    quantity: number;
    product?: Product;
}
