import type { ProductProps } from "../../../shared/types/Product";
import styles from "./ProductGallery.module.css";

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
        <div className={styles.gallery}>
            {/* Imagen principal */}
            <div className={styles.mainImage}>
                {currentDetail?.image ? (
                    <img
                        src={currentDetail.image}
                        alt={product.name}
                        className={styles.mainImageContent}
                    />
                ) : (
                    <span className={styles.emptyState}>Sin imagen</span>
                )}
            </div>

            {/* Thumbnails */}
            {product.productDetails.length > 1 && (
                <div className={styles.thumbnails}>
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`${styles.thumbnailButton} ${
                                selectedDetail === idx
                                    ? styles.thumbnailButtonSelected
                                    : ""
                            }`}
                        >
                            {detail.image ? (
                                <img
                                    src={detail.image}
                                    alt=""
                                    className={styles.thumbnailImage}
                                />
                            ) : (
                                <div className={styles.thumbnailEmpty}>
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
