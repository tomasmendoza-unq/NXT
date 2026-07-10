package com.tm.nc.features.news.controller;

import com.tm.nc.domain.news.model.News;
import com.tm.nc.domain.news.service.NewsService;
import com.tm.nc.features.news.controller.dto.request.NewsRequestDTO;
import com.tm.nc.features.news.controller.dto.response.NewsResponseDTO;
import com.tm.nc.shared.dto.PageResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/news")
public class NewsControllerRest {

    private final NewsService newsService;

    public NewsControllerRest(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public ResponseEntity<PageResponseDTO<NewsResponseDTO>> getAllNews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        Page<News> news = newsService.findAll(page, size);

        Page<NewsResponseDTO> pageNews = news.map(NewsResponseDTO::fromModel);

        PageResponseDTO<NewsResponseDTO> response = PageResponseDTO.from(pageNews);

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<NewsResponseDTO> createNews(@RequestBody NewsRequestDTO request) {
        News news = newsService.save(request.toModel());

        return ResponseEntity.ok(NewsResponseDTO.fromModel(news));
    }
}
