package com.tm.nc.domain.user.persistence;

import com.tm.nc.domain.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserSQLDAO extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
