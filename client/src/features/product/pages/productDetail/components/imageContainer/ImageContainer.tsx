import "./style/ImagenContainer.css";
import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";
import { Carrusel } from "../../../../../../shared/components/carrusel/Carrusel";

interface ImagenContainerProps {
    product: Product;
    selectedColorId: number;
    selectedDetailId: number;
    alt: string;
    setImageSelected: (image: string | null) => void;
    imageSelected: string | null;
}

export const ImagenContainer = ({
    product,
    selectedColorId,
    selectedDetailId,
    alt,
    setImageSelected,
    imageSelected,
}: ImagenContainerProps) => {
    const { variant } = useSelectedVariant(
        product,
        selectedColorId,
        selectedDetailId,
    );

    const imageToShow = imageSelected ?? variant.image;

    const gallery = [variant.image, ...variant.gallery];

    return (
        <section className="image-container">
            {gallery.length > 1 && (
                <Carrusel
                    images={gallery}
                    onImageSelect={setImageSelected}
                />
            )}

            <img
                src={imageToShow}
                className="image-primary"
                alt={alt}
            />
        </section>
    );
};
