import { useState } from "react";
import "./style/ProductLayout.css";
import type { Product } from "../../../../shared/types/Product";
import { ImagenContainer } from "../../pages/productDetail/components/imageContainer/ImageContainer";
import { ProductDetailInfo } from "../../pages/productDetail/components/productDetailInfo/ProductDetailInfo";
import { ProductColorOptions } from "../../pages/productDetail/components/productColorOptions/ProductColorOptions";
import { ProductSizeOptions } from "../../pages/productDetail/components/productSizeOptions/ProductSizeOptions";

interface ProductLayoutProps {
    product: Product;
    selectedColorId: number; // Cambiado de number | undefined a number
    setSelectedColorId: React.Dispatch<React.SetStateAction<number>>;
    selectedDetailId: number; // Cambiado de number | undefined a number
    setSelectedDetailId: React.Dispatch<React.SetStateAction<number>>;
    children?: React.ReactNode;
}

export const ProductLayout = ({
    product,
    selectedColorId,
    setSelectedColorId,
    selectedDetailId,
    setSelectedDetailId,
    children,
}: ProductLayoutProps) => {
    const [imageSelected, setImageSelected] = useState<string | null>(null);

    return (
        <section className="product-content">
            <ImagenContainer
                product={product}
                selectedColorId={selectedColorId}
                selectedDetailId={selectedDetailId}
                alt={product.model}
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
