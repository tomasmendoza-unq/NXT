import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetProductById from "../../hooks/use-get-product-by-id";
import { ProductGallery } from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { ProductPrice } from "./components/ProductPrice/ProductPrice";
import { ProductSelectors } from "./components/ProductSelectors/ProductSelectors";
import { ProductActions } from "./components/ProductActions/ProductActions";
import { ProductVendor } from "./components/ProductVendor/ProductVendor";
import "./ProductDetail.css";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading, error, fetch } = useGetProductById();
    const [selectedDetail, setSelectedDetail] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    useEffect(() => {
        if (id) {
            fetch(Number(id));
        }
    }, [fetch, id]);

    if (isLoading) {
        return (
            <section className="product-detail">
                <div className="product-detail__container">
                    <div className="product-detail__skeleton-layout">
                        <div className="product-detail__skeleton-media" />
                        <div className="product-detail__skeleton-panel">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !product) {
        return (
            <section className="product-detail">
                <div className="product-detail__container">
                    <div className="product-detail__feedback">
                        <p className="product-detail__feedback-title">
                            Error al cargar el producto
                        </p>
                        <p>Probá de nuevo en unos minutos.</p>
                    </div>
                </div>
            </section>
        );
    }

    const currentDetail = product.productDetails[selectedDetail];
    const price = currentDetail?.price ?? 0;
    const stockQuantity = currentDetail?.quantity ?? 0;
    const hasStock = stockQuantity > 0;
    const requestedQuantity = hasStock
        ? Math.min(Math.max(selectedQuantity, 1), stockQuantity)
        : 0;

    const handleSelectDetail = (index: number) => {
        setSelectedDetail(index);
        setSelectedQuantity(1);
    };

    return (
        <section className="product-detail">
            <div className="product-detail__container">
                <div className="product-detail__layout">
                    <ProductGallery
                        product={product}
                        selectedDetail={selectedDetail}
                        onSelectDetail={handleSelectDetail}
                    />
                    <div className="product-detail__content">
                        <ProductInfo product={product} />
                        <ProductPrice
                            price={price}
                            quantity={stockQuantity}
                        />
                        <ProductSelectors
                            product={product}
                            selectedDetail={selectedDetail}
                            onSelectDetail={handleSelectDetail}
                        />
                        <ProductActions
                            hasStock={hasStock}
                            maxQuantity={stockQuantity}
                            selectedQuantity={requestedQuantity}
                            onQuantityChange={setSelectedQuantity}
                        />
                        <ProductVendor product={product} />
                    </div>
                </div>
            </div>
        </section>
    );
};
