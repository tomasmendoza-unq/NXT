package com.tm.nc.domain.client.service;

import com.tm.nc.domain.client.model.Client;

public interface ClientService {
    Client generateTemporal(Client client);
}
