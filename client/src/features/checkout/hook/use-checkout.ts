import { useState } from "react";
import type { CartItem } from "../../../shared/types/CartItem";
import { cartService } from "../../cart/service/cartService.service";
import type { FacturationForm } from "../types/FacturationForm.t";
import { postCheckout } from "../service/post-checkout.service";
import { checkoutToRequestDTO } from "../adapter/checkout.adapter";
import type { Checkout } from "../types/checkout.t";
import type { CheckoutResponseDTO } from "../api/types/CheckoutResponseDTO";
import { useAuth } from "../../auth/hooks/use-auth";
import { postCheckoutClient } from "../../client/service/post-checkout-client.service";

export const useCheckout = () => {
    const [checkoutData, setCheckoutData] =
        useState<CheckoutResponseDTO | null>(null);
    const [localCart] = useState<CartItem[]>(cartService.getCart);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] =
        useState<boolean>(false);
    const { isAuthenticated } = useAuth();

    const checkout = async (formData: FacturationForm) => {
        setIsLoading(true);
        const checkout: Checkout = {
            facturationForm: formData,
            items: localCart.map((item) => ({
                idDetail: item.detailId,
                quantity: item.quantity,
            })),
        };
        if (isAuthenticated) {
            try {
                const response = await postCheckoutClient(
                    checkoutToRequestDTO(checkout),
                );
                setCheckoutData(response);
                cartService.clearCart();
                setShowSuccessMessage(true);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const response = await postCheckout(
                    checkoutToRequestDTO(checkout),
                );
                setCheckoutData(response);
                cartService.clearCart();
                setShowSuccessMessage(true);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        checkout,
        localCart,
        isLoading,
        showSuccessMessage,
        checkoutData,
        setShowSuccessMessage,
    };
};
