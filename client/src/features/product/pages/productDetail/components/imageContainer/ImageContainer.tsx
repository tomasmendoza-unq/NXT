import "./style/ImagenContainer.css";
import type { Product } from "../../../../../../shared/types/Product";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";
import { useState } from "react";
import { Carrusel } from "../../../../../../shared/components/carrusel/Carrusel";

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

    const [imageSelected, setImageSelected] = useState<string | null>(null);

    const imageToShow = imageSelected ?? detail.image;

    const gallery = [detail.image, ...detail.gallery];

    return (
        <section className="image-container">
            <Carrusel
                images={gallery}
                onImageSelect={setImageSelected}
            />
            <img
                src={imageToShow}
                alt={alt}
            />
        </section>
    );
};
