import { ProductsContainer } from "../../../shared/components/product/ProductsContainer";
import { BrandsContainer } from "../../../shared/components/brand/BrandsContainer";
import { TitleContainer } from "../../../shared/components/general/TitleContainer";
import { featuredProducts } from "./mockProducts";
import { brands } from "./mockBrands";
import "./styles/style.css";

export const Home = () => {
    return (
        <section className="w-full mx-auto section-container">
            <TitleContainer title="NC" />
            <ProductsContainer products={featuredProducts} />
            <BrandsContainer brands={brands} />
        </section>
    );
};
