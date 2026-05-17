import "./ProductPrice.css";

interface ProductPriceProps {
    price: number;
    quantity: number;
}

export const ProductPrice = ({ price, quantity }: ProductPriceProps) => {
    const hasStock = quantity > 0;

    return (
        <div className="product-price">
            <p className="product-price__label">Precio</p>
            <div className="product-price__value">${price.toLocaleString()}</div>
            <p
                className={
                    hasStock
                        ? "product-price__stock product-price__stock--ok"
                        : "product-price__stock product-price__stock--out"
                }
            >
                {hasStock
                    ? `${quantity} unidades disponibles`
                    : "Sin stock disponible"}
            </p>
        </div>
    );
};
