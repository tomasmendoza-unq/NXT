import type { Item } from "../../../../types/Item";

export const Summary = ({ items }: { items: Item[] }) => {
    return (
        <aside className="cart-summary">
            <h2>Resumen del carrito</h2>
            <p>Total de artículos: {items.length}</p>
            <p>
                Total a pagar: $
                {items.reduce(
                    (total, item) => total + item.detail.price * item.quantity,
                    0,
                )}
            </p>
        </aside>
    );
};
