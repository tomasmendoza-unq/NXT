import { ProductsContainer } from "../../product/components/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import { BrandsContainer } from "../../brand/components/BrandsContainer";
import useGetAllProducts from "../../product/hooks/use-get-all-products";
import useGetAllBrands from "../../brand/hooks/use-get-all-brands";

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
