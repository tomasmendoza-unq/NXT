import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";
import "./style/DetailInfo.css";

interface ProductDetailInfoProps {
    product: Product;
    selectedColorId: number;
    selectedDetailId: number;
}

export const ProductDetailInfo = ({
    product,
    selectedColorId,
    selectedDetailId,
}: ProductDetailInfoProps) => {
    const { detail } = useSelectedVariant(
        product,
        selectedColorId,
        selectedDetailId,
    );
    return (
        <section className="product-info">
            <h1>
                {product.brand.name} {product.model}
            </h1>
            <h2>${detail.price.toFixed(2)}</h2>
        </section>
    );
};
