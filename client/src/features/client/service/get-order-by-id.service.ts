import { api } from "../../../core";
import type { OrderResponseDTO } from "../../order/api/types/OrderResponseDTO.t";
import { CLIENT_ENDPOINTS } from "../api/constant/clientEndpoints";

export const getOrderById = async (
    idOrder: string,
): Promise<OrderResponseDTO> => {
    const response = await api.get<OrderResponseDTO>(
        CLIENT_ENDPOINTS.GET_ORDER_BY_ID(idOrder),
    );
    return response.data;
};
