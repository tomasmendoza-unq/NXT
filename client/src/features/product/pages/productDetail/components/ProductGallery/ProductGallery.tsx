import type { ProductProps } from "../../../../../../shared/types/Product";
import "./ProductGallery.css";

interface ProductGalleryProps {
    product: ProductProps;
    selectedDetail: number;
    onSelectDetail: (index: number) => void;
}

export const ProductGallery = ({
    product,
    selectedDetail,
    onSelectDetail,
}: ProductGalleryProps) => {
    const currentDetail = product.productDetails[selectedDetail];

    return (
        <div className="product-gallery">
            <div className="product-gallery__main-image">
                {currentDetail?.image ? (
                    <img
                        src={currentDetail.image}
                        alt={product.name}
                        className="product-gallery__main-image-content"
                    />
                ) : (
                    <span className="product-gallery__empty-state">
                        Sin imagen
                    </span>
                )}
            </div>

            {product.productDetails.length > 1 && (
                <div className="product-gallery__thumbnails">
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`product-gallery__thumbnail-button ${
                                selectedDetail === idx
                                    ? "product-gallery__thumbnail-button--selected"
                                    : ""
                            }`}
                            type="button"
                        >
                            {detail.image ? (
                                <img
                                    src={detail.image}
                                    alt=""
                                    className="product-gallery__thumbnail-image"
                                />
                            ) : (
                                <div className="product-gallery__thumbnail-empty">
                                    N/A
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
