import type { ProductProps } from "../../../shared/types/Product";
import { SubSections } from "../../../shared/layouts/main/components/titleContainer/SubSections";
import { ProductCarousel } from "./ProductCarousel";

export const ProductsContainer = ({
    products,
}: {
    products: ProductProps[];
}) => {
    return (
        <SubSections subTitle="Productos">
            <ProductCarousel products={products} />
        </SubSections>
    );
};
