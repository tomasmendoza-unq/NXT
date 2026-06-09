import { api } from "../../../core";
import { CHECKOUT_ENDPOINTS } from "../api/constants/checkoutEndpoints";
import type { CheckoutRequestDTO } from "../api/types/CheckoutRequestDTO";
import type { CheckoutResponseDTO } from "../api/types/CheckoutResponseDTO";

export const postCheckout = async (
    request: CheckoutRequestDTO,
): Promise<CheckoutResponseDTO> => {
    const response = await api.post<CheckoutResponseDTO>(
        CHECKOUT_ENDPOINTS.POST_CHECKOUT,
        request,
    );
    return response.data;
};
