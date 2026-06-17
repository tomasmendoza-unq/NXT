package com.tm.nc.domain.client.persistence.repository;

import com.tm.nc.domain.client.model.Client;

public interface ClientRepository {
    public Client generateTemporal(Client client);
}
