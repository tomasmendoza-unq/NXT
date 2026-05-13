interface ProductPriceProps {
    price: number;
    quantity: number;
}

export const ProductPrice = ({ price, quantity }: ProductPriceProps) => {
    return (
        <div className="mb-6 pb-6 border-b">
            <p className="text-sm text-gray-500 mb-2">Precio</p>
            <div className="text-4xl font-bold text-gray-900 mb-2">
                ${price.toLocaleString()}
            </div>
            <p className="text-sm text-green-600">
                En stock • {quantity} unidades disponibles
            </p>
        </div>
    );
};
