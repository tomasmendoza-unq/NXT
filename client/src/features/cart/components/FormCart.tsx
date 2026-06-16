import { useState } from "react";
import { useAddCart } from "../hooks/use-add-cart";
import type { CartItem } from "../../../shared/types/CartItem";
import "./styles/FormCard.css";
import { QuantitySelector } from "./quantitySelector/QuantitySelector";

export const FormCart = ({ detailSelected }: { detailSelected: number }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useAddCart();

    const formData: CartItem = {
        detailId: detailSelected,
        quantity,
    };

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                await addToCart(formData);
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
                Agregar al carrito
            </button>
        </form>
    );
};
