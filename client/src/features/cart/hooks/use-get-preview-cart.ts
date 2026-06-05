import { useState } from "react";
import { ApiError } from "../../../core";
import type { CartItem } from "../../../shared/types/CartItem";
import { postPreviewCart } from "../service/post-preview-cart.service";
import type { Item } from "../types/Item";

const CART_STORAGE_KEY = "guest_cart";

const getLocalCart = (): CartItem[] => {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const useGetPreviewCart = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ApiError | null>(null);
    const cart = getLocalCart();

    const fetch = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const itemPreview = cart.map((item) => ({
                detailId: item.detailId,
                quantity: item.quantity,
            }));

            const items = await postPreviewCart(itemPreview);
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
        cart,
        fetch,
        isLoading,
        error,
        items,
    };
};
