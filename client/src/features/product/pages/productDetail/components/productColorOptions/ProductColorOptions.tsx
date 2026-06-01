import type { Dispatch, SetStateAction } from "react";
import type { ProductVariant } from "../../../../../../shared/types/ProductDetails";
import "./style/ProductColorOptions.css";

interface ProductColorOptionsProps {
    variants: ProductVariant[];
    selectedColorId: number;
    setSelectedColorId: Dispatch<SetStateAction<number>>;
    setSelectedDetailId: Dispatch<SetStateAction<number>>;
}

export const ProductColorOptions = ({
    variants,
    selectedColorId,
    setSelectedColorId,
    setSelectedDetailId,
}: ProductColorOptionsProps) => {
    const selectedColor = variants.find(
        (variant) => variant.color.id === selectedColorId,
    )?.color;

    return (
        <section className="product-color-options">
            <h3>Color: {selectedColor?.name}</h3>
            <div className="product-color-option-list">
                {variants.map((variant) => (
                    <button
                        key={variant.color.id}
                        className={
                            variant.color.id === selectedColorId
                                ? "product-color-option product-color-option-selected"
                                : "product-color-option"
                        }
                        style={{ backgroundColor: variant.color.color }}
                        type="button"
                        aria-label={variant.color.name}
                        title={variant.color.name}
                        onClick={() => {
                            setSelectedColorId(variant.color.id);
                            setSelectedDetailId(variant.sizes[0]?.id);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};
