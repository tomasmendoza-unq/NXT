import type { Product } from "../../../shared/types/Product";
import { SubSections } from "../../../shared/layouts/main/components/subSections/SubSections";
import { ProductCarousel } from "./productCarrousel/ProductCarousel";

export const ProductsContainer = ({ products }: { products: Product[] }) => {
    return (
        <SubSections subTitle="Productos">
            <ProductCarousel products={products} />
        </SubSections>
    );
};
