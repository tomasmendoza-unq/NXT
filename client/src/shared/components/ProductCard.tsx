import type { ProductProps } from "../types/Product";

export const ProductCard = ({ image, name, price, rating }: ProductProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative overflow-hidden bg-gray-200 h-48">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 truncate">
                    {name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-blue-600">
                        ${price}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{rating}</span>
                    </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};
