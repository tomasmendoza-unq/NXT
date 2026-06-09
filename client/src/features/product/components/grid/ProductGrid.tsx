import type { Product } from "../../../../shared/types/Product";
import { ProductCard } from "../productCard/ProductCard";
import "./styles/ProductGrid.css";

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    {...product}
                />
            ))}
        </div>
    );
};
