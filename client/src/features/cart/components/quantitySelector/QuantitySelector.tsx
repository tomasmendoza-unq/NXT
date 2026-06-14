import "./style/QuantitySelector.css";

export const QuantitySelector = ({
    quantity,
    onIncrement,
    onDecrement,
}: {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}) => {
    return (
        <div className="quantity-selector">
            <button
                type="button"
                className="quantity-button"
                onClick={onDecrement}
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
                onClick={onIncrement}
            >
                +
            </button>
        </div>
    );
};
