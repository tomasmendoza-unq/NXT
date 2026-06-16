import { useState } from "react";
import "./style/ProductLayout.css";
import type { Product } from "../../../../shared/types/Product";
import { ImagenContainer } from "../../pages/productDetail/components/imageContainer/ImageContainer";
import { ProductDetailInfo } from "../../pages/productDetail/components/productDetailInfo/ProductDetailInfo";
import { ProductColorOptions } from "../../pages/productDetail/components/productColorOptions/ProductColorOptions";
import { ProductSizeOptions } from "../../pages/productDetail/components/productSizeOptions/ProductSizeOptions";

interface ProductLayoutProps {
    product: Product;
    children?: React.ReactNode;
}

export const ProductLayout = ({ product, children }: ProductLayoutProps) => {
    const [imageSelected, setImageSelected] = useState<string | null>(null);
    const [selectedColorId, setSelectedColorId] = useState(
        () => product.colors[0]?.id,
    );
    const [selectedDetailId, setSelectedDetailId] = useState(
        () => product.colors[0]?.details[0]?.id,
    );

    return (
        <section className="product-content">
            <ImagenContainer
                product={product}
                selectedColorId={selectedColorId}
                selectedDetailId={selectedDetailId}
                alt={product.name}
                setImageSelected={setImageSelected}
                imageSelected={imageSelected}
            />
            <article className="product-content-info">
                <ProductDetailInfo
                    product={product}
                    selectedColorId={selectedColorId}
                    selectedDetailId={selectedDetailId}
                />
                <section className="product-detail-options">
                    <ProductColorOptions
                        colors={product.colors}
                        selectedColorId={selectedColorId}
                        setSelectedColorId={setSelectedColorId}
                        setSelectedDetailId={setSelectedDetailId}
                        setImageSelected={setImageSelected}
                    />
                    <ProductSizeOptions
                        product={product}
                        selectedColorId={selectedColorId}
                        selectedDetailId={selectedDetailId}
                        setSelectedDetailId={setSelectedDetailId}
                    />
                </section>
                {children}
            </article>
        </section>
    );
};
