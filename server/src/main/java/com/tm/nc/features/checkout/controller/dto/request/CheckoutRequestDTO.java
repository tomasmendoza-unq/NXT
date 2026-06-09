package com.tm.nc.features.checkout.controller.dto.request;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.client.controller.dto.ClientRequestDTO;

import java.util.List;

public record CheckoutRequestDTO(
        ClientRequestDTO client,
        String notes,
        List<ItemCheckoutRequestDTO> itemCheckoutRequestDTO
) {
    public Checkout toModel() {
        return Checkout.builder()
                .client(client.toModel())
                .notes(notes)
                .build();
    }
}
