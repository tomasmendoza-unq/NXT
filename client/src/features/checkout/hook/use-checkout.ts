import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
import { cartService } from "../../cart/service/cartService.service";
import type { FacturationForm } from "../types/FacturationForm.t";
import { postCheckout } from "../service/post-checkout.service";
import { checkoutToRequestDTO } from "../adapter/checkout.adapter";
import type { Checkout } from "../types/checkout.t";
import type { CheckoutResponseDTO } from "../api/types/CheckoutResponseDTO";
import { useToast } from "../../../shared/hooks/toast/useToast";

export const useCheckout = () => {
    const [checkoutData, setCheckoutData] =
        useState<CheckoutResponseDTO | null>(null);
    const [localCart] = useState<CartItem[]>(cartService.getCart);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] =
        useState<boolean>(false);
    const { showToast } = useToast();

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

            const response = await postCheckout(checkoutToRequestDTO(checkout));
            setCheckoutData(response);
            cartService.clearCart();
            setShowSuccessMessage(true);
        } catch {
            showToast({
                message: "Error al procesar la compra",
                severity: "error",
            });
            setError("Error al procesar la compra");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        checkout,
        localCart,
        error,
        isLoading,
        showSuccessMessage,
        checkoutData,
        setShowSuccessMessage,
    };
};
