import { useMemo, type Dispatch, type SetStateAction } from "react";
import type { ProductProps } from "../../../../../../shared/types/Product";
import "./style/ProductSizeOptions.css";

interface ProductSizeOptionsProps {
    product: ProductProps;
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
    const sizes = useMemo(() => {
        const selectedVariant =
            product.productVariants.find(
                (variant) => variant.color.id === selectedColorId,
            ) ?? product.productVariants[0];

        return selectedVariant?.sizes ?? [];
    }, [product.productVariants, selectedColorId]);

    const selectedSize = sizes.find((size) => size.id === selectedDetailId);

    return (
        <section className="product-size-options">
            <h3>Talle: {selectedSize?.size}</h3>
            <div className="product-size-option-list">
                {sizes.map((detail) => (
                    <button
                        key={detail.id}
                        className={
                            detail.id === selectedDetailId
                                ? "product-size-option product-size-option-selected"
                                : "product-size-option"
                        }
                        type="button"
                        onClick={() => setSelectedDetailId(detail.id)}
                    >
                        {detail.size}
                    </button>
                ))}
            </div>
        </section>
    );
};
