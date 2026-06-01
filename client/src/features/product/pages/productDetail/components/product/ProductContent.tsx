import { useState } from "react";
import type { ProductProps } from "../../../../../../shared/types/Product";
import { ImagenContainer } from "../imageContainer/ImageContainer";
import "./style/ProductContent.css";
import { ProductDetailInfo } from "../productDetailInfo/ProductDetailInfo";
import { ProductColorOptions } from "../productColorOptions/ProductColorOptions";
import { ProductSizeOptions } from "../productSizeOptions/ProductSizeOptions";

interface ProductContentProps {
    product: ProductProps;
}

export const ProductContent = ({ product }: ProductContentProps) => {
    const [selectedColorId, setSelectedColorId] = useState(
        () => product.productVariants[0]?.color.id,
    );
    const [selectedDetailId, setSelectedDetailId] = useState(
        () => product.productVariants[0]?.sizes[0]?.id,
    );

    return (
        <section className="product-content">
            <ImagenContainer
                product={product}
                selectedColorId={selectedColorId}
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
                        variants={product.productVariants}
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
