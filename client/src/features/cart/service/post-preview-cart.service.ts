import { api } from "../../../core";
import { adapt } from "../adapter/cart.adapter";
import { CART_ENDPOINTS } from "../api/constants/cartEndpoints";
import type { ItemPreviewResponseDTO } from "../api/types/item-preview-response";
import type { Item } from "../types/Item";

export const postPreviewCart = async (
    itemPreview: {
        detailId: number;
        quantity: number;
    }[],
): Promise<Item[]> => {
    const response = await api.post<ItemPreviewResponseDTO[]>(
        CART_ENDPOINTS.POST_PREVIEW_CART,
        itemPreview,
    );

    return adapt(response.data);
};
