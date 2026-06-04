import "./style/ImagenContainer.css";
import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";

interface ImagenContainerProps {
    product: Product;
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
    const { detail } = useSelectedVariant(
        product,
        selectedColorId,
        selectedDetailId,
    );
    return (
        <section className="image-container">
            <>
                <img
                    src={detail.image}
                    alt={alt}
                />
            </>
        </section>
    );
};
