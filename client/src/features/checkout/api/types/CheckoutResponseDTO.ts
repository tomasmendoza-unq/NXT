import type { ProductDetailsResponseSimpleDTO } from "../../../product/api/types/product-response-simple";

export interface CheckoutResponseDTO {
    id: number;
    total: number;
    createdAt: string;
    items: CheckoutItemDTO[];
}

export interface CheckoutItemDTO {
    detail: ProductDetailsResponseSimpleDTO;
    quantity: number;
    unitPrice: number;
}
