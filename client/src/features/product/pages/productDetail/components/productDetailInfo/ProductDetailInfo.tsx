import { useMemo } from "react";
import type { ProductProps } from "../../../../../../shared/types/Product";

interface ProductDetailInfoProps {
    product: ProductProps;
    selectedColorId: number;
    selectedDetailId: number;
}

export const ProductDetailInfo = ({
    product,
    selectedColorId,
    selectedDetailId,
}: ProductDetailInfoProps) => {
    const detail = useMemo(() => {
        const selectedVariant =
            product.productVariants.find(
                (variant) => variant.color.id === selectedColorId,
            ) ?? product.productVariants[0];

        const selectedSize =
            selectedVariant?.sizes.find(
                (size) => size.id === selectedDetailId,
            ) ?? selectedVariant?.sizes[0];

        return {
            ...selectedSize,
            color: selectedVariant.color,
            image: selectedVariant.image,
        };
    }, [product.productVariants, selectedColorId, selectedDetailId]);

    return (
        <section>
            <h3>{product.name}</h3>
            <h4>${detail.price.toFixed(2)}</h4>
        </section>
    );
};
