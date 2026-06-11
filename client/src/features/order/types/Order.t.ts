export interface Order {
    id: number;
    total: number;
    createdAt: string;
    email: string;
    status: string;
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
