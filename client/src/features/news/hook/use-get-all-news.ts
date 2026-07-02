import { useState } from "react";
import type { News } from "../types/news.t";
import { getAllNews } from "../service/get-all-news.service";
import { emptyPage, type Page } from "../../../shared/types/Page";

export const useGetAllNews = () => {
    const [news, setNews] = useState<Page<News>>(emptyPage<News>());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchNews = async () => {
        try {
            setIsLoading(true);

            const data = await getAllNews();
            setNews(data);
        } finally {
            setIsLoading(false);
        }
    };

    return { news, fetchNews, isLoading };
};
