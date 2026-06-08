import type { Product } from "../../../shared/types/Product";
import { ProductCard } from "./productCard/ProductCard";
import styles from "./styles/ProductGrid.module.css";

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className={styles.productsGrid}>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};
