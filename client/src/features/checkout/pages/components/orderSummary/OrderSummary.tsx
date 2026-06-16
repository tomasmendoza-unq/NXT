import type { Item } from "../../../../cart/types/Item";
import { BankTransferNotice } from "../bankTransfertNotice/BankTransferNotice";
import { OrderSummaryRow } from "../rows/OrderSummaryRow";
import "./style/OrderSummary.css";

export const OrderSummary = ({ items }: { items: Item[] }) => {
    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.detail.price,
        0,
    );

    return (
        <section className="order-summary-container">
            <div className="order-summary-scrollable">
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
                                {item.product.model} x {item.quantity}
                            </span>
                            <span>${item.subTotal.toLocaleString()}</span>
                        </li>
                    ))}
                </ul>

                <OrderSummaryRow
                    label="Total"
                    value={`$${total.toLocaleString()}`}
                />

                <BankTransferNotice />
            </div>

            <button
                type="submit"
                className="checkout-button"
                form="facturation-form"
            >
                Finalizar compra
            </button>
        </section>
    );
};
