import type { Item } from "../../../../cart/types/Item";
import "./style/OrderSummary.css";

export const OrderSummary = ({
    items,
    onCheckout,
}: {
    items: Item[];
    onCheckout: () => void;
}) => {
    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.detail.price,
        0,
    );

    return (
        <section className="order-summary-container">
            <h2 className="order-summary-title">Tu pedido</h2>

            <div className="order-summary-header">
                <span>Producto</span>
                <span>Subtotal</span>
            </div>

            <ul className="order-summary-list">
                {items.map((item) => (
                    <li
                        key={item.detail.id}
                        className="order-summary-item"
                    >
                        <span>
                            {item.product.name} x {item.quantity}
                        </span>
                        <span>${item.subTotal.toLocaleString()}</span>
                    </li>
                ))}
            </ul>

            <div className="order-summary-row">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
            </div>

            <div className="order-summary-row order-summary-total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
            </div>
            <button
                onClick={onCheckout}
                className="checkout-button"
            >
                Finalizar compra
            </button>
        </section>
    );
};
