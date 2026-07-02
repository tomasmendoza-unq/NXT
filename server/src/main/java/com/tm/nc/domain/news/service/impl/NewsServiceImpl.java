package com.tm.nc.domain.news.service.impl;

import com.tm.nc.domain.news.model.News;
import com.tm.nc.domain.news.persistence.NewsSQLDAO;
import com.tm.nc.domain.news.service.NewsService;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


@Transactional
@Service
public class NewsServiceImpl implements NewsService {

    private final NewsSQLDAO newsSQLDAO;

    public NewsServiceImpl(NewsSQLDAO newsSQLDAO) {
        this.newsSQLDAO = newsSQLDAO;
    }

    @Override
    public Page<News> findAll(int size, int page) {
        return newsSQLDAO.findAll(PageRequest.of(page, size));
    }

    @Override
    public News save(News news) {
        return newsSQLDAO.save(news);
    }
}
