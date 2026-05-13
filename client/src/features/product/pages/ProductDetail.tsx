import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetProductById from "../hooks/use-get-product-by-id";
import { ProductGallery } from "../components/ProductGallery";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPrice } from "../components/ProductPrice";
import { ProductSelectors } from "../components/ProductSelectors";
import { ProductActions } from "../components/ProductActions";
import { ProductVendor } from "../components/ProductVendor";
import styles from "./ProductDetail.module.css";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading, error, fetch } = useGetProductById();
    const [selectedDetail, setSelectedDetail] = useState(0);

    useEffect(() => {
        if (id) {
            fetch(Number(id));
        }
    }, [id]);

    if (isLoading) {
        return (
            <section className={styles.page}>
                <div className={styles.container}>
                    <div className="animate-pulse">
                        <div className="h-96 bg-gray-300 rounded mb-4"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !product) {
        return (
            <section className={styles.page}>
                <div className={styles.container}>
                    <p className="text-lg text-red-600">
                        Error al cargar el producto
                    </p>
                </div>
            </section>
        );
    }

    const currentDetail = product.productDetails[selectedDetail];
    const price = currentDetail?.price ?? 0;
    const quantity = currentDetail?.quantity ?? 0;
    const hasStock = quantity > 0;

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <div className={styles.productLayout}>
                    <ProductGallery
                        product={product}
                        selectedDetail={selectedDetail}
                        onSelectDetail={setSelectedDetail}
                    />
                    <div className={styles.productContent}>
                        <ProductInfo product={product} />
                        <ProductPrice
                            price={price}
                            quantity={quantity}
                        />
                        <ProductSelectors
                            product={product}
                            selectedDetail={selectedDetail}
                            onSelectDetail={setSelectedDetail}
                        />
                        <ProductActions hasStock={hasStock} />
                        <ProductVendor product={product} />
                    </div>
                </div>
            </div>
        </section>
    );
};
