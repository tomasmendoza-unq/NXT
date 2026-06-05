import "./style/QuantitySelector.css";

export const QuantitySelector = ({
    quantity,
    setQuantity,
}: {
    quantity: number;
    setQuantity: (quantity: number) => void;
}) => {
    return (
        <div className="quantity-selector">
            <button
                type="button"
                className="quantity-button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
                -
            </button>
            <input
                type="number"
                className="quantity-input"
                value={quantity}
                readOnly
            />
            <button
                type="button"
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
            >
                +
            </button>
        </div>
    );
};
