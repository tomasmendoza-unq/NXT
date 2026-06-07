import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
import { cartService } from "../service/cartService.service";

export const useAddCart = () => {
    const isAuthenticated = false;
    const [localCart, setLocalCart] = useState<CartItem[]>(cartService.getCart);

    const addToCart = (formData: { detailId?: number; quantity: number }) => {
        if (!formData.detailId) return;

        const item: CartItem = {
            detailId: formData.detailId,
            quantity: formData.quantity,
        };

        if (isAuthenticated) {
            console.log("POST /cart", item);
        } else {
            const cart = cartService.getCart();
            const existing = cart.find((i) => i.detailId === item.detailId);
            const updated = existing
                ? cart.map((i) =>
                      i.detailId === item.detailId
                          ? { ...i, quantity: i.quantity + item.quantity }
                          : i,
                  )
                : [...cart, item];

            cartService.saveCart(updated);
            setLocalCart(updated);
        }
    };

    return { addToCart, localCart };
};
