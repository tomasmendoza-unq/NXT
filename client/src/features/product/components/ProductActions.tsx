interface ProductActionsProps {
    hasStock: boolean;
}

export const ProductActions = ({ hasStock }: ProductActionsProps) => {
    return (
        <div className="space-y-3 mb-6">
            <button
                disabled={!hasStock}
                className={`w-full py-3 rounded font-bold text-white text-lg transition ${
                    hasStock
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                Comprar ahora
            </button>
            <button
                disabled={!hasStock}
                className={`w-full py-3 rounded font-bold text-lg border-2 transition ${
                    hasStock
                        ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                        : "border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
            >
                Agregar al carrito
            </button>
        </div>
    );
};
