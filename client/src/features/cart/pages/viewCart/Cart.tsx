import { useEffect } from "react";
import { useGetPreviewCart } from "../../hooks/use-get-preview-cart";
import "./style/Cart.css";
import { Summary } from "./components/summary/Summary";
import { CartContent } from "./components/content/CartContent";

export const Cart = () => {
    const { fetch, items } = useGetPreviewCart();

    useEffect(() => {
        fetch();
    }, []);

    return items.length === 0 ? (
        <p>Carrito está vacío</p>
    ) : (
        <main className="cart-container">
            <CartContent items={items} />
            <Summary items={items} />
        </main>
    );
};
