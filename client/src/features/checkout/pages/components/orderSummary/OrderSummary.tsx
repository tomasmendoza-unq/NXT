import type { Item } from "../../../../cart/types/Item";

export const OrderSummary = ({ items }: { items: Item[] }) => {
    return (
        <div className="order-summary-container">
            <h2>Resumen del pedido</h2>
            <ul className="order-summary-list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="order-summary-item"
                    >
                        <span>{item.product.name}</span>
                        <span>
                            {item.quantity} x $
                            {item.detail.price.toLocaleString()}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="order-summary-total">
                <span>Total:</span>
                <span>
                    $
                    {items
                        .reduce(
                            (total, item) =>
                                total + item.quantity * item.detail.price,
                            0,
                        )
                        .toLocaleString()}
                </span>
            </div>
        </div>
    );
};
