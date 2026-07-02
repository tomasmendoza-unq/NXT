import { ProductsContainer } from "../../product/components/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import { BrandsContainer } from "../../brand/components/BrandsContainer";
import useGetAllProducts from "../../product/hooks/use-get-all-products";
import useGetAllBrands from "../../brand/hooks/use-get-all-brands";
import { LoadingSpinner } from "../../../shared/components/loadingSpinner/LoadingSpinner";
import { useGetAllNews } from "../../news/hook/use-get-all-news";
import { CarouselNews } from "../../news/components/carousel/CarrouselNews";

export const Home = () => {
    const { products, fetch, isLoading } = useGetAllProducts();
    const {
        brands,
        fetch: fetchBrands,
        isLoading: isLoadingBrands,
    } = useGetAllBrands();

    const { news, fetchNews, isLoading: isLoadingNews } = useGetAllNews();

    useEffect(() => {
        fetch(0, 10);
        fetchBrands();
        fetchNews();
    }, []);

    return (
        <section className="section-container">
            {(isLoading || isLoadingBrands || isLoadingNews) && (
                <LoadingSpinner overlay />
            )}
            <CarouselNews news={news.content} />
            <ProductsContainer products={products} />
            <BrandsContainer brands={brands} />
        </section>
    );
};
