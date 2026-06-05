import { type Dispatch, type SetStateAction } from "react";
import type { Product } from "../../../../../../shared/types/Product";
import "./style/ProductSizeOptions.css";
import { useSelectedVariant } from "../../../../hooks/use-select-variant";

interface ProductSizeOptionsProps {
    product: Product;
    selectedColorId: number;
    selectedDetailId: number;
    setSelectedDetailId: Dispatch<SetStateAction<number>>;
}

export const ProductSizeOptions = ({
    product,
    selectedColorId,
    selectedDetailId,
    setSelectedDetailId,
}: ProductSizeOptionsProps) => {
    const { variant, detail } = useSelectedVariant(
        product,
        selectedColorId,
        selectedDetailId,
    );

    return (
        <section className="product-size-options">
            <h3>Talle: {detail.size}</h3>
            <div className="product-size-option-list">
                {variant.details.map((d) => (
                    <button
                        key={d.id}
                        className={
                            d.id === selectedDetailId
                                ? "product-size-option product-size-option-selected"
                                : "product-size-option"
                        }
                        type="button"
                        onClick={() => setSelectedDetailId(d.id)}
                    >
                        {d.size}
                    </button>
                ))}
            </div>
        </section>
    );
};
