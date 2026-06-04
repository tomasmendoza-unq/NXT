import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/ProductCarousel.css";
import type { Product } from "../../../shared/types/Product";
import { ProductCard } from "./ProductCard";

export const ProductCarousel = ({ products }: { products: Product[] }) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
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
