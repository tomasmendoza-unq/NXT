import { useState } from "react";

import "./style/Item.css";
import type { Item } from "../../../../types/Item";
import { QuantitySelector } from "../../../../components/quantitySelector/QuantitySelector";
import { RemoveItem } from "../../../../components/removeItem/RemoveItem";
import { cartService } from "../../../../service/cartService.service";

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

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        cartService.updateQuantity(item.detail.id, newQuantity);
        onQuantityChange(item.detail.id, newQuantity);
    };

    return (
        <article className="item">
            <section className="item-image">
                <img
                    src={item.detail.image}
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
