import type { ProductProps } from "../../types/Product";
import { SubSections } from "../general/SubSections";
import { ProductsGrid } from "./ProductGrid";

export const ProductsContainer = ({
    products,
}: {
    products: ProductProps[];
}) => {
    return (
        <SubSections subTitle="Productos">
            <ProductsGrid products={products} />
        </SubSections>
    );
};
