import type { OrderResponseSimpleDTO } from "../api/types/OrderResponseSimpleDTO.t";
import type { Order } from "../types/Order.t";

export const toModel = (data: OrderResponseSimpleDTO): Order => {
    return {
        id: data.id,
        total: data.total,
        createdAt: data.createdAt,
        email: data.email,
        status: data.status,
    };
};
