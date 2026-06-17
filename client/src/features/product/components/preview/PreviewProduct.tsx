import { useState } from "react";
import { toProductPreview } from "../../adapters/product-request.adapater";
import type { ProductRequestDTO } from "../../api/types/product-request";
import { ProductLayout } from "../layout/ProductLayout";

export const PreviewProduct = ({ product }: { product: ProductRequestDTO }) => {
    const mappedProduct = toProductPreview(product);

    const [selectedColorId, setSelectedColorId] = useState<number>(
        () => mappedProduct.colors[0]?.id ?? 0,
    );
    const [selectedDetailId, setSelectedDetailId] = useState<number>(
        () => mappedProduct.colors[0]?.details[0]?.id ?? 0,
    );

    return (
        <div className="preview-product">
            <ProductLayout
                product={mappedProduct}
                selectedColorId={selectedColorId}
                setSelectedColorId={setSelectedColorId}
                selectedDetailId={selectedDetailId}
                setSelectedDetailId={setSelectedDetailId}
            />
        </div>
    );
};
