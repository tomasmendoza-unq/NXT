import { ProductsContainer } from "../../product/components/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import { BrandsContainer } from "../../brand/components/BrandsContainer";
import useGetAllProducts from "../../product/hooks/use-get-all-products";
import useGetAllBrands from "../../brand/hooks/use-get-all-brands";
import { LoadingSpinner } from "../../../shared/components/loadingSpinner/LoadingSpinner";

export const Home = () => {
    const { products, fetch, isLoading } = useGetAllProducts();
    const {
        brands,
        fetch: fetchBrands,
        isLoading: isLoadingBrands,
    } = useGetAllBrands();

    useEffect(() => {
        fetch(0, 10);
        fetchBrands();
    }, []);

    return (
        <section className="section-container">
            {(isLoading || isLoadingBrands) && <LoadingSpinner overlay />}
            <ProductsContainer products={products} />
            <BrandsContainer brands={brands} />
        </section>
    );
};
