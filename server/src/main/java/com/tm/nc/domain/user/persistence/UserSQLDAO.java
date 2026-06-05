package com.tm.nc.domain.user.persistence;

import com.tm.nc.domain.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSQLDAO extends JpaRepository<User, Long> {
}
