import "./style/ImagenContainer.css";
import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";
import { Gallery } from "../../../../../../shared/components/gallery/Gallery";

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
                <Gallery
                    items={gallery}
                    renderItem={(image) => (
                        <img
                            className="gallery-image"
                            src={image}
                            alt="thumbnail"
                        />
                    )}
                    onItemSelect={setImageSelected}
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
