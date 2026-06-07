import { useState } from "react";

import "./style/Item.css";
import type { Item } from "../../../../types/Item";
import { QuantitySelector } from "../../../../components/quantitySelector/QuantitySelector";
import { RemoveItem } from "../../../../components/removeItem/RemoveItem";

export const ItemCard = ({ item }: { item: Item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
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
                    setQuantity={setQuantity}
                />
                <RemoveItem />
            </section>
        </article>
    );
};
