package com.tm.nc.features.checkout.controller.dto.request;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.client.controller.dto.ClientRequestDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record CheckoutRequestDTO(
        @NotNull(message = "El cliente es requerido")
        @Valid
        ClientRequestDTO client,

        String notes,

        @NotNull(message = "Los items son requeridos")
        @NotEmpty(message = "El pedido debe tener al menos un item")
        List<@Valid ItemCheckoutRequestDTO> itemCheckoutRequestDTO
) {
    public Checkout toModel() {
        return Checkout.builder()
                .client(client.toModel())
                .notes(notes)
                .build();
    }
}
