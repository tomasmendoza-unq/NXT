import { useState } from "react";
import type { Product } from "../../../../../../shared/types/Product";
import { FormCart } from "../../../../../cart/components/FormCart";
import { ProductLayout } from "../../../../components/layout/ProductLayout";

export const ProductContent = ({ product }: { product: Product }) => {
    const [selectedColorId, setSelectedColorId] = useState(
        () => product.colors[0]?.id,
    );
    const [selectedDetailId, setSelectedDetailId] = useState(
        () => product.colors[0]?.details[0]?.id,
    );

    return (
        <ProductLayout
            product={product}
            selectedColorId={selectedColorId}
            setSelectedColorId={setSelectedColorId}
            selectedDetailId={selectedDetailId}
            setSelectedDetailId={setSelectedDetailId}
        >
            <section className="product-actions">
                {selectedDetailId ? (
                    <FormCart detailSelected={selectedDetailId} />
                ) : (
                    <p>Por favor, selecciona una combinación válida.</p>
                )}
            </section>
        </ProductLayout>
    );
};
