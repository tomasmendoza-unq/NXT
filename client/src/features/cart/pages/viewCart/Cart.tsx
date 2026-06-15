import { useEffect } from "react";
import { useGetPreviewCart } from "../../hooks/use-get-preview-cart";
import "./style/Cart.css";
import { Summary } from "./components/summary/Summary";
import { CartContent } from "./components/content/CartContent";
import { cartService } from "../../service/cartService.service";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";

export const Cart = () => {
    const { fetch, items, setItems, isLoading } = useGetPreviewCart();

    useEffect(() => {
        fetch();
    }, []);

    const handleQuantityChange = (detailId: number, newQuantity: number) => {
        setItems((prev) =>
            prev.map((i) =>
                i.detail.id === detailId
                    ? {
                          ...i,
                          quantity: newQuantity,
                          subTotal: i.detail.price * newQuantity,
                      }
                    : i,
            ),
        );
    };

    const handleRemove = (detailId: number) => {
        cartService.removeItem(detailId);
        setItems((prev) => prev.filter((i) => i.detail.id !== detailId));
    };

    return items.length === 0 ? (
        <h1>Tu carrito está vacío.</h1>
    ) : (
        <main className="cart-container">
            <h1>Carrito</h1>
            {isLoading && <LoadingSpinner overlay />}
            <CartContent
                items={items}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
            />
            <Summary items={items} />
        </main>
    );
};
