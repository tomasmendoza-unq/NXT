import type { ProductProps } from "../../../shared/types/Product";
import { ProductCard } from "./ProductCard";
import styles from "./styles/ProductGrid.module.css";

export const ProductsGrid = ({ products }: { products: ProductProps[] }) => {
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
