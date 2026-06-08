import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
import { cartService } from "../service/cartService.service";
import { checkStock } from "../service/check-stock.service";

export const useAddCart = () => {
    const isAuthenticated = false;
    const [localCart, setLocalCart] = useState<CartItem[]>(cartService.getCart);
    const [error, setError] = useState<string | null>(null);

    const addToCart = async (formData: {
        detailId?: number;
        quantity: number;
    }) => {
        if (!formData.detailId) return;
        setError(null);

        try {
            const cart = cartService.getCart();
            const existing = cart.find((i) => i.detailId === formData.detailId);
            const totalQuantity = existing
                ? existing.quantity + formData.quantity
                : formData.quantity;

            const hasStock = await checkStock(formData.detailId, totalQuantity);

            if (!hasStock) {
                setError("Sin stock disponible");
                return;
            }

            if (isAuthenticated) {
                console.log("POST /cart", formData);
            } else {
                const updated = existing
                    ? cart.map((i) =>
                          i.detailId === formData.detailId
                              ? { ...i, quantity: totalQuantity }
                              : i,
                      )
                    : [
                          ...cart,
                          {
                              detailId: formData.detailId,
                              quantity: formData.quantity,
                          },
                      ];

                cartService.saveCart(updated);
                setLocalCart(updated);
            }
        } catch {
            setError("Error al agregar el producto");
        }
    };

    return { addToCart, localCart, error };
};
