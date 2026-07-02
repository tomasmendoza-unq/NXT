import type { News } from "../../types/news.t";

export const NewsCard = ({ news }: { news: News }) => {
    return (
        <article className="news-card">
            <img
                src={news.image}
                alt={news.title}
            />
            <h3 className="news-card-title">{news.title}</h3>
        </article>
    );
};
