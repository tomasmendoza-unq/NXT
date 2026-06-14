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
    const { detail } = useSelectedVariant(
        product,
        selectedColorId,
        selectedDetailId,
    );

    const imageToShow = imageSelected ?? detail.image;

    const gallery = [detail.image, ...detail.gallery];

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
                alt={alt}
            />
        </section>
    );
};
