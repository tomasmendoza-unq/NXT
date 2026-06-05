import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
const CART_STORAGE_KEY = "guest_cart";

const getLocalCart = (): CartItem[] => {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveLocalCart = (items: CartItem[]) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

export const useAddCart = () => {
    // TODO: reemplazar con tu hook de auth cuando lo implementes
    const isAuthenticated = false;

    const [localCart, setLocalCart] = useState<CartItem[]>(getLocalCart);

    const addToCart = (formData: {
        colorId?: number;
        detailId?: number;
        quantity: number;
    }) => {
        if (!formData.colorId || !formData.detailId) return;

        const item: CartItem = {
            colorId: formData.colorId,
            detailId: formData.detailId,
            quantity: formData.quantity,
        };

        if (isAuthenticated) {
            // TODO: llamada a la API
            console.log("POST /cart", item);
        } else {
            const existing = localCart.find(
                (i) =>
                    i.colorId === item.colorId && i.detailId === item.detailId,
            );

            const updated = existing
                ? localCart.map((i) =>
                      i.colorId === item.colorId && i.detailId === item.detailId
                          ? { ...i, quantity: i.quantity + item.quantity }
                          : i,
                  )
                : [...localCart, item];
            setLocalCart(updated);
            saveLocalCart(updated);
        }
    };

    return { addToCart, localCart };
};
