import { useState } from "react";
import { QuantitySelector } from "./quantitySelector/QuantitySelector";
import "./styles/FormCard.css";
import type { CartItem } from "../../../shared/types/CartItem";
import { useAddCart } from "../hooks/use-add-cart";

export const FormCart = ({ detailSelected }: { detailSelected: number }) => {
    const [quantity, setQuantity] = useState(1);
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
            }}
            className="form-card"
        >
            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
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
