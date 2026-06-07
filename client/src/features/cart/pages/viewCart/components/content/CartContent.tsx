import type { Item } from "../../../../types/Item";
import { ItemCard } from "../itemCard/ItemCard";

export const CartContent = ({
    items,
    onQuantityChange,
    onRemove,
}: {
    items: Item[];
    onQuantityChange: (detailId: number, newQuantity: number) => void;
    onRemove: (detailId: number) => void;
}) => {
    return (
        <section className="cart-content">
            <h1>Carrito</h1>

            <ul className="cart-items">
                {items.map((item, index) => (
                    <li key={item.detail.id}>
                        <ItemCard
                            item={item}
                            onQuantityChange={onQuantityChange}
                            onRemove={onRemove}
                        />
                        {index < items.length - 1 && (
                            <hr className="cart-divider" />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};
