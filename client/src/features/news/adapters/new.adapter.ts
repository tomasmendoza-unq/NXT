import type { NewResponseDTO } from "../api/types/NewResponseDTO";
import type { News } from "../types/news.t";

export const adaptNews = (news: NewResponseDTO): News => {
    return { ...news };
};
