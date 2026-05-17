import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useGetProductById from "../../hooks/use-get-product-by-id";
import { ProductGallery } from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { ProductPrice } from "./components/ProductPrice/ProductPrice";
import { ProductSelectors } from "./components/ProductSelectors/ProductSelectors";
import { ProductActions } from "./components/ProductActions/ProductActions";
import { ProductVendor } from "./components/ProductVendor/ProductVendor";
import "./ProductDetail.css";

interface CartItem {
    productId: number;
    productDetailId: number;
    quantity: number;
}

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading, error, fetch } = useGetProductById();
    const [selectedDetail, setSelectedDetail] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isToastVisible, setIsToastVisible] = useState(false);
    const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (id) {
            fetch(Number(id));
        }
    }, [fetch, id]);

    useEffect(() => {
        return () => {
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
            }
        };
    }, []);

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

    const showSuccessToast = () => {
        setIsToastVisible(true);

        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }

        toastTimeoutRef.current = setTimeout(() => {
            setIsToastVisible(false);
        }, 2600);
    };

    const handleAddToCart = () => {
        if (!currentDetail || requestedQuantity < 1 || !hasStock) {
            return;
        }

        const storedCart = localStorage.getItem("cart");
        const cartItems: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
        const itemIndex = cartItems.findIndex(
            (item) =>
                item.productId === product.id &&
                item.productDetailId === currentDetail.id,
        );

        if (itemIndex >= 0) {
            cartItems[itemIndex] = {
                ...cartItems[itemIndex],
                quantity: Math.min(
                    cartItems[itemIndex].quantity + requestedQuantity,
                    stockQuantity,
                ),
            };
        } else {
            cartItems.push({
                productId: product.id,
                productDetailId: currentDetail.id,
                quantity: requestedQuantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
        showSuccessToast();
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
                            onAddToCart={handleAddToCart}
                            onQuantityChange={setSelectedQuantity}
                        />
                        <ProductVendor product={product} />
                    </div>
                </div>
            </div>
            {isToastVisible && (
                <div
                    className="product-detail__toast"
                    role="status"
                    aria-live="polite"
                >
                    El producto fue añadido!
                </div>
            )}
        </section>
    );
};
