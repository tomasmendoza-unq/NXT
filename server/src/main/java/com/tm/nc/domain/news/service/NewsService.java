package com.tm.nc.domain.news.service;

import com.tm.nc.domain.news.model.News;
import org.springframework.data.domain.Page;

import java.util.List;

public interface NewsService {
    public Page<News> findAll(int page, int size);

    public News save(News news);
}
