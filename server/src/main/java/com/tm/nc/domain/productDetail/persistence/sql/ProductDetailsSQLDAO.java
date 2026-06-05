package com.tm.nc.domain.product.persistence.sql;

import com.tm.nc.domain.product.model.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDetailsSQLDAO extends JpaRepository<ProductDetail, Long> {
}
