import { ProductsContainer } from "../../../shared/components/product/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import { useGetAllProducts } from "../../product";
import { useGetAllBrands } from "../../brand";
import { BrandsContainer } from "../../../shared/components/brand/BrandsContainer";

export const Home = () => {
    const { products, fetch } = useGetAllProducts();
    const { brands, fetch: fetchBrands } = useGetAllBrands();

    useEffect(() => {
        fetch(0, 10);
        fetchBrands();
    }, []);

    return (
        <section className="w-full mx-auto section-container">
            <ProductsContainer products={products} />
            <BrandsContainer brands={brands} />
        </section>
    );
};
