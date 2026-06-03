package com.tm.nc.domain.product.persistence.sql;

import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorSQLDAO extends JpaRepository<Color, Long> {
}
