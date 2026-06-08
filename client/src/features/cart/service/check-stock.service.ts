import { api } from "../../../core";
import { CART_ENDPOINTS } from "../api/constants/cartEndpoints";

export const checkStock = async (
    detailId: number,
    quantity: number,
): Promise<boolean> => {
    const response = await api.post<boolean>(CART_ENDPOINTS.POST_CHECK, {
        detailId,
        quantity,
    });
    return response.data;
};
