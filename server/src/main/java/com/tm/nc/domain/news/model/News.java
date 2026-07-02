package com.tm.nc.domain.news.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class News {

    private Long id;
    private String image;
    private String title;
    private String link;
}
