export interface Order {
    id: number;
    email: string;
    total: number;
    status: string;
    createdAt: string;
    client?: {
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
    };
    items?: OrderItem[];
}

export interface OrderItem {
    idDetail: number;
    quantity: number;
    name: string;
    price: number;
}
