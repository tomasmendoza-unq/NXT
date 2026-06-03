import { useMemo } from "react";
import type { ProductProps } from "../../../../../../shared/types/Product";
import "./style/ImagenContainer.css";

interface ImagenContainerProps {
    product: ProductProps;
    selectedColorId: number;
    selectedDetailId: number;
    alt: string;
}

export const ImagenContainer = ({
    product,
    selectedColorId,
    selectedDetailId,
    alt,
}: ImagenContainerProps) => {
    const selectedImage = useMemo(() => {
        const selectedVariant =
            product.productVariants.find(
                (variant) => variant.color.id === selectedColorId,
            ) ?? product.productVariants[0];

        const selectedSize =
            selectedVariant?.sizes.find(
                (size) => size.id === selectedDetailId,
            ) ?? selectedVariant?.sizes[0];

        return (
            selectedSize?.image ??
            selectedVariant?.image ??
            product.productVariants[0]?.image
        );
    }, [product.productVariants, selectedColorId, selectedDetailId]);

    return (
        <section className="image-container">
            <>
                <img
                    src={selectedImage}
                    alt={alt}
                />
            </>
        </section>
    );
};
