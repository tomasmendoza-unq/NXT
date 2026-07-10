package com.tm.nc.features.news.controller.dto.request;

import com.tm.nc.domain.news.model.News;

public record NewsRequestDTO(
        String image,
        String title,
        String link
) {
    public News toModel() {
        return News.builder()
                .image(image)
                .title(title)
                .link(link)
                .build();
    }
}
