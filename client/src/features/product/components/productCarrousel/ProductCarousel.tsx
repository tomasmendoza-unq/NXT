import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style/ProductCarousel.css";
import type { Product } from "../../../../shared/types/Product";
import { ProductCard } from "../productCard/ProductCard";

export const ProductCarousel = ({ products }: { products: Product[] }) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
        >
            {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <ProductCard {...product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
