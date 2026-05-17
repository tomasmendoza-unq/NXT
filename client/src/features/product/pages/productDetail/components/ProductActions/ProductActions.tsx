import type { ChangeEvent, KeyboardEvent } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductActions.css";

interface ProductActionsProps {
    hasStock: boolean;
    maxQuantity: number;
    selectedQuantity: number;
    onAddToCart: () => void;
    onQuantityChange: (quantity: number) => void;
}

export const ProductActions = ({
    hasStock,
    maxQuantity,
    selectedQuantity,
    onAddToCart,
    onQuantityChange,
}: ProductActionsProps) => {
    const updateQuantity = (quantity: number) => {
        if (!hasStock) {
            onQuantityChange(0);
            return;
        }

        const nextQuantity = Math.min(Math.max(quantity, 1), maxQuantity);
        onQuantityChange(nextQuantity);
    };

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (!/^\d+$/.test(value)) {
            return;
        }

        updateQuantity(Number(value));
    };

    const handleQuantityKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "Tab",
        ];

        if (allowedKeys.includes(event.key)) {
            return;
        }

        if (!/^\d$/.test(event.key)) {
            event.preventDefault();
        }
    };

    return (
        <div className="product-actions">
            <div className="product-actions__quantity">
                <label
                    className="product-actions__quantity-label"
                    htmlFor="product-quantity"
                >
                    Cantidad
                </label>
                <div className="product-actions__quantity-control">
                    <button
                        className="product-actions__quantity-button"
                        disabled={!hasStock || selectedQuantity <= 1}
                        onClick={() => updateQuantity(selectedQuantity - 1)}
                        type="button"
                        aria-label="Restar cantidad"
                    >
                        <RemoveIcon fontSize="small" />
                    </button>
                    <input
                        id="product-quantity"
                        className="product-actions__quantity-input"
                        disabled={!hasStock}
                        min={hasStock ? 1 : 0}
                        max={maxQuantity}
                        onChange={handleQuantityChange}
                        onKeyDown={handleQuantityKeyDown}
                        type="number"
                        value={selectedQuantity}
                    />
                    <button
                        className="product-actions__quantity-button"
                        disabled={
                            !hasStock || selectedQuantity >= maxQuantity
                        }
                        onClick={() => updateQuantity(selectedQuantity + 1)}
                        type="button"
                        aria-label="Sumar cantidad"
                    >
                        <AddIcon fontSize="small" />
                    </button>
                </div>
                <p className="product-actions__quantity-help">
                    {hasStock
                        ? `Máximo ${maxQuantity} disponibles`
                        : "Sin stock disponible"}
                </p>
            </div>
            <button
                disabled={
                    !hasStock ||
                    selectedQuantity < 1 ||
                    selectedQuantity > maxQuantity
                }
                className="product-actions__cart-button"
                onClick={onAddToCart}
                type="button"
            >
                <AddShoppingCartIcon fontSize="small" />
                <span>Agregar al carrito</span>
            </button>
        </div>
    );
};
