import { useState } from "react";
import { ImagenContainer } from "../imageContainer/ImageContainer";
import "./style/ProductContent.css";
import { ProductDetailInfo } from "../productDetailInfo/ProductDetailInfo";
import { ProductColorOptions } from "../productColorOptions/ProductColorOptions";
import { ProductSizeOptions } from "../productSizeOptions/ProductSizeOptions";
import type { Product } from "../../../../../../shared/types/Product";

interface ProductContentProps {
    product: Product;
}

export const ProductContent = ({ product }: ProductContentProps) => {
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
                    />

                    <ProductSizeOptions
                        product={product}
                        selectedColorId={selectedColorId}
                        selectedDetailId={selectedDetailId}
                        setSelectedDetailId={setSelectedDetailId}
                    />
                </section>
            </article>
        </section>
    );
};
