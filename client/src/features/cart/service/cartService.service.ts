import type { CartItem } from "../../../shared/types/CartItem";

const CART_KEY = "cart";

export const cartService = {
    getCart: (): CartItem[] => {
        try {
            const stored = localStorage.getItem(CART_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    },

    saveCart: (cart: CartItem[]): void => {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    },

    updateQuantity: (detailId: number, quantity: number): void => {
        const cart = cartService.getCart();
        const updated = cart.map((item) =>
            item.detailId === detailId ? { ...item, quantity } : item,
        );
        cartService.saveCart(updated);
    },

    removeItem: (detailId: number): void => {
        const cart = cartService.getCart();
        const updated = cart.filter((item) => item.detailId !== detailId);
        cartService.saveCart(updated);
    },

    clearCart: (): void => {
        localStorage.removeItem(CART_KEY);
    },

    getOrderPayload: (): CartItem[] => {
        return cartService.getCart();
    },
};
