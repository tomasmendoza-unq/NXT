import type { Item } from "../../../../types/Item";
import { ItemCard } from "../itemCard/ItemCard";

export const CartContent = ({ items }: { items: Item[] }) => {
    return (
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
    );
};
