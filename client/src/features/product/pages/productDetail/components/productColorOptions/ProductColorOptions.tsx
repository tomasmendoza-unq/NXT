import type { Dispatch, SetStateAction } from "react";
import type { Color } from "../../../../../../shared/types/Color";
import { ColorOptionList } from "../../../../../color/components/colorList/ColorList";

interface ProductColorOptionsProps {
    colors: Color[];
    selectedColorId: number;
    setSelectedColorId: Dispatch<SetStateAction<number>>;
    setSelectedDetailId: Dispatch<SetStateAction<number>>;
    setImageSelected: Dispatch<SetStateAction<string | null>>;
}

export const ProductColorOptions = ({
    colors,
    selectedColorId,
    setSelectedColorId,
    setSelectedDetailId,
    setImageSelected,
}: ProductColorOptionsProps) => {
    const onSelectColor = (color: Color) => {
        setSelectedColorId(color.id);

        if (color.details[0]?.id) {
            setSelectedDetailId(color.details[0].id);
        }

        setImageSelected(null);
    };

    return (
        <section className="product-color-options">
            <h3>Colores:</h3>

            <ColorOptionList
                colors={colors}
                selectedColorId={selectedColorId}
                onSelect={onSelectColor}
            />
        </section>
    );
};
