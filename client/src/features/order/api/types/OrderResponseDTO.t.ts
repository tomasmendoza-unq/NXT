export interface OrderResponseDTO {
    id: number;
    total: number;
    createdAt: string;
    client: {
        email: string;
        firstName: string;
        lastName: string;
    };
    items: OrderItemResponseDTO[];
}

export interface OrderItemResponseDTO {
    idDetail: number;
    quantity: number;
}
