import type { ProductProps } from "../../../shared/types/Product";

interface ProductCharacteristicsProps {
    product: ProductProps;
}

export const ProductCharacteristics = ({
    product,
}: ProductCharacteristicsProps) => {
    return (
        <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
                Características del producto
            </h3>
            <div className="space-y-4">
                {product.productDetails.map((detail) => (
                    <div
                        key={detail.id}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b last:border-0"
                    >
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Talla</p>
                            <p className="font-semibold text-gray-900">
                                {detail.size}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Color</p>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full border border-gray-300"
                                    style={{
                                        backgroundColor: detail.color.color,
                                    }}
                                />
                                <p className="font-semibold text-gray-900">
                                    {detail.color.name}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Precio</p>
                            <p className="font-semibold text-gray-900">
                                ${detail.price.toLocaleString()}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Stock</p>
                            <p className="font-semibold text-gray-900">
                                {detail.quantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
