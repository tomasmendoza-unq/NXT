import { api } from "../../../core";
import type { PageResponseDTO } from "../../../core/api/types/PageResponseDTO.t";
import { adaptPage } from "../../../shared/adapter/Page.adapter";
import type { Page } from "../../../shared/types/Page";
import { adaptNews } from "../adapters/new.adapter";
import type { NewResponseDTO } from "../api/types/NewResponseDTO";
import type { News } from "../types/news.t";

export const getAllNews = async (): Promise<Page<News>> => {
    const response = await api.get<PageResponseDTO<NewResponseDTO>>("/news");

    return adaptPage(response.data, adaptNews);
};
