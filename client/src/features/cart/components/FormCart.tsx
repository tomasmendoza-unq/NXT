import { useState } from "react";
import { useAddCart } from "../hooks/use-add-cart";
import type { CartItem } from "../../../shared/types/CartItem";
import "./styles/FormCard.css";
import { QuantitySelector } from "./quantitySelector/QuantitySelector";
import { useToast } from "../../../shared/hooks/toast/useToast";

export const FormCart = ({ detailSelected }: { detailSelected: number }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useAddCart();
    const { showToast } = useToast();

    const formData: CartItem = {
        detailId: detailSelected,
        quantity,
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addToCart(formData);
                showToast({ message: "Producto agregado al carrito" });
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
        </form>
    );
};
