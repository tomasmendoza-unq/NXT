package com.tm.nc.domain.color.persistence.sql;

import com.tm.nc.domain.color.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorSQLDAO extends JpaRepository<Color, Long> {
}
