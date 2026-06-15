import { useEffect } from "react";
import useGetProductById from "../../hooks/use-get-product-by-id";
import { useParams } from "react-router-dom";
import { ProductContent } from "./components/product/ProductContent";
import { HeaderNavigation } from "../../../../shared/components/headerNavigation/HeaderNavigation";
import "./ProductDetail.css";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";

export const ProductDetail = () => {
    const { id } = useParams();
    const productId = Number(id);
    const { product, isLoading, fetch } = useGetProductById();
    const links = product
        ? [
              { text: "Inicio", href: "/" },
              { text: product.brand.name, href: "/brands" },
              { text: product.name, href: `/product/${product.id}` },
          ]
        : [];

    useEffect(() => {
        if (!Number.isFinite(productId)) {
            return;
        }

        fetch(productId);
    }, [fetch, productId]);

    return (
        <section className="product-container">
            {isLoading && <LoadingSpinner overlay />}
            {product ? (
                <>
                    <HeaderNavigation links={links} />
                    <ProductContent product={product} />
                </>
            ) : (
                <h1>No product found.</h1>
            )}
        </section>
    );
};
