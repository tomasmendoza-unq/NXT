import type { ProductProps } from "../../../shared/types/Product";

interface ProductInfoProps {
    product: ProductProps;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
                {product.productBrand.name.toUpperCase()}
            </p>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {product.name}
            </h1>
        </div>
    );
};
