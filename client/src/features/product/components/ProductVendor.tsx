import type { ProductProps } from "../../../shared/types/Product";
import styles from "./ProductVendor.module.css";

interface ProductVendorProps {
    product: ProductProps;
}

export const ProductVendor = ({ product }: ProductVendorProps) => {
    return (
        <div className={styles.vendor}>
            <p className={styles.label}>Vendido por:</p>
            <div className={styles.content}>
                {product.productBrand.image && (
                    <div className={styles.logoBox}>
                        <img
                            src={product.productBrand.image}
                            alt={product.productBrand.name}
                            className={styles.logo}
                        />
                    </div>
                )}
                <div>
                    <p className={styles.name}>{product.productBrand.name}</p>
                </div>
            </div>
        </div>
    );
};
