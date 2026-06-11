package com.tm.nc.domain.admin.persistence.sql;

import com.tm.nc.domain.admin.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminSQLDAO extends JpaRepository<Admin, Long> {
}
