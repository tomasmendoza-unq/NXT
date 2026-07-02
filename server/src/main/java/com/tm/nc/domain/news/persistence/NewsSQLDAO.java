package com.tm.nc.domain.news.persistence;

import com.tm.nc.domain.news.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsSQLDAO extends JpaRepository<News, Long> {
}
