import type { Dispatch, SetStateAction } from "react";
import "./style/ProductColorOptions.css";
import type { Color } from "../../../../../../shared/types/Color";

interface ProductColorOptionsProps {
    colors: Color[];
    selectedColorId: number;
    setSelectedColorId: Dispatch<SetStateAction<number>>;
    setSelectedDetailId: Dispatch<SetStateAction<number>>;
}

export const ProductColorOptions = ({
    colors,
    selectedColorId,
    setSelectedColorId,
    setSelectedDetailId,
}: ProductColorOptionsProps) => {
    const selectedColor = colors.find((color) => color.id === selectedColorId);

    return (
        <section className="product-color-options">
            <h3>Color: {selectedColor?.name}</h3>
            <div className="product-color-option-list">
                {colors.map((color) => (
                    <button
                        key={color.id}
                        className={
                            color.id === selectedColorId
                                ? "product-color-option product-color-option-selected"
                                : "product-color-option"
                        }
                        style={{ backgroundColor: color.color }}
                        type="button"
                        aria-label={color.name}
                        title={color.name}
                        onClick={() => {
                            setSelectedColorId(color.id);
                            setSelectedDetailId(color.details[0]?.id);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};
