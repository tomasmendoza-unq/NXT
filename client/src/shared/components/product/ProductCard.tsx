import type { ProductProps } from "../../types/Product";
import { ProductImage } from "./ProductImage";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
    id,
    name,
    productModel,
    productDetails,
}: ProductProps) => {
    const navigate = useNavigate();
    const price = productDetails[0]?.price ?? 0;
    const productImage = productDetails[0]?.image;

    return (
        <div
            onClick={() => navigate(`/product/${id}`)}
            className="bg-white rounded-none overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
        >
            <ProductImage
                image={productImage}
                name={name}
            />
            <div className="px-2 py-2">
                <h3 className="font-semibold text-gray-900 mb-1 text-xs">
                    {name}
                </h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-1">
                    {productModel}
                </p>
                <p className="text-orange-600 font-bold text-sm">
                    ${price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};
