import { useState } from "react";
import { useAddCart } from "../hooks/use-add-cart";
import type { CartItem } from "../../../shared/types/CartItem";
import "./styles/FormCard.css";
import { QuantitySelector } from "./quantitySelector/QuantitySelector";
import { Toast } from "../../../shared/components/toast/Toast";

export const FormCart = ({ detailSelected }: { detailSelected: number }) => {
    const [quantity, setQuantity] = useState(1);
    const [toastOpen, setToastOpen] = useState(false);
    const { addToCart } = useAddCart();

    const formData: CartItem = {
        detailId: detailSelected,
        quantity,
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addToCart(formData);
                setToastOpen(true);
            }}
            className="form-card"
        >
            <QuantitySelector
                quantity={quantity}
                onIncrement={() => setQuantity(quantity + 1)}
                onDecrement={() => setQuantity(Math.max(1, quantity - 1))}
            />

            <button
                type="submit"
                className="add-to-card-button"
            >
                Add to Card
            </button>

            <Toast
                open={toastOpen}
                message="Producto agregado al carrito"
                onClose={() => setToastOpen(false)}
            />
        </form>
    );
};
