import { api } from "../../../core";
import { toModel } from "../../order/adapter/order.adapter";
import type { OrderResponseSimpleDTO } from "../../order/api/types/OrderResponseSimpleDTO.t";
import type { Order } from "../../order/types/Order.t";
import { ADMIN_ENDPOINTS } from "../api/adminEndpoints";

export const GetOrdersService = async ({
    status,
}: {
    status: string;
}): Promise<Order[]> => {
    const response = await api.get<OrderResponseSimpleDTO[]>(
        ADMIN_ENDPOINTS.GET_ORDERS(status),
    );
    return response.data.map(toModel);
};
