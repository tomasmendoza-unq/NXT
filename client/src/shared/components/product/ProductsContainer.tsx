import type { ProductProps } from "../../types/Product";
import { SubSections } from "../general/SubSections";
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
