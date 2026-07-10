import "./NewsCard.css";
import type { News } from "../../types/news.t";
import { Link } from "react-router-dom";

export const NewsCard = ({ news }: { news: News }) => {
    return (
        <article className="news-card">
            <Link to={news.link}>
                <img
                    className="news-card-image"
                    src={news.image}
                    alt={news.title}
                />
            </Link>
        </article>
    );
};
