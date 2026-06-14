import { useState } from "react";
import { ApiError } from "../../../core";
import { postPreviewCart } from "../service/post-preview-cart.service";
import type { Item } from "../types/Item";
import { cartService } from "../service/cartService.service";

export const useGetPreviewCart = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ApiError | null>(null);

    const fetch = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const payload = cartService.getOrderPayload();
            const items = await postPreviewCart(payload);
            setItems(items);
        } catch (err) {
            if (err instanceof ApiError) {
                setError(err);
            }
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        fetch,
        isLoading,
        error,
        items,
        setItems,
    };
};
