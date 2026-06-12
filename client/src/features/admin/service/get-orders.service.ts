import { api } from "../../../core";
import type { TableResponseDTO } from "../../../core/api/types/TableResponseDTO.t";
import { toTable } from "../../../shared/adapter/Table.adapter";
import type { Table } from "../../../shared/types/Table.t";
import { toModel } from "../../order/adapter/order.adapter";
import type { OrderResponseSimpleDTO } from "../../order/api/types/OrderResponseSimpleDTO.t";
import type { Order } from "../../order/types/Order.t";
import { ADMIN_ENDPOINTS } from "../api/adminEndpoints";

export const GetOrdersService = async ({
    status,
}: {
    status: string;
}): Promise<Table<Order>> => {
    const request = {
        status: status,
        page: 0,
        size: 10,
    };

    const response = await api.post<TableResponseDTO<OrderResponseSimpleDTO>>(
        ADMIN_ENDPOINTS.POST_ORDERS,
        request,
    );

    return toTable(response.data, toModel);
};
