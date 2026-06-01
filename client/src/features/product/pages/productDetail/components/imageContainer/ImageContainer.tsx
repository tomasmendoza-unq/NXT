import { useMemo } from "react";
import type { ProductProps } from "../../../../../../shared/types/Product";
import "./style/ImagenContainer.css";

interface ImagenContainerProps {
    product: ProductProps;
    selectedColorId: number;
    alt: string;
}

export const ImagenContainer = ({
    product,
    selectedColorId,
    alt,
}: ImagenContainerProps) => {
    const selectedImage = useMemo(() => {
        return (
            product.productVariants.find(
                (variant) => variant.color.id === selectedColorId,
            )?.image ?? product.productVariants[0]?.image
        );
    }, [product.productVariants, selectedColorId]);

    return (
        <section className="image-container">
            <img
                src={selectedImage}
                alt={alt}
            />
        </section>
    );
};
