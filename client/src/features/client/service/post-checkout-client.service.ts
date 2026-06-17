import { api } from "../../../core";
import type { CheckoutRequestDTO } from "../../checkout/api/types/CheckoutRequestDTO";
import type { CheckoutResponseDTO } from "../../checkout/api/types/CheckoutResponseDTO";
import { CLIENT_ENDPOINTS } from "../api/constant/clientEndpoints";

export const postCheckoutClient = async (
    request: CheckoutRequestDTO,
): Promise<CheckoutResponseDTO> => {
    const response = await api.post<CheckoutResponseDTO>(
        CLIENT_ENDPOINTS.POST_CHECKOUT,
        request,
    );
    return response.data;
};
