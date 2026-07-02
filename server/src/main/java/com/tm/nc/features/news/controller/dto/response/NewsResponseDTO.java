package com.tm.nc.features.news.controller.dto.response;

import com.tm.nc.domain.news.model.News;

public record NewsResponseDTO(
        Long id,
        String image,
        String title,
        String link
) {

    public static NewsResponseDTO fromModel(News news) {
        return  new NewsResponseDTO(news.getId(), news.getImage(), news.getTitle(), news.getLink());
    }

}
