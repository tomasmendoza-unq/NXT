import { Carousel } from "../../../../shared/components/carousel/Carousel";
import type { News } from "../../types/news.t";
import { NewsCard } from "../card/NewsCard";

export const CarouselNews = ({ news }: { news: News[] }) => {
    return (
        <Carousel
            items={news}
            size="full"
            renderItem={(newsItem) => <NewsCard news={newsItem} />}
        />
    );
};
