import { ProductsContainer } from "../../product/components/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import { useGetAllProducts } from "../../product";
import { useGetAllBrands } from "../../brand";
import { BrandsContainer } from "../../brand/components/BrandsContainer";

export const Home = () => {
    const { products, fetch } = useGetAllProducts();
    const { brands, fetch: fetchBrands } = useGetAllBrands();

    useEffect(() => {
        fetch(0, 10);
        fetchBrands();
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <section className="w-full mx-auto section-container">
            <ProductsContainer products={products} />
            <BrandsContainer brands={brands} />
        </section>
    );
};
