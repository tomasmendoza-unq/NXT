import { useState } from "react";
import { QuantitySelector } from "./quantitySelector/QuantitySelector";
import "./styles/FormCard.css";

export const FormCard = ({
    colorSelected,
    detailSelected,
}: {
    colorSelected?: number;
    detailSelected?: number;
}) => {
    const [quantity, setQuantity] = useState(1);
    const formData = {
        colorId: colorSelected,
        detailId: detailSelected,
        quantity,
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted:", formData);
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
