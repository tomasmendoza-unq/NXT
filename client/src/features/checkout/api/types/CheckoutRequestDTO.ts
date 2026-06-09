export interface CheckoutRequestDTO {
    client: ClientRequestDTO;
    notes: string;
    itemCheckoutRequestDTO: ItemCheckoutRequestDTO[];
}

export interface ClientRequestDTO {
    firstName: string;
    lastName: string;
    address: string;
    province: string;
    city: string;
    postalCode: string;
    phone: string;
    email: string;
}

export interface ItemCheckoutRequestDTO {
    idDetail: number;
    quantity: number;
}
