import type { OrderResponseSimpleDTO } from "../api/types/OrderResponseSimpleDTO.t";
import type { Order } from "../types/Order.t";

export const toModel = (data: OrderResponseSimpleDTO): Order => {
    return {
        id: data.id,
        email: data.email,
        total: data.total,
        status: data.status,
        createdAt: data.createdAt,
    };
};
