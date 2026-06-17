import type { ProductDetailsResponseSimpleDTO } from "../../../product/api/types/product-response-simple";

export interface OrderResponseDTO {
    id: number;
    total: number;
    status: string;
    notes: string;
    createdAt: string;
    client: ClientResponseDTO;
    items: OrderItemResponseDTO[];
}

export interface ClientResponseDTO {
    email: string;
    firstName: string;
    lastName: string;
}

export interface OrderItemResponseDTO {
    idDetail: number;
    quantity: number;
}

export interface OrderItemResponseDTO {
    idDetail: number;
    detail: ProductDetailsResponseSimpleDTO;
    name: string;
    image: string;
    quantity: number;
}
