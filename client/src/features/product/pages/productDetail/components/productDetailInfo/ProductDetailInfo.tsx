import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";

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
        <section>
            <h3>{product.name}</h3>
            <h4>${detail.price.toFixed(2)}</h4>
        </section>
    );
};
