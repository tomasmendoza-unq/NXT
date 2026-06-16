import type { Product } from "../../../../../../shared/types/Product";
import { FormCart } from "../../../../../cart/components/FormCart";
import { ProductLayout } from "../../../../components/layout/ProductLayout";

export const ProductContent = ({ product }: { product: Product }) => {
    const selectedDetailId = product.colors[0]?.details[0]?.id;

    return (
        <ProductLayout product={product}>
            <section className="product-actions">
                <FormCart detailSelected={selectedDetailId} />
            </section>
        </ProductLayout>
    );
};
