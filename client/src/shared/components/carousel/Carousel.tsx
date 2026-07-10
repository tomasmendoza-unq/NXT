import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style/Carousel.css";

interface BreakpointConfig {
    slidesPerView: number;
    navigation?: boolean;
}

type CarouselSize = "full" | "content";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    spaceBetween?: number;
    slidesPerView?: number;
    breakpoints?: Record<number, BreakpointConfig>;
    size?: CarouselSize;
}

export const Carousel = <T,>({
    items,
    renderItem,
    spaceBetween = 20,
    slidesPerView = 1,
    breakpoints,
    size = "content",
}: CarouselProps<T>) => {
    const defaultBreakpoints: Record<number, BreakpointConfig> =
        breakpoints ||
        (size === "full"
            ? {
                  480: { slidesPerView: 1, navigation: false },
                  640: { slidesPerView: 1, navigation: true },
                  1024: { slidesPerView: 1 },
                  1280: { slidesPerView: 1 },
              }
            : {
                  480: { slidesPerView: 1, navigation: false },
                  640: { slidesPerView: 2, navigation: true },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
              });

    return (
        <div className={`carousel carousel--${size}`}>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                breakpoints={defaultBreakpoints}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
