import { api } from "../../../core";
import type { PageResponseDTO } from "../../../core/api/types/PageResponseDTO.t";
import { adaptPage } from "../../../shared/adapter/Page.adapter";
import type { Page } from "../../../shared/types/Page";
import { toModel } from "../../order/adapter/order.adapter";
import type { OrderResponseSimpleDTO } from "../../order/api/types/OrderResponseSimpleDTO.t";
import type { Order } from "../../order/types/Order.t";
import { ADMIN_ENDPOINTS } from "../api/adminEndpoints";

export const GetOrdersService = async ({
    status,
}: {
    status: string;
}): Promise<Page<Order>> => {
    const response = await api.get<PageResponseDTO<OrderResponseSimpleDTO>>(
        ADMIN_ENDPOINTS.GET_ORDERS(status),
    );
    return adaptPage(response.data, toModel);
};
