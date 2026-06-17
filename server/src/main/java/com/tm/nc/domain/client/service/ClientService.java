package com.tm.nc.domain.client.service;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.model.Client;
import jakarta.validation.constraints.Min;
import org.springframework.data.domain.Page;

public interface ClientService {
    Client generateTemporal(Client client);

    Page<Checkout> findAllByStatus(String status, @Min(0) int page, @Min(0) int size, Long idClient);

    Checkout findOrderById(Long idOrder);
}
