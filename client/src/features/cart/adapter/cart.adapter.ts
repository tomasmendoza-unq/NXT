import type { ItemPreviewResponseDTO } from "../api/types/item-preview-response";
import type { Item } from "../types/Item";

export const adaptItemPreview = (item: ItemPreviewResponseDTO): Item => {
    return {
        product: item.product,
        quantity: item.quantity,
        color: item.color,
        detail: item.detail,
        subTotal: item.subTotal,
    };
};

export const adapt = (items: ItemPreviewResponseDTO[]): Item[] => {
    return items.map(adaptItemPreview);
};
