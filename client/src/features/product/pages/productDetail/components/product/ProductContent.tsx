import { useState } from "react";
import type { Product } from "../../../../../../shared/types/Product";
import { FormCart } from "../../../../../cart/components/FormCart";
import { ProductLayout } from "../../../../components/layout/ProductLayout";

export const ProductContent = ({ product }: { product: Product }) => {
    const [selectedDetailId, setSelectedDetailId] = useState(
        () => product.colors[0]?.details[0]?.id,
    );

    return (
        <ProductLayout product={product}>
            <section className="product-actions">
                <FormCart detailSelected={selectedDetailId} />
            </section>
        </ProductLayout>
    );
};
