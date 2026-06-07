import { useEffect } from "react";
import { useGetPreviewCart } from "../../hooks/use-get-preview-cart";
import { ItemCard } from "./components/ItemCard";
import "./style/Cart.css";

export const Cart = () => {
    const { fetch, items } = useGetPreviewCart();

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        console.log("Cart items:", items);
    }, [items]);
    return items.length === 0 ? (
        <p>Carrito está vacío</p>
    ) : (
        <main className="cart-container">
            <section className="cart-content">
                <h1>Carrito</h1>

                <ul className="cart-items">
                    {items.map((item, index) => (
                        <li key={item.product.id}>
                            <ItemCard item={item} />
                            {index < items.length - 1 && (
                                <hr className="cart-divider" />
                            )}
                        </li>
                    ))}
                </ul>
            </section>
            <aside className="cart-summary">
                <h2>Resumen del carrito</h2>
                <p>Total de artículos: {items.length}</p>
                <p>
                    Total a pagar: $
                    {items.reduce(
                        (total, item) =>
                            total + item.detail.price * item.quantity,
                        0,
                    )}
                </p>
            </aside>
        </main>
    );
};
