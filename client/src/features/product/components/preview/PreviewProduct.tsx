import { toProductPreview } from "../../adapters/product-request.adapater";
import type { ProductRequestDTO } from "../../api/types/product-request";
import { ProductLayout } from "../layout/ProductLayout";

export const PreviewProduct = ({ product }: { product: ProductRequestDTO }) => {
    return (
        <div className="preview-product">
            <ProductLayout product={toProductPreview(product)} />
        </div>
    );
};
