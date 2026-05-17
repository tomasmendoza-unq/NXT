import type { ProductProps } from "../../../../../../shared/types/Product";
import "./ProductInfo.css";

interface ProductInfoProps {
    product: ProductProps;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="product-info">
            <p className="product-info__brand">{product.productBrand.name}</p>
            <h1 className="product-info__title">{product.name}</h1>
            {product.productModel && (
                <p className="product-info__model">{product.productModel}</p>
            )}
        </div>
    );
};
