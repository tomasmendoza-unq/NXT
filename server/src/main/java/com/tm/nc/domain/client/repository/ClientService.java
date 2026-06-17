package com.tm.nc.domain.client.repository;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.checkout.controller.dto.request.ItemCheckoutRequestDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ClientService {
    Page<Checkout> findAllByStatus(String status, @Min(0) int page, @Min(0) int size, Long idClient);

    Checkout findOrderById(Long idOrder);

    Checkout generateCheckout(Checkout model, @NotNull(message = "Los items son requeridos") @NotEmpty(message = "El pedido debe tener al menos un item") List<@Valid ItemCheckoutRequestDTO> itemCheckoutRequestDTOS, String idempotencyKey, Long idClient);
}
