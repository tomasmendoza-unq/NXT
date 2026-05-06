package com.tm.nc.domain.product.persistence.sql;

import com.tm.nc.domain.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductSQLDAO extends JpaRepository<Product, Long> {
}
