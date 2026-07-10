import "./style/ProductCarousel.css";
import type { Product } from "../../../../shared/types/Product";
import { ProductCard } from "../productCard/ProductCard";
import { Carousel } from "../../../../shared/components/carousel/Carousel";

export const ProductCarousel = ({ products }: { products: Product[] }) => {
    return (
        <Carousel
            items={products}
            size="content"
            renderItem={(product) => <ProductCard {...product} />}
        />
    );
};
