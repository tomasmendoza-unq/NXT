import { ProductsContainer } from "../../../shared/components/ProductsContainer";
import { TitleContainer } from "../../../shared/components/TitleContainer";
import { featuredProducts } from "./mockProducts";

export const Home = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <TitleContainer title="Productos Destacados" />
            <ProductsContainer products={featuredProducts} />
        </section>
    );
};
