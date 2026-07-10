import { ProductsContainer } from "../../product/components/ProductsContainer";
import "./styles/style.css";
import { useEffect } from "react";
import useGetAllProducts from "../../product/hooks/use-get-all-products";
import { LoadingSpinner } from "../../../shared/components/loadingSpinner/LoadingSpinner";
import { useGetAllNews } from "../../news/hook/use-get-all-news";
import { CarouselNews } from "../../news/components/carousel/CarrouselNews";
import { WhatsappButton } from "../../../shared/components/whatsappButton/WhatsappButton";

export const Home = () => {
    const { products, fetch, isLoading } = useGetAllProducts();
    const { news, fetchNews, isLoading: isLoadingNews } = useGetAllNews();

    useEffect(() => {
        fetch(0, 10);
        fetchNews();
    }, [fetch, fetchNews]);

    return (
        <section className="section-container">
            {(isLoading || isLoadingNews) && <LoadingSpinner overlay />}
            <CarouselNews news={news.content} />
            <ProductsContainer products={products} />
            <WhatsappButton phoneNumber="1162707458" />
        </section>
    );
};
