import { useEffect } from "react";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";
import useGetAllProducts from "../../hooks/use-get-all-products";
import { ProductsGrid } from "../../components/grid/ProductGrid";
import "./style/Products.css";

export const Products = () => {
    const { isLoading, fetch, products } = useGetAllProducts();

    useEffect(() => {
        fetch();
    }, []);
    return (
        <section className="products-page">
            {isLoading && <LoadingSpinner overlay />}
            <h1>Productos</h1>
            <ProductsGrid products={products ?? []} />
        </section>
    );
};
