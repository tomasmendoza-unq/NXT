import { api } from "../../../core";
import type { OrderResponseDTO } from "../../order/api/types/OrderResponseDTO.t";
import { ADMIN_ENDPOINTS } from "../api/adminEndpoints";

export const GetOrderByIdService = async (
    orderId: string,
): Promise<OrderResponseDTO> => {
    const response = await api.get<OrderResponseDTO>(
        ADMIN_ENDPOINTS.GET_ORDER_BY_ID(orderId),
    );
    return response.data;
};
