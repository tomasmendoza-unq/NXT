import type { ProductProps } from "../../../shared/types/Product";

interface ProductSelectorsProps {
    product: ProductProps;
    selectedDetail: number;
    onSelectDetail: (index: number) => void;
}

export const ProductSelectors = ({
    product,
    selectedDetail,
    onSelectDetail,
}: ProductSelectorsProps) => {
    const currentDetail = product.productDetails[selectedDetail];

    return (
        <div className="mb-6 space-y-6">
            {/* Color */}
            <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">
                    Color:{" "}
                    <span className="text-gray-600">
                        {currentDetail?.color.name}
                    </span>
                </p>
                <div className="flex gap-3 flex-wrap">
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`flex items-center gap-2 px-4 py-2 rounded border-2 transition ${
                                selectedDetail === idx
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-300 hover:border-gray-400"
                            }`}
                        >
                            <div
                                className="w-5 h-5 rounded-full border border-gray-300"
                                style={{
                                    backgroundColor: detail.color.color,
                                }}
                            />
                            <span className="text-sm">{detail.color.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Talla */}
            <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">
                    Talla:{" "}
                    <span className="text-gray-600">{currentDetail?.size}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`px-6 py-2 rounded border-2 font-semibold transition ${
                                selectedDetail === idx
                                    ? "border-blue-600 bg-blue-50 text-blue-600"
                                    : "border-gray-300 hover:border-gray-400"
                            }`}
                        >
                            {detail.size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
