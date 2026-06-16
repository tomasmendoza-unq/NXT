import { useState } from "react";

import "./style/Item.css";
import type { Item } from "../../../../types/Item";
import { QuantitySelector } from "../../../../components/quantitySelector/QuantitySelector";
import { RemoveItem } from "../../../../components/removeItem/RemoveItem";
import { cartService } from "../../../../service/cartService.service";
import { checkStock } from "../../../../service/check-stock.service";
import { useToast } from "../../../../../toast/hooks/toast/useToast";

export const ItemCard = ({
    item,
    onQuantityChange,
    onRemove,
}: {
    item: Item;
    onQuantityChange: (detailId: number, newQuantity: number) => void;
    onRemove: (detailId: number) => void;
}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const { showToast } = useToast();

    const handleQuantityChange = async (newQuantity: number) => {
        const hasStock = await checkStock(item.detail.id, newQuantity);

        if (!hasStock) {
            showToast({ message: "Sin stock disponible", severity: "error" });
            return;
        }

        setQuantity(newQuantity);
        cartService.updateQuantity(item.detail.id, newQuantity);
        onQuantityChange(item.detail.id, newQuantity);
    };

    return (
        <article className="item">
            <section className="item-image">
                <img
                    src={item.color.image}
                    alt={item.product.name}
                />
            </section>
            <section className="item-details">
                <h2>{item.product.name}</h2>
                <p>${item.subTotal.toFixed(2)}</p>
                <p>
                    {item.color.name.toUpperCase()} | {item.detail.size}
                </p>
            </section>
            <section className="item-actions">
                <QuantitySelector
                    quantity={quantity}
                    onIncrement={() => handleQuantityChange(quantity + 1)}
                    onDecrement={() =>
                        handleQuantityChange(Math.max(1, quantity - 1))
                    }
                />
                <RemoveItem onRemove={() => onRemove(item.detail.id)} />
            </section>
        </article>
    );
};
