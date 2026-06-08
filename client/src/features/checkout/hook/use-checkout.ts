import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
import { cartService } from "../../cart/service/cartService.service";
import type { FacturationForm } from "../types/FacturationForm.t";
import { postCheckout } from "../service/post-checkout.service";
import { checkoutToRequestDTO } from "../adapter/checkout.adapter";
import type { Checkout } from "../types/checkout.t";

export const useCheckout = () => {
    const [localCart] = useState<CartItem[]>(cartService.getCart);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const checkout = async (formData: FacturationForm) => {
        setError(null);
        setIsLoading(true);
        try {
            const checkout: Checkout = {
                facturationForm: formData,
                items: localCart.map((item) => ({
                    idDetail: item.detailId,
                    quantity: item.quantity,
                })),
            };

            console.log("Datos del checkout:", checkout);
            const response = await postCheckout(checkoutToRequestDTO(checkout));
            console.log("Respuesta del checkout:", response);
        } catch {
            setError("Error al procesar la compra");
        } finally {
            setIsLoading(false);
        }
    };

    return { checkout, localCart, error, isLoading };
};
