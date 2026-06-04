import { useMemo } from "react";
import type { Product } from "../../../shared/types/Product";
import type { ProductDetails } from "../../../shared/types/ProductDetails";
import type { Color } from "../../../shared/types/Color";

interface SelectedVariant {
    variant: Color;
    detail: ProductDetails;
}

export const useSelectedVariant = (
    product: Product,
    selectedColorId: number,
    selectedDetailId: number,
): SelectedVariant => {
    return useMemo(() => {
        const variant =
            product.colors.find((c) => c.id === selectedColorId) ??
            product.colors[0];

        const detail =
            variant.details.find((d) => d.id === selectedDetailId) ??
            variant.details[0];

        return { variant, detail };
    }, [product.colors, selectedColorId, selectedDetailId]);
};
