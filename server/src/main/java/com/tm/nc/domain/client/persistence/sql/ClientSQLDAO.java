package com.tm.nc.domain.client.persistence.sql;

import com.tm.nc.domain.client.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientSQLDAO extends JpaRepository<Client, Long> {
}
