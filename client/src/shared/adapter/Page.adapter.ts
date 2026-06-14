import type { PageResponseDTO } from "../../core/api/types/PageResponseDTO.t";
import type { Page } from "../types/Page";

export const adaptPage = <DTO, MODEL>(
    page: PageResponseDTO<DTO>,
    contentMapper: (item: DTO) => MODEL,
): Page<MODEL> => {
    return {
        ...page,
        content: page.content.map(contentMapper),
    };
};
