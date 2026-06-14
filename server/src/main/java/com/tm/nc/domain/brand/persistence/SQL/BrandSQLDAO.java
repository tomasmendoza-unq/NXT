package com.tm.nc.domain.brand.persistence.SQL;

import com.tm.nc.domain.brand.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandSQLDAO extends JpaRepository<Brand, Long> {
}
